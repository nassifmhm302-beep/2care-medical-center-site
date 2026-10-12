import type { Doctor } from "./types";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Doctor roster and qualifications are taken verbatim (translated/formatted
// only) from the official 2Care website team section. Do not invent names,
// titles, or years of experience.
export const doctors: Doctor[] = [
  {
    slug: "sarah-alsuwaid",
    name: "د. ساره السويد",
    title: "إصلاح وتجميل الأسنان",
    qualifications: "البورد السعودي في إصلاح وتجميل الأسنان",
    bio: "تقدم د. ساره السويد خدمات إصلاح وتجميل الأسنان ضمن فريق قسم الأسنان في 2Care، حاصلة على البورد السعودي في هذا التخصص.",
    image: `${basePath}/images/doctors/sarah-alsuwaid.png`,
    imageAlt: "صورة د. ساره السويد",
    serviceSlugs: [
      "general-dentistry",
      "veneers",
      "teeth-cleaning-whitening",
      "dental-prosthetics",
    ],
  },
  {
    slug: "ali-almutrafi",
    name: "د. علي المطرفي",
    title: "تركيبات وتجميل الأسنان — استشاري",
    qualifications: "الزمالة البريطانية في تركيبات وتجميل الأسنان، استشاري",
    bio: "د. علي المطرفي استشاري حاصل على الزمالة البريطانية في تركيبات وتجميل الأسنان، ويقدم خدمات التركيبات والفينير ضمن فريق 2Care.",
    image: `${basePath}/images/doctors/ali-almutrafi.png`,
    imageAlt: "صورة د. علي المطرفي",
    serviceSlugs: ["dental-prosthetics", "veneers"],
  },
  {
    slug: "rakan-alosaimi",
    name: "د. راكان العصيمي",
    title: "طب أسنان الأسرة",
    qualifications: "البورد السعودي في طب أسنان الأسرة",
    bio: "د. راكان العصيمي حاصل على البورد السعودي في طب أسنان الأسرة، ويُعنى برعاية الأسنان العامة وأسنان الأطفال ضمن فريق 2Care.",
    image: `${basePath}/images/doctors/rakan-alosaimi.png`,
    imageAlt: "صورة د. راكان العصيمي",
    serviceSlugs: ["general-dentistry", "pediatric-dentistry", "root-canal"],
  },
  {
    slug: "zainah-sambawa",
    name: "د. زينة سمباوه",
    title: "جراحة اللثة وزراعة الأسنان — استشاري",
    qualifications: "استشاري، البورد السعودي في جراحة اللثة وزراعة الأسنان",
    bio: "د. زينة سمباوه استشارية حاصلة على البورد السعودي في جراحة اللثة وزراعة الأسنان، وتقدم خدمات الزراعة وجراحة الفم ضمن فريق 2Care.",
    image: `${basePath}/images/doctors/zainah-sambawa.png`,
    imageAlt: "صورة د. زينة سمباوه",
    serviceSlugs: ["dental-implants", "oral-maxillofacial-surgery"],
  },
  {
    slug: "mohammed-alsaleh",
    name: "د. محمد الصالح",
    title: "جراحة الوجه والفكين",
    qualifications: "البورد السعودي في جراحة الوجه والفكين",
    bio: "د. محمد الصالح حاصل على البورد السعودي في جراحة الوجه والفكين، ويقدم خدمات جراحة الفم والفكين ضمن فريق 2Care.",
    image: `${basePath}/images/doctors/mohammed-alsaleh.png`,
    imageAlt: "صورة د. محمد الصالح",
    serviceSlugs: ["oral-maxillofacial-surgery"],
  },
  {
    slug: "hessa-almuhaimeed",
    name: "د. حصة المحيميد",
    title: "تقويم الأسنان وعظام الوجه والفكين — استشاري",
    qualifications:
      "استشاري تقويم الأسنان وعظام الوجه والفكين",
    bio: "د. حصة المحيميد استشارية تقويم الأسنان وعظام الوجه والفكين، وتشرف على خطط تقويم الأسنان ضمن فريق 2Care.",
    image: `${basePath}/images/doctors/hessa-almuhaimeed.png`,
    imageAlt: "صورة د. حصة المحيميد",
    serviceSlugs: ["orthodontics"],
  },
];

export function getDoctorBySlug(slug: string) {
  return doctors.find((doctor) => doctor.slug === slug);
}

export function getDoctorsForService(serviceSlug: string) {
  return doctors.filter((doctor) => doctor.serviceSlugs.includes(serviceSlug));
}
