// All information in this file is sourced and verified from 2Care's official
// channels: https://2care.sa/, Google Maps listing, and the @2care_sa
// Instagram account. Do not add unverified claims (ratings, patient counts,
// awards) without a confirmed source.

export const clinic = {
  brandName: "2Care",
  legalName: "مجمع توكير الطبي",
  tagline: "عناية طبية تضع راحتك أولًا",
  shortDescription:
    "مجمع طبي متخصص في طب وتجميل الأسنان والجلدية والتجميل في شمال الرياض، بأيدي أطباء واستشاريين سعوديين ذوي كفاءة عالية.",
  phoneDisplay: "053 522 2751",
  phoneE164: "+966535222751",
  whatsappE164: "+966535222751",
  instagramHandle: "2care_sa",
  instagramUrl: "https://www.instagram.com/2care_sa/",
  websiteUrl: "https://2care.sa/",
  address: {
    line1: "8107 طريق الإمام سعود بن فيصل",
    line2: "حي الصحافة، الرياض 2759",
    country: "المملكة العربية السعودية",
    full: "8107 طريق الإمام سعود بن فيصل، حي الصحافة، الرياض 2759، المملكة العربية السعودية",
  },
  googleMapsUrl: "https://maps.app.goo.gl/m6N714nAwnLQHmyG9",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=%D9%85%D8%AC%D9%85%D8%B9%20%D8%AA%D9%88%D9%83%D9%8A%D8%B1%20%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%2C%208107%20%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%A7%D9%85%D8%A7%D9%85%20%D8%B3%D8%B9%D9%88%D8%AF%20%D8%A8%D9%86%20%D9%81%D9%8A%D8%B5%D9%84%2C%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6&output=embed",
  workingHours: [
    { day: "السبت", hours: "٢:٠٠ م – ١٠:٠٠ م" },
    { day: "الأحد", hours: "٢:٠٠ م – ١٠:٠٠ م" },
    { day: "الإثنين", hours: "٢:٠٠ م – ١٠:٠٠ م" },
    { day: "الثلاثاء", hours: "٢:٠٠ م – ١٠:٠٠ م" },
    { day: "الأربعاء", hours: "٢:٠٠ م – ١٠:٠٠ م" },
    { day: "الخميس", hours: "١:٠٠ م – ٩:٠٠ م" },
    { day: "الجمعة", hours: "مغلق" },
  ],
  values: [
    {
      title: "التميز",
      description: "نسعى دومًا لأعلى مستويات الجودة في كل خدمة نقدمها.",
    },
    {
      title: "الموثوقية",
      description: "نلتزم بمعايير طبية دقيقة يثق بها مرضانا.",
    },
    {
      title: "الاحترام",
      description: "نتعامل مع كل مراجع باهتمام وخصوصية تامة.",
    },
    {
      title: "الوضوح والشفافية",
      description: "نشرح كل خطوة علاجية بوضوح قبل البدء بها.",
    },
    {
      title: "التطور المستمر",
      description: "نواكب أحدث التقنيات الطبية والتجميلية عالميًا.",
    },
  ],
  vision:
    "أن نكون الوجهة الأولى في تقديم الرعاية الطبية المتخصصة في مجالات الأسنان، والجلدية، والتجميل.",
  mission:
    "نسعى لتقديم رعاية طبية وتجميلية متكاملة بمعايير عالمية محورها تجربة المستفيد، تجمع بين الخبرة والابتكار، في بيئة راقية توفر الخصوصية والراحة، وتضمن رضا عملائنا وثقتهم بنا.",
} as const;

export function whatsappLink(message: string) {
  const digits = clinic.whatsappE164.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
