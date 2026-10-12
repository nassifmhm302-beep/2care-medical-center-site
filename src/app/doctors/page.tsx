import type { Metadata } from "next";
import { BookingCTA } from "@/components/BookingCTA";
import { DoctorCard } from "@/components/DoctorCard";
import { doctors } from "@/lib/doctors";

export const metadata: Metadata = {
  title: "أطباؤنا",
  description: "تعرّف على فريق الأطباء المتخصصين في مركز 2Care ومؤهلاتهم المهنية الموثقة.",
};

export default function DoctorsPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-soft)] py-16 md:py-20">
        <div className="container-main text-center">
          <span className="eyebrow">فريقنا الطبي</span>
          <h1 className="mx-auto mt-5 max-w-3xl text-[clamp(2rem,4vw,2.8rem)] font-bold leading-tight text-[var(--color-text)]">
            أطباء متخصصون تثق بخبرتهم
          </h1>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[var(--color-muted)]">
            فريق من الأطباء والاستشاريين السعوديين حاصلون على مؤهلات معتمدة في تخصصاتهم المختلفة.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-main grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.slug} doctor={doctor} />
          ))}
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
