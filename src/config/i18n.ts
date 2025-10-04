import type { SiteConfig, SiteContent } from "../types";

export const LANGUAGES = {
  en: {
    code: "en",
    name: "English",
    nativeName: "English",
    dir: "ltr",
  },
  fa: {
    code: "fa",
    name: "Persian",
    nativeName: "فارسی",
    dir: "rtl",
  },
} as const;

export type Language = keyof typeof LANGUAGES;

export const SITE_CONFIG: Record<Language, SiteConfig> = {
  en: {
    title: "Qazal Kermani — Graphic Designer",
    author: "Qazal Kermani",
    description:
      "Graphic Designer based in Tehran, Iran. I specialize in visual design, branding, and creating compelling digital experiences.",
    lang: "en",
    siteLogo: "/qazal-small.jpg",
    navLinks: [
      { text: "Experience", href: "#experience" },
      { text: "Projects", href: "#projects" },
      { text: "Gallery", href: "#gallery" },
      { text: "About", href: "#about" },
    ],
    socialLinks: [
      { text: "Instagram", href: "https://instagram.com/qazalkermani" },
      { text: "LinkedIn", href: "https://linkedin.com/in/qazalkermani" },
      // { text: "Behance", href: "https://behance.net/qazalkermani" },
      // { text: "Dribbble", href: "https://dribbble.com/qazalkermani" },
      // { text: "Portfolio", href: "https://qazalkermani.com" },
    ],
    socialImage: "/zen-og.png",
    canonicalURL: "https://qazalkermani.com",
    availableLanguages: [
      { code: "en", name: "English", nativeName: "English" },
      { code: "fa", name: "Persian", nativeName: "فارسی" },
    ],
  },
  fa: {
    title: "غزال کرمانی — طراح گرافیک",
    author: "غزال کرمانی",
    description:
      "طراح گرافیک ساکن تهران، ایران. من در طراحی بصری، برندینگ و ایجاد تجربیات دیجیتال جذاب تخصص دارم.",
    lang: "fa",
    siteLogo: "/qazal-small.jpg",
    navLinks: [
      { text: "تجربه", href: "#experience" },
      { text: "پروژه‌ها", href: "#projects" },
      { text: "گالری", href: "#gallery" },
      { text: "درباره من", href: "#about" },
    ],
    socialLinks: [
      { text: "اینستاگرام", href: "https://instagram.com/qazalkermani" },
      { text: "لینکدین", href: "https://linkedin.com/in/qazalkermani" },
      { text: "بهنس", href: "https://behance.net/qazalkermani" },
      { text: "دریبل", href: "https://dribbble.com/qazalkermani" },
      { text: "نمونه کار", href: "https://qazalkermani.com" },
    ],
    socialImage: "/zen-og.png",
    canonicalURL: "https://qazalkermani.com",
    availableLanguages: [
      { code: "en", name: "English", nativeName: "English" },
      { code: "fa", name: "Persian", nativeName: "فارسی" },
    ],
  },
};

export const SITE_CONTENT: Record<Language, SiteContent> = {
  en: {
    hero: {
      name: "Qazal Kermani",
      specialty: "Graphic Designer",
      summary:
        "Graphic Designer based in Tehran, Iran. I specialize in visual design, branding, and creating compelling digital experiences.",
      email: "qzlxela80@gmail.com",
    },
    experience: [
      {
        company: "Creative Studio",
        position: "Senior Graphic Designer",
        startDate: "May 2018",
        endDate: "Sept 2020",
        summary: [
          "Led the visual design for major brand campaigns, creating cohesive visual identities that increased brand recognition by 40% and improved customer engagement by 25%.",
          "Managed a team of designers in developing comprehensive brand guidelines and design systems for clients across various industries, ensuring consistency and scalability across all touchpoints.",
          "Designed and executed digital marketing materials that resulted in a 35% increase in conversion rates. Created compelling visual content for social media campaigns that boosted engagement by 30%.",
        ],
      },
      {
        company: "Design Agency",
        position: "Graphic Designer",
        startDate: "Feb 2017",
        endDate: "May 2018",
        summary: [
          "Created comprehensive visual identities for startups and established brands, developing logos, color palettes, and typography systems that enhanced brand recognition by 50% and improved market positioning.",
          "Designed print and digital marketing materials including brochures, business cards, and social media graphics, resulting in a 40% increase in client satisfaction and a 25% boost in lead generation.",
        ],
      },
      {
        company: "Freelance Design",
        position: "Visual Designer",
        startDate: "Jun 2015",
        endDate: "Oct 2016",
        summary:
          "Provided creative design solutions for small businesses and entrepreneurs, specializing in logo design, business cards, and promotional materials. Increased client satisfaction by 30% and helped businesses establish stronger visual presence.",
      },
    ],
    projects: [
      {
        name: "Brand Identity Design",
        summary:
          "Complete visual identity design for a modern tech startup, including logo, color palette, and brand guidelines.",
        linkPreview: "/",
        linkSource: "https://behance.net/qazalkermani",
        image: "/brand-identity.png",
      },
      {
        name: "Packaging Design",
        summary:
          "Creative packaging design for organic skincare products, focusing on sustainability and premium aesthetics.",
        linkPreview: "/",
        linkSource: "https://behance.net/qazalkermani",
        image: "/packaging-design.png",
      },
      {
        name: "Digital Marketing Campaign",
        summary:
          "Comprehensive visual campaign for a fashion brand, including social media graphics, web banners, and print advertisements.",
        linkPreview: "/",
        linkSource: "https://behance.net/qazalkermani",
        image: "/marketing-campaign.png",
      },
    ],
    gallery: [
      {
        title: "Logo Design Collection",
        description:
          "A curated selection of logos created for various clients across different industries.",
        image: "/gallery/logos.jpg",
      },
      {
        title: "Poster Designs",
        description:
          "Creative poster designs for events, promotions, and brand campaigns.",
        image: "/gallery/posters.jpg",
      },
      {
        title: "Social Media Graphics",
        description:
          "Eye-catching social media content designed to boost engagement and brand awareness.",
        image: "/gallery/social-media.jpg",
      },
      {
        title: "Typography Projects",
        description:
          "Custom typography and lettering work for branding and editorial design.",
        image: "/gallery/typography.jpg",
      },
      {
        title: "Illustration Work",
        description:
          "Digital illustrations created for various design projects and campaigns.",
        image: "/gallery/illustrations.jpg",
      },
      {
        title: "Print Collateral",
        description:
          "Business cards, brochures, and other print materials for professional branding.",
        image: "/gallery/print.jpg",
      },
    ],
    about: {
      description: `Hi, I'm Qazal Kermani, a passionate Graphic Designer with a keen eye for visual storytelling and brand identity. With extensive experience in both print and digital design, I specialize in creating compelling visual experiences that connect brands with their audiences.

      Over the years, I've developed expertise in logo design, brand identity, packaging design, and digital marketing materials. My work focuses on creating cohesive visual systems that not only look beautiful but also effectively communicate brand values and drive engagement across all touchpoints.`,
      image: "/qazal-big.jpg",
    },
    ui: {
      getInTouch: "Get in Touch",
      viewProject: "View Project",
      viewSource: "View Source",
      languageToggle: "Language",
    },
  },
  fa: {
    hero: {
      name: "غزال کرمانی",
      specialty: "طراح گرافیک",
      summary:
        "طراح گرافیک ساکن تهران، ایران. من در طراحی بصری، برندینگ و ایجاد تجربیات دیجیتال جذاب تخصص دارم.",
      email: "qzlxela80@gmail.com",
    },
    experience: [
      {
        company: "استودیو خلاق",
        position: "طراح گرافیک ارشد",
        startDate: "مه ۲۰۱۸",
        endDate: "سپتامبر ۲۰۲۰",
        summary: [
          "طراحی بصری کمپین‌های برندهای بزرگ را رهبری کردم و هویت‌های بصری منسجمی ایجاد کردم که شناخت برند را ۴۰٪ افزایش داد و تعامل مشتریان را ۲۵٪ بهبود بخشید.",
          "تیمی از طراحان را در توسعه راهنمای برند جامع و سیستم‌های طراحی برای مشتریان در صنایع مختلف مدیریت کردم و سازگاری و مقیاس‌پذیری در تمام نقاط تماس را تضمین کردم.",
          "مواد بازاریابی دیجیتال طراحی و اجرا کردم که منجر به ۳۵٪ افزایش نرخ تبدیل شد. محتوای بصری جذاب برای کمپین‌های شبکه‌های اجتماعی ایجاد کردم که تعامل را ۳۰٪ افزایش داد.",
        ],
      },
      {
        company: "آژانس طراحی",
        position: "طراح گرافیک",
        startDate: "فوریه ۲۰۱۷",
        endDate: "مه ۲۰۱۸",
        summary: [
          "هویت‌های بصری جامع برای استارتاپ‌ها و برندهای تثبیت شده ایجاد کردم و لوگو، پالت رنگ و سیستم‌های تایپوگرافی توسعه دادم که شناخت برند را ۵۰٪ افزایش داد و موقعیت بازار را بهبود بخشید.",
          "مواد بازاریابی چاپی و دیجیتال شامل بروشور، کارت ویزیت و گرافیک شبکه‌های اجتماعی طراحی کردم که منجر به ۴۰٪ افزایش رضایت مشتری و ۲۵٪ افزایش تولید سرنخ شد.",
        ],
      },
      {
        company: "طراحی فریلنس",
        position: "طراح بصری",
        startDate: "ژوئن ۲۰۱۵",
        endDate: "اکتبر ۲۰۱۶",
        summary:
          "راه‌حل‌های طراحی خلاقانه برای کسب‌وکارهای کوچک و کارآفرینان ارائه دادم و در طراحی لوگو، کارت ویزیت و مواد تبلیغاتی تخصص دارم. رضایت مشتری را ۳۰٪ افزایش دادم و به کسب‌وکارها کمک کردم تا حضور بصری قوی‌تری داشته باشند.",
      },
    ],
    projects: [
      {
        name: "طراحی هویت برند",
        summary:
          "طراحی هویت بصری کامل برای یک استارتاپ فناوری مدرن، شامل لوگو، پالت رنگ و راهنمای برند.",
        linkPreview: "/",
        linkSource: "https://behance.net/qazalkermani",
        image: "/brand-identity.png",
      },
      {
        name: "طراحی بسته‌بندی",
        summary:
          "طراحی بسته‌بندی خلاقانه برای محصولات مراقبت از پوست ارگانیک، با تمرکز بر پایداری و زیبایی‌شناسی لوکس.",
        linkPreview: "/",
        linkSource: "https://behance.net/qazalkermani",
        image: "/packaging-design.png",
      },
      {
        name: "کمپین بازاریابی دیجیتال",
        summary:
          "کمپین بصری جامع برای یک برند مد، شامل گرافیک شبکه‌های اجتماعی، بنرهای وب و تبلیغات چاپی.",
        linkPreview: "/",
        linkSource: "https://behance.net/qazalkermani",
        image: "/marketing-campaign.png",
      },
    ],
    gallery: [
      {
        title: "مجموعه طراحی لوگو",
        description:
          "مجموعه‌ای منتخب از لوگوهای طراحی شده برای مشتریان مختلف در صنایع گوناگون.",
        image: "/gallery/logos.jpg",
      },
      {
        title: "طراحی پوستر",
        description:
          "طراحی‌های خلاقانه پوستر برای رویدادها، تبلیغات و کمپین‌های برند.",
        image: "/gallery/posters.jpg",
      },
      {
        title: "گرافیک شبکه‌های اجتماعی",
        description:
          "محتوای چشم‌نواز شبکه‌های اجتماعی طراحی شده برای افزایش تعامل و آگاهی از برند.",
        image: "/gallery/social-media.jpg",
      },
      {
        title: "پروژه‌های تایپوگرافی",
        description:
          "کار تایپوگرافی و حروف‌نگاری سفارشی برای برندینگ و طراحی سرمقاله.",
        image: "/gallery/typography.jpg",
      },
      {
        title: "کار تصویرسازی",
        description:
          "تصاویر دیجیتال ایجاد شده برای پروژه‌ها و کمپین‌های طراحی مختلف.",
        image: "/gallery/illustrations.jpg",
      },
      {
        title: "مواد چاپی",
        description:
          "کارت ویزیت، بروشور و سایر مواد چاپی برای برندینگ حرفه‌ای.",
        image: "/gallery/print.jpg",
      },
    ],
    about: {
      description: `سلام، من غزال کرمانی هستم، یک طراح گرافیک پرشور با چشمی تیزبین برای داستان‌سرایی بصری و هویت برند. با تجربه گسترده در طراحی چاپی و دیجیتال، من در ایجاد تجربیات بصری جذاب که برندها را با مخاطبانشان متصل می‌کند تخصص دارم.

      طی سال‌ها، من در طراحی لوگو، هویت برند، طراحی بسته‌بندی و مواد بازاریابی دیجیتال تخصص توسعه داده‌ام. کار من بر ایجاد سیستم‌های بصری منسجم متمرکز است که نه تنها زیبا هستند بلکه به طور مؤثر ارزش‌های برند را منتقل می‌کنند و تعامل را در تمام نقاط تماس افزایش می‌دهند.`,
      image: "/qazal-big.jpg",
    },
    ui: {
      getInTouch: "تماس با من",
      viewProject: "مشاهده پروژه",
      viewSource: "مشاهده منبع",
      languageToggle: "زبان",
    },
  },
};

export function getLanguageFromURL(url: URL): Language {
  const pathname = url.pathname;
  if (pathname.startsWith("/fa")) return "fa";
  return "en";
}

export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === "fa") {
    return `/fa${path}`;
  }
  return path;
}
