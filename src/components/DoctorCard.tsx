import Link from "next/link";
import Image from "next/image";
import type { Doctor } from "@/lib/types";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Link
      href={`/doctors/${doctor.slug}`}
      className="focus-ring group block overflow-hidden rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-gradient-to-b from-[#0d2733] to-[#153846] shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1.5"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={doctor.image}
          alt={doctor.imageAlt}
          fill
          sizes="(max-width: 768px) 50vw, 280px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="bg-white p-5">
        <h3 className="text-lg font-bold text-[var(--color-text)]">{doctor.name}</h3>
        <p className="mt-1 text-sm font-medium text-[var(--color-primary-dark)]">{doctor.title}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary-dark)]">
          عرض الملف الشخصي
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
