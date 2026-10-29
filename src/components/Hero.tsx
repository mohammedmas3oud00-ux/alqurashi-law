import React from 'react';
import { Award, ShieldCheck, ArrowLeft, ArrowRight, MessageSquare, Clock, CheckCircle2, Zap } from 'lucide-react';
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
      ? 'السلام عليكم ورحمة الله، أود الاستفسار عن الخدمات القانونية والتوثيق لدى مكتب المحامي والموثق مساعد القرشي.'
      : 'Hello, I would like to inquire about legal counsel and notary services at the Office of Attorney & Notary Mosaed Al-Qurashi.';
    openWhatsAppChat(greeting);
  };

  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Subtle ambient executive glow behind hero */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#C59B27]/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Trust Markers (Zero-Pill Discipline: Unboxed text with subtle typographic dot separator) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-[#8B6E27] dark:text-[#D8AF3B]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
                <span>{t.hero.badgeMoJ}</span>
              </div>
              <span className="text-[#88888D] dark:text-[#55555A]" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#C59B27]" />
                <span>{t.hero.badgeLLM}</span>
              </div>
            </div>

            {/* Dominant Display Headline with text-wrap balance */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[#141414] dark:text-[#F6F5F2] leading-[1.2] max-w-2xl [text-wrap:balance]">
              {t.hero.headline}
            </h1>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-[#55555A] dark:text-[#A9A8A2] leading-relaxed max-w-xl">
              {t.hero.subhead}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
              <button
                onClick={onNavigateToFunnel}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold rounded-xl text-white bg-[#141414] hover:bg-[#28282B] dark:bg-[#F3F2EE] dark:text-[#141414] dark:hover:bg-[#DFDDD5] shadow-sm hover:shadow transition-all duration-150 active:scale-[0.98]"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>

              <button
                onClick={handleDirectWhatsApp}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-medium rounded-xl text-[#18181B] dark:text-[#E8E7E2] bg-[#EFECE6] dark:bg-[#1E1E22] hover:bg-[#E5E2DC] dark:hover:bg-[#28282C] border border-[#DDD9D1] dark:border-[#313136] transition-colors duration-150"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>{t.hero.secondaryCta}</span>
              </button>
            </div>

            {/* Quiet Quick Phone Contact */}
            <div className="pt-2 text-xs text-[#707075] dark:text-[#8E8D88] flex items-center gap-2">
              <span>{isAr ? 'الاتصال المباشر:' : 'Direct Telephone:'}</span>
              <a
                href={`tel:${OFFICIAL_DATA.phoneRaw}`}
                className="font-mono font-semibold text-[#141414] dark:text-[#E5E4DE] hover:underline"
                dir="ltr"
              >
                {OFFICIAL_DATA.phone}
              </a>
              <span aria-hidden="true">·</span>
              <span>{isAr ? 'مكة المكرمة (حي الشرائع)' : 'Makkah (Al-Sharaya\'a)'}</span>
            </div>

          </div>

          {/* Focal Graphic Frame: Executive Notary & Law Seal Presentation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-b from-[#FAF9F6] to-[#F1EFEA] dark:from-[#18181A] dark:to-[#121213] rounded-2xl p-6 sm:p-8 border border-[#E2DFD7] dark:border-[#2C2C30] shadow-sm relative overflow-hidden">
              
              {/* Subtle Guilloche / Geometric Watermark */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-[#C59B27]/15 dark:border-[#C59B27]/10 pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full border border-[#C59B27]/10 dark:border-[#C59B27]/5 pointer-events-none" />

              <div className="relative z-10 flex flex-col space-y-6">
                
                {/* Official Crest Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E2DFD7] dark:border-[#28282C]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#141414] dark:bg-[#222225] text-[#D8AF3B] flex items-center justify-center shadow-inner">
                      <ShieldCheck className="w-6 h-6" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#8B6E27] dark:text-[#D8AF3B] uppercase tracking-wider">
                        {isAr ? 'الترخيص العدلي الرسمي' : 'Official Judicial License'}
                      </div>
                      <div className="text-sm font-bold text-[#141414] dark:text-[#F3F2EE]">
                        {isAr ? 'وزارة العدل السعودية' : 'Ministry of Justice - KSA'}
                      </div>
                    </div>
                  </div>
                  <div className="text-end font-mono text-xs text-[#707075] dark:text-[#8E8D88]">
                    <span>2026</span>
                  </div>
                </div>

                {/* Pedigree Card Information */}
                <div className="space-y-3.5">
                  <div className="p-3.5 rounded-xl bg-white/70 dark:bg-[#1E1E21]/70 border border-[#E5E2DA] dark:border-[#2A2A2E]">
                    <div className="text-xs text-[#77777C] dark:text-[#8E8D88] mb-1">
                      {isAr ? 'المؤهل الأكاديمي الدولي' : 'International Academic Degree'}
                    </div>
                    <div className="text-sm font-semibold text-[#141414] dark:text-[#F3F2EE]">
                      {OFFICIAL_DATA.degreeAr}
                    </div>
                    <div className="text-xs text-[#8B6E27] dark:text-[#C59B27] mt-0.5" dir="ltr">
                      Master of Laws (LL.M.) — United States
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/70 dark:bg-[#1E1E21]/70 border border-[#E5E2DA] dark:border-[#2A2A2E]">
                    <div className="text-xs text-[#77777C] dark:text-[#8E8D88] mb-1">
                      {isAr ? 'الكيان المؤسسي المعتمد' : 'Corporate Legal Entity'}
                    </div>
                    <div className="text-sm font-semibold text-[#141414] dark:text-[#F3F2EE]">
                      {OFFICIAL_DATA.firmAr}
                    </div>
                    <div className="text-xs text-[#5C5C60] dark:text-[#9A9992] mt-0.5">
                      {isAr ? 'استشارات قانونية وتوثيق متكامل للشركات والأفراد' : 'Full-service enterprise & personal counsel'}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/70 dark:bg-[#1E1E21]/70 border border-[#E5E2DA] dark:border-[#2A2A2E] flex items-center justify-between">
                    <div>
                      <div className="text-xs text-[#77777C] dark:text-[#8E8D88]">
                        {isAr ? 'سرعة التوثيق الفوري' : 'Certified Notary Turnaround'}
                      </div>
                      <div className="text-sm font-bold text-[#1F6A38] dark:text-[#4ADE80]">
                        {isAr ? 'إنجاز خلال دقائق عبر البوابة العدلية' : 'Instant digital turnaround'}
                      </div>
                    </div>
                    <Zap className="w-5 h-5 text-[#1F6A38] dark:text-[#4ADE80]" />
                  </div>
                </div>

                {/* Location Micro-Bar */}
                <div className="pt-1 text-xs text-[#7A7A80] dark:text-[#8E8D88] flex items-center justify-between">
                  <span>{isAr ? 'مكة المكرمة - حي الشرائع' : 'Makkah - Al-Sharaya\'a'}</span>
                  <span className="font-mono text-[#8B6E27] dark:text-[#C59B27] font-medium">{OFFICIAL_DATA.plusCode}</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* 3-Pillar Feature Strip (Below hero split, full width) */}
        <div className="mt-16 pt-10 border-t border-[#E8E5DC] dark:border-[#26262A] grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.hero.pillars.map((pillar, idx) => {
            const icons = [Clock, ShieldCheck, Zap];
            const Icon = icons[idx] || CheckCircle2;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#FAF9F5] dark:bg-[#151517] border border-[#E8E5DC] dark:border-[#252528] transition-colors"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#EFECE6] dark:bg-[#202024] flex items-center justify-center text-[#9B7719] dark:text-[#D8AF3B]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#141414] dark:text-[#F3F2EE]">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5C5C62] dark:text-[#9A9992] leading-relaxed">
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
