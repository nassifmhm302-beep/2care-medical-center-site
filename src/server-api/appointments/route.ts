import { NextResponse } from "next/server";
import { and, eq, gt } from "drizzle-orm";
import { db } from "@/db";
import { appointmentRequests } from "@/db/schema";
import { appointmentSchema, isDateInPast } from "@/lib/validation";
import { getServiceBySlug } from "@/lib/services";
import { getDoctorBySlug } from "@/lib/doctors";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "تعذّر قراءة بيانات الطلب." },
      { status: 400 }
    );
  }

  const parsed = appointmentSchema.safeParse(body);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];
    return NextResponse.json(
      { ok: false, message: firstIssue?.message ?? "البيانات المُدخلة غير صحيحة." },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // Honeypot — silently accept (pretend success) to not tip off bots.
  if (data.website) {
    return NextResponse.json({ ok: true, id: 0 });
  }

  if (isDateInPast(data.preferredDate)) {
    return NextResponse.json(
      { ok: false, message: "لا يمكن اختيار تاريخ في الماضي." },
      { status: 400 }
    );
  }

  const service = getServiceBySlug(data.service);
  if (!service || service.department !== data.department) {
    return NextResponse.json(
      { ok: false, message: "الخدمة المختارة غير متاحة ضمن هذا القسم." },
      { status: 400 }
    );
  }

  if (data.doctor) {
    const doctor = getDoctorBySlug(data.doctor);
    if (!doctor) {
      return NextResponse.json(
        { ok: false, message: "الطبيب المختار غير متاح." },
        { status: 400 }
      );
    }
  }

  try {
    // Basic duplicate-submission guard: block identical requests
    // (same phone + service + date) sent within the last 2 minutes.
    const twoMinutesAgo = new Date(Date.now() - 2 * 60 * 1000);
    const recentDuplicate = await db
      .select({ id: appointmentRequests.id })
      .from(appointmentRequests)
      .where(
        and(
          eq(appointmentRequests.phone, data.phone),
          eq(appointmentRequests.service, data.service),
          eq(appointmentRequests.preferredDate, data.preferredDate),
          gt(appointmentRequests.createdAt, twoMinutesAgo)
        )
      )
      .limit(1);

    if (recentDuplicate.length > 0) {
      return NextResponse.json(
        {
          ok: false,
          message: "تم استلام طلب مشابه قبل قليل. سيتواصل معك فريقنا قريبًا.",
        },
        { status: 409 }
      );
    }

    const [inserted] = await db
      .insert(appointmentRequests)
      .values({
        fullName: data.fullName,
        phoneCountryCode: data.phoneCountryCode || "+966",
        phone: data.phone,
        email: data.email || null,
        department: data.department,
        service: data.service,
        doctor: data.doctor || null,
        preferredDate: data.preferredDate,
        preferredTime: data.preferredTime || null,
        notes: data.notes || null,
        privacyAccepted: data.privacyAccepted,
        status: "pending",
      })
      .returning({ id: appointmentRequests.id });

    return NextResponse.json({ ok: true, id: inserted?.id ?? null });
  } catch (error) {
    console.error("Failed to store appointment request", error);
    return NextResponse.json(
      { ok: false, message: "حدث خطأ غير متوقع أثناء إرسال الطلب. حاول مرة أخرى." },
      { status: 500 }
    );
  }
}
