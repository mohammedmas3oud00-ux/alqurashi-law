import { OFFICIAL_DATA } from '../translations';

export function downloadLawyerVCard() {
  const vcardData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:القرشي;مساعد;سعود;أ.;المحامي والموثق',
    'FN:المحامي والموثق مساعد سعود القرشي',
    'ORG:مكتب المحامي مساعد القرشي - شركة مُتم للمحاماة والاستشارات القانونية',
    'TITLE:محامي وموثق معتمد | ماجستير في القانون من أمريكا',
    `TEL;TYPE=CELL,VOICE,PREF:${OFFICIAL_DATA.phone}`,
    'ADR;TYPE=WORK,PREF:;;شارع المهندس عمر قاضي - حي الشرائع;مكة المكرمة;;24268;المملكة العربية السعودية',
    'GEO:21.4440127;39.966812',
    `URL:${OFFICIAL_DATA.googleMapsUrl}`,
    'NOTE:مرخص رسمياً من وزارة العدل السعودية برخصتي محامٍ ممارس وموثق معتمد. ماجستير قانون من الولايات المتحدة الأمريكية.',
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'المحامي_والموثق_مساعد_سعود_القرشي.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
