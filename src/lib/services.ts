import type { Service } from "./types";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Services list reflects the categories published by 2Care across its
// official website and social channels. General, verified medical
// information is used for descriptions — no clinical outcomes or statistics
// are claimed unless published by the clinic itself.
export const services: Service[] = [
  // ---------------------------------------------------------------------
  // Dental department
  // ---------------------------------------------------------------------
  {
    slug: "general-dentistry",
    department: "dental",
    name: "طب الأسنان العام",
    shortDescription:
      "فحص شامل وعناية وقائية وعلاجية لصحة الفم والأسنان لجميع أفراد العائلة.",
    description:
      "تشمل خدمات طب الأسنان العام الفحص الدوري، وتشخيص المشكلات الشائعة مثل التسوس والتهابات اللثة، وعلاج الحشوات، ومتابعة صحة الفم بشكل عام. تُعد نقطة البداية المناسبة لأي زيارة للعيادة، حيث يحدد الطبيب بعدها أنسب خطة علاجية إن وُجدت حاجة لتخصص أدق.",
    expectations: [
      "فحص سريري كامل للأسنان واللثة والفكين.",
      "أشعة تشخيصية عند الحاجة لتحديد المشكلة بدقة.",
      "خطة علاج واضحة مع شرح الخيارات المتاحة.",
      "نصائح للعناية المنزلية والوقاية من المشاكل المستقبلية.",
    ],
    image: `${basePath}/images/services/general-dentistry.jpg`,
    imageAlt: "طبيبة أسنان تفحص أسنان مريضة داخل العيادة",
    doctorSlugs: ["rakan-alosaimi", "sarah-alsuwaid"],
    relatedSlugs: ["teeth-cleaning-whitening", "root-canal"],
  },
  {
    slug: "oral-maxillofacial-surgery",
    department: "dental",
    name: "جراحة الفم والفكين",
    shortDescription:
      "تدخلات جراحية دقيقة لعلاج مشاكل الفم والفكين والأنسجة المحيطة بها.",
    description:
      "تغطي جراحة الفم والفكين خلع الأسنان المعقد والمطمورة، وجراحات اللثة، وعلاج إصابات وتشوهات الفك، ضمن بيئة معقمة ومجهزة بأحدث الأدوات، وتحت إشراف أطباء متخصصين في جراحة الوجه والفكين.",
    expectations: [
      "تقييم دقيق بالأشعة قبل أي إجراء جراحي.",
      "شرح مفصل لخطوات العملية والتعافي المتوقع.",
      "إجراء العملية بتخدير موضعي مناسب لراحة المريض.",
      "متابعة ما بعد الجراحة لضمان التعافي السليم.",
    ],
    image: `${basePath}/images/services/oral-surgery.jpg`,
    imageAlt: "طبيب يجري فحصًا دقيقًا لفم المريض استعدادًا لإجراء جراحي",
    doctorSlugs: ["zainah-sambawa", "mohammed-alsaleh"],
    relatedSlugs: ["dental-implants", "root-canal"],
  },
  {
    slug: "root-canal",
    department: "dental",
    name: "علاج الجذور والعصاب",
    shortDescription:
      "علاج عصب السن لإنقاذه من الخلع والحفاظ عليه سليمًا وفعالًا.",
    description:
      "يُستخدم علاج الجذور عند وصول الالتهاب أو التسوس إلى عصب السن، إذ تتم إزالة الأنسجة المتضررة وتنظيف قنوات الجذر وتعقيمها ثم حشوها، للحفاظ على السن الطبيعي وتفادي خلعه.",
    expectations: [
      "تخدير موضعي لضمان راحة تامة أثناء العلاج.",
      "تنظيف وتعقيم قنوات الجذر بدقة.",
      "حشو قناة الجذر وإغلاقها بمواد طبية متخصصة.",
      "تركيب تاج للسن في حال الحاجة لحمايته بعد العلاج.",
    ],
    image: `${basePath}/images/services/root-canal.jpg`,
    imageAlt: "طبيب أسنان يستخدم أدوات دقيقة أثناء علاج جذور الأسنان",
    doctorSlugs: ["rakan-alosaimi"],
    relatedSlugs: ["general-dentistry", "dental-prosthetics"],
  },
  {
    slug: "dental-implants",
    department: "dental",
    name: "زراعة الأسنان",
    shortDescription:
      "حل دائم لتعويض الأسنان المفقودة بمظهر ووظيفة طبيعية.",
    description:
      "تعتمد زراعة الأسنان على تثبيت جذر صناعي في عظم الفك ليحل محل جذر السن المفقود، ثم تركيب تاج صناعي فوقه. يحتاج الإجراء إلى تقييم دقيق لكثافة العظم وصحة اللثة قبل اتخاذ القرار المناسب.",
    expectations: [
      "تقييم شامل لعظم الفك واللثة بالأشعة.",
      "وضع خطة زراعة مخصصة لحالة كل مريض.",
      "إجراء الزراعة ضمن بيئة معقمة بالكامل.",
      "متابعة مراحل الالتئام حتى تركيب التعويض النهائي.",
    ],
    image: `${basePath}/images/services/dental-implants.jpg`,
    imageAlt: "نموذج توضيحي لزراعة الأسنان على خلفية زرقاء",
    doctorSlugs: ["zainah-sambawa"],
    relatedSlugs: ["dental-prosthetics", "oral-maxillofacial-surgery"],
  },
  {
    slug: "dental-prosthetics",
    department: "dental",
    name: "التعويضات السنية والتركيبات",
    shortDescription:
      "تركيبات ثابتة أو متحركة لتعويض الأسنان المفقودة واستعادة الابتسامة.",
    description:
      "تشمل التعويضات السنية التيجان والجسور وأطقم الأسنان المتحركة والثابتة، وتُصمم كل تركيبة بما يتناسب مع شكل الفم ولون الأسنان الطبيعية لتبدو منسجمة وتؤدي وظيفتها بكفاءة في المضغ والنطق.",
    expectations: [
      "أخذ مقاسات وطبعات دقيقة للفم.",
      "اختيار نوع التركيبة الأنسب لحالتك.",
      "تجربة التركيبة وضبطها قبل التسليم النهائي.",
      "إرشادات للعناية بالتركيبة لإطالة عمرها.",
    ],
    image: `${basePath}/images/services/dental-prosthetics.jpg`,
    imageAlt: "نموذج تركيبات أسنان بيضاء على سطح طبي",
    doctorSlugs: ["ali-almutrafi", "sarah-alsuwaid"],
    relatedSlugs: ["veneers", "dental-implants"],
  },
  {
    slug: "teeth-cleaning-whitening",
    department: "dental",
    name: "تنظيف وتبييض الأسنان",
    shortDescription:
      "إزالة الجير والتصبغات وتفتيح لون الأسنان بطرق آمنة ومعتمدة.",
    description:
      "تنظيف الأسنان بالموجات فوق الصوتية يزيل طبقة الجير والتصبغات السطحية، بينما يعمل التبييض على تفتيح درجة لون المينا باستخدام مواد تبييض طبية تحت إشراف الطبيب لضمان نتيجة آمنة ومتوازنة.",
    expectations: [
      "فحص الأسنان واللثة قبل بدء الجلسة.",
      "تنظيف احترافي لإزالة الجير والبقع السطحية.",
      "جلسة تبييض باستخدام مواد طبية معتمدة.",
      "نصائح للحفاظ على نتيجة التبييض لأطول فترة.",
    ],
    image: `${basePath}/images/services/teeth-cleaning.jpg`,
    imageAlt: "طبيب يفحص أسنان مريض باستخدام أدوات تنظيف الأسنان",
    doctorSlugs: ["sarah-alsuwaid"],
    relatedSlugs: ["veneers", "general-dentistry"],
  },
  {
    slug: "veneers",
    department: "dental",
    name: "الفينير",
    shortDescription:
      "قشور تجميلية رقيقة لتحسين شكل ولون ومحاذاة الأسنان الأمامية.",
    description:
      "الفينير عبارة عن قشرة رقيقة من الخزف أو المواد المركبة تُلصق على السطح الأمامي للسن لتحسين مظهره من حيث الشكل واللون والتناسق، ويُستخدم غالبًا ضمن حالات تجميل الابتسامة الشاملة.",
    expectations: [
      "استشارة لتحديد النتيجة الجمالية المطلوبة.",
      "تجهيز بسيط لسطح السن قبل التركيب.",
      "أخذ مقاس دقيق لتصنيع الفينير المناسب.",
      "تركيب نهائي مع ضبط اللون والشكل بدقة.",
    ],
    image: `${basePath}/images/services/veneers.jpg`,
    imageAlt: "امرأة تبتسم بأسنان بيضاء ومنتظمة",
    doctorSlugs: ["ali-almutrafi", "sarah-alsuwaid"],
    relatedSlugs: ["teeth-cleaning-whitening", "dental-prosthetics"],
  },
  {
    slug: "pediatric-dentistry",
    department: "dental",
    name: "طب أسنان الأطفال",
    shortDescription:
      "عناية متخصصة بأسنان الأطفال في بيئة مريحة وغير مقلقة.",
    description:
      "يهتم قسم طب أسنان الأطفال بمتابعة نمو الأسنان اللبنية والدائمة، والوقاية من التسوس المبكر، وعلاج المشاكل الشائعة لدى الأطفال بأسلوب هادئ يبني ثقة الطفل بزيارة طبيب الأسنان.",
    expectations: [
      "استقبال ودود يخفف من قلق الطفل قبل الفحص.",
      "فحص شامل لنمو الأسنان اللبنية والدائمة.",
      "علاجات وقائية مثل تنظيف وتغليف الأسنان.",
      "إرشاد الأهل حول العناية اليومية بأسنان الطفل.",
    ],
    image: `${basePath}/images/services/pediatric-dentistry.jpg`,
    imageAlt: "طفلة تبتسم بثقة أثناء جلوسها على كرسي عيادة الأسنان",
    doctorSlugs: ["rakan-alosaimi"],
    relatedSlugs: ["general-dentistry", "orthodontics"],
  },
  {
    slug: "orthodontics",
    department: "dental",
    name: "تقويم الأسنان",
    shortDescription:
      "تصحيح اصطفاف الأسنان والفكين بتقويم ثابت أو شفاف.",
    description:
      "يعالج تقويم الأسنان مشاكل ازدحام الأسنان وسوء إطباق الفكين باستخدام تقويم معدني ثابت أو تقويم شفاف قابل للإزالة، وفق خطة علاجية تُحدد بعد دراسة دقيقة لحالة الفك والأسنان.",
    expectations: [
      "دراسة شاملة لحالة الإطباق والأسنان بالأشعة والطبعات.",
      "اختيار نوع التقويم الأنسب لحالتك وأسلوب حياتك.",
      "متابعة دورية لضبط التقويم طوال فترة العلاج.",
      "مرحلة تثبيت بعد انتهاء العلاج للحفاظ على النتيجة.",
    ],
    image: `${basePath}/images/services/orthodontics.jpg`,
    imageAlt: "امرأة تحمل تقويم أسنان شفاف وتبتسم",
    doctorSlugs: ["hessa-almuhaimeed"],
    relatedSlugs: ["pediatric-dentistry", "veneers"],
  },

  // ---------------------------------------------------------------------
  // Cosmetic & dermatology department
  // ---------------------------------------------------------------------
  {
    slug: "dermapen",
    department: "cosmetic",
    name: "ديرما بن",
    shortDescription:
      "تحفيز تجدد الجلد عبر الوخز الدقيق لتحسين ملمس ونضارة البشرة.",
    description:
      "جهاز ديرما بن يُحدث وخزات دقيقة جدًا في الطبقة السطحية للجلد لتحفيز إنتاج الكولاجين الطبيعي، ويُستخدم لتحسين ملمس البشرة ومظهر الندبات الخفيفة والمسام الواسعة ضمن جلسات متابَعة من قبل مختص.",
    expectations: [
      "تنظيف البشرة وتجهيزها قبل الجلسة.",
      "تطبيق تخدير موضعي خفيف عند الحاجة.",
      "جلسة وخز دقيق بجهاز معقم مخصص لكل مريض.",
      "إرشادات للعناية بالبشرة بعد الجلسة مباشرة.",
    ],
    image: `${basePath}/images/services/dermapen.jpg`,
    imageAlt: "أخصائية تجري جلسة عناية بالبشرة لمريضة",
    doctorSlugs: [],
    relatedSlugs: ["fractional-laser", "deep-skin-cleansing"],
  },
  {
    slug: "fractional-laser",
    department: "cosmetic",
    name: "فراكشنال ليزر",
    shortDescription:
      "تقنية ليزر متقدمة لتجديد سطح البشرة وتحسين توحيد لونها.",
    description:
      "يعمل الفراكشنال ليزر على جزء دقيق من الجلد في كل جلسة لتحفيز تجدد الخلايا، ويُستخدم لتحسين آثار حب الشباب والتجاعيد السطحية وتوحيد لون البشرة، ضمن بروتوكول علاجي يحدده الطبيب المختص.",
    expectations: [
      "استشارة لتحديد نوع البشرة ومدى ملاءمة الجلسة.",
      "تبريد وتجهيز البشرة قبل تطبيق الليزر.",
      "جلسة ليزر مضبوطة الشدة حسب حالة الجلد.",
      "احمرار بسيط متوقع يزول خلال أيام قليلة.",
    ],
    image: `${basePath}/images/services/fractional-laser.jpg`,
    imageAlt: "أخصائية تقوم بإجراء علاج ليزر لبشرة الوجه",
    doctorSlugs: [],
    relatedSlugs: ["dermapen", "chemical-peeling"],
  },
  {
    slug: "botox-filler",
    department: "cosmetic",
    name: "حقن البوتوكس والفيلر",
    shortDescription:
      "حقن تجميلية لتنعيم خطوط التعبير وإعادة الحيوية لملامح الوجه.",
    description:
      "يُستخدم البوتوكس لإرخاء العضلات المسببة لخطوط التعبير، بينما يُستخدم الفيلر لإعادة الحجم والامتلاء لمناطق معينة في الوجه، وتُجرى الحقن بعد تقييم دقيق للملامح لتحقيق نتيجة طبيعية ومتوازنة.",
    expectations: [
      "استشارة لتحديد المناطق والمادة المناسبة.",
      "تعقيم البشرة وتطبيق تخدير موضعي عند الحاجة.",
      "حقن دقيق بكميات مدروسة من قبل المختص.",
      "متابعة قصيرة للاطمئنان على النتيجة.",
    ],
    image: `${basePath}/images/services/botox-filler.jpg`,
    imageAlt: "طبيبة تجري حقنة تجميلية لمريضة في منطقة الوجه",
    doctorSlugs: [],
    relatedSlugs: ["mesotherapy", "fractional-laser"],
  },
  {
    slug: "chemical-peeling",
    department: "cosmetic",
    name: "التقشير البارد والكيميائي",
    shortDescription:
      "تقشير طبي لتجديد خلايا البشرة وتفتيح التصبغات السطحية.",
    description:
      "يعتمد التقشير الكيميائي على محاليل طبية مركزة تُزيل الطبقات السطحية المتضررة من الجلد، لتحفيز نمو خلايا جديدة أكثر نضارة، ويُستخدم لعلاج التصبغات وآثار حب الشباب الخفيفة وتحسين ملمس البشرة.",
    expectations: [
      "تحديد نوع ودرجة التقشير المناسبة لبشرتك.",
      "تطبيق محلول التقشير بدقة من قبل المختص.",
      "فترة تعافٍ قصيرة قد تتضمن احمرارًا أو تقشرًا خفيفًا.",
      "إرشادات للحماية من الشمس بعد الجلسة.",
    ],
    image: `${basePath}/images/services/chemical-peeling.jpg`,
    imageAlt: "أخصائية تطبق علاج تقشير على وجه مريضة",
    doctorSlugs: [],
    relatedSlugs: ["deep-skin-cleansing", "dermapen"],
  },
  {
    slug: "mesotherapy",
    department: "cosmetic",
    name: "الميزوثيرابي",
    shortDescription:
      "حقن دقيقة من الفيتامينات والمغذيات لترطيب البشرة وتنشيطها.",
    description:
      "يعتمد الميزوثيرابي على حقن كميات دقيقة من الفيتامينات والمعادن ومضادات الأكسدة في الطبقات السطحية من الجلد، بهدف تحسين ترطيب البشرة ونضارتها ضمن جلسات دورية يحددها المختص.",
    expectations: [
      "تحديد تركيبة المغذيات المناسبة لبشرتك.",
      "تعقيم البشرة قبل الحقن.",
      "جلسة حقن سطحية دقيقة وسريعة نسبيًا.",
      "نتائج تدريجية تظهر مع تكرار الجلسات.",
    ],
    image: `${basePath}/images/services/mesotherapy.jpg`,
    imageAlt: "أخصائية تجري حقن ميزوثيرابي لبشرة الوجه",
    doctorSlugs: [],
    relatedSlugs: ["botox-filler", "deep-skin-cleansing"],
  },
  {
    slug: "laser-hair-removal",
    department: "cosmetic",
    name: "إزالة الشعر بالليزر",
    shortDescription:
      "تقنية آمنة للحد من نمو الشعر غير المرغوب فيه على المدى الطويل.",
    description:
      "تستهدف أشعة الليزر بصيلات الشعر لتقليل كثافة ونمو الشعر تدريجيًا بعد عدد من الجلسات المتتالية، وتُضبط شدة الجهاز حسب لون ونوع البشرة والشعر لضمان نتيجة آمنة وفعالة.",
    expectations: [
      "تقييم نوع البشرة والشعر قبل بدء الجلسات.",
      "حلاقة المنطقة المستهدفة قبل الجلسة.",
      "جلسة ليزر مع نظارات واقية للعينين.",
      "تكرار الجلسات على فترات محددة لتحقيق أفضل نتيجة.",
    ],
    image: `${basePath}/images/services/laser-hair-removal.jpg`,
    imageAlt: "أخصائية تقوم بجلسة إزالة شعر بالليزر",
    doctorSlugs: [],
    relatedSlugs: ["deep-skin-cleansing", "fractional-laser"],
  },
  {
    slug: "prp-plasma",
    department: "cosmetic",
    name: "بلازما الصفائح الدموية (PRP)",
    shortDescription:
      "تقنية تعتمد على مكونات الدم الذاتية لتحفيز تجدد البشرة وفروة الرأس.",
    description:
      "يتم فصل البلازما الغنية بالصفائح الدموية من عينة دم المريض نفسه، ثم حقنها في المنطقة المستهدفة لتحفيز إنتاج الكولاجين وتحسين صحة البشرة أو تنشيط بصيلات الشعر في حالات تساقط الشعر.",
    expectations: [
      "سحب عينة دم بسيطة من المريض.",
      "فصل البلازما باستخدام جهاز طرد مركزي متخصص.",
      "حقن البلازما في المنطقة المستهدفة بدقة.",
      "جلسات متابعة دورية حسب خطة العلاج.",
    ],
    image: `${basePath}/images/services/prp-plasma.jpg`,
    imageAlt: "أخصائية تجري إجراء تجميليًا دقيقًا لبشرة مريضة",
    doctorSlugs: [],
    relatedSlugs: ["hair-loss-treatment", "mesotherapy"],
  },
  {
    slug: "hair-loss-treatment",
    department: "cosmetic",
    name: "علاجات تساقط الشعر",
    shortDescription:
      "بروتوكولات علاجية متخصصة لتقليل تساقط الشعر وتحفيز نموه.",
    description:
      "تشمل علاجات تساقط الشعر تقييم أسباب التساقط ووضع خطة علاجية قد تتضمن حقن البلازما أو الميزوثيرابي أو بروتوكولات متخصصة أخرى، بما يتناسب مع حالة فروة الرأس وطبيعة التساقط لدى كل مريض.",
    expectations: [
      "استشارة لتحديد سبب ونوع تساقط الشعر.",
      "اقتراح خطة علاجية مناسبة لحالتك.",
      "جلسات علاجية دورية حسب البروتوكول المحدد.",
      "متابعة النتيجة وتعديل الخطة عند الحاجة.",
    ],
    image: `${basePath}/images/services/hair-loss.jpg`,
    imageAlt: "أخصائية تفحص فروة رأس مريضة ضمن استشارة علاج تساقط الشعر",
    doctorSlugs: [],
    relatedSlugs: ["prp-plasma", "mesotherapy"],
  },
  {
    slug: "deep-skin-cleansing",
    department: "cosmetic",
    name: "تنظيف البشرة العميق",
    shortDescription:
      "تنظيف احترافي يزيل الشوائب والرؤوس السوداء ويمنح البشرة نضارة فورية.",
    description:
      "يشمل تنظيف البشرة العميق تفتيح المسام وإزالة الرؤوس السوداء والشوائب المتراكمة باستخدام أجهزة وتقنيات متخصصة، إلى جانب ترطيب وتهدئة البشرة في ختام الجلسة لمظهر نظيف ومتجدد.",
    expectations: [
      "تحليل نوع البشرة قبل بدء الجلسة.",
      "تفتيح المسام وإزالة الشوائب بأجهزة متخصصة.",
      "تهدئة وترطيب البشرة في نهاية الجلسة.",
      "نصائح للعناية اليومية بالبشرة بعد التنظيف.",
    ],
    image: `${basePath}/images/services/deep-cleansing.jpg`,
    imageAlt: "أخصائية تجري تنظيف بشرة عميق لمريضة",
    doctorSlugs: [],
    relatedSlugs: ["chemical-peeling", "dermapen"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServicesByDepartment(department: Service["department"]) {
  return services.filter((service) => service.department === department);
}

export const departmentLabels: Record<Service["department"], string> = {
  dental: "قسم الأسنان",
  cosmetic: "قسم الجلدية والتجميل",
};
