import React from 'react';
import { Award, ShieldCheck, ArrowLeft, ArrowRight, Clock, CheckCircle2, Zap } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Language } from '../types';
import { DICTIONARY, OFFICIAL_DATA } from '../translations';
import { openWhatsAppChat } from '../utils/whatsapp';

interface HeroProps {
  lang: Language;
  onNavigateToFunnel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onNavigateToFunnel }) => {
  const t = DICTIONARY[lang];
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const handleDirectWhatsApp = () => {
    const greeting = isAr
      ? 'السلام عليكم ورحمة الله، أود الاستفسار عن الخدمات القانونية والتوثيق لدى مكتب المحامي والموثق مساعد سعود القرشي.'
      : 'Hello, I would like to inquire about legal counsel and notary services at the Office of Attorney & Notary Musaid Saud Al-Qurashi.';
    openWhatsAppChat(greeting);
  };

  return (
    <section id="hero" className="relative pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-24 overflow-hidden">
      {/* Ambient executive teal/gold glow behind hero */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#122F38]/10 via-[#C5B088]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-6">
            
            {/* Trust Markers (Zero-Pill Discipline: Unboxed text with subtle typographic dot separator) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-[#8A724B] dark:text-[#D4C3A3]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#A89369] dark:text-[#C5B088]" />
                <span>{t.hero.badgeMoJ}</span>
              </div>
              <span className="text-[#88888D] dark:text-[#55555A]" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#A89369] dark:text-[#C5B088]" />
                <span>{t.hero.badgeLLM}</span>
              </div>
            </div>

            {/* Dominant Display Headline with responsive clamp and balance */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.15rem] font-bold tracking-tight text-[#102A32] dark:text-[#F1F6F8] leading-[1.25] max-w-2xl [text-wrap:balance]">
              {t.hero.headline}
            </h1>

            {/* Value Proposition Description */}
            <p className="text-sm sm:text-base md:text-lg text-[#3A535C] dark:text-[#A7BAC0] leading-relaxed max-w-xl">
              {t.hero.subhead}
            </p>

            {/* Dual CTAs (Responsive: stacked on mobile, inline on sm+) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
              <button
                onClick={onNavigateToFunnel}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold rounded-xl text-white bg-[#122F38] hover:bg-[#1A424F] dark:bg-[#C5B088] dark:text-[#0B1C22] dark:hover:bg-[#D4C3A3] shadow-md hover:shadow-lg transition-all duration-150 active:scale-[0.98] w-full sm:w-auto min-h-[48px]"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>

              <button
                onClick={handleDirectWhatsApp}
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-sm sm:text-base font-medium rounded-xl text-[#102A32] dark:text-[#E8EEF0] bg-[#E8EFF1] dark:bg-[#163842] hover:bg-[#DCE7EA] dark:hover:bg-[#1E4956] border border-[#CCD7DA] dark:border-[#224E5B] transition-colors duration-150 w-full sm:w-auto min-h-[48px]"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>{t.hero.secondaryCta}</span>
              </button>
            </div>

            {/* Quiet Quick Phone Contact */}
            <div className="pt-2 text-xs text-[#526D75] dark:text-[#8AA2A9] flex flex-wrap items-center gap-2">
              <span>{isAr ? 'الاتصال المباشر:' : 'Direct Telephone:'}</span>
              <a
                href={`tel:${OFFICIAL_DATA.phoneRaw}`}
                className="font-mono font-semibold text-[#102A32] dark:text-[#E8EEF0] hover:underline"
                dir="ltr"
              >
                {OFFICIAL_DATA.phone}
              </a>
              <span aria-hidden="true">·</span>
              <span>{isAr ? 'مكة المكرمة (حي الشرائع)' : 'Makkah (Al-Sharaya\'a)'}</span>
            </div>

          </div>

          {/* Focal Graphic Frame: Executive Identity Presentation with uploaded logo */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-md bg-gradient-to-b from-[#14323B] to-[#0D2128] text-white rounded-2xl p-6 sm:p-7 border border-[#C5B088]/40 shadow-xl relative overflow-hidden">
              
              {/* Subtle Guilloche / Gold decorative rings */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-[#C5B088]/15 pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full border border-[#C5B088]/10 pointer-events-none" />

              <div className="relative z-10 flex flex-col space-y-5">
                
                {/* Official Crest Header featuring uploaded asset */}
                <div className="flex items-center gap-4 pb-4 border-b border-[#254A56]">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-[#0F262D] border border-[#C5B088]/60 overflow-hidden shadow-inner shrink-0 p-1 flex items-center justify-center">
                    <img
                      src="/assets/aistudio/image_4ce784a0.png"
                      alt="شعار مساعد سعود القرشي"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-[#D4C3A3] uppercase tracking-wider">
                      {isAr ? 'الهوية الرسمية المعتمدة' : 'Official Verified Identity'}
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {isAr ? 'مساعد سعود القرشي' : 'Musaid Saud Al-Qurashi'}
                    </div>
                    <div className="text-xs text-[#C5B088] font-medium">
                      {isAr ? 'للمحاماة والاستشارات القانونية' : 'For Law & Legal Consultations'}
                    </div>
                  </div>
                </div>

                {/* Pedigree Card Information with Petrol/Gold Accents */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-[#1A3D48]/80 border border-[#275362]">
                    <div className="text-xs text-[#9BB3BB] mb-0.5">
                      {isAr ? 'المؤهل الأكاديمي الدولي' : 'International Academic Degree'}
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {OFFICIAL_DATA.degreeAr}
                    </div>
                    <div className="text-xs text-[#D4C3A3] mt-0.5" dir="ltr">
                      Master of Laws (LL.M.) — United States
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#1A3D48]/80 border border-[#275362]">
                    <div className="text-xs text-[#9BB3BB] mb-0.5">
                      {isAr ? 'الترخيص العدلي الرسمي' : 'Official Judicial License'}
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {isAr ? 'مرخص رسمياً برخصتي محامٍ وموثق معتمد' : 'Licensed Practicing Attorney & Certified Notary'}
                    </div>
                    <div className="text-xs text-[#9BB3BB] mt-0.5">
                      {isAr ? 'وزارة العدل بالمملكة العربية السعودية' : 'Ministry of Justice - Saudi Arabia'}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#1A3D48]/80 border border-[#275362] flex items-center justify-between">
                    <div>
                      <div className="text-xs text-[#9BB3BB]">
                        {isAr ? 'سرعة التوثيق الفوري' : 'Certified Notary Turnaround'}
                      </div>
                      <div className="text-sm font-bold text-[#4ADE80]">
                        {isAr ? 'إنجاز فوري عبر البوابة العدلية' : 'Instant certified digital deeds'}
                      </div>
                    </div>
                    <Zap className="w-5 h-5 text-[#4ADE80]" />
                  </div>
                </div>

                {/* Location Micro-Bar */}
                <div className="pt-1 text-xs text-[#9BB3BB] flex items-center justify-between border-t border-[#254A56]">
                  <span>{isAr ? 'مكة المكرمة - حي الشرائع' : 'Makkah - Al-Sharaya\'a'}</span>
                  <span className="font-mono text-[#D4C3A3] font-semibold">{OFFICIAL_DATA.plusCode}</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* 3-Pillar Feature Strip (Below hero split, fully responsive) */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-[#D7E1E4] dark:border-[#1C3B45] grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {t.hero.pillars.map((pillar, idx) => {
            const icons = [Clock, ShieldCheck, Zap];
            const Icon = icons[idx] || CheckCircle2;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#FFFFFF] dark:bg-[#11282F] border border-[#D7E1E4] dark:border-[#1A3D48] transition-all hover:border-[#C5B088]/60 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#EAEFF1] dark:bg-[#163842] flex items-center justify-center text-[#8A724B] dark:text-[#D4C3A3]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#102A32] dark:text-[#E8EEF0]">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#435F68] dark:text-[#A7BAC0] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
