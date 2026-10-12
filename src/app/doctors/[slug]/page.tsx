import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { BookingCTA } from "@/components/BookingCTA";
import { doctors, getDoctorBySlug } from "@/lib/doctors";
import { getServiceBySlug } from "@/lib/services";

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return {};

  return {
    title: doctor.name,
    description: `${doctor.name} — ${doctor.qualifications}`,
    openGraph: {
      title: `${doctor.name} | 2Care`,
      description: doctor.qualifications,
      images: [{ url: doctor.image }],
    },
  };
}

export default async function DoctorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();

  const doctorServices = doctor.serviceSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    medicalSpecialty: doctor.title,
    description: doctor.qualifications,
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
            <Link href="/doctors" className="focus-ring hover:text-[var(--color-primary-dark)]">
              أطباؤنا
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--color-text)]">{doctor.name}</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[320px_1fr]">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-[var(--radius-large)] bg-gradient-to-b from-[#0d2733] to-[#153846] shadow-[var(--shadow-card)]">
              <Image
                src={doctor.image}
                alt={doctor.imageAlt}
                fill
                sizes="320px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-[clamp(1.8rem,3.4vw,2.4rem)] font-bold leading-tight text-[var(--color-text)]">
                {doctor.name}
              </h1>
              <p className="mt-2 text-lg font-semibold text-[var(--color-primary-dark)]">{doctor.title}</p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{doctor.qualifications}</p>
              <p className="mt-5 max-w-2xl leading-8 text-[var(--color-muted)]">{doctor.bio}</p>
              <Link href={`/booking?doctor=${doctor.slug}`} className="btn btn-primary focus-ring mt-7">
                احجز موعدًا مع {doctor.name}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {doctorServices.length > 0 && (
        <section className="section-pad bg-white">
          <div className="container-main">
            <SectionHeading eyebrow="خدماته الطبية" title={`الخدمات التي يقدمها ${doctor.name}`} />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {doctorServices.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>
      )}

      <BookingCTA
        title={`احجز موعدك مع ${doctor.name}`}
        description="أرسل طلب الحجز الآن وسيتواصل معك فريق 2Care لتأكيد الموعد المناسب."
      />
    </>
  );
}
