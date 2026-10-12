import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { clinic, whatsappLink } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "احجز موعدك",
  description: "احجز موعدك في مركز 2Care عبر نموذج حجز سهل وآمن — أرسل طلبك وسيتواصل معك فريق المركز لتأكيد التفاصيل.",
};

export default function BookingPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-soft)] py-14 md:py-18">
        <div className="container-main text-center">
          <span className="eyebrow">حجز المواعيد</span>
          <h1 className="mx-auto mt-5 max-w-2xl text-[clamp(2rem,4vw,2.6rem)] font-bold leading-tight text-[var(--color-text)]">
            احجز موعدك في 2Care
          </h1>
          <p className="mx-auto mt-4 max-w-xl leading-8 text-[var(--color-muted)]">
            أرسل طلب موعدك، وسيتواصل معك فريق المركز لتأكيد التفاصيل. هذا الطلب لا يُعدّ تأكيدًا نهائيًا للموعد.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-main">
          <BookingForm />

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center text-sm leading-7 text-[var(--color-muted)]">
            تفضّل التواصل المباشر؟ يمكنك الاتصال بنا على{" "}
            <a href={`tel:${clinic.phoneE164}`} className="font-semibold text-[var(--color-primary-dark)]" dir="ltr">
              {clinic.phoneDisplay}
            </a>{" "}
            أو عبر{" "}
            <a
              href={whatsappLink("مرحبًا، أرغب في حجز موعد في مركز 2Care.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--color-primary-dark)]"
            >
              واتساب
            </a>
            .
          </div>
        </div>
      </section>
    </>
  );
}
