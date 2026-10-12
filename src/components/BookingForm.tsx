"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  departmentLabels,
  getServiceBySlug,
  getServicesByDepartment,
} from "@/lib/services";
import { doctors, getDoctorBySlug } from "@/lib/doctors";
import type { Department } from "@/lib/types";
import { isDateInPast, isFriday } from "@/lib/validation";

const COUNTRY_CODES = [
  { code: "+966", label: "السعودية +966" },
  { code: "+971", label: "الإمارات +971" },
  { code: "+965", label: "الكويت +965" },
  { code: "+973", label: "البحرين +973" },
  { code: "+974", label: "قطر +974" },
  { code: "+968", label: "عُمان +968" },
  { code: "+20", label: "مصر +20" },
];

const TIME_SLOTS = [
  "بعد الظهر (٢:٠٠ - ٥:٠٠ م)",
  "المساء (٥:٠٠ - ٨:٠٠ م)",
  "قبل الإغلاق (٨:٠٠ - ١٠:٠٠ م)",
];

function todayISO() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

type Props = {
  initialServiceSlug?: string;
  initialDoctorSlug?: string;
};

type Status = "idle" | "submitting" | "success" | "error";

export function BookingForm({ initialServiceSlug, initialDoctorSlug }: Props) {
  const initialService = initialServiceSlug ? getServiceBySlug(initialServiceSlug) : undefined;
  const initialDoctor = initialDoctorSlug ? getDoctorBySlug(initialDoctorSlug) : undefined;
  const initialDepartment: Department =
    initialService?.department ?? (initialDoctor ? "dental" : "dental");

  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const [department, setDepartment] = useState<Department>(initialDepartment);
  const [serviceSlug, setServiceSlug] = useState(initialService?.slug ?? "");
  const [doctorSlug, setDoctorSlug] = useState(initialDoctor?.slug ?? "");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [fullName, setFullName] = useState("");
  const [countryCode, setCountryCode] = useState("+966");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot

  const availableServices = useMemo(() => getServicesByDepartment(department), [department]);
  const selectedService = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
  const availableDoctors = useMemo(() => {
    if (!serviceSlug) return doctors;
    return doctors.filter((d) => d.serviceSlugs.includes(serviceSlug));
  }, [serviceSlug]);
  const selectedDoctor = doctorSlug ? getDoctorBySlug(doctorSlug) : undefined;

  function validateStep(current: number): boolean {
    const errors: Record<string, string> = {};

    if (current === 0) {
      if (!preferredDate) errors.preferredDate = "يرجى اختيار التاريخ المفضل.";
      else if (isDateInPast(preferredDate)) errors.preferredDate = "لا يمكن اختيار تاريخ في الماضي.";
      else if (isFriday(preferredDate)) errors.preferredDate = "المركز مغلق يوم الجمعة، يرجى اختيار يوم آخر.";
    }

    if (current === 1) {
      if (!serviceSlug) errors.service = "يرجى اختيار الخدمة المطلوبة.";
    }

    if (current === 2) {
      if (fullName.trim().length < 3) errors.fullName = "يرجى إدخال الاسم الكامل.";
      if (!/^[0-9]{8,10}$/.test(phone.trim())) errors.phone = "يرجى إدخال رقم جوال صحيح (أرقام فقط).";
      if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        errors.email = "صيغة البريد الإلكتروني غير صحيحة.";
      }
      if (!privacyAccepted) errors.privacyAccepted = "يجب الموافقة على سياسة الخصوصية.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function goNext() {
    if (validateStep(step)) {
      setErrorMessage(null);
      setStep((s) => Math.min(s + 1, 3));
    }
  }

  function goBack() {
    setErrorMessage(null);
    setStep((s) => Math.max(s - 1, 0));
  }

  async function handleSubmit() {
    if (status === "submitting") return;
    if (!validateStep(2)) {
      setStep(2);
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fullName.trim(),
          phoneCountryCode: countryCode,
          phone: phone.trim(),
          email: email.trim() || undefined,
          department,
          service: serviceSlug,
          doctor: doctorSlug || undefined,
          preferredDate,
          preferredTime: preferredTime || undefined,
          notes: notes.trim() || undefined,
          privacyAccepted,
          website,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        setStatus("error");
        setErrorMessage(result.message ?? "تعذّر إرسال الطلب، يرجى المحاولة مرة أخرى.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("تعذّر الاتصال بالخادم. تحقق من اتصالك بالإنترنت وحاول مرة أخرى.");
    }
  }

  if (status === "success") {
    return (
      <div className="card-surface animate-fade-up mx-auto max-w-xl p-10 text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary-dark)]">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-[var(--color-text)]">تم استلام طلبك بنجاح</h2>
        <p className="mt-3 leading-8 text-[var(--color-muted)]">
          سيتواصل معك فريق مركز 2Care في أقرب وقت ممكن لتأكيد تفاصيل الموعد. شكرًا لثقتك بنا.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-secondary focus-ring">
            العودة للرئيسية
          </Link>
          <Link href="/services" className="btn btn-primary focus-ring">
            تصفح خدماتنا
          </Link>
        </div>
      </div>
    );
  }

  const steps = ["التاريخ", "الخدمة", "بياناتك", "المراجعة"];

  return (
    <div className="mx-auto max-w-3xl">
      <ol className="mb-10 grid grid-cols-4 gap-2" aria-label="خطوات الحجز">
        {steps.map((label, index) => (
          <li key={label} className="flex flex-col items-center gap-2 text-center">
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                index <= step
                  ? "bg-[var(--color-primary-dark)] text-white"
                  : "border border-[var(--color-border)] bg-white text-[var(--color-muted)]"
              }`}
            >
              {index + 1}
            </span>
            <span
              className={`text-xs font-medium ${
                index <= step ? "text-[var(--color-primary-dark)]" : "text-[var(--color-muted)]"
              }`}
            >
              {label}
            </span>
          </li>
        ))}
      </ol>

      <div className="card-surface p-6 sm:p-9">
        {/* Honeypot field — hidden from real users */}
        <input
          type="text"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {step === 0 && (
          <div className="animate-fade-up">
            <h2 className="text-lg font-bold text-[var(--color-text)]">متى يناسبك الحضور؟</h2>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              اختر التاريخ والفترة الزمنية المفضلة لديك، وسيتم تأكيد الوقت الدقيق مع فريق المركز.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="preferredDate" className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
                  التاريخ المفضل *
                </label>
                <input
                  id="preferredDate"
                  type="date"
                  min={todayISO()}
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="focus-ring w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm"
                />
                {fieldErrors.preferredDate && (
                  <p className="mt-1.5 text-xs font-medium text-red-600">{fieldErrors.preferredDate}</p>
                )}
              </div>

              <div>
                <label htmlFor="preferredTime" className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
                  الفترة المفضلة (اختياري)
                </label>
                <select
                  id="preferredTime"
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="focus-ring w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm"
                >
                  <option value="">بدون تفضيل</option>
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <p className="mt-4 text-xs text-[var(--color-muted)]">
              ساعات العمل: السبت–الأربعاء ٢:٠٠م–١٠:٠٠م، الخميس ١:٠٠م–٩:٠٠م، والجمعة إجازة.
            </p>
          </div>
        )}

        {step === 1 && (
          <div className="animate-fade-up">
            <h2 className="text-lg font-bold text-[var(--color-text)]">ما الخدمة التي تحتاجها؟</h2>
            <p className="mt-1 text-sm text-[var(--color-muted)]">اختر القسم الطبي ثم الخدمة المطلوبة، ويمكنك تحديد طبيب مفضل.</p>

            <div className="mt-6 grid gap-5">
              <div>
                <span className="mb-2 block text-sm font-semibold text-[var(--color-text)]">القسم الطبي *</span>
                <div className="grid grid-cols-2 gap-3">
                  {(Object.keys(departmentLabels) as Department[]).map((dep) => (
                    <button
                      key={dep}
                      type="button"
                      onClick={() => {
                        setDepartment(dep);
                        setServiceSlug("");
                        setDoctorSlug("");
                      }}
                      className={`focus-ring rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${
                        department === dep
                          ? "border-[var(--color-primary-dark)] bg-[var(--color-primary-soft)] text-[var(--color-primary-dark)]"
                          : "border-[var(--color-border)] bg-white text-[var(--color-muted)]"
                      }`}
                    >
                      {departmentLabels[dep]}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
                  الخدمة المطلوبة *
                </label>
                <select
                  id="service"
                  value={serviceSlug}
                  onChange={(e) => {
                    setServiceSlug(e.target.value);
                    setDoctorSlug("");
                  }}
                  className="focus-ring w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm"
                >
                  <option value="">اختر الخدمة</option>
                  {availableServices.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.name}
                    </option>
                  ))}
                </select>
                {fieldErrors.service && <p className="mt-1.5 text-xs font-medium text-red-600">{fieldErrors.service}</p>}
              </div>

              <div>
                <label htmlFor="doctor" className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
                  الطبيب المفضل (اختياري)
                </label>
                <select
                  id="doctor"
                  value={doctorSlug}
                  onChange={(e) => setDoctorSlug(e.target.value)}
                  className="focus-ring w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm"
                  disabled={availableDoctors.length === 0}
                >
                  <option value="">بدون تفضيل / حسب التوفر</option>
                  {availableDoctors.map((d) => (
                    <option key={d.slug} value={d.slug}>
                      {d.name} — {d.title}
                    </option>
                  ))}
                </select>
                {availableDoctors.length === 0 && serviceSlug && (
                  <p className="mt-1.5 text-xs text-[var(--color-muted)]">
                    سيتم تحديد المختص المناسب من فريق المركز لهذه الخدمة.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-up">
            <h2 className="text-lg font-bold text-[var(--color-text)]">بياناتك الشخصية</h2>
            <p className="mt-1 text-sm text-[var(--color-muted)]">سنستخدم هذه البيانات للتواصل معك وتأكيد الموعد فقط.</p>

            <div className="mt-6 grid gap-5">
              <div>
                <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
                  الاسم الكامل *
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="مثال: محمد عبدالله"
                  className="focus-ring w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm"
                />
                {fieldErrors.fullName && <p className="mt-1.5 text-xs font-medium text-red-600">{fieldErrors.fullName}</p>}
              </div>

              <div className="grid gap-5 sm:grid-cols-[150px_1fr]">
                <div>
                  <label htmlFor="countryCode" className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
                    الدولة
                  </label>
                  <select
                    id="countryCode"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="focus-ring w-full rounded-xl border border-[var(--color-border)] bg-white px-3 py-3 text-sm"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
                    رقم الجوال *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    inputMode="numeric"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/[^\d]/g, ""))}
                    placeholder="5xxxxxxxx"
                    dir="ltr"
                    className="focus-ring w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm"
                  />
                  {fieldErrors.phone && <p className="mt-1.5 text-xs font-medium text-red-600">{fieldErrors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
                  البريد الإلكتروني (اختياري)
                </label>
                <input
                  id="email"
                  type="email"
                  dir="ltr"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="focus-ring w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm"
                />
                {fieldErrors.email && <p className="mt-1.5 text-xs font-medium text-red-600">{fieldErrors.email}</p>}
              </div>

              <div>
                <label htmlFor="notes" className="mb-2 block text-sm font-semibold text-[var(--color-text)]">
                  ملاحظات إضافية (اختياري)
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="أي تفاصيل تودّ إخبارنا بها قبل الموعد"
                  className="focus-ring w-full resize-none rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm"
                />
              </div>

              <label className="flex cursor-pointer items-start gap-3 text-sm text-[var(--color-muted)]">
                <input
                  type="checkbox"
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  className="focus-ring mt-0.5 h-4 w-4 accent-[var(--color-primary-dark)]"
                />
                <span>
                  أوافق على{" "}
                  <Link href="/privacy" className="font-semibold text-[var(--color-primary-dark)] underline">
                    سياسة الخصوصية
                  </Link>{" "}
                  وعلى استخدام بياناتي للتواصل بخصوص هذا الطلب. *
                </span>
              </label>
              {fieldErrors.privacyAccepted && (
                <p className="-mt-3 text-xs font-medium text-red-600">{fieldErrors.privacyAccepted}</p>
              )}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-up">
            <h2 className="text-lg font-bold text-[var(--color-text)]">راجع طلبك قبل الإرسال</h2>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              تأكد من صحة البيانات، ويمكنك العودة لتعديل أي خطوة قبل الإرسال.
            </p>

            <dl className="mt-6 divide-y divide-[var(--color-border)] rounded-xl border border-[var(--color-border)]">
              {[
                ["الاسم الكامل", fullName],
                ["رقم الجوال", `${countryCode} ${phone}`],
                ["البريد الإلكتروني", email || "—"],
                ["القسم الطبي", departmentLabels[department]],
                ["الخدمة", selectedService?.name ?? "—"],
                ["الطبيب المفضل", selectedDoctor?.name ?? "بدون تفضيل"],
                ["التاريخ المفضل", preferredDate || "—"],
                ["الفترة المفضلة", preferredTime || "بدون تفضيل"],
                ["ملاحظات", notes || "—"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
                  <dt className="font-semibold text-[var(--color-text)]">{label}</dt>
                  <dd className="text-end text-[var(--color-muted)]">{value}</dd>
                </div>
              ))}
            </dl>

            {errorMessage && (
              <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {errorMessage}
              </div>
            )}
          </div>
        )}

        <div className="mt-8 flex items-center justify-between gap-3 border-t border-[var(--color-border)] pt-6">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 0 || status === "submitting"}
            className="btn btn-secondary focus-ring disabled:cursor-not-allowed disabled:opacity-40"
          >
            السابق
          </button>

          {step < 3 ? (
            <button type="button" onClick={goNext} className="btn btn-primary focus-ring">
              التالي
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={status === "submitting"}
              className="btn btn-primary focus-ring min-w-[180px] disabled:cursor-wait disabled:opacity-70"
            >
              {status === "submitting" ? "جارٍ الإرسال…" : "إرسال طلب الموعد"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
