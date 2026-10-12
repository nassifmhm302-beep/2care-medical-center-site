"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { services, departmentLabels, getServicesByDepartment } from "@/lib/services";

const NAV_LINKS = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "من نحن" },
  { href: "/services", label: "خدماتنا", hasDropdown: true },
  { href: "/doctors", label: "أطباؤنا" },
  { href: "/before-after", label: "قبل وبعد" },
  { href: "/location", label: "موقعنا" },
  { href: "/contact", label: "تواصل معنا" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever navigation occurs (derived during render,
  // per React's guidance for resetting state on prop/value changes).
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }

  const dentalServices = getServicesByDepartment("dental");
  const cosmeticServices = getServicesByDepartment("cosmetic");

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur border-b border-[var(--color-border)] shadow-[0_6px_24px_rgba(36,107,138,0.08)]"
          : "bg-white/70 backdrop-blur border-b border-transparent"
      }`}
    >
      <div className="container-main flex h-[76px] items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-2 focus-ring">
          <Image
            src="/images/brand/logo.png"
            alt="شعار 2Care — مجمع توكير الطبي"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="التنقل الرئيسي">
          {NAV_LINKS.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`focus-ring flex items-center gap-1 rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors ${
                    pathname.startsWith("/services")
                      ? "text-[var(--color-primary-dark)]"
                      : "text-[var(--color-text)] hover:text-[var(--color-primary-dark)]"
                  }`}
                >
                  {link.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                {servicesOpen && (
                  <div className="absolute end-0 top-full w-[560px] rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[0_24px_60px_rgba(36,107,138,0.18)]">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="mb-2 text-xs font-bold text-[var(--color-primary-dark)]">
                          {departmentLabels.dental}
                        </p>
                        <ul className="space-y-1">
                          {dentalServices.map((s) => (
                            <li key={s.slug}>
                              <Link
                                href={`/services/${s.slug}`}
                                className="focus-ring block rounded-lg px-2 py-1.5 text-sm text-[var(--color-text)] hover:bg-[var(--color-primary-soft)] hover:text-[var(--color-primary-dark)]"
                              >
                                {s.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="mb-2 text-xs font-bold text-[var(--color-primary-dark)]">
                          {departmentLabels.cosmetic}
                        </p>
                        <ul className="space-y-1">
                          {cosmeticServices.map((s) => (
                            <li key={s.slug}>
                              <Link
                                href={`/services/${s.slug}`}
                                className="focus-ring block rounded-lg px-2 py-1.5 text-sm text-[var(--color-text)] hover:bg-[var(--color-primary-soft)] hover:text-[var(--color-primary-dark)]"
                              >
                                {s.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Link
                      href="/services"
                      className="focus-ring mt-4 block rounded-xl bg-[var(--color-primary-soft)] px-4 py-2.5 text-center text-sm font-semibold text-[var(--color-primary-dark)] hover:bg-[var(--color-primary)]/30"
                    >
                      عرض جميع الخدمات ({services.length})
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`focus-ring rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[var(--color-primary-dark)]"
                    : "text-[var(--color-text)] hover:text-[var(--color-primary-dark)]"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Link href="/booking" className="btn btn-primary focus-ring">
            احجز موعدك
          </Link>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-primary-dark)] lg:hidden"
          aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--color-border)] bg-white lg:hidden">
          <nav className="container-main flex flex-col gap-1 py-4" aria-label="التنقل في الهاتف">
            {NAV_LINKS.map((link) =>
              link.hasDropdown ? (
                <div key={link.href}>
                  <button
                    type="button"
                    className="focus-ring flex w-full items-center justify-between rounded-lg px-3 py-3 text-[1rem] font-medium text-[var(--color-text)]"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    aria-expanded={mobileServicesOpen}
                  >
                    {link.label}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    >
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <div className="mb-2 ms-3 border-e-2 border-[var(--color-border)] ps-4">
                      <p className="mb-1 mt-2 text-xs font-bold text-[var(--color-primary-dark)]">
                        {departmentLabels.dental}
                      </p>
                      {dentalServices.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="focus-ring block rounded-lg px-2 py-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-primary-dark)]"
                        >
                          {s.name}
                        </Link>
                      ))}
                      <p className="mb-1 mt-3 text-xs font-bold text-[var(--color-primary-dark)]">
                        {departmentLabels.cosmetic}
                      </p>
                      {cosmeticServices.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="focus-ring block rounded-lg px-2 py-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-primary-dark)]"
                        >
                          {s.name}
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="focus-ring mt-2 block rounded-lg bg-[var(--color-primary-soft)] px-3 py-2 text-sm font-semibold text-[var(--color-primary-dark)]"
                      >
                        عرض جميع الخدمات
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="focus-ring rounded-lg px-3 py-3 text-[1rem] font-medium text-[var(--color-text)] hover:bg-[var(--color-primary-soft)]"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link href="/booking" className="btn btn-primary focus-ring mt-2 w-full">
              احجز موعدك
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
