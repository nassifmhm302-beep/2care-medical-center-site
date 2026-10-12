import type { Metadata } from "next";
import { clinic } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description: "تعرف على كيفية جمع واستخدام وحماية بياناتك عند استخدام موقع واستمارة حجز مركز 2Care.",
};

const sections = [
  {
    title: "١. البيانات التي نجمعها",
    body: "عند استخدامك لنموذج حجز الموعد، نقوم بجمع الاسم الكامل، رقم الجوال، البريد الإلكتروني (إن تم إدخاله)، القسم والخدمة الطبية المطلوبة، الطبيب المفضل (إن وُجد)، التاريخ والوقت المفضلين، وأي ملاحظات إضافية تقوم بإضافتها طواعية.",
  },
  {
    title: "٢. الغرض من جمع البيانات",
    body: "تُستخدم هذه البيانات حصرًا للتواصل معك لتأكيد موعدك أو الاستفسار عن طلبك، ولا تُستخدم لأي غرض تسويقي دون موافقتك الصريحة.",
  },
  {
    title: "٣. تخزين البيانات وحمايتها",
    body: "يتم تخزين بيانات طلبات الحجز في قاعدة بيانات آمنة يُدار الوصول إليها من قبل فريق المركز المخوّل فقط. لا تُعرض بيانات المرضى في عناوين الروابط العامة للموقع، ولا تتم مشاركتها مع أي طرف ثالث لأغراض تجارية.",
  },
  {
    title: "٤. مدة الاحتفاظ بالبيانات",
    body: "يحتفظ المركز ببيانات طلبات الحجز للمدة اللازمة لمتابعة الطلب وتقديم الخدمة الطبية، وفق الأنظمة المعمول بها في المملكة العربية السعودية.",
  },
  {
    title: "٥. حقوقك",
    body: "يحق لك في أي وقت طلب الاطلاع على بياناتك المخزنة لدينا أو تصحيحها أو طلب حذفها، وذلك بالتواصل المباشر مع المركز عبر وسائل التواصل الموضحة في صفحة اتصل بنا.",
  },
  {
    title: "٦. ملفات تعريف الارتباط",
    body: "قد يستخدم الموقع ملفات تعريف ارتباط تقنية أساسية لضمان عمل الموقع بالشكل الصحيح، ولا تُستخدم لأغراض تتبع إعلاني.",
  },
  {
    title: "٧. التواصل بخصوص هذه السياسة",
    body: `لأي استفسار يخص سياسة الخصوصية أو بياناتك الشخصية، يمكنك التواصل معنا على ${clinic.phoneDisplay} أو عبر صفحة اتصل بنا.`,
  },
];

export default function PrivacyPage() {
  return (
    <section className="section-pad bg-white">
      <div className="container-main max-w-3xl">
        <span className="eyebrow">سياسة الخصوصية</span>
        <h1 className="mt-5 text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-tight text-[var(--color-text)]">
          سياسة الخصوصية وحماية البيانات
        </h1>
        <p className="mt-5 leading-8 text-[var(--color-muted)]">
          يحرص مركز 2Care (مجمع توكير الطبي) على خصوصية زوار موقعه ومراجعيه. توضح هذه السياسة طبيعة البيانات
          التي نجمعها عبر نموذج حجز المواعيد وكيفية استخدامها وحمايتها.
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-bold text-[var(--color-primary-dark)]">{section.title}</h2>
              <p className="mt-2 leading-8 text-[var(--color-muted)]">{section.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-[var(--color-muted)]">
          آخر تحديث لهذه السياسة: {new Date().toLocaleDateString("ar-SA", { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>
    </section>
  );
}
