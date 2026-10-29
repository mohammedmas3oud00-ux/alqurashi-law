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
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-[#8B6E27] dark:text-[#D8AF3B] tracking-wider uppercase mb-2">
              {t.services.tag}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#141414] dark:text-[#F6F5F2] tracking-tight">
              {t.services.title}
            </h2>
            <p className="text-sm sm:text-base text-[#606066] dark:text-[#9A9992] mt-1.5">
              {t.services.subtitle}
            </p>
          </div>

          {/* Quick Notary Accreditation Highlight */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8B6E27] dark:text-[#D8AF3B] bg-[#F4F1E8] dark:bg-[#1E1E22] px-3.5 py-2 rounded-lg border border-[#E3DFC8] dark:border-[#2C2C30] self-start md:self-auto">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>{isAr ? 'موثق معتمد لإنجاز الوكالات والإفراغات فورياً' : 'Certified Notary for Instant Deeds'}</span>
          </div>
        </div>

        {/* Interactive Segmented Filter Controls (Clean button group) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#ECE9E0] dark:bg-[#19191C] rounded-xl mb-10 max-w-fit">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 ${
              activeFilter === 'all'
                ? 'bg-white dark:bg-[#252529] text-[#141414] dark:text-[#F5F4EF] shadow-sm'
                : 'text-[#58585E] dark:text-[#9D9C96] hover:text-[#141414] dark:hover:text-white'
            }`}
          >
            {t.services.filterAll}
          </button>
          <button
            onClick={() => setActiveFilter('notary')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 ${
              activeFilter === 'notary'
                ? 'bg-white dark:bg-[#252529] text-[#141414] dark:text-[#F5F4EF] shadow-sm'
                : 'text-[#58585E] dark:text-[#9D9C96] hover:text-[#141414] dark:hover:text-white'
            }`}
          >
            {t.services.filterNotary}
          </button>
          <button
            onClick={() => setActiveFilter('consultation')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 ${
              activeFilter === 'consultation'
                ? 'bg-white dark:bg-[#252529] text-[#141414] dark:text-[#F5F4EF] shadow-sm'
                : 'text-[#58585E] dark:text-[#9D9C96] hover:text-[#141414] dark:hover:text-white'
            }`}
          >
            {t.services.filterConsultation}
          </button>
          <button
            onClick={() => setActiveFilter('litigation')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 ${
              activeFilter === 'litigation'
                ? 'bg-white dark:bg-[#252529] text-[#141414] dark:text-[#F5F4EF] shadow-sm'
                : 'text-[#58585E] dark:text-[#9D9C96] hover:text-[#141414] dark:hover:text-white'
            }`}
          >
            {t.services.filterLitigation}
          </button>
          <button
            onClick={() => setActiveFilter('corporate')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 ${
              activeFilter === 'corporate'
                ? 'bg-white dark:bg-[#252529] text-[#141414] dark:text-[#F5F4EF] shadow-sm'
                : 'text-[#58585E] dark:text-[#9D9C96] hover:text-[#141414] dark:hover:text-white'
            }`}
          >
            {t.services.filterCorporate}
          </button>
        </div>

        {/* Services Asymmetric Bento / Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: ServiceItem, index: number) => {
            const Icon = getCategoryIcon(service.category);
            const title = isAr ? service.titleAr : service.titleEn;
            const desc = isAr ? service.descAr : service.descEn;
            const details = isAr ? service.detailsAr : service.detailsEn;
            const duration = isAr ? service.durationAr : service.durationEn;

            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#FAF9F5] dark:bg-[#161618] border border-[#E5E2DA] dark:border-[#27272B] hover:border-[#C59B27]/50 dark:hover:border-[#C59B27]/40 transition-all duration-200 shadow-sm hover:shadow"
              >
                <div>
                  {/* Card Header with Icon & Editorial Index */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EFECE5] dark:bg-[#212125] flex items-center justify-center text-[#8B6E27] dark:text-[#D8AF3B] group-hover:bg-[#141414] group-hover:text-white dark:group-hover:bg-[#C59B27] dark:group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    {/* Unboxed Zero-Pill Metadata */}
                    <div className="flex items-center gap-2 text-xs text-[#707075] dark:text-[#8E8D88] font-mono">
                      <span>0{index + 1}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-sans font-medium text-[#8B6E27] dark:text-[#D8AF3B]">
                        {duration}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#141414] dark:text-[#F3F2EE] mb-2.5">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#55555B] dark:text-[#A1A09A] leading-relaxed mb-5">
                    {desc}
                  </p>

                  {/* Key Highlights */}
                  <div className="pt-2 border-t border-[#EAE7DF] dark:border-[#242428] space-y-2 mb-6">
                    <div className="text-xs font-semibold text-[#707075] dark:text-[#888884] mb-1">
                      {t.services.includedDetails}
                    </div>
                    {details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#3E3E44] dark:text-[#BEBDB6]">
                        <Check className="w-3.5 h-3.5 text-[#8B6E27] dark:text-[#D8AF3B] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectServiceForFunnel(service.category, title)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#18181A] dark:text-[#F0EFEB] bg-[#EBE8E0] dark:bg-[#202024] hover:bg-[#141414] hover:text-white dark:hover:bg-[#F3F2EE] dark:hover:text-[#141414] transition-all duration-150"
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
