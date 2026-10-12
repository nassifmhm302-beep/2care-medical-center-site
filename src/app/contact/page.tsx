import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { LocationSection } from "@/components/LocationSection";
import { clinic, whatsappLink } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: "تواصل مع مركز 2Care عبر الهاتف أو واتساب أو إنستغرام، أو أرسل طلب حجز موعد مباشرة.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-soft)] py-16 md:py-20">
        <div className="container-main text-center">
          <span className="eyebrow">تواصل معنا</span>
          <h1 className="mx-auto mt-5 max-w-3xl text-[clamp(2rem,4vw,2.8rem)] font-bold leading-tight text-[var(--color-text)]">
            نحن هنا للإجابة على استفساراتك
          </h1>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[var(--color-muted)]">
            اختر وسيلة التواصل الأنسب لك، أو أرسل طلب حجز موعد مباشرة عبر نموذج الحجز.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-main grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <a href={`tel:${clinic.phoneE164}`} className="focus-ring card-surface flex flex-col items-center gap-3 p-8 text-center transition-transform hover:-translate-y-1">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary-dark)]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 4 6a2 2 0 0 1 0-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="font-bold text-[var(--color-text)]">اتصل بنا</p>
            <p className="text-sm text-[var(--color-muted)]" dir="ltr">{clinic.phoneDisplay}</p>
          </a>
          <a
            href={whatsappLink("مرحبًا، أرغب بالاستفسار عن خدمات 2Care.")}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring card-surface flex flex-col items-center gap-3 p-8 text-center transition-transform hover:-translate-y-1"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary-dark)]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 3a9 9 0 0 0-7.8 13.4L3 21l4.7-1.2A9 9 0 1 0 12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="font-bold text-[var(--color-text)]">واتساب</p>
            <p className="text-sm text-[var(--color-muted)]" dir="ltr">{clinic.phoneDisplay}</p>
          </a>
          <a
            href={clinic.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring card-surface flex flex-col items-center gap-3 p-8 text-center transition-transform hover:-translate-y-1"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary-dark)]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </span>
            <p className="font-bold text-[var(--color-text)]">إنستغرام</p>
            <p className="text-sm text-[var(--color-muted)]">‎@{clinic.instagramHandle}</p>
          </a>
          <Link
            href="/booking"
            className="focus-ring card-surface flex flex-col items-center gap-3 bg-[var(--color-primary-dark)] p-8 text-center text-white transition-transform hover:-translate-y-1"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M8 3v3M16 3v3M4 9h16M5 7h14a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="font-bold">احجز موعدك</p>
            <p className="text-sm text-white/80">عبر نموذج الحجز الإلكتروني</p>
          </Link>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-surface)]">
        <div className="container-main">
          <SectionHeading eyebrow="موقعنا" title="موقع المركز وساعات العمل" />
          <div className="mt-10">
            <LocationSection />
          </div>
        </div>
      </section>
    </>
  );
}
