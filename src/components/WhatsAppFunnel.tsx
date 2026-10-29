import React, { useState } from 'react';
import { Send, MessageSquare, Copy, Check, Sparkles, Building, User, MapPin, Laptop, AlertCircle } from 'lucide-react';
import { Language, FunnelState } from '../types';
import { DICTIONARY, OFFICIAL_DATA } from '../translations';
import { formatWhatsAppMessage, openWhatsAppChat } from '../utils/whatsapp';

interface WhatsAppFunnelProps {
  lang: Language;
  funnelState: FunnelState;
  setFunnelState: React.Dispatch<React.SetStateAction<FunnelState>>;
}

export const WhatsAppFunnel: React.FC<WhatsAppFunnelProps> = ({
  lang,
  funnelState,
  setFunnelState,
}) => {
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const t = DICTIONARY[lang];
  const isAr = lang === 'ar';

  const previewMessage = formatWhatsAppMessage(funnelState, lang);

  const handleCopy = () => {
    navigator.clipboard.writeText(previewMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!funnelState.fullName.trim() && !funnelState.phone.trim()) {
      setErrorMessage(
        isAr
          ? 'يرجى كتابة الاسم أو رقم الجوال على الأقل لتسهيل متابعة طلبك.'
          : 'Please enter at least your name or phone number so we can process your request.'
      );
      return;
    }
    setErrorMessage('');
    openWhatsAppChat(previewMessage);
  };

  return (
    <section id="funnel" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-[#8B6E27] dark:text-[#D8AF3B] tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>{t.funnel.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#141414] dark:text-[#F6F5F2] tracking-tight">
            {t.funnel.title}
          </h2>
          <p className="text-sm sm:text-base text-[#606066] dark:text-[#9A9992] mt-1.5 leading-relaxed">
            {t.funnel.subtitle}
          </p>
        </div>

        {/* Funnel Layout: Form on one side, Live WhatsApp Preview on the other */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Intake Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#FAF9F5] dark:bg-[#161618] border border-[#E5E2DA] dark:border-[#27272B] space-y-7 shadow-sm"
          >
            
            {/* Step 1: Track Selection */}
            <div>
              <label className="block text-xs font-bold text-[#141414] dark:text-[#F3F2EE] uppercase tracking-wider mb-3">
                {t.funnel.step1Title}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'notary', label: t.funnel.trackNotary },
                  { id: 'consultation', label: t.funnel.trackConsultation },
                  { id: 'litigation', label: t.funnel.trackLitigation },
                  { id: 'corporate', label: t.funnel.trackCorporate },
                ].map((track) => (
                  <button
                    key={track.id}
                    type="button"
                    onClick={() => {
                      setFunnelState((prev) => ({ ...prev, track: track.id as any }));
                      setErrorMessage('');
                    }}
                    className={`p-3 text-start rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-150 ${
                      funnelState.track === track.id
                        ? 'bg-[#141414] text-white border-[#141414] dark:bg-[#F3F2EE] dark:text-[#141414] dark:border-[#F3F2EE] shadow-sm'
                        : 'bg-white dark:bg-[#1F1F23] text-[#333338] dark:text-[#CCCCCC] border-[#E0DDD5] dark:border-[#2C2C30] hover:border-[#8B6E27]'
                    }`}
                  >
                    {track.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Client Capacity */}
            <div>
              <label className="block text-xs font-bold text-[#141414] dark:text-[#F3F2EE] uppercase tracking-wider mb-3">
                {t.funnel.step2Title}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFunnelState((prev) => ({ ...prev, clientType: 'individual' }))}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-150 ${
                    funnelState.clientType === 'individual'
                      ? 'bg-[#141414] text-white border-[#141414] dark:bg-[#F3F2EE] dark:text-[#141414] dark:border-[#F3F2EE]'
                      : 'bg-white dark:bg-[#1F1F23] text-[#333338] dark:text-[#CCCCCC] border-[#E0DDD5] dark:border-[#2C2C30]'
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span>{t.funnel.clientIndividual}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFunnelState((prev) => ({ ...prev, clientType: 'company' }))}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-150 ${
                    funnelState.clientType === 'company'
                      ? 'bg-[#141414] text-white border-[#141414] dark:bg-[#F3F2EE] dark:text-[#141414] dark:border-[#F3F2EE]'
                      : 'bg-white dark:bg-[#1F1F23] text-[#333338] dark:text-[#CCCCCC] border-[#E0DDD5] dark:border-[#2C2C30]'
                  }`}
                >
                  <Building className="w-4 h-4" />
                  <span>{t.funnel.clientCompany}</span>
                </button>
              </div>
            </div>

            {/* Step 3: Delivery Mode */}
            <div>
              <label className="block text-xs font-bold text-[#141414] dark:text-[#F3F2EE] uppercase tracking-wider mb-3">
                {t.funnel.step3Title}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFunnelState((prev) => ({ ...prev, deliveryMode: 'office' }))}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-150 ${
                    funnelState.deliveryMode === 'office'
                      ? 'bg-[#141414] text-white border-[#141414] dark:bg-[#F3F2EE] dark:text-[#141414] dark:border-[#F3F2EE]'
                      : 'bg-white dark:bg-[#1F1F23] text-[#333338] dark:text-[#CCCCCC] border-[#E0DDD5] dark:border-[#2C2C30]'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-[#EA4335]" />
                  <span>{t.funnel.modeOffice}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFunnelState((prev) => ({ ...prev, deliveryMode: 'remote' }))}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-150 ${
                    funnelState.deliveryMode === 'remote'
                      ? 'bg-[#141414] text-white border-[#141414] dark:bg-[#F3F2EE] dark:text-[#141414] dark:border-[#F3F2EE]'
                      : 'bg-white dark:bg-[#1F1F23] text-[#333338] dark:text-[#CCCCCC] border-[#E0DDD5] dark:border-[#2C2C30]'
                  }`}
                >
                  <Laptop className="w-4 h-4 text-[#8B6E27] dark:text-[#D8AF3B]" />
                  <span>{t.funnel.modeRemote}</span>
                </button>
              </div>
            </div>

            {/* Step 4: Contact Inputs */}
            <div className="space-y-4 pt-1">
              <label className="block text-xs font-bold text-[#141414] dark:text-[#F3F2EE] uppercase tracking-wider">
                {t.funnel.step4Title}
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    value={funnelState.fullName}
                    onChange={(e) => {
                      setFunnelState((prev) => ({ ...prev, fullName: e.target.value }));
                      setErrorMessage('');
                    }}
                    placeholder={t.funnel.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1C1C20] border border-[#DDD9D1] dark:border-[#2E2E33] text-sm text-[#141414] dark:text-[#F3F2EE] placeholder-[#88888F] focus:outline-none focus:ring-2 focus:ring-[#8B6E27]/40"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    value={funnelState.phone}
                    onChange={(e) => {
                      setFunnelState((prev) => ({ ...prev, phone: e.target.value }));
                      setErrorMessage('');
                    }}
                    placeholder={t.funnel.phonePlaceholder}
                    dir="ltr"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1C1C20] border border-[#DDD9D1] dark:border-[#2E2E33] text-sm text-[#141414] dark:text-[#F3F2EE] placeholder-[#88888F] focus:outline-none focus:ring-2 focus:ring-[#8B6E27]/40"
                  />
                </div>
              </div>

              <div>
                <textarea
                  rows={3}
                  value={funnelState.summary}
                  onChange={(e) => {
                    setFunnelState((prev) => ({ ...prev, summary: e.target.value }));
                    setErrorMessage('');
                  }}
                  placeholder={t.funnel.summaryPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1C1C20] border border-[#DDD9D1] dark:border-[#2E2E33] text-sm text-[#141414] dark:text-[#F3F2EE] placeholder-[#88888F] focus:outline-none focus:ring-2 focus:ring-[#8B6E27]/40 resize-none"
                />
              </div>
            </div>

            {errorMessage && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 text-xs text-red-700 dark:text-red-400">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl text-sm sm:text-base font-bold text-white bg-[#25D366] hover:bg-[#20BA5A] shadow hover:shadow-md transition-all active:scale-[0.99]"
              >
                <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
                <span>{t.funnel.submitButton}</span>
                <Send className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
              </button>
              <p className="text-xs text-[#707076] dark:text-[#8E8D88] text-center mt-2.5">
                {t.funnel.note}
              </p>
            </div>

          </form>

          {/* Live Formatted WhatsApp Message Preview */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#171719] border border-[#E5E2DA] dark:border-[#28282C] space-y-4 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#ECE9E2] dark:border-[#252528]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#141414] dark:text-[#F3F2EE]">
                  {t.funnel.previewTitle}
                </span>
              </div>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-[#F3F1EC] dark:bg-[#222226] text-[#444448] dark:text-[#BEBDB6] hover:text-[#141414] dark:hover:text-white transition-colors"
                title="Copy text"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#25D366]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'نسخ النص' : 'Copy')}</span>
              </button>
            </div>

            {/* Chat Bubble Emulation */}
            <div className="p-4 rounded-xl bg-[#EFECE4]/50 dark:bg-[#1E1E22]/60 border border-[#E5E2DA] dark:border-[#2C2C30] font-mono text-xs text-[#2A2A2E] dark:text-[#D5D4CE] whitespace-pre-line leading-relaxed max-h-[380px] overflow-y-auto">
              {previewMessage}
            </div>

            {/* Direct Send Target Info */}
            <div className="pt-2 text-xs text-[#6B6B70] dark:text-[#8E8D88] flex items-center justify-between">
              <span>{isAr ? 'المستلم: المحامي أ. مساعد القرشي' : 'Recipient: Adv. Mosaed Al-Qurashi'}</span>
              <span className="font-mono font-bold text-[#141414] dark:text-[#ECEBE6]" dir="ltr">
                {OFFICIAL_DATA.phone}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
