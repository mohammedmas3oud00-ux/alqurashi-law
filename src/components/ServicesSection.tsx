import React, { useState } from 'react';
import { FileCheck, Sparkles, Check, ArrowLeft, ArrowRight, ShieldCheck, Scale, FileText, Building2 } from 'lucide-react';
import { Language, ServiceItem } from '../types';
import { DICTIONARY, SERVICES_LIST } from '../translations';

interface ServicesSectionProps {
  lang: Language;
  onSelectServiceForFunnel: (category: 'notary' | 'consultation' | 'litigation' | 'corporate', serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onSelectServiceForFunnel,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'notary' | 'consultation' | 'litigation' | 'corporate'>('all');
  const t = DICTIONARY[lang];
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const filteredServices = activeFilter === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter((s) => s.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'notary':
        return FileCheck;
      case 'consultation':
        return FileText;
      case 'litigation':
        return Scale;
      case 'corporate':
        return Building2;
      default:
        return ShieldCheck;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-[#8A724B] dark:text-[#D4C3A3] tracking-wider uppercase mb-2">
              {t.services.tag}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#102A32] dark:text-[#F1F6F8] tracking-tight">
              {t.services.title}
            </h2>
            <p className="text-sm sm:text-base text-[#435F68] dark:text-[#A7BAC0] mt-1.5">
              {t.services.subtitle}
            </p>
          </div>

          {/* Quick Notary Accreditation Highlight */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8A724B] dark:text-[#D4C3A3] bg-[#E8EFF1] dark:bg-[#13313B] px-3.5 py-2 rounded-lg border border-[#CCD7DA] dark:border-[#1E434F] self-start md:self-auto shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-[#C5B088]" />
            <span>{isAr ? 'توثيق معتمد وإنجاز فوري عبر بوابة وزارة العدل' : 'Certified Notary for Instant Deeds'}</span>
          </div>
        </div>

        {/* Interactive Segmented Filter Controls (Horizontally scrollable on mobile, flex-wrap on desktop) */}
        <div className="overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 mb-8 sm:mb-10">
          <div className="flex items-center gap-1.5 p-1 bg-[#E2EBEF] dark:bg-[#0E252D] rounded-xl w-max sm:w-auto sm:max-w-fit">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 min-h-[38px] ${
                activeFilter === 'all'
                  ? 'bg-[#122F38] text-white dark:bg-[#C5B088] dark:text-[#0B1C22] shadow-sm'
                  : 'text-[#33535E] dark:text-[#9BB3BB] hover:text-[#102A32] dark:hover:text-white'
              }`}
            >
              {t.services.filterAll}
            </button>
            <button
              onClick={() => setActiveFilter('notary')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 min-h-[38px] ${
                activeFilter === 'notary'
                  ? 'bg-[#122F38] text-white dark:bg-[#C5B088] dark:text-[#0B1C22] shadow-sm'
                  : 'text-[#33535E] dark:text-[#9BB3BB] hover:text-[#102A32] dark:hover:text-white'
              }`}
            >
              {t.services.filterNotary}
            </button>
            <button
              onClick={() => setActiveFilter('consultation')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 min-h-[38px] ${
                activeFilter === 'consultation'
                  ? 'bg-[#122F38] text-white dark:bg-[#C5B088] dark:text-[#0B1C22] shadow-sm'
                  : 'text-[#33535E] dark:text-[#9BB3BB] hover:text-[#102A32] dark:hover:text-white'
              }`}
            >
              {t.services.filterConsultation}
            </button>
            <button
              onClick={() => setActiveFilter('litigation')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 min-h-[38px] ${
                activeFilter === 'litigation'
                  ? 'bg-[#122F38] text-white dark:bg-[#C5B088] dark:text-[#0B1C22] shadow-sm'
                  : 'text-[#33535E] dark:text-[#9BB3BB] hover:text-[#102A32] dark:hover:text-white'
              }`}
            >
              {t.services.filterLitigation}
            </button>
            <button
              onClick={() => setActiveFilter('corporate')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 min-h-[38px] ${
                activeFilter === 'corporate'
                  ? 'bg-[#122F38] text-white dark:bg-[#C5B088] dark:text-[#0B1C22] shadow-sm'
                  : 'text-[#33535E] dark:text-[#9BB3BB] hover:text-[#102A32] dark:hover:text-white'
              }`}
            >
              {t.services.filterCorporate}
            </button>
          </div>
        </div>

        {/* Services Asymmetric Bento / Card Grid (Responsive: 1 col on mobile, 2 on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredServices.map((service: ServiceItem, index: number) => {
            const Icon = getCategoryIcon(service.category);
            const title = isAr ? service.titleAr : service.titleEn;
            const desc = isAr ? service.descAr : service.descEn;
            const details = isAr ? service.detailsAr : service.detailsEn;
            const duration = isAr ? service.durationAr : service.durationEn;

            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between p-5 sm:p-7 rounded-2xl bg-white dark:bg-[#122F38] border border-[#D7E1E4] dark:border-[#1E434F] hover:border-[#C5B088]/60 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Card Header with Icon & Editorial Index */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF0F2] dark:bg-[#1A3D48] flex items-center justify-center text-[#8A724B] dark:text-[#D4C3A3] group-hover:bg-[#122F38] group-hover:text-[#D4C3A3] dark:group-hover:bg-[#C5B088] dark:group-hover:text-[#0B1C22] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    {/* Unboxed Zero-Pill Metadata */}
                    <div className="flex items-center gap-2 text-xs text-[#526D75] dark:text-[#8AA2A9] font-mono">
                      <span>0{index + 1}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-sans font-medium text-[#8A724B] dark:text-[#D4C3A3]">
                        {duration}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#102A32] dark:text-[#F1F6F8] mb-2 leading-snug">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#435F68] dark:text-[#A7BAC0] leading-relaxed mb-4 sm:mb-5">
                    {desc}
                  </p>

                  {/* Key Highlights */}
                  <div className="pt-2 border-t border-[#E5ECEE] dark:border-[#1A3D48] space-y-2 mb-5">
                    <div className="text-xs font-semibold text-[#526D75] dark:text-[#8AA2A9] mb-1">
                      {t.services.includedDetails}
                    </div>
                    {details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#254A56] dark:text-[#C5D5D8]">
                        <Check className="w-3.5 h-3.5 text-[#8A724B] dark:text-[#D4C3A3] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectServiceForFunnel(service.category, title)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#102A32] dark:text-[#F1F6F8] bg-[#E8EFF1] dark:bg-[#1A3D48] hover:bg-[#122F38] hover:text-white dark:hover:bg-[#C5B088] dark:hover:text-[#0B1C22] transition-all duration-150 min-h-[42px]"
                  >
                    <span>{t.services.orderService}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
