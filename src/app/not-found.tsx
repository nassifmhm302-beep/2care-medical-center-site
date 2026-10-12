import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-[var(--color-primary-soft)]">
      <div className="container-main py-20 text-center">
        <span className="eyebrow">خطأ ٤٠٤</span>
        <h1 className="mx-auto mt-6 text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-none text-[var(--color-primary-dark)]">
          404
        </h1>
        <h2 className="mt-4 text-xl font-bold text-[var(--color-text)]">عذرًا، الصفحة غير موجودة</h2>
        <p className="mx-auto mt-4 max-w-md leading-8 text-[var(--color-muted)]">
          قد يكون الرابط الذي اتبعته غير صحيح أو تم نقل الصفحة. يمكنك العودة إلى الرئيسية أو تصفح خدماتنا.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary focus-ring">
            العودة للرئيسية
          </Link>
          <Link href="/services" className="btn btn-secondary focus-ring">
            تصفح خدماتنا
          </Link>
          <Link href="/booking" className="btn btn-secondary focus-ring">
            احجز موعدًا
          </Link>
        </div>
      </div>
    </section>
  );
}
