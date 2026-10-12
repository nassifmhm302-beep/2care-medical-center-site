import type { Metadata } from "next";
import Link from "next/link";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { SectionHeading } from "@/components/SectionHeading";
import { BookingCTA } from "@/components/BookingCTA";
import { assetPath } from "@/lib/assets";

export const metadata: Metadata = {
  title: "قبل وبعد",
  description: "قارن حالات قبل وبعد لعلاجات الأسنان والتجميل في مركز 2Care عبر شريط مقارنة تفاعلي.",
};

export default function BeforeAfterPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-soft)] py-16 md:py-20">
        <div className="container-main text-center">
          <span className="eyebrow">قبل وبعد</span>
          <h1 className="mx-auto mt-5 max-w-3xl text-[clamp(2rem,4vw,2.8rem)] font-bold leading-tight text-[var(--color-text)]">
            شاهد الفرق بنفسك
          </h1>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[var(--color-muted)]">
            اسحب شريط المقارنة يمينًا ويسارًا لاستكشاف نتائج العلاجات. يعمل الشريط باللمس والماوس ولوحة المفاتيح.
          </p>
        </div>
      </section>

      <div className="container-main -mt-8">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-7 text-amber-800">
          <strong className="font-bold">تنويه هام:</strong> الصور المعروضة في هذا القسم هي صور توضيحية مؤقتة
          لإظهار آلية عمل شريط المقارنة فقط، وليست نتائج علاجية فعلية لمرضى حقيقيين. سيتم استبدالها بصور حالات
          حقيقية موثّقة وموافق عليها من المركز قبل إطلاق الموقع رسميًا.
        </div>
      </div>

      <section className="section-pad bg-white">
        <div className="container-main">
          <SectionHeading eyebrow="قسم الأسنان" title="حالات قبل وبعد لعلاجات الأسنان" />
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <BeforeAfterSlider
              title="حالة تجميل وتبييض الأسنان"
              before={assetPath("/images/before-after/teeth-demo.jpg")}
              after={assetPath("/images/services/veneers.jpg")}
            />
            <BeforeAfterSlider
              title="حالة تقويم الأسنان"
              before={assetPath("/images/services/teeth-cleaning.jpg")}
              after={assetPath("/images/services/orthodontics.jpg")}
            />
          </div>
          <div className="mt-8 text-center">
            <Link href="/services?department=dental" className="btn btn-secondary focus-ring">
              تصفح خدمات الأسنان
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-surface)]">
        <div className="container-main">
          <SectionHeading eyebrow="قسم التجميل" title="حالات قبل وبعد لحقن الشفاه والبشرة" />
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <BeforeAfterSlider
              title="حالة حقن الشفاه"
              before={assetPath("/images/before-after/lips-demo.jpg")}
              after={assetPath("/images/services/botox-filler.jpg")}
            />
            <BeforeAfterSlider
              title="حالة تنظيف ونضارة البشرة"
              before={assetPath("/images/services/chemical-peeling.jpg")}
              after={assetPath("/images/services/deep-cleansing.jpg")}
            />
          </div>
          <div className="mt-8 text-center">
            <Link href="/services?department=cosmetic" className="btn btn-secondary focus-ring">
              تصفح خدمات التجميل
            </Link>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
