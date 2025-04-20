import { HealthSystem } from '../models/health-system.model';

export const HEALTH_SYSTEMS: HealthSystem[] = [
  {
    id: 1,
    name: 'منصة صحتي',
    logo: 'img/health-systems/sehaty-large.svg',
    description: ' صحتي هي منصة المواطن الأولى للأفراد في المملكة العربية السعودية. تتيح المنصة للمستخدم الوصول إلى معلوماته وعدد من الخدمات الصحية من الجهات المختلفة في القطاع الصحي ',
    platforms: {
      android: 'https://play.google.com/store/apps/details?id=com.lean.sehhaty',
      ios: 'https://apps.apple.com/sa/app/%D8%B5%D8%AD%D8%AA%D9%8A-sehhaty/id1459266578'
    }
  },
  {
    id: 2,
    name: 'منصة صحة',
    logo: 'img/health-systems/seha-large.svg',
    description: ' منصة صحة هي منصة إلكترونية تهدف إلى تحقيق وتوفير نظام بيئي صحي في المملكة العربية السعودية، ويقدم العديد من الخدمات الصحية الموثوقة والسريعة تحت مظلة منظومة الصحة وقطاعاتها المتنوعة للمنشآت الطبية والأفراد ',
    platforms: {
      web: 'https://seha.sa/'
    }
  },
  {
    id: 3,
    name: 'منصة أناة',
    logo: 'img/health-systems/anat-large.svg',
    description: ' أناة هي منصة تقدم خدمات إلكترونية للممارسين الصحيين (المواطنين والمقيمين) وتسهل طرق التواصل فيما بينهم لتبادل الخبرات العلمية، كما تقوم بوصلهم بالمراجعين لرفع مستوى الخدمات الصحية المقدمة للمرضى ',
    platforms: {
      web: 'https://anat.sa/',
      android: 'https://play.google.com/store/apps/details?id=com.lean.practitioner',
      ios: 'https://apps.apple.com/us/app/id1472911277'
    }
  },

]; 