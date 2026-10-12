import Link from "next/link";
import Image from "next/image";
import { clinic, whatsappLink } from "@/lib/clinic";
import { getServicesByDepartment } from "@/lib/services";

export function Footer() {
  const dental = getServicesByDepartment("dental").slice(0, 5);
  const cosmetic = getServicesByDepartment("cosmetic").slice(0, 5);

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="container-main grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/brand/logo.png"
            alt="شعار 2Care"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
          />
          <p className="mt-4 max-w-xs text-sm leading-7 text-[var(--color-muted)]">
            {clinic.shortDescription}
          </p>
          <a
            href={clinic.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-dark)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
            ‎@{clinic.instagramHandle}
          </a>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-[var(--color-text)]">خدمات الأسنان</h3>
          <ul className="space-y-2.5">
            {dental.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="focus-ring text-sm text-[var(--color-muted)] hover:text-[var(--color-primary-dark)]"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-[var(--color-text)]">الجلدية والتجميل</h3>
          <ul className="space-y-2.5">
            {cosmetic.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="focus-ring text-sm text-[var(--color-muted)] hover:text-[var(--color-primary-dark)]"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-[var(--color-text)]">تواصل معنا</h3>
          <ul className="space-y-3 text-sm text-[var(--color-muted)]">
            <li>{clinic.address.full}</li>
            <li>
              <a href={`tel:${clinic.phoneE164}`} className="focus-ring hover:text-[var(--color-primary-dark)]">
                {clinic.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink("مرحبًا، أرغب بالاستفسار عن خدمات 2Care.")}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring hover:text-[var(--color-primary-dark)]"
              >
                واتساب: {clinic.phoneDisplay}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link href="/booking" className="btn btn-primary focus-ring text-sm">
              احجز موعدك
            </Link>
            <Link href="/contact" className="btn btn-secondary focus-ring text-sm">
              تواصل معنا
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)]">
        <div className="container-main flex flex-col items-center justify-between gap-3 py-6 text-xs text-[var(--color-muted)] md:flex-row">
          <p>© {new Date().getFullYear()} 2Care — مجمع توكير الطبي. جميع الحقوق محفوظة.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="focus-ring hover:text-[var(--color-primary-dark)]">
              سياسة الخصوصية
            </Link>
            <Link href="/contact" className="focus-ring hover:text-[var(--color-primary-dark)]">
              تواصل معنا
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
