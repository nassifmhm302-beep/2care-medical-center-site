import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { BookingCTA } from "@/components/BookingCTA";
import { clinic } from "@/lib/clinic";
import { assetPath } from "@/lib/assets";

export const metadata: Metadata = {
  title: "من نحن",
  description: "تعرّف على مجمع توكير الطبي 2Care، رؤيتنا ورسالتنا وقيمنا في تقديم رعاية طبية وتجميلية متكاملة في الرياض.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-soft)] py-16 md:py-20">
        <div className="container-main text-center">
          <span className="eyebrow">من نحن</span>
          <h1 className="mx-auto mt-5 max-w-3xl text-[clamp(2rem,4vw,2.8rem)] font-bold leading-tight text-[var(--color-text)]">
            {clinic.legalName} — شريكك الطبي في الرياض
          </h1>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[var(--color-muted)]">{clinic.shortDescription}</p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-main grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3.2] overflow-hidden rounded-[var(--radius-large)] shadow-[var(--shadow-card)]">
            <Image
              src={assetPath("/images/about/clinic-care.jpg")}
              alt="طبيبة تقدم رعاية طبية لمريضة داخل العيادة"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[var(--color-primary-dark)]">رؤيتنا</h2>
              <p className="mt-3 leading-8 text-[var(--color-muted)]">{clinic.vision}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--color-primary-dark)]">رسالتنا</h2>
              <p className="mt-3 leading-8 text-[var(--color-muted)]">{clinic.mission}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-surface)]">
        <div className="container-main">
          <SectionHeading eyebrow="قيمنا" title="المبادئ التي توجّه عملنا كل يوم" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {clinic.values.map((value) => (
              <div key={value.title} className="card-surface p-6 text-center">
                <h3 className="font-bold text-[var(--color-primary-dark)]">{value.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-main grid gap-6 sm:grid-cols-2">
          <div className="card-surface p-8">
            <h3 className="text-lg font-bold text-[var(--color-text)]">قسم الأسنان</h3>
            <p className="mt-3 leading-7 text-[var(--color-muted)]">
              يقدم فريق من أطباء وجراحي واستشاريي الأسنان السعوديين خدمات شاملة تمتد من الفحص الدوري إلى التقويم والزراعة والتجميل.
            </p>
            <Link href="/services" className="btn btn-secondary focus-ring mt-5">
              تصفح خدمات الأسنان
            </Link>
          </div>
          <div className="card-surface p-8">
            <h3 className="text-lg font-bold text-[var(--color-text)]">قسم الجلدية والتجميل</h3>
            <p className="mt-3 leading-7 text-[var(--color-muted)]">
              يضم القسم خدمات الليزر والعناية بالبشرة والشعر باستخدام تقنيات حديثة، ضمن بيئة نظيفة وخاصة تراعي راحة كل مراجع.
            </p>
            <Link href="/services" className="btn btn-secondary focus-ring mt-5">
              تصفح خدمات التجميل
            </Link>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
