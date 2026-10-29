import React from 'react';
import { Scale, Phone, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY, OFFICIAL_DATA } from '../translations';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = DICTIONARY[lang];
  const isAr = lang === 'ar';

  return (
    <footer className="bg-[#121213] text-[#FAF9F5] border-t border-[#252528] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#242427]">
          
          {/* Brand & Accreditations (Col 1 to 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#202023] border border-[#C59B27]/40 flex items-center justify-center text-[#D8AF3B]">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="text-base sm:text-lg font-bold text-[#F3F2EE] block">
                  {isAr ? 'مكتب المحامي والموثق أ. مساعد سعود القرشي' : 'Adv. & Notary Mosaed Saud Al-Qurashi'}
                </span>
                <span className="text-xs text-[#C59B27] font-medium">
                  {isAr ? 'مؤسس شركة مُتم للمحاماة والاستشارات القانونية' : 'Founder of Mutimm Law & Legal Consultations'}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A0A09A] leading-relaxed max-w-sm">
              {isAr
                ? 'مكتب محاماة وتوثيق معتمد بمكة المكرمة يجمع بين التأهيل الأكاديمي الدولي (ماجستير قانون من أمريكا) والخبرة الميدانية في الترافع والتوثيق المعتمد وصياغة العقود التجارية.'
                : 'Licensed law and certified notarial practice in Makkah combining US academic credentials (LL.M.) with extensive litigation advocacy and expedited statutory notarization.'}
            </p>

            {/* Official Accreditations Badge */}
            <div className="flex items-center gap-2 pt-1 text-xs text-[#C59B27]">
              <ShieldCheck className="w-4 h-4" />
              <span>{isAr ? 'مرخص من وزارة العدل برخصتي محامٍ وموثق' : 'MoJ Licensed Attorney & Certified Notary'}</span>
            </div>
          </div>

          {/* Quick Nav Links (Col 6 to 8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#F3F2EE] uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-[#A0A09A]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  {t.nav.reviews}
                </a>
              </li>
              <li>
                <a href="#funnel" className="hover:text-white transition-colors">
                  {t.funnel.tag}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  {t.nav.location}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Physical Office (Col 9 to 12) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-[#F3F2EE] uppercase tracking-wider">
              {t.footer.contactInfo}
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#A0A09A]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EA4335] shrink-0 mt-0.5" />
                <span>{isAr ? OFFICIAL_DATA.addressAr : OFFICIAL_DATA.addressEn}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`tel:${OFFICIAL_DATA.phoneRaw}`}
                  className="font-mono text-[#F3F2EE] hover:underline"
                  dir="ltr"
                >
                  {OFFICIAL_DATA.phone}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={OFFICIAL_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#D8AF3B] hover:underline"
                >
                  <span>{isAr ? 'عرض موقع المكتب على خرائط جوجل' : 'View Office on Google Maps'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Statutory Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-[#7A7A78]">
          <p>{t.footer.rights}</p>
          <p className="max-w-md text-start md:text-end">
            {t.footer.disclaimer}
          </p>
        </div>

      </div>
    </footer>
  );
};
