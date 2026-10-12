import Link from "next/link";
import Image from "next/image";
import { clinic } from "@/lib/clinic";
import { assetPath } from "@/lib/assets";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary-soft)]">
      <div className="pointer-events-none absolute -end-24 -top-24 h-72 w-72 rounded-full bg-[var(--color-primary)]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -start-16 h-80 w-80 rounded-full bg-[var(--color-primary-dark)]/10 blur-3xl" />

      <div className="container-main relative grid items-center gap-12 py-16 md:py-20 lg:grid-cols-2 lg:py-24">
        <div className="animate-fade-up order-2 lg:order-1">
          <span className="eyebrow">مجمع توكير الطبي — 2Care</span>
          <h1 className="mt-5 text-[clamp(2.1rem,4.4vw,3.4rem)] font-bold leading-[1.2] text-[var(--color-text)]">
            {clinic.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-8 text-[var(--color-muted)]">
            {clinic.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/booking" className="btn btn-primary focus-ring">
              احجز موعدك
            </Link>
            <Link href="/services" className="btn btn-secondary focus-ring">
              اكتشف خدماتنا
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 border-t border-[var(--color-border)] pt-6">
            <div>
              <p className="text-sm font-bold text-[var(--color-primary-dark)]">قسم الأسنان</p>
              <p className="text-sm text-[var(--color-muted)]">علاج، تجميل، تقويم وزراعة</p>
            </div>
            <div>
              <p className="text-sm font-bold text-[var(--color-primary-dark)]">قسم الجلدية والتجميل</p>
              <p className="text-sm text-[var(--color-muted)]">ليزر وعناية بالبشرة والشعر</p>
            </div>
          </div>
        </div>

        <div className="animate-fade-up order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-[var(--radius-large)] shadow-[var(--shadow-card)]">
            <Image
              src={assetPath("/images/hero/dental-hero.jpg")}
              alt="طبيبة تقدم رعاية أسنان لمريضة داخل مركز 2Care"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
