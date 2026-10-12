import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/lib/types";

export function ServiceCard({ service, featured = false }: { service: Service; featured?: boolean }) {
  return (
    <article
      className={`focus-ring group flex flex-col overflow-hidden rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)] ${
        featured ? "sm:col-span-2" : ""
      }`}
    >
      <Link href={`/services/${service.slug}`} className="relative block aspect-[16/10] w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-[var(--color-text)]">
          <Link href={`/services/${service.slug}`} className="focus-ring hover:text-[var(--color-primary-dark)]">
            {service.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-7 text-[var(--color-muted)]">
          {service.shortDescription}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link
            href={`/services/${service.slug}`}
            className="focus-ring inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary-dark)]"
          >
            تفاصيل الخدمة
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href={`/booking?service=${service.slug}`}
            className="btn btn-secondary focus-ring ms-auto !px-4 !py-2 text-xs"
          >
            احجز هذه الخدمة
          </Link>
        </div>
      </div>
    </article>
  );
}
