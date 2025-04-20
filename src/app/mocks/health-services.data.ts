import { HealthService } from '../models/health-service.model';

export interface NavigationItem {
  title: string;
  isActive: boolean;
  subitems?: string[];
}

export const HEALTH_SERVICES: HealthService[] = [
  {
    id: 1,
    name: 'التراخيص الصحية',
    subitems: [
      {
        id: 101,
        name: 'تراخيص المنشآت الصحية',
        description: 'تمكن هذه الخدمة المستثمرين ومنشآت القطاع الصحي من اصدار وتجديد وإلغاء وتعديل البيانات لتراخيص المنشآت الصحية بشكل آلي .',
        icon: 'img/health-services/health-licenses.svg',
        buttonText: 'ابدأ الخدمة',
        navigationLink: '/services/alternative-medicine'
      },
      {
        id: 102,
        name: 'تراخيص الطب البديل والتكميلي',
        description: 'هي خدمة تتيح لمنشآت الطب البديل والتكميلي من إصدار وتجديد تراخيص ممارسين الطب البديل والمنشآت وأيضًا من طلب تصنيف الممارسين العاملين لدى المنشأة.',
        icon: 'img/health-services/alt-medicine-license.svg',
        buttonText: 'ابدأ الخدمة',
        navigationLink: '/services/health-facilities'
      },
      {
        id: 103,
        name: 'الترميز الطبي ICD-10',
        description: 'تقديم المنشأة طلب إصدار شهادة الترميز الطبي الأسترالي للنسخة العاشرة من المجلس الصحي السعودي والحصول على الأكواد لاستخدامها في الترميز الطبي .',
        icon: 'img/health-services/medical-icd-10.svg',
        buttonText: 'ابدأ الخدمة',
        navigationLink: '/services/medical-coding'
      }
    ]
  },
  {
    id: 2,
    name: 'التقارير الطبية',
    subitems: [
      {
        id: 201,
        name: 'تصنيف الاشخاص ذوي الإعاقة',
        description: 'تمكن هذه الخدمة المستثمرين ومنشآت القطاع الصحي من اصدار وتجديد وإلغاء وتعديل البيانات لتراخيص المنشآت الصحية بشكل آلي .',
        icon: 'img/health-services/handicap-designation.svg',
        buttonText: 'ابدأ الخدمة',
        navigationLink: '/services/medical-reports'
      },
      {
        id: 202,
        name: 'فحص حديثي الولادة',
        description: 'هي خدمة تتيح لمنشآت الطب البديل والتكميلي من إصدار وتجديد تراخيص ممارسين الطب البديل والمنشآت وأيضًا من طلب تصنيف الممارسين العاملين لدى المنشأة.',
        icon: 'img/health-services/newborn-healthcheck.svg',
        buttonText: 'ابدأ الخدمة',
        navigationLink: '/services/patient-reports'
      },
      {
        id: 203,
        name: 'فحص رخص القيادة',
        description: 'تقديم المنشأة طلب إصدار شهادة الترميز الطبي الأسترالي للنسخة العاشرة من المجلس الصحي السعودي والحصول على الأكواد لاستخدامها في الترميز الطبي .',
        icon: 'img/health-services/driving-license.svg',
        buttonText: 'ابدأ الخدمة',
        navigationLink: '/services/performance-reports'
      },
      {
        id: 204,
        name: 'فحص إصدار الإقامات',
        description: 'خدمة فحص إصدار الإقامات تتيح للمنشآت الصحية عمل الفحص إلكترونيًّا، وإرساله للجهات ذات العلاقة، بالإضافة إلى التحقق من صحة بيانات كلّ من (مقدم طلب الفحص، والأطباء، والمنشأة الصحية)، وموثوقية مصدرها المعتمد.',
        icon: 'img/health-services/residency-check.svg',
        buttonText: 'ابدأ الخدمة',
        navigationLink: '/services/performance-reports'
      },
      {
        id: 205,
        name: 'الإجازات المرضية',
        description: 'خدمة الإجازات المرضية الإلكترونية تتيح للمنشآت الصحية تسجيل الإجازات  والتحقق من صحة بيانات المرضى، الأطباء، والمنشآت الصحية. وموثوقية مصدرها المعتمد، وتتيح لكل من المريض و مرافقه وجهة عملهم امكانية الوصول إلى الإجازات المرضية إلكترونيًا.',
        icon: 'img/health-services/sick-leave.svg',
        buttonText: 'ابدأ الخدمة',
        navigationLink: '/services/performance-reports'
      },
      {
        id: 206,
        name: 'الشهادات الصحية (أمانات)',
        description: 'خدمة مقدمة من خلال منصة صحة تمكن المنشآت الصحية من إدخال وتدقيق نتائج الفحص الطبي للعاملين بمجالات تتطلب اشتراطات صحية، وتتمثل في الربط الإلكتروني لنتائج الفحص الطبي بحيث يتسنى للمستفيد إجراء الفحص في المنشآت الصحية المرخصة وإرسال نتيجة الفحص إلكترونيًا للأمانات بما يمكن من الإصدار للشهادات الصحية .',
        icon: 'img/health-services/cred-amanat.svg',
        buttonText: 'ابدأ الخدمة',
        navigationLink: '/services/performance-reports'
      },
      {
        id: 207,
        name: 'الفحص الاستكشافي',
        description: 'برنامج الفحص الاستكشافي هو برنامج صحي للاكتشاف المبكر للأمراض؛ من خلال إجراء عدد من الفحوصات الطبية لطلاب وطالبات المدارس مع إجراء التدخلات الطبية للحالات المكتشفة في وقت مبكر.',
        icon: 'img/health-services/explore-check.svg',
        buttonText: 'ابدأ الخدمة',
        navigationLink: '/services/performance-reports'
      },
      {
        id: 208,
        name: 'فحص اللياقة للطلبة المستجدين',
        description: ' هي خدمة فحص طبي تقدم للطلاب والطالبات الراغبين بالحصول على الشهادة الصحية المؤهلة لدخول المدرسة.',
        icon: 'img/health-services/students-health-check.svg',
        buttonText: 'ابدأ الخدمة',
        navigationLink: '/services/performance-reports'
      },
    ]
  },
  {
    id: 3,
    name: 'قياس الالتزام',
    subitems: [
      {
        id: 301,
        name: 'سجل الزيارات',
        description: 'تمكن هذه الخدمة المستثمرين ومنشآت القطاع الصحي من اصدار وتجديد وإلغاء وتعديل البيانات لتراخيص المنشآت الصحية بشكل آلي .',
        icon: 'img/health-services/visitation-log.svg',
        buttonText: 'ابدأ الخدمة',
        navigationLink: '/services/performance-indicators'
      },
      {
        id: 302,
        name: 'مستعد',
        description: 'هي خدمة تتيح لمنشآت الطب البديل والتكميلي من إصدار وتجديد تراخيص ممارسين الطب البديل والمنشآت وأيضًا من طلب تصنيف الممارسين العاملين لدى المنشأة.',
        icon: 'img/health-services/ready-app.svg',
        buttonText: 'ابدأ الخدمة',
        navigationLink: '/services/self-assessment'
      },
      {
        id: 303,
        name: 'التقييم الذاتي',
        description: 'تقديم المنشأة طلب إصدار شهادة الترميز الطبي الأسترالي للنسخة العاشرة من المجلس الصحي السعودي والحصول على الأكواد لاستخدامها في الترميز الطبي .',
        icon: 'img/health-services/self-diagnose.svg',
        buttonText: 'ابدأ الخدمة',
        navigationLink: '/services/reports'
      }
    ]
  },
  {
    id: 4,
    name: 'خدمات البلاغات',
    subitems: [
      {
        id: 401,
        name: 'بلاغات الوفيات',
        description: 'تمكن هذه الخدمة المستثمرين ومنشآت القطاع الصحي من اصدار وتجديد وإلغاء وتعديل البيانات لتراخيص المنشآت الصحية بشكل آلي .',
        icon: 'img/health-services/death-certificate.svg',
        buttonText: 'ابدأ الخدمة',
        navigationLink: '/services/reports'
      },
    ]
  },
  {
    id: 5,
    name: 'خدمات حصن بلس',
    subitems: [
      {
        id: 501,
        name: 'حصن بلس',
        description: 'تمكن هذه الخدمة المستثمرين ومنشآت القطاع الصحي من اصدار وتجديد وإلغاء وتعديل البيانات لتراخيص المنشآت الصحية بشكل آلي .',
        icon: 'img/health-services/Hesn-Plus-Icon.svg',
        buttonText: 'ابدأ الخدمة',
        navigationLink: '/services/reports'
      },
      {
        id: 502,
        name: 'حصن بلس - وحدة التقصيات ',
        description: 'الوحدة الأساسية لنظام حصن+ والتي تعنى بالإبلاغ وتتبع حالات الأمراض المعدية والوبائية في المملكة.',
        icon: 'img/health-services/Hesn-Plus-Icon.svg',
        buttonText: 'ابدأ الخدمة',
        navigationLink: '/services/reports'
      },
      {
        id: 503,
        name: 'حصن بلس - وحدة مكافحة العدوى',
        description: 'وحدة لإدارة حالات العدوى الناجمة من الرعاية الصحية عبر مراقبة الالتزام بتطبيق إجراءات السلامة.',
        icon: 'img/health-services/Hesn-Plus-Icon.svg',
        buttonText: 'ابدأ الخدمة',
        navigationLink: '/services/reports'
      },
      {
        id: 504,
        name: 'حصن بلس - وحدة بيكسل',
        description: 'وحدة إصدار رخصة تمكن الممارسين الصحيين من التعامل مع المرضى المصابين بالأمراض المعدية.',
        icon: 'img/health-services/Hesn-Plus-Icon.svg',
        buttonText: 'ابدأ الخدمة',
        navigationLink: '/services/reports'
      },
    ]
  },
  {
    id: 6,
    name: 'خدمات أخرى',
    subitems: [
      {
        id: 601,
        name: 'الوصفة الطبية الالكترونية',
        description: 'هي خدمة تتيح للمنشآت الصحية الخاصة وتطبيقات الطب الاتصالي تسجيل الوصفات الطبية الكترونيًا وربطها مع الصيدليات المجتمعية. توفر الخدمة خاصية التحقق من صحة بيانات المرضى، والأطباء، والمنشآت الصحية. يمكن للممارس الصحي الاطلاع على تاريخ المريض الدوائي، مما يساعد على اتخاذ القرار الاكلينيكي المناسب.',
        icon: 'img/health-services/electronic-prescription.svg',
        buttonText: 'ابدأ الخدمة',
        navigationLink: '/services/reports'
      },
      {
        id: 602,
        name: 'بوابة مؤهل',
        description: `بوابة مؤهل أحد خدمات صحة تمكّن مسؤولي التوظيف في المنشآت الصحية من الوصول لسوق الممارسين الصحيين المصنفين في تطبيق 'أناة'، والذي يضم أكثر من 480 ألف ممارس صحي مصنّف في المملكة من مختلف التخصصات؛ وذلك عبر الإعلان عن الشواغر الوظيفية من منصة صحة؛ لتظهر بعد ذلك في تطبيق 'أناة'، والتقديم على هذه الشواغر يتم من خلال التطبيق.`,
        icon: 'img/health-services/Moahal_Icon.svg',
        buttonText: 'ابدأ الخدمة',
        navigationLink: '/services/reports'
      },
      {
        id: 603,
        name: 'اعرف ارقامك',
        description: 'هي حملة وطنية تهدف لجمع القراءات الحيوية لجموع المواطنين والمقيمين ',
        icon: 'img/health-services/KYN_Icon.svg',
        buttonText: 'ابدأ الخدمة',
        navigationLink: '/services/reports'
      },
      {
        id: 604,
        name: 'سجل التطعيمات الوطني',
        description: ' خدمة الكترونية على منصة صحة تسمح للمنشآت الصحية بإدخال معلومات التحصينات للأطفال والافراد، بهدف انشاء قاعدة بيانات موحدة تجمع معلومات الافراد، أنواع التحصينات و سجل التطعيمات الالكتروني للأطفال.',
        icon: 'img/health-services/ready-app.svg',
        buttonText: 'ابدأ الخدمة',
        navigationLink: '/services/reports'
      },
      {
        id: 605,
        name: 'رصد',
        description: 'نظام التتبع الإلكتروني للمستحضرات الصيدلانية (رصد) من خلال تتبع وتعقب جميع الأدوية البشرية المصنعة داخل المملكة أو المستوردة من خارجها ، تمكن هذه الخدمة من اشتراك المنشأة الدوائية في أحد باقات رصد لخدمة الإبلاغ اللحظي للحركة الدوائية ',
        icon: 'img/health-services/RSD_Icon.svg',
        buttonText: 'ابدأ الخدمة',
        navigationLink: '/services/reports'
      },
      {
        id: 606,
        name: 'عينتي',
        description: 'منصة مختبرات سحابية يتم من خلالها ربط مقدمي الرعاية الصحية بالمختبرات لتسهيل عملية الوصول للخدمات المخبرية وطلبها و تتبعها حتى وصول نتائجها للمرضى . كما توفر الربط مع أنظمة المعلومات والتطبيقات الصحية',
        icon: 'img/health-services/Ayinaty_Icon.svg',
        buttonText: 'ابدأ الخدمة',
        navigationLink: '/services/reports'
      },
    ]
  }
];

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { 
    title: 'Licencias de salud', 
    isActive: true,
    subitems: [
      'تراخيص الطب البديل والتجميلي',
      'تراخيص المنشآت الصحية',
      'الترميز الطبي ICD-10'
    ]
  },
  { 
    title: 'Informes médicos', 
    isActive: false,
    subitems: ['التقارير الطبية', 'تقارير المرضى', 'تقارير الأداء']
  },
  { 
    title: 'Medición del cumplimiento', 
    isActive: false,
    subitems: ['مؤشرات الأداء', 'التقييم الذاتي', 'التقارير']
  },
  { 
    title: 'Servicios de informes', 
    isActive: false,
    subitems: ['تقديم بلاغ', 'متابعة البلاغات', 'إحصائيات']
  },
  { 
    title: 'Servicios FORN Plus', 
    isActive: false,
    subitems: ['حجز موعد', 'إدارة المواعيد', 'التقويم']
  },
  { 
    title: 'Otros servicios', 
    isActive: false,
    subitems: ['الدعم الفني', 'الأسئلة الشائعة', 'التواصل معنا']
  }
]; 