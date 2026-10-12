import { z } from "zod";

// Basic Saudi / Gulf mobile number validation — digits only, 8 to 10 digits
// after the country code (covers numbers entered with or without a leading 0).
const phoneRegex = /^[0-9]{8,10}$/;

export const appointmentSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, "يرجى إدخال الاسم الكامل (٣ أحرف على الأقل).")
    .max(120, "الاسم طويل جدًا."),
  phoneCountryCode: z.string().trim().min(2).max(6).default("+966"),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "يرجى إدخال رقم جوال صحيح (أرقام فقط)."),
  email: z
    .union([z.string().trim().email("صيغة البريد الإلكتروني غير صحيحة."), z.literal("")])
    .optional(),
  department: z.enum(["dental", "cosmetic"], {
    message: "يرجى اختيار القسم الطبي.",
  }),
  service: z.string().trim().min(1, "يرجى اختيار الخدمة المطلوبة."),
  doctor: z.string().trim().optional().or(z.literal("")),
  preferredDate: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "يرجى اختيار تاريخ صحيح."),
  preferredTime: z.string().trim().optional().or(z.literal("")),
  notes: z.string().trim().max(600, "الملاحظات طويلة جدًا.").optional().or(z.literal("")),
  privacyAccepted: z.literal(true, {
    message: "يجب الموافقة على سياسة الخصوصية لإرسال الطلب.",
  }),
  website: z.string().max(0).optional().or(z.literal("")),
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export function isDateInPast(dateStr: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const date = new Date(`${dateStr}T00:00:00`);
  return date.getTime() < today.getTime();
}

export function isFriday(dateStr: string) {
  const date = new Date(`${dateStr}T00:00:00`);
  return date.getDay() === 5;
}
