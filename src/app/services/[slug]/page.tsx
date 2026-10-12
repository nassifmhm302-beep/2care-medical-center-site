import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { DoctorCard } from "@/components/DoctorCard";
import { ServiceCard } from "@/components/ServiceCard";
import { BookingCTA } from "@/components/BookingCTA";
import { departmentLabels, getServiceBySlug, services } from "@/lib/services";
import { getDoctorsForService } from "@/lib/doctors";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.shortDescription,
    openGraph: {
      title: `${service.name} | 2Care`,
      description: service.shortDescription,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = service.relatedSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const serviceDoctors = getDoctorsForService(service.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.name,
    description: service.shortDescription,
    medicineSystem: "https://schema.org/WesternConventional",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-[var(--color-primary-soft)] py-12 md:py-16">
        <div className="container-main">
          <nav className="mb-6 text-sm text-[var(--color-muted)]" aria-label="مسار التنقل">
            <Link href="/services" className="focus-ring hover:text-[var(--color-primary-dark)]">
              خدماتنا
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--color-text)]">{service.name}</span>
          </nav>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="eyebrow">{departmentLabels[service.department]}</span>
              <h1 className="mt-4 text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-tight text-[var(--color-text)]">
                {service.name}
              </h1>
              <p className="mt-5 leading-8 text-[var(--color-muted)]">{service.description}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href={`/booking?service=${service.slug}`} className="btn btn-primary focus-ring">
                  احجز هذه الخدمة
                </Link>
                <Link href="/services" className="btn btn-secondary focus-ring">
                  جميع الخدمات
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-large)] shadow-[var(--shadow-card)]">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-main grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-[var(--color-text)]">ماذا يمكن توقعه؟</h2>
            <ul className="mt-5 space-y-4">
              {service.expectations.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-sm font-bold text-[var(--color-primary-dark)]">
                    {index + 1}
                  </span>
                  <span className="leading-7 text-[var(--color-muted)]">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="card-surface h-fit p-6">
            <h3 className="font-bold text-[var(--color-text)]">معلومة مهمة</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              المعلومات أعلاه هي معلومات طبية عامة لأغراض التعريف بالخدمة، ولا تغني عن استشارة الطبيب المختص
              لتحديد الخطة العلاجية المناسبة لحالتك.
            </p>
            <Link href={`/booking?service=${service.slug}`} className="btn btn-primary focus-ring mt-5 w-full">
              احجز استشارة الآن
            </Link>
          </aside>
        </div>
      </section>

      {serviceDoctors.length > 0 && (
        <section className="section-pad bg-[var(--color-surface)]">
          <div className="container-main">
            <SectionHeading eyebrow="الطبيب المختص" title="الأطباء الذين يقدّمون هذه الخدمة" />
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {serviceDoctors.map((doctor) => (
                <DoctorCard key={doctor.slug} doctor={doctor} />
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedServices.length > 0 && (
        <section className="section-pad bg-white">
          <div className="container-main">
            <SectionHeading eyebrow="خدمات مرتبطة" title="قد يهمك أيضًا" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((related) => (
                <ServiceCard key={related.slug} service={related} />
              ))}
            </div>
          </div>
        </section>
      )}

      <BookingCTA
        title={`جاهز لحجز موعد ${service.name}؟`}
        description="أرسل طلبك الآن وسيتواصل معك فريق 2Care لتأكيد كل التفاصيل."
      />
    </>
  );
}
