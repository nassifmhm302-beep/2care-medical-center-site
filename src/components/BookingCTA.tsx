import Link from "next/link";

export function BookingCTA({
  title = "ابدأ رحلتك نحو ابتسامة وبشرة أكثر صحة",
  description = "أرسل طلب موعدك الآن، وسيتواصل معك فريق مركز 2Care لتأكيد التفاصيل في أقرب وقت.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="section-pad bg-[var(--color-primary-dark)]">
      <div className="container-main">
        <div className="flex flex-col items-center justify-between gap-8 rounded-[var(--radius-large)] bg-gradient-to-l from-[#1d5b74] to-[#123844] p-10 text-center lg:flex-row lg:p-14 lg:text-start">
          <div className="max-w-xl">
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-snug text-white">{title}</h2>
            <p className="mt-4 leading-8 text-white/85">{description}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link href="/booking" className="btn bg-white text-[var(--color-primary-dark)] hover:bg-white/90 focus-ring">
              احجز موعدك الآن
            </Link>
            <Link href="/contact" className="btn btn-outline-light focus-ring">
              تواصل معنا
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
