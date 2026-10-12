import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { DoctorCard } from "@/components/DoctorCard";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { LocationSection } from "@/components/LocationSection";
import { BookingCTA } from "@/components/BookingCTA";
import { clinic, whatsappLink } from "@/lib/clinic";
import { departmentLabels, getServicesByDepartment } from "@/lib/services";
import { doctors } from "@/lib/doctors";

export default function HomePage() {
  const dentalServices = getServicesByDepartment("dental");
  const cosmeticServices = getServicesByDepartment("cosmetic");
  const featuredServices = [...dentalServices.slice(0, 3), ...cosmeticServices.slice(0, 3)];

  return (
    <>
      <Hero />

      {/* نبذة عن المركز */}
      <section className="section-pad bg-white">
        <div className="container-main grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/3.2] overflow-hidden rounded-[var(--radius-large)] shadow-[var(--shadow-card)] lg:order-1">
            <Image
              src="/images/about/clinic-reception.jpg"
              alt="استقبال داخل عيادة طبية حديثة"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">من نحن</span>
            <h2 className="mt-4 text-[clamp(1.7rem,3.2vw,2.4rem)] font-bold leading-tight text-[var(--color-text)]">
              رعاية طبية متكاملة في بيئة راقية تضع راحتك أولًا
            </h2>
            <p className="mt-5 leading-8 text-[var(--color-muted)]">{clinic.mission}</p>
            <ul className="mt-6 space-y-3">
              {clinic.values.slice(0, 3).map((value) => (
                <li key={value.title} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary-dark)]">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm leading-7 text-[var(--color-muted)]">
                    <strong className="font-semibold text-[var(--color-text)]">{value.title}:</strong>{" "}
                    {value.description}
                  </span>
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn btn-primary focus-ring mt-8">
              تعرف علينا أكثر
            </Link>
          </div>
        </div>
      </section>

      {/* الأقسام والتخصصات الطبية */}
      <section className="section-pad bg-[var(--color-surface)]">
        <div className="container-main">
          <SectionHeading
            eyebrow="تخصصاتنا"
            title="أقسام طبية متخصصة تحت سقف واحد"
            description="يضم مركز 2Care قسمين رئيسيين يغطيان احتياجات الأسنان والجلدية والتجميل بأيدٍ طبية متخصصة."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Link
              href="/services?department=dental"
              className="focus-ring group relative overflow-hidden rounded-[var(--radius-large)] bg-[var(--color-primary-dark)] p-10 text-white shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
            >
              <span className="text-5xl">🦷</span>
              <h3 className="mt-6 text-2xl font-bold">{departmentLabels.dental}</h3>
              <p className="mt-3 max-w-sm leading-7 text-white/85">
                طب الأسنان العام، التقويم، الزراعة، علاج الجذور، التركيبات، الفينير، وأسنان الأطفال.
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold">
                عرض خدمات الأسنان
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <Link
              href="/services?department=cosmetic"
              className="focus-ring group relative overflow-hidden rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white p-10 text-[var(--color-text)] shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
            >
              <span className="text-5xl">✨</span>
              <h3 className="mt-6 text-2xl font-bold">{departmentLabels.cosmetic}</h3>
              <p className="mt-3 max-w-sm leading-7 text-[var(--color-muted)]">
                الليزر، البوتوكس والفيلر، الميزوثيرابي، تنظيف البشرة العميق، وعلاجات تساقط الشعر.
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary-dark)]">
                عرض خدمات التجميل
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* الخدمات الرئيسية */}
      <section className="section-pad bg-white">
        <div className="container-main">
          <SectionHeading
            eyebrow="خدماتنا"
            title="خدمات طبية وتجميلية موثقة"
            description="نماذج من خدمات مركز 2Care — يمكنك تصفح القائمة الكاملة للاطلاع على كل التفاصيل."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.slug} service={service} featured={index === 0} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn btn-secondary focus-ring">
              عرض جميع الخدمات
            </Link>
          </div>
        </div>
      </section>

      {/* مميزات المركز / قيمنا */}
      <section className="section-pad bg-[var(--color-primary-soft)]">
        <div className="container-main">
          <SectionHeading eyebrow="قيمنا" title="ما يميز تجربتك في 2Care" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {clinic.values.map((value) => (
              <div key={value.title} className="card-surface p-6 text-center">
                <h3 className="font-bold text-[var(--color-primary-dark)]">{value.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* الفريق الطبي */}
      <section className="section-pad bg-white">
        <div className="container-main">
          <SectionHeading
            eyebrow="فريقنا الطبي"
            title="أطباء متخصصون تثق بهم"
            description="تعرّف على الأطباء المعتمدين في مركز 2Care ومؤهلاتهم المهنية الموثقة."
          />
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.slug} doctor={doctor} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/doctors" className="btn btn-secondary focus-ring">
              عرض جميع الأطباء
            </Link>
          </div>
        </div>
      </section>

      {/* قبل وبعد: الأسنان */}
      <section className="section-pad bg-[var(--color-surface)]">
        <div className="container-main grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">نتائج قبل وبعد</span>
            <h2 className="mt-4 text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-tight text-[var(--color-text)]">
              حالات قبل وبعد لعلاجات الأسنان
            </h2>
            <p className="mt-4 leading-8 text-[var(--color-muted)]">
              اسحب الشريط لمقارنة النتائج. هذه صورة توضيحية تجريبية لآلية المقارنة فقط، بانتظار استبدالها بصور حالات حقيقية موثقة من المركز.
            </p>
            <Link href="/before-after" className="btn btn-primary focus-ring mt-6">
              عرض كل حالات الأسنان
            </Link>
          </div>
          <BeforeAfterSlider
            title="مقارنة قبل وبعد لعلاج الأسنان"
            before="/images/before-after/teeth-demo.jpg"
            after="/images/services/veneers.jpg"
          />
        </div>
      </section>

      {/* قبل وبعد: الشفاه */}
      <section className="section-pad bg-white">
        <div className="container-main grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <BeforeAfterSlider
              title="مقارنة قبل وبعد لحقن الشفاه"
              before="/images/before-after/lips-demo.jpg"
              after="/images/services/botox-filler.jpg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">نتائج قبل وبعد</span>
            <h2 className="mt-4 text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-tight text-[var(--color-text)]">
              حالات قبل وبعد لحقن الشفاه
            </h2>
            <p className="mt-4 leading-8 text-[var(--color-muted)]">
              اسحب الشريط لاستكشاف آلية المقارنة. هذه صورة توضيحية تجريبية فقط، وستُستبدل بصور حقيقية بعد موافقة المرضى.
            </p>
            <Link href="/before-after" className="btn btn-primary focus-ring mt-6">
              عرض كل حالات التجميل
            </Link>
          </div>
        </div>
      </section>

      {/* طريقة حجز الموعد */}
      <section className="section-pad bg-[var(--color-primary-soft)]">
        <div className="container-main">
          <SectionHeading
            eyebrow="كيف تحجز؟"
            title="احجز موعدك في أربع خطوات بسيطة"
            description="تجربة حجز واضحة ومنظمة، من اختيار الموعد إلى مراجعة طلبك قبل الإرسال."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "اختر التاريخ", d: "حدد اليوم والفترة الزمنية الأنسب لك." },
              { n: "02", t: "اختر الخدمة", d: "حدد القسم الطبي والخدمة، وطبيبك المفضل إن أردت." },
              { n: "03", t: "أدخل بياناتك", d: "الاسم ورقم الجوال وأي ملاحظات تودّ إضافتها." },
              { n: "04", t: "راجع وأرسل", d: "تأكد من طلبك ثم أرسله ليتواصل معك فريقنا." },
            ].map((item) => (
              <div key={item.n} className="card-surface p-6">
                <span className="text-3xl font-bold text-[var(--color-primary)]">{item.n}</span>
                <h3 className="mt-3 font-bold text-[var(--color-text)]">{item.t}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{item.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/booking" className="btn btn-primary focus-ring">
              ابدأ الحجز الآن
            </Link>
          </div>
        </div>
      </section>

      {/* موقع المركز على الخريطة */}
      <section className="section-pad bg-white">
        <div className="container-main">
          <SectionHeading eyebrow="موقعنا" title="قريبون منك في شمال الرياض" />
          <div className="mt-12">
            <LocationSection />
          </div>
        </div>
      </section>

      {/* معلومات التواصل */}
      <section className="section-pad bg-[var(--color-surface)]">
        <div className="container-main">
          <SectionHeading eyebrow="تواصل معنا" title="نحن على استعداد للإجابة على استفساراتك" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <a href={`tel:${clinic.phoneE164}`} className="focus-ring card-surface flex flex-col items-center gap-3 p-8 text-center transition-transform hover:-translate-y-1">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary-dark)]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 4 6a2 2 0 0 1 0-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="font-bold text-[var(--color-text)]">اتصل بنا</p>
              <p className="text-sm text-[var(--color-muted)]" dir="ltr">{clinic.phoneDisplay}</p>
            </a>
            <a
              href={whatsappLink("مرحبًا، أرغب بالاستفسار عن خدمات 2Care.")}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring card-surface flex flex-col items-center gap-3 p-8 text-center transition-transform hover:-translate-y-1"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary-dark)]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 3a9 9 0 0 0-7.8 13.4L3 21l4.7-1.2A9 9 0 1 0 12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="font-bold text-[var(--color-text)]">واتساب</p>
              <p className="text-sm text-[var(--color-muted)]" dir="ltr">{clinic.phoneDisplay}</p>
            </a>
            <a
              href={clinic.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring card-surface flex flex-col items-center gap-3 p-8 text-center transition-transform hover:-translate-y-1"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary-dark)]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </span>
              <p className="font-bold text-[var(--color-text)]">إنستغرام</p>
              <p className="text-sm text-[var(--color-muted)]">‎@{clinic.instagramHandle}</p>
            </a>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
