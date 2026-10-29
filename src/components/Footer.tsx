import React from 'react';
import { Phone, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY, OFFICIAL_DATA } from '../translations';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = DICTIONARY[lang];
  const isAr = lang === 'ar';

  return (
    <footer className="bg-[#0B1C22] text-[#E8EEF0] border-t border-[#163842] pt-12 sm:pt-16 pb-10 sm:pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-[#163842]">
          
          {/* Brand & Accreditations (Col 1 to 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo size="md" />
              <div>
                <span className="text-base sm:text-lg font-bold text-white block">
                  {isAr ? 'مساعد سعود القرشي' : 'Musaid Saud Al-Qurashi'}
                </span>
                <span className="text-xs text-[#C5B088] font-medium">
                  {isAr ? 'للمحاماة والاستشارات القانونية' : 'For Law & Legal Consultations'}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#9BB3BB] leading-relaxed max-w-sm">
              {isAr
                ? 'مكتب محاماة وتوثيق معتمد بمكة المكرمة يجمع بين التأهيل الأكاديمي الدولي (ماجستير قانون من أمريكا) والخبرة الميدانية في الترافع والتوثيق المعتمد وصياغة العقود التجارية.'
                : 'Licensed law and certified notarial practice in Makkah combining US academic credentials (LL.M.) with extensive litigation advocacy and expedited statutory notarization.'}
            </p>

            {/* Official Accreditations Badge */}
            <div className="flex items-center gap-2 pt-1 text-xs text-[#C5B088]">
              <ShieldCheck className="w-4 h-4" />
              <span>{isAr ? 'مرخص من وزارة العدل برخصتي محامٍ وموثق معتمد' : 'MoJ Licensed Attorney & Certified Notary'}</span>
            </div>
          </div>

          {/* Quick Nav Links (Col 6 to 8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-[#9BB3BB]">
              <li>
                <a href="#about" className="hover:text-[#C5B088] transition-colors py-0.5 inline-block">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C5B088] transition-colors py-0.5 inline-block">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#C5B088] transition-colors py-0.5 inline-block">
                  {t.nav.reviews}
                </a>
              </li>
              <li>
                <a href="#funnel" className="hover:text-[#C5B088] transition-colors py-0.5 inline-block">
                  {t.funnel.tag}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#C5B088] transition-colors py-0.5 inline-block">
                  {t.nav.location}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Physical Office (Col 9 to 12) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.contactInfo}
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#9BB3BB]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EA4335] shrink-0 mt-0.5" />
                <span>{isAr ? OFFICIAL_DATA.addressAr : OFFICIAL_DATA.addressEn}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`tel:${OFFICIAL_DATA.phoneRaw}`}
                  className="font-mono text-white hover:underline"
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
                  className="inline-flex items-center gap-1.5 text-xs text-[#D4C3A3] hover:underline"
                >
                  <span>{isAr ? 'عرض موقع المكتب على خرائط جوجل' : 'View Office on Google Maps'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Statutory Disclaimer */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-[#6A8892]">
          <p>{isAr ? 'جميع الحقوق محفوظة © 2026 مساعد سعود القرشي للمحاماة والاستشارات القانونية.' : 'All rights reserved © 2026 Musaid Saud Al-Qurashi For Law & Legal Consultations.'}</p>
          <p className="max-w-md text-start md:text-end">
            {t.footer.disclaimer}
          </p>
        </div>

      </div>
    </footer>
  );
};
