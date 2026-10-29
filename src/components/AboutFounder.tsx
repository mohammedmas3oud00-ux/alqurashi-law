import React from 'react';
import { Award, GraduationCap, Scale, Building2, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY } from '../translations';

interface AboutFounderProps {
  lang: Language;
}

export const AboutFounder: React.FC<AboutFounderProps> = ({ lang }) => {
  const t = DICTIONARY[lang];
  const isAr = lang === 'ar';

  return (
    <section id="about" className="py-16 md:py-24 bg-[#F5F3ED]/70 dark:bg-[#141416]/70 border-y border-[#E8E5DC] dark:border-[#222226]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-[#8B6E27] dark:text-[#D8AF3B] tracking-wider uppercase mb-2">
            {t.about.tag}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#141414] dark:text-[#F6F5F2] tracking-tight">
            {t.about.title}
          </h2>
          <p className="text-sm sm:text-base text-[#68686E] dark:text-[#9A9992] mt-1 font-medium">
            {t.about.subtitle}
          </p>
        </div>

        {/* Narrative & Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Body */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-[#333338] dark:text-[#D1D0C9] leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-sm sm:text-base text-[#55555C] dark:text-[#A9A8A2] leading-relaxed">
              {t.about.p2}
            </p>

            {/* Official Credentials Checklist */}
            <div className="pt-4">
              <h4 className="text-sm font-bold text-[#141414] dark:text-[#F3F2EE] mb-3">
                {t.about.qualificationsTitle}
              </h4>
              <ul className="space-y-2.5">
                {t.about.qualificationList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#44444A] dark:text-[#B6B5AE]">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6E27] dark:text-[#D8AF3B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pedigree & Stats Showcase */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            
            {/* 4 KPI Matrix */}
            <div className="grid grid-cols-2 gap-3">
              {t.about.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white dark:bg-[#1C1C1F] border border-[#E5E2DA] dark:border-[#28282C] shadow-sm"
                >
                  <div className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-[#141414] dark:text-[#F3F2EE] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#727278] dark:text-[#8E8D88] mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Entity Highlight Card */}
            <div className="p-6 rounded-xl bg-white dark:bg-[#1A1A1D] border border-[#E5E2DA] dark:border-[#2B2B30] space-y-4 shadow-sm">
              <div className="flex items-center gap-3 pb-3 border-b border-[#EBE8E1] dark:border-[#252528]">
                <div className="w-10 h-10 rounded-lg bg-[#FAF8F3] dark:bg-[#232327] border border-[#C59B27]/30 flex items-center justify-center text-[#8B6E27] dark:text-[#D8AF3B]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#8B6E27] dark:text-[#D8AF3B]">
                    {isAr ? 'الكيان القانوني المؤسسي' : 'Institutional Legal Practice'}
                  </div>
                  <div className="text-sm font-bold text-[#141414] dark:text-[#F3F2EE]">
                    {isAr ? 'شركة مُتم للمحاماة والاستشارات القانونية' : 'Mutimm Law & Legal Consultations'}
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#5C5C62] dark:text-[#9A9992] leading-relaxed">
                {isAr
                  ? 'مظلة مهنية متكاملة تهدف إلى تقديم حلول قانونية وقائية ومبتكرة للمستثمرين والشركات والأفراد، وصياغة العقود التجارية المعقدة باللغتين العربية والإنجليزية.'
                  : 'An institutional umbrella delivering innovative preventative legal frameworks for investors, businesses, and individuals, with bilingual commercial drafting capabilities.'}
              </p>

              <div className="flex items-center gap-4 text-xs font-medium text-[#48484E] dark:text-[#A7A6A0] pt-1">
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-[#8B6E27]" />
                  <span>{isAr ? 'أمريكا (LL.M.)' : 'USA (LL.M.)'}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-[#8B6E27]" />
                  <span>{isAr ? 'ترخيص وزارة العدل' : 'MoJ License'}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#8B6E27]" />
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
