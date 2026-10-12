import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { BookingCTA } from "@/components/BookingCTA";
import { departmentLabels, getServicesByDepartment } from "@/lib/services";

export const metadata: Metadata = {
  title: "خدماتنا",
  description: "تصفح جميع خدمات مركز 2Care الطبية في طب الأسنان والجلدية والتجميل بالرياض.",
};

export default function ServicesPage() {
  const dentalServices = getServicesByDepartment("dental");
  const cosmeticServices = getServicesByDepartment("cosmetic");

  return (
    <>
      <section className="bg-[var(--color-primary-soft)] py-16 md:py-20">
        <div className="container-main text-center">
          <span className="eyebrow">خدماتنا</span>
          <h1 className="mx-auto mt-5 max-w-3xl text-[clamp(2rem,4vw,2.8rem)] font-bold leading-tight text-[var(--color-text)]">
            خدمات طبية وتجميلية موثقة بأيدٍ متخصصة
          </h1>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[var(--color-muted)]">
            اختر القسم الطبي المناسب لاحتياجك، واطّلع على تفاصيل كل خدمة قبل حجز موعدك.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/services"
              className="btn btn-primary focus-ring"
            >
              جميع الخدمات
            </Link>
            <Link
              href="/services?department=dental"
              className="btn btn-secondary focus-ring"
            >
              {departmentLabels.dental}
            </Link>
            <Link
              href="/services?department=cosmetic"
              className="btn btn-secondary focus-ring"
            >
              {departmentLabels.cosmetic}
            </Link>
          </div>
        </div>
      </section>

      {(
        <section className="section-pad bg-white">
          <div className="container-main">
            <h2 className="text-2xl font-bold text-[var(--color-text)]">{departmentLabels.dental}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {dentalServices.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>
      )}

      {(
        <section className="section-pad bg-[var(--color-surface)]">
          <div className="container-main">
            <h2 className="text-2xl font-bold text-[var(--color-text)]">{departmentLabels.cosmetic}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cosmeticServices.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>
      )}

      <BookingCTA />
    </>
  );
}
