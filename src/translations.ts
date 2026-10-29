import { ServiceItem, ReviewItem } from './types';

export const OFFICIAL_DATA = {
  nameAr: 'المحامي والموثق أ. مساعد سعود القرشي',
  nameEn: 'Adv. & Notary Musaid Saud Al-Qurashi',
  firmAr: 'مساعد سعود القرشي للمحاماة والاستشارات القانونية',
  firmEn: 'Musaid Saud Al-Qurashi For Law & Legal Consultations',
  degreeAr: 'ماجستير في القانون (LL.M.) من الولايات المتحدة الأمريكية',
  degreeEn: 'Master of Laws (LL.M.) - United States of America',
  licensesAr: 'مرخص رسمياً من وزارة العدل برخصتي (محامٍ ممارس) و(موثق معتمد)',
  licensesEn: 'Officially Licensed by the Ministry of Justice as Practicing Attorney & Certified Notary',
  phone: '+966543505970',
  phoneRaw: '966543505970',
  addressAr: 'المملكة العربية السعودية، مكة المكرمة (الرمز البريدي 24268)، حي الشرائع، شارع المهندس عمر قاضي',
  addressEn: 'Omar Qadi St, Al-Sharaya\'a District, Makkah 24268, Kingdom of Saudi Arabia',
  plusCode: 'CXV8+JP3, Makkah',
  postalCode: '24268',
  lat: 21.4440127,
  lng: 39.966812,
  googleMapsUrl: 'https://www.google.com/maps/place/%D9%85%D9%83%D8%AA%D8%A8+%D8%A7%D9%84%D9%85%D8%AD%D8%A7%D9%85%D9%8A+%D9%88%D8%A7%D9%84%D9%85%D9%88%D8%AB%D9%82+%D9%85%D8%B3%D8%A7%D8%B9%D8%AF+%D8%B3%D8%B9%D9%88%D8%AF+%D8%A7%D9%84%D9%82%D8%B1%D8%B4%D9%8A%E2%80%AD/data=!4m7!3m6!1s0x15c2010066b40dd1:0x2386d159dd57d74a!8m2!3d21.4440127!4d39.966812!16s%2Fg%2F11wnp2qrlb!19sChIJ0Q20ZgABwhURStdX3VnRhiM',
};

export const SERVICES_LIST: ServiceItem[] = [
  // 1. Notary Services (خدمات التوثيق المعتمد - إنجاز فوري)
  {
    id: 'notary-poa',
    category: 'notary',
    isImmediate: true,
    titleAr: 'إصدار وفسخ الوكالات الشرعية',
    titleEn: 'Power of Attorney Issuance & Revocation',
    descAr: 'توثيق فوري وإلكتروني معتمد من وزارة العدل للوكالات الشرعية الفردية والتجارية مع إمكانية التخصيص أو الإلغاء الفوري.',
    descEn: 'Instant certified notarization for personal and commercial powers of attorney via the Ministry of Justice portal.',
    detailsAr: [
      'وكالات الأفراد والورثة ومراجعة الدوائر الحكومية',
      'وكالات الشركات والمؤسسات والشركاء والمفوضين',
      'فسخ الوكالات السابقة وإشعار الأطراف نظاماً'
    ],
    detailsEn: [
      'Individual, inheritance, and governmental agency powers of attorney',
      'Corporate powers of attorney, board delegates, and partners',
      'Revocation of existing mandates and statutory notifications'
    ],
    durationAr: 'إنجاز فوري خلال دقائق',
    durationEn: 'Instant completion within minutes'
  },
  {
    id: 'notary-contracts-debts',
    category: 'notary',
    isImmediate: true,
    titleAr: 'توثيق العقود وإقرارات الديون والكفالات',
    titleEn: 'Contracts, Debt Acknowledgements & Guarantees',
    descAr: 'إثبات الحقوق وتوثيق الالتزامات المالية كسند تنفيذي معتمد يتمتع بالحجية القضائية الفورية أمام محاكم التنفيذ.',
    descEn: 'Formal notarization of financial obligations and debt deeds as enforceable executive instruments before enforcement courts.',
    detailsAr: [
      'توثيق إقرارات المديونية والمبالغ المالية كسندات تنفيذية',
      'توثيق عقود الكفالة الحضورية والغارمة',
      'توثيق عقود البيع والاتفاقيات الملزمة'
    ],
    detailsEn: [
      'Notarization of debt statements as directly enforceable titles',
      'Personal and joint commercial guarantee agreements',
      'Binding commercial sales and formal commitment deeds'
    ],
    durationAr: 'إنجاز فوري ومعتمد',
    durationEn: 'Immediate certified turnaround'
  },
  {
    id: 'notary-real-estate',
    category: 'notary',
    isImmediate: true,
    titleAr: 'الإفراغات العقارية والرهون',
    titleEn: 'Real Estate Conveyance & Mortgages',
    descAr: 'توثيق نقل ملكية العقارات السكنية والتجارية وفك الرهون بالتعاون المباشر مع البورصة العقارية والأنظمة العدلية.',
    descEn: 'Official real estate conveyance, property title transfers, and mortgage registrations compliant with the Real Estate Registry.',
    detailsAr: [
      'إفراغ العقارات والأراضي السكنية والتجارية',
      'توثيق عقود الإيجار والرهون العقارية وفكها',
      'التحقق من صكوك الملكية وتوافقها مع منصة إحكام والبورصة العقارية'
    ],
    detailsEn: [
      'Conveyance of residential and commercial parcels and buildings',
      'Registration and release of real estate mortgages and security interests',
      'Title deed verification and compliance checks'
    ],
    durationAr: 'توثيق معتمد وسريع',
    durationEn: 'Expedited verified conveyance'
  },
  {
    id: 'notary-corporate-formation',
    category: 'notary',
    isImmediate: true,
    titleAr: 'توثيق عقود تأسيس الشركات وقرارات الشركاء',
    titleEn: 'Corporate Incorporation & Partner Resolutions',
    descAr: 'توثيق عقود تأسيس الشركات بكافة أشكالها النظامية وتعديلاتها وقرارات الجمعيات العمومية عبر شركة مُتم.',
    descEn: 'Notarization of corporate formation contracts, articles of association, capital adjustments, and partner resolutions.',
    detailsAr: [
      'توثيق عقود تأسيس الشركات ذات المسؤولية المحدودة والمساهمة',
      'توثيق ملاحق تعديل عقود التأسيس وتعديل الحصص ورأس المال',
      'توثيق قرارات تعيين وعزل المديرين وتعديل الأنشطة التجارية'
    ],
    detailsEn: [
      'Incorporation of LLCs, simplified joint-stock companies, and partnerships',
      'Articles of association amendments and capital restructuring deeds',
      'Appointment of managers and modification of commercial bylaws'
    ],
    durationAr: 'إنجاز مهني متخصص',
    durationEn: 'Specialized corporate notary turnaround'
  },

  // 2. Specialized Legal Consultations (الاستشارات القانونية المتخصصة)
  {
    id: 'consult-business',
    category: 'consultation',
    titleAr: 'الاستشارات القانونية المتخصصة للأفراد والمنشآت',
    titleEn: 'Specialized Legal Advisory for Individuals & Enterprises',
    descAr: 'تقديم الرأي النظامي الدقيق والمبني على خبرة قانونية أكاديمية دولية ومحلية لضمان سلامة القرارات الاستثمارية والشخصية.',
    descEn: 'Sound, authoritative legal counsel rooted in US-trained methodology and extensive Saudi regulatory mastery.',
    detailsAr: [
      'استشارات نظام الشركات، نظام المعاملات المدنية، ونظام العمل',
      'حماية حقوق المستثمرين ورواد الأعمال وتفادي المخاطر التشغيلية',
      'تقديم الرأي القانوني المكتوب في النزاعات المعقدة'
    ],
    detailsEn: [
      'Corporate law, Civil Transactions Law, and Labor Law consultations',
      'Investor protection, risk mitigation, and corporate compliance',
      'Formal written legal opinions for complex civil & commercial disputes'
    ],
    durationAr: 'جلسة استشارية حضورية أو عن بعد',
    durationEn: 'In-office or remote executive consultation'
  },
  {
    id: 'consult-case-study',
    category: 'consultation',
    titleAr: 'دراسة القضايا وتقييم الموقف القانوني',
    titleEn: 'Case Feasibility Study & Legal Position Assessment',
    descAr: 'فحص شامل لمستندات النزاع قبل اللجوء إلى القضاء، وتقدير نسبة النجاح وتقديم خيارات التسوية الودية البديلة.',
    descEn: 'Rigorous pre-litigation document audit, evidence evaluation, probability assessment, and alternative dispute resolution.',
    detailsAr: [
      'تحليل الوقائع والأدلة والمستندات وفق الأنظمة السعودية السارية',
      'تحديد المسار القضائي الأنسب وتفادي المصاريف غير المجدية',
      'إعداد تقرير قانوني شامل يوضح نقاط القوة والضعف والفرص النظامية'
    ],
    detailsEn: [
      'Comprehensive factual and evidentiary audit under Saudi law',
      'Optimal judicial pathway recommendation avoiding needless costs',
      'Detailed legal assessment report outlining procedural strengths and risks'
    ],
    durationAr: 'دراسة متعمقة خلال 48 ساعة',
    durationEn: 'In-depth audit within 48 hours'
  },
  {
    id: 'consult-contract-drafting',
    category: 'consultation',
    titleAr: 'صياغة ومراجعة العقود (عربي / إنجليزي)',
    titleEn: 'Bilingual Contract Drafting & Review (Arabic / English)',
    descAr: 'صياغة احترافية محكمة ثنائية اللغة للعقود والاتفاقيات بالاستفادة من التأهيل الأكاديمي الأمريكي في القانون التجاري.',
    descEn: 'Bilingual contract architecture tailored for international transactions, joint ventures, and domestic business agreements.',
    detailsAr: [
      'صياغة عقود الشراكة، الاستثمار، التوزيع، والامتياز التجاري (Franchise)',
      'مراجعة بنود التحكيم والاختصاص القضائي والمسؤولية التعاقدية',
      'صياغة الاتفاقيات باللغتين العربية والإنجليزية بدقة قانونية معتمدة'
    ],
    detailsEn: [
      'Joint ventures, commercial partnerships, distribution, and franchise agreements',
      'Arbitration clauses, governing law, and contractual liability frameworks',
      'Certified bilingual contract drafting preserving full legal force in both languages'
    ],
    durationAr: 'صياغة متقنة وفق متطلباتك',
    durationEn: 'Precision drafting tailored to needs'
  },

  // 3. General Litigation & Representation (القضايا العامة والتمثيل القضائي)
  {
    id: 'litigation-representation',
    category: 'litigation',
    titleAr: 'الترافع والتمثيل أمام كافة المحاكم واللجان القضائية',
    titleEn: 'Judicial Representation & Courtroom Advocacy',
    descAr: 'تمثيل قضائي رصين ومحترف أمام المحاكم العامة، التجارية، العمالية، ومحاكم الاستئناف واللجان شبه القضائية.',
    descEn: 'Tenacious and articulate litigation advocacy before General, Commercial, Labor, Appellate courts, and quasi-judicial committees.',
    detailsAr: [
      'المحاكم العامة والتجارية والعمالية ومحاكم الأحوال الشخصية',
      'لجان الفصل في منازعات الأوراق المالية والتأمين واللجان الضريبية',
      'إدارة الجلسات القضائية ومرافعة قانونية قائمة على الحجج والأسانيد الشرعية والنظامية'
    ],
    detailsEn: [
      'General, Commercial, Labor, and Family Courts advocacy',
      'Capital market, insurance disputes, and tax appeal tribunals',
      'Strategic hearing management with rigorous evidentiary brief submissions'
    ],
    durationAr: 'تمثيل مستمر حتى اكتساب الحكم القطعي',
    durationEn: 'Full representation through final verdict'
  },
  {
    id: 'litigation-memos',
    category: 'litigation',
    titleAr: 'إعداد اللوائح الجوابية ومذكرات الاستئناف والاعتراض',
    titleEn: 'Pleadings, Rebuttals, and Appellate Petitions',
    descAr: 'تحرير قانوني محكم يبرز الحجج النظامية والشرعية بدقة فائقة أمام محاكم الدرجة الأولى والاستئناف والمحكمة العليا.',
    descEn: 'Crafting persuasive legal memos, statements of defense, objections, and supreme court review petitions.',
    detailsAr: [
      'تحرير لوائح الدعوى والمذكرات الجوابية المفصلة',
      'صياغة لوائح الاعتراض والاستئناف خلال المدد النظامية المحددة',
      'تقديم التماسات إعادة النظر والطعن أمام المحكمة العليا'
    ],
    detailsEn: [
      'Comprehensive defense statements and initial claims',
      'Timely appellate objection briefs complying with statutory deadlines',
      'Petitions for reconsideration and Supreme Court challenges'
    ],
    durationAr: 'إعداد دقيق ضمن المهل النظامية',
    durationEn: 'Meticulous preparation within statutory timelines'
  },

  // 4. Corporate & Retainers (خدمات الشركات عبر شركة مُتم)
  {
    id: 'corporate-retainer',
    category: 'corporate',
    titleAr: 'الإسناد القانوني للشركات عبر شركة مُتم للمحاماة',
    titleEn: 'Corporate Legal Retainers via Mutimm Law Firm',
    descAr: 'عقود احتضان ورعاية قانونية سنوية للمنشآت والمؤسسات تغطي كافة الاحتياجات النظامية اليومية والاستراتيجية.',
    descEn: 'Comprehensive annual legal retainer packages covering operational compliance, contracts, employment, and risk mitigation.',
    detailsAr: [
      'مستشار قانوني دائم لمنشأتك لمراجعة كافة القرارات والاتفاقيات',
      'تسوية النزاعات العمالية والتجارية قبل تفاقمها قضائياً',
      'تحديث اللوائح الداخلية بما يتطابق مع مستجدات وزارة الموارد البشرية والأنظمة العدلية'
    ],
    detailsEn: [
      'Dedicated external legal counsel reviewing agreements and corporate governance',
      'Proactive settlement of labor and vendor friction points',
      'Internal policy adaptation in line with Saudi Vision 2030 reforms'
    ],
    durationAr: 'عقود سنوية مستمرة',
    durationEn: 'Continuous annual corporate retainer'
  }
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-nemary',
    authorAr: 'J .Nemary',
    authorEn: 'J .Nemary',
    rating: 5,
    dateAr: 'مراجعة موثقة على خرائط جوجل',
    dateEn: 'Verified Google Maps Review',
    commentAr: 'ماشاء الله تبارك الله مكتب في منتهى الدقه و احترام المواعيد و المصداقية في اعطاء المعلومة اعطيته قضيتي و انا مطمنه الصراحة و محامي كفو و ينشد به الظهر معاهم خليك مطمن الله يعطيهم العافيه',
    commentEn: 'Masha\'Allah, tabarak Allah! An office with utmost precision, punctuality, and complete credibility in giving legal advice. I handed over my case with total peace of mind. A truly capable and dependable lawyer who stands by your side. With them, rest completely assured. May Allah bless them.',
    verified: true
  },
  {
    id: 'rev-alhuthali',
    authorAr: 'علي الهذلي',
    authorEn: 'Ali Al-Hothali',
    rating: 5,
    dateAr: 'مراجعة موثقة على خرائط جوجل',
    dateEn: 'Verified Google Maps Review',
    commentAr: 'تعامل جدا مميز و ايضاً سرعة في التنفيذ انصح الجميع بالتواصل معهم الله يعطيهم العافية',
    commentEn: 'Truly distinguished service and remarkable speed of execution. I highly advise everyone to contact them. May Allah grant them well-being.',
    verified: true
  }
];

export const DICTIONARY = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن المؤسس',
      services: 'الخدمات القانونية',
      notary: 'خدمات التوثيق',
      reviews: 'آراء العملاء',
      location: 'الموقع والتواصل',
      cta: 'اطلب استشارة أو موثقاً',
    },
    hero: {
      badgeMoJ: 'مرخص من وزارة العدل السعودية (محامٍ وموثق معتمد)',
      badgeLLM: 'ماجستير في القانون (LL.M.) من الولايات المتحدة الأمريكية',
      headline: 'الريادة القانونية والدقة في التوثيق والتمثيل القضائي بمكة المكرمة',
      subhead: 'مكتب المحامي والموثق مساعد سعود القرشي ومؤسس شركة مُتم للمحاماة والاستشارات القانونية. نجمع بين أعلى درجات التأهيل الأكاديمي الدولي والخبرة الراسخة في الأنظمة القضائية بالمملكة.',
      primaryCta: 'احجز استشارتك أو اطلب موثقاً الآن',
      secondaryCta: 'التواصل المباشر عبر الواتساب',
      pillars: [
        {
          title: 'الدقة واحترام المواعيد',
          desc: 'التزام صارم بالوقت والمواعيد القضائية وإنجاز المعاملات دون أدنى تأخير.'
        },
        {
          title: 'المصداقية والوضوح التام',
          desc: 'رأي قانوني شفاف يضعك في قلب الموقف النظامي الفعلي بكل أمانة ومهنية.'
        },
        {
          title: 'سرعة التنفيذ الفوري',
          desc: 'خدمات توثيق فوري وإجراءات قانونية سريعة ومعتمدة إلكترونياً وحضورياً.'
        }
      ]
    },
    about: {
      tag: 'عن المؤسس والكيان المهني',
      title: 'أ. مساعد سعود القرشي',
      subtitle: 'المحامي والموثق المعتمد ومؤسس شركة مُتم للمحاماة والاستشارات القانونية',
      p1: 'يجمع المحامي والموثق مساعد سعود القرشي بين التأهيل الأكاديمي الدولي بحصوله على درجة الماجستير في القانون من الولايات المتحدة الأمريكية، وبين الممارسة النظامية المعتمدة في المملكة العربية السعودية برخصتي محامٍ ممارس وموثق معتمد من وزارة العدل.',
      p2: 'من خلال تأسيس "شركة مُتم للمحاماة والاستشارات القانونية"، يكرّس المكتب منهجية قانونية حديثة تقوم على الدقة الموضوعية، صياغة الحلول الوقائية، وحماية مصالح الأفراد والشركات في بيئة الأعمال المتسارعة والمواكبة لرؤية المملكة 2030.',
      stats: [
        { value: 'LL.M.', label: 'ماجستير قانون - أمريكا' },
        { value: '2 في 1', label: 'رخصتا محامٍ وموثق معتمد' },
        { value: '5.0 ★', label: 'تقييم العملاء على خرائط جوجل' },
        { value: 'فوري', label: 'إنجاز التوثيق المعتمد' }
      ],
      qualificationsTitle: 'المؤهلات والرخص الرسمية:',
      qualificationList: [
        'درجة الماجستير في القانون (Master of Laws - LL.M.) من الولايات المتحدة الأمريكية.',
        'رخصة محامٍ ممارس معتمد من وزارة العدل السعودية.',
        'رخصة موثق معتمد صالحة لإصدار الوكالات والإفراغات والعقود رسمياً.',
        'مؤسس ومدير شركة مُتم للمحاماة والاستشارات القانونية في مكة المكرمة.'
      ]
    },
    services: {
      tag: 'المسارات التخصصية',
      title: 'خدمات المحاماة والتوثيق المعتمد',
      subtitle: 'اختر المسار المناسب لاحتياجك لتصفح الخدمات المتخصصة أو طلبها فوراً.',
      filterAll: 'كافة الخدمات',
      filterNotary: 'التوثيق المعتمد (فوري)',
      filterConsultation: 'الاستشارات والعقود',
      filterLitigation: 'التمثيل القضائي',
      filterCorporate: 'خدمات الشركات (مُتم)',
      orderService: 'طلب هذه الخدمة الآن',
      includedDetails: 'أبرز محاور الخدمة:',
    },
    reviews: {
      tag: 'شهادات الثقة على خرائط جوجل',
      title: 'آراء موثقة من عملاء المكتب الفعليين',
      subtitle: 'شهادات حقيقية وعلنية تركها عملاؤنا على منصة خرائط جوجل تعكس نهجنا في الدقة والمصداقية وسرعة الإنجاز.',
      viewOnGoogle: 'عرض المكتب والمراجعات على خرائط Google',
      ratingBadge: 'تقييم كامل 5.0 نجوم من عملاء موثقين',
    },
    funnel: {
      tag: 'نظام الطلب الذكي',
      title: 'فلترة وترتيب طلبك قبل الإرسال المباشر',
      subtitle: 'حدد تفاصيل طلبك بدقة لتصل رسالتك إلى مكتب المحامي عبر الواتساب منسقة وجاهزة للإنجاز الفوري دون إضاعة للوقت.',
      step1Title: '1. اختر نوع الخدمة المطلوبة:',
      trackNotary: 'خدمة توثيق سريع وفوري',
      trackConsultation: 'استشارة قانونية متخصصة',
      trackLitigation: 'توكيل في قضية وتمثيل قضائي',
      trackCorporate: 'خدمات منشآت وشركات (مُتم)',
      step2Title: '2. حدد صفتك كعميل:',
      clientIndividual: 'فرد (مواطن / مقيم)',
      clientCompany: 'منشأة / شركة / مؤسسة',
      step3Title: '3. طريقة تقديم الخدمة المفضلة:',
      modeOffice: 'حضور لمقر المكتب بالشرائع - مكة المكرمة',
      modeRemote: 'خدمة واستشارة رقمية عن بُعد',
      step4Title: '4. بيانات الاتصال وملخص الطلب:',
      namePlaceholder: 'الاسم الكريم...',
      phonePlaceholder: 'رقم الجوال (مثال: 0543505970)...',
      summaryPlaceholder: 'اكتب نبذة موجزة عن المعاملة، الوكالة، أو موضوع الاستشارة القانونية...',
      previewTitle: 'معاينة الرسالة الذكية للواتساب:',
      submitButton: 'إرسال الطلب المنسق عبر الواتساب مباشرة',
      note: 'سيتم نقلك فوراً إلى تطبيق الواتساب لمحادثة مكتب المحامي على الرقم الرسمي +966543505970.',
    },
    location: {
      tag: 'الموقع الجغرافي وساعات العمل',
      title: 'مقر المكتب في العاصمة المقدسة',
      subtitle: 'نرحب بكم في مقرنا في مكة المكرمة، أو عبر قنوات التواصل المباشرة المعتمدة.',
      officeTitle: 'مكتب المحامي والموثق مساعد سعود القرشي',
      officeAddress: 'مكة المكرمة، حي الشرائع، شارع المهندس عمر قاضي',
      plusCodeLabel: 'رمز بلس للموقع (Plus Code):',
      coordinatesLabel: 'الإحداثيات الجغرافية:',
      phoneLabel: 'الهاتف والواتساب المعتمد:',
      copyAddress: 'نسخ العنوان',
      copiedAddress: 'تم نسخ العنوان بنجاح!',
      copyPhone: 'نسخ الرقم',
      copiedPhone: 'تم نسخ رقم الهاتف بنجاح!',
      openGoogleMaps: 'فتح الموقع في تطبيق خرائط Google',
      downloadVCard: 'حفظ بطاقة الاتصال (vCard) في هاتفك',
      vCardSuccess: 'جاري تنزيل بطاقة الاتصال الرقمية...',
      qrTitle: 'امسح الرمز للتواصل المباشر عبر واتساب:',
      interactiveMapLabel: 'خريطة تفاعلية للموقع:',
      directionsHint: 'اضغط على الخريطة أو زر الاتجاهات للوصول المباشر عبر نظام الملاحة.'
    },
    footer: {
      rights: 'جميع الحقوق محفوظة © 2026 مكتب المحامي والموثق مساعد سعود القرشي | شركة مُتم للمحاماة والاستشارات القانونية.',
      disclaimer: 'المعلومات المقدمة في هذا الموقع لأغراض التعريف بالخدمات والتواصل المهني المصرح به نظاماً من وزارة العدل في المملكة العربية السعودية.',
      quickLinks: 'روابط سريعة',
      contactInfo: 'معلومات الاتصال',
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Legal Practice',
      notary: 'Notary Services',
      reviews: 'Client Reviews',
      location: 'Location & Contact',
      cta: 'Request Counsel or Notary',
    },
    hero: {
      badgeMoJ: 'Licensed by Saudi Ministry of Justice (Attorney & Certified Notary)',
      badgeLLM: 'Master of Laws (LL.M.) - United States of America',
      headline: 'Prestigious Legal Counsel & Certified Notarial Services in Makkah',
      subhead: 'Office of Attorney & Licensed Notary Mosaed Saud Al-Qurashi, Founder of Mutimm Law & Legal Consultations. Combining distinguished US academic training with comprehensive mastery of the Saudi judicial landscape.',
      primaryCta: 'Book Consultation or Request Notary',
      secondaryCta: 'Direct WhatsApp Contact',
      pillars: [
        {
          title: 'Precision & Punctuality',
          desc: 'Uncompromising adherence to statutory deadlines and rigorous punctuality in all judicial proceedings.'
        },
        {
          title: 'Credibility & Full Clarity',
          desc: 'Objective, unvarnished legal opinion that places your true statutory interests at the forefront.'
        },
        {
          title: 'Immediate Execution',
          desc: 'Instant certified notarial deeds and expedited legal filings, in person or digitally.'
        }
      ]
    },
    about: {
      tag: 'About the Founder & Practice',
      title: 'Adv. Mosaed Saud Al-Qurashi',
      subtitle: 'Licensed Attorney, Certified Notary, & Founder of Mutimm Law Firm',
      p1: 'Attorney and Certified Notary Mosaed Saud Al-Qurashi bridges world-class American legal education (LL.M.) with official Saudi statutory accreditation, holding dual licenses from the Ministry of Justice as both a Practicing Attorney and Certified Notary.',
      p2: 'Through founding "Mutimm Law & Legal Consultations", the firm delivers modern, high-precision legal advisory designed to safeguard personal and corporate rights in alignment with Saudi Vision 2030 commercial and judicial modernization.',
      stats: [
        { value: 'LL.M.', label: 'Master of Laws - USA' },
        { value: 'Dual', label: 'Attorney & Notary Licenses' },
        { value: '5.0 ★', label: 'Google Maps Verified Rating' },
        { value: 'Instant', label: 'Ministry Certified Turnaround' }
      ],
      qualificationsTitle: 'Official Credentials & Accreditations:',
      qualificationList: [
        'Master of Laws degree (LL.M.) from the United States of America.',
        'Licensed Practicing Attorney certified by the Saudi Ministry of Justice.',
        'Certified Notary officially authorized for power-of-attorney and property conveyance.',
        'Founder and Managing Counsel of Mutimm Law & Legal Consultations in Makkah.'
      ]
    },
    services: {
      tag: 'Practice Areas',
      title: 'Legal Counsel & Certified Notary Services',
      subtitle: 'Select the appropriate track for immediate service processing or case assessment.',
      filterAll: 'All Services',
      filterNotary: 'Certified Notary (Instant)',
      filterConsultation: 'Advisory & Contracts',
      filterLitigation: 'Litigation & Advocacy',
      filterCorporate: 'Corporate Retainers (Mutimm)',
      orderService: 'Request This Service Now',
      includedDetails: 'Key Service Scope:',
    },
    reviews: {
      tag: 'Google Maps Social Proof',
      title: 'Verified Client Reviews on Google Maps',
      subtitle: 'Public 5-star testimonials from actual clients on Google Maps reflecting our dedication to precision, credibility, and immediate execution.',
      viewOnGoogle: 'View Office & Reviews on Google Maps',
      ratingBadge: 'Perfect 5.0 Star Rating from Verified Clients',
    },
    funnel: {
      tag: 'Smart Intake Funnel',
      title: 'Structured WhatsApp Inquiry Builder',
      subtitle: 'Configure your inquiry details before dispatching directly to the attorney\'s official WhatsApp line for expedited handling.',
      step1Title: '1. Select Required Service Track:',
      trackNotary: 'Fast Certified Notary Deed',
      trackConsultation: 'Specialized Legal Consultation',
      trackLitigation: 'Litigation & Courtroom Representation',
      trackCorporate: 'Corporate Retainer / Mutimm Services',
      step2Title: '2. Client Capacity:',
      clientIndividual: 'Individual (Citizen / Resident)',
      clientCompany: 'Enterprise / Corporation',
      step3Title: '3. Preferred Service Delivery Mode:',
      modeOffice: 'In-Person at Office (Al-Sharaya\'a, Makkah)',
      modeRemote: 'Remote Digital Consultation / Notary',
      step4Title: '4. Contact Details & Summary:',
      namePlaceholder: 'Full Name...',
      phonePlaceholder: 'Mobile Number (e.g., +966 54 350 5970)...',
      summaryPlaceholder: 'Briefly outline your case, notary requirements, or consultation topic...',
      previewTitle: 'Live WhatsApp Message Preview:',
      submitButton: 'Send Structured Inquiry via WhatsApp',
      note: 'You will be redirected immediately to WhatsApp to message the attorney at official number +966543505970.',
    },
    location: {
      tag: 'Location & Office Hours',
      title: 'Office Location in Makkah',
      subtitle: 'We welcome you at our principal office in Makkah Al-Mukarramah, or via authorized digital legal channels.',
      officeTitle: 'Office of Attorney & Notary Mosaed Saud Al-Qurashi',
      officeAddress: 'Omar Qadi St, Al-Sharaya\'a, Makkah 24268, Saudi Arabia',
      plusCodeLabel: 'Google Plus Code:',
      coordinatesLabel: 'GPS Coordinates:',
      phoneLabel: 'Direct Phone & WhatsApp:',
      copyAddress: 'Copy Address',
      copiedAddress: 'Address copied to clipboard!',
      copyPhone: 'Copy Number',
      copiedPhone: 'Phone number copied to clipboard!',
      openGoogleMaps: 'Open in Google Maps Navigation',
      downloadVCard: 'Save Contact Card (vCard) to Phone',
      vCardSuccess: 'Downloading digital contact card...',
      qrTitle: 'Scan QR code for direct WhatsApp chat:',
      interactiveMapLabel: 'Interactive Location Map:',
      directionsHint: 'Click on the map or the navigation button for turn-by-turn driving directions.'
    },
    footer: {
      rights: 'All rights reserved © 2026 Office of Attorney & Notary Mosaed Saud Al-Qurashi | Mutimm Law Firm.',
      disclaimer: 'The information provided on this platform is for professional orientation and lawful services authorized by the Ministry of Justice, Kingdom of Saudi Arabia.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Information',
    }
  }
};
