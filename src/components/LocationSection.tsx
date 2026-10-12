import { clinic, whatsappLink } from "@/lib/clinic";

export function LocationSection({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="card-surface overflow-hidden lg:col-span-3">
        <iframe
          title="موقع 2Care على خريطة جوجل"
          src={clinic.googleMapsEmbedUrl}
          width="100%"
          height={compact ? 360 : 440}
          style={{ border: 0, display: "block" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="card-surface flex flex-col justify-between gap-6 p-7 lg:col-span-2">
        <div>
          <h3 className="text-lg font-bold text-[var(--color-text)]">مجمع توكير الطبي — 2Care</h3>
          <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{clinic.address.full}</p>

          <div className="mt-6 space-y-3 border-t border-[var(--color-border)] pt-5">
            <p className="text-sm font-bold text-[var(--color-text)]">ساعات العمل</p>
            <ul className="space-y-1.5 text-sm text-[var(--color-muted)]">
              {clinic.workingHours.map((item) => (
                <li key={item.day} className="flex items-center justify-between gap-3">
                  <span>{item.day}</span>
                  <span className={item.hours === "مغلق" ? "font-semibold text-[var(--color-primary-dark)]" : ""}>
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href={clinic.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary focus-ring w-full"
          >
            الاتجاهات على خرائط Google
          </a>
          <div className="grid grid-cols-2 gap-3">
            <a href={`tel:${clinic.phoneE164}`} className="btn btn-secondary focus-ring">
              اتصل بنا
            </a>
            <a
              href={whatsappLink("مرحبًا، أرغب بالاستفسار عن خدمات 2Care.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary focus-ring"
            >
              واتساب
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
