import React from 'react';
import { Award, GraduationCap, Scale, Building2, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY } from '../translations';
import { BrandLogo } from './BrandLogo';

interface AboutFounderProps {
  lang: Language;
}

export const AboutFounder: React.FC<AboutFounderProps> = ({ lang }) => {
  const t = DICTIONARY[lang];
  const isAr = lang === 'ar';

  return (
    <section id="about" className="py-14 sm:py-20 md:py-24 bg-[#EAF0F2]/70 dark:bg-[#0D2128]/70 border-y border-[#D7E1E4] dark:border-[#173741]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="text-xs font-bold text-[#8A724B] dark:text-[#D4C3A3] tracking-wider uppercase mb-2">
            {t.about.tag}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#102A32] dark:text-[#F1F6F8] tracking-tight">
            {isAr ? 'المحامي والموثق مساعد سعود القرشي' : 'Adv. & Notary Musaid Saud Al-Qurashi'}
          </h2>
          <p className="text-sm sm:text-base text-[#435F68] dark:text-[#A7BAC0] mt-1 font-medium">
            {isAr ? 'للمحاماة والاستشارات القانونية | ماجستير في القانون من أمريكا' : 'For Law & Legal Consultations | Master of Laws (LL.M.) - USA'}
          </p>
        </div>

        {/* Narrative & Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Narrative Body */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <p className="text-base sm:text-lg text-[#163842] dark:text-[#D5E2E5] leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-sm sm:text-base text-[#435F68] dark:text-[#9BB3BB] leading-relaxed">
              {t.about.p2}
            </p>

            {/* Official Credentials Checklist */}
            <div className="pt-2 sm:pt-4">
              <h4 className="text-sm font-bold text-[#102A32] dark:text-[#F1F6F8] mb-3">
                {t.about.qualificationsTitle}
              </h4>
              <ul className="space-y-2.5">
                {t.about.qualificationList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#254A56] dark:text-[#BDD1D6]">
                    <CheckCircle2 className="w-4 h-4 text-[#8A724B] dark:text-[#D4C3A3] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pedigree & Stats Showcase */}
          <div className="lg:col-span-5 flex flex-col space-y-4 w-full">
            
            {/* 4 KPI Matrix */}
            <div className="grid grid-cols-2 gap-3">
              {t.about.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white dark:bg-[#122F38] border border-[#D7E1E4] dark:border-[#1C424E] shadow-sm"
                >
                  <div className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-[#102A32] dark:text-[#F1F6F8] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#526D75] dark:text-[#9BB3BB] mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Entity Highlight Card */}
            <div className="p-5 sm:p-6 rounded-xl bg-white dark:bg-[#122F38] border border-[#D7E1E4] dark:border-[#1C424E] space-y-4 shadow-sm">
              <div className="flex items-center gap-3 pb-3 border-b border-[#E2EBEF] dark:border-[#1C424E]">
                <BrandLogo size="md" />
                <div>
                  <div className="text-xs font-semibold text-[#8A724B] dark:text-[#D4C3A3]">
                    {isAr ? 'الكيان القانوني المعتمد' : 'Accredited Law Practice'}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-[#102A32] dark:text-[#F1F6F8]">
                    {isAr ? 'مساعد سعود القرشي للمحاماة' : 'Musaid Saud Al-Qurashi Law Firm'}
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#435F68] dark:text-[#9BB3BB] leading-relaxed">
                {isAr
                  ? 'منظومة مهنية متكاملة تهدف إلى تقديم حلول قانونية وقائية ومبتكرة للمستثمرين والشركات والأفراد، مع إنجاز فوري لكافة أعمال التوثيق المعتمد وصياغة العقود التجارية باللغتين العربية والإنجليزية.'
                  : 'A distinguished legal institution delivering innovative preventative counsel for corporations and individuals, with expedited certified notarization deeds and bilingual commercial drafting.'}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-[#254A56] dark:text-[#A7BAC0] pt-1">
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-[#8A724B] dark:text-[#D4C3A3]" />
                  <span>{isAr ? 'أمريكا (LL.M.)' : 'USA (LL.M.)'}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-[#8A724B] dark:text-[#D4C3A3]" />
                  <span>{isAr ? 'ترخيص وزارة العدل' : 'MoJ License'}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#8A724B] dark:text-[#D4C3A3]" />
                  <span>{isAr ? 'موثق معتمد' : 'Certified Notary'}</span>
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
