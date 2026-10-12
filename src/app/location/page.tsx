import type { Metadata } from "next";
import { LocationSection } from "@/components/LocationSection";
import { BookingCTA } from "@/components/BookingCTA";
import { clinic } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "موقعنا",
  description: `موقع مركز 2Care: ${clinic.address.full}. اطّلع على ساعات العمل والاتجاهات على خرائط Google.`,
};

export default function LocationPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-soft)] py-16 md:py-20">
        <div className="container-main text-center">
          <span className="eyebrow">موقعنا</span>
          <h1 className="mx-auto mt-5 max-w-3xl text-[clamp(2rem,4vw,2.8rem)] font-bold leading-tight text-[var(--color-text)]">
            مركز 2Care — شمال الرياض
          </h1>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[var(--color-muted)]">{clinic.address.full}</p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-main">
          <LocationSection />
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
