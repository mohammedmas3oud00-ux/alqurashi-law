import { FunnelState, Language } from '../types';
import { OFFICIAL_DATA } from '../translations';

export function formatWhatsAppMessage(state: FunnelState, lang: Language): string {
  const isAr = lang === 'ar';

  const trackLabelsAr = {
    notary: 'خدمة توثيق سريع وفوري (وكالات / إقرارات / إفراغات / تأسيس شركات)',
    consultation: 'استشارة قانونية متخصصة ودراسة موقف نظامي',
    litigation: 'توكيل في قضية وتمثيل قضائي أمام المحاكم',
    corporate: 'خدمات الشركات والمنشآت عبر شركة مُتم للمحاماة',
  };

  const trackLabelsEn = {
    notary: 'Certified Notary Service (POA / Contracts / Deeds / Formation)',
    consultation: 'Specialized Legal Consultation & Feasibility Audit',
    litigation: 'Litigation & Courtroom Representation',
    corporate: 'Corporate Legal Retainer (Mutimm Law)',
  };

  const clientLabelsAr = {
    individual: 'فرد (مواطن / مقيم)',
    company: 'شركة / منشأة تجارية',
  };

  const clientLabelsEn = {
    individual: 'Individual Client',
    company: 'Corporate / Business Entity',
  };

  const modeLabelsAr = {
    office: 'حضور لمقر المكتب بالشرائع - مكة المكرمة',
    remote: 'خدمة واستشارة رقمية عن بُعد',
  };

  const modeLabelsEn = {
    office: 'In-Person at Office (Al-Sharaya\'a, Makkah)',
    remote: 'Remote Digital Legal Service',
  };

  if (isAr) {
    const lines = [
      'السلام عليكم ورحمة الله وبركاته،',
      'سعادة المحامي والموثق أ. مساعد سعود القرشي حفظك الله،',
      'أود التقدم بطلب خدمة قانونية عبر موقعكم الرسمي وفق البيانات التالية:',
      '--------------------------------',
      `▪ المسار المطلوب: ${trackLabelsAr[state.track]}`,
      `▪ صفة مقدم الطلب: ${clientLabelsAr[state.clientType]}`,
      `▪ طريقة الخدمة المفضلة: ${modeLabelsAr[state.deliveryMode]}`,
      `▪ الاسم الكريم: ${state.fullName || 'لم يُحدد بعد'}`,
      `▪ رقم التواصل: ${state.phone || 'لم يُحدد بعد'}`,
      '--------------------------------',
      '▪ ملخص الطلب / الموضوع:',
      state.summary.trim() ? state.summary.trim() : '(يرجى إفادتي بأقرب موعد أو متطلبات إتمام الخدمة)',
      '--------------------------------',
      'شاكر ومقدّر لكم حسن تعاونكم واهتمامكم.'
    ];
    return lines.join('\n');
  } else {
    const lines = [
      'Peace be upon you,',
      'Adv. & Certified Notary Mosaed Saud Al-Qurashi,',
      'I would like to submit a formal legal request via your official website:',
      '--------------------------------',
      `▪ Service Track: ${trackLabelsEn[state.track]}`,
      `▪ Client Capacity: ${clientLabelsEn[state.clientType]}`,
      `▪ Preferred Delivery: ${modeLabelsEn[state.deliveryMode]}`,
      `▪ Full Name: ${state.fullName || 'Not specified'}`,
      `▪ Contact Number: ${state.phone || 'Not specified'}`,
      '--------------------------------',
      '▪ Brief Summary / Inquiry:',
      state.summary.trim() ? state.summary.trim() : '(Kindly advise on the next steps or required documentation)',
      '--------------------------------',
      'Thank you for your assistance.'
    ];
    return lines.join('\n');
  }
}

export function openWhatsAppChat(message: string) {
  const encodedText = encodeURIComponent(message);
  const url = `https://wa.me/${OFFICIAL_DATA.phoneRaw}?text=${encodedText}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
