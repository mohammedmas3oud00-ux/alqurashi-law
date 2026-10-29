import React, { useState } from 'react';
import { Send, Copy, Check, Sparkles, Building, User, MapPin, Laptop, AlertCircle } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
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
          ? 'يرجى كتابة الاسم أو رقم الجوال لتسهيل متابعة طلبك.'
          : 'Please enter at least your name or phone number so we can process your request.'
      );
      return;
    }
    setErrorMessage('');
    openWhatsAppChat(previewMessage);
  };

  return (
    <section id="funnel" className="py-14 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-[#8A724B] dark:text-[#D4C3A3] tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5B088]" />
            <span>{t.funnel.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#102A32] dark:text-[#F1F6F8] tracking-tight">
            {t.funnel.title}
          </h2>
          <p className="text-sm sm:text-base text-[#435F68] dark:text-[#A7BAC0] mt-1.5 leading-relaxed">
            {t.funnel.subtitle}
          </p>
        </div>

        {/* Funnel Layout: Form on one side, Live WhatsApp Preview on the other */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Interactive Intake Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 p-5 sm:p-8 rounded-2xl bg-white dark:bg-[#122F38] border border-[#D7E1E4] dark:border-[#1E434F] space-y-6 sm:space-y-7 shadow-sm"
          >
            
            {/* Step 1: Track Selection */}
            <div>
              <label className="block text-xs font-bold text-[#102A32] dark:text-[#F1F6F8] uppercase tracking-wider mb-2.5 sm:mb-3">
                {t.funnel.step1Title}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
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
                    className={`p-3 text-start rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-150 min-h-[44px] ${
                      funnelState.track === track.id
                        ? 'bg-[#122F38] text-white border-[#122F38] dark:bg-[#C5B088] dark:text-[#0B1C22] dark:border-[#C5B088] shadow-sm'
                        : 'bg-[#F8FAFB] dark:bg-[#163842] text-[#254A56] dark:text-[#D5E2E5] border-[#D7E1E4] dark:border-[#1F4855] hover:border-[#8A724B]'
                    }`}
                  >
                    {track.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Client Capacity */}
            <div>
              <label className="block text-xs font-bold text-[#102A32] dark:text-[#F1F6F8] uppercase tracking-wider mb-2.5 sm:mb-3">
                {t.funnel.step2Title}
              </label>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setFunnelState((prev) => ({ ...prev, clientType: 'individual' }))}
                  className={`flex items-center justify-center gap-2 py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-150 min-h-[44px] ${
                    funnelState.clientType === 'individual'
                      ? 'bg-[#122F38] text-white border-[#122F38] dark:bg-[#C5B088] dark:text-[#0B1C22] dark:border-[#C5B088]'
                      : 'bg-[#F8FAFB] dark:bg-[#163842] text-[#254A56] dark:text-[#D5E2E5] border-[#D7E1E4] dark:border-[#1F4855]'
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span className="truncate">{t.funnel.clientIndividual}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFunnelState((prev) => ({ ...prev, clientType: 'company' }))}
                  className={`flex items-center justify-center gap-2 py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-150 min-h-[44px] ${
                    funnelState.clientType === 'company'
                      ? 'bg-[#122F38] text-white border-[#122F38] dark:bg-[#C5B088] dark:text-[#0B1C22] dark:border-[#C5B088]'
                      : 'bg-[#F8FAFB] dark:bg-[#163842] text-[#254A56] dark:text-[#D5E2E5] border-[#D7E1E4] dark:border-[#1F4855]'
                  }`}
                >
                  <Building className="w-4 h-4" />
                  <span className="truncate">{t.funnel.clientCompany}</span>
                </button>
              </div>
            </div>

            {/* Step 3: Delivery Mode */}
            <div>
              <label className="block text-xs font-bold text-[#102A32] dark:text-[#F1F6F8] uppercase tracking-wider mb-2.5 sm:mb-3">
                {t.funnel.step3Title}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setFunnelState((prev) => ({ ...prev, deliveryMode: 'office' }))}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-150 min-h-[44px] ${
                    funnelState.deliveryMode === 'office'
                      ? 'bg-[#122F38] text-white border-[#122F38] dark:bg-[#C5B088] dark:text-[#0B1C22] dark:border-[#C5B088]'
                      : 'bg-[#F8FAFB] dark:bg-[#163842] text-[#254A56] dark:text-[#D5E2E5] border-[#D7E1E4] dark:border-[#1F4855]'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-[#EA4335]" />
                  <span>{t.funnel.modeOffice}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFunnelState((prev) => ({ ...prev, deliveryMode: 'remote' }))}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-150 min-h-[44px] ${
                    funnelState.deliveryMode === 'remote'
                      ? 'bg-[#122F38] text-white border-[#122F38] dark:bg-[#C5B088] dark:text-[#0B1C22] dark:border-[#C5B088]'
                      : 'bg-[#F8FAFB] dark:bg-[#163842] text-[#254A56] dark:text-[#D5E2E5] border-[#D7E1E4] dark:border-[#1F4855]'
                  }`}
                >
                  <Laptop className="w-4 h-4 text-[#8A724B] dark:text-[#D4C3A3]" />
                  <span>{t.funnel.modeRemote}</span>
                </button>
              </div>
            </div>

            {/* Step 4: Contact Inputs */}
            <div className="space-y-3.5 sm:space-y-4 pt-1">
              <label className="block text-xs font-bold text-[#102A32] dark:text-[#F1F6F8] uppercase tracking-wider">
                {t.funnel.step4Title}
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <input
                    type="text"
                    value={funnelState.fullName}
                    onChange={(e) => {
                      setFunnelState((prev) => ({ ...prev, fullName: e.target.value }));
                      setErrorMessage('');
                    }}
                    placeholder={t.funnel.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFB] dark:bg-[#0E252D] border border-[#CCD7DA] dark:border-[#1F4855] text-sm text-[#102A32] dark:text-[#F1F6F8] placeholder-[#6A8892] focus:outline-none focus:ring-2 focus:ring-[#8A724B]/40"
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
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFB] dark:bg-[#0E252D] border border-[#CCD7DA] dark:border-[#1F4855] text-sm text-[#102A32] dark:text-[#F1F6F8] placeholder-[#6A8892] focus:outline-none focus:ring-2 focus:ring-[#8A724B]/40"
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
                  className="w-full px-4 py-3 rounded-xl bg-[#F8FAFB] dark:bg-[#0E252D] border border-[#CCD7DA] dark:border-[#1F4855] text-sm text-[#102A32] dark:text-[#F1F6F8] placeholder-[#6A8892] focus:outline-none focus:ring-2 focus:ring-[#8A724B]/40 resize-none"
                />
              </div>
            </div>

            {errorMessage && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 text-xs text-red-700 dark:text-red-400">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 sm:py-4 px-6 rounded-xl text-sm sm:text-base font-bold text-white bg-[#25D366] hover:bg-[#20BA5A] shadow-md hover:shadow-lg transition-all active:scale-[0.99] min-h-[48px]"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>{t.funnel.submitButton}</span>
                <Send className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
              </button>
              <p className="text-xs text-[#526D75] dark:text-[#8AA2A9] text-center mt-2.5">
                {t.funnel.note}
              </p>
            </div>

          </form>

          {/* Live Formatted WhatsApp Message Preview */}
          <div className="lg:col-span-5 p-5 sm:p-7 rounded-2xl bg-white dark:bg-[#122F38] border border-[#D7E1E4] dark:border-[#1E434F] space-y-4 shadow-sm w-full">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5ECEE] dark:border-[#1A3D48]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                  <WhatsAppIcon className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#102A32] dark:text-[#F1F6F8]">
                  {t.funnel.previewTitle}
                </span>
              </div>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-[#EAF0F2] dark:bg-[#1A3D48] text-[#254A56] dark:text-[#D5E2E5] hover:text-[#102A32] dark:hover:text-white transition-colors min-h-[30px]"
                title="Copy text"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#25D366]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'نسخ النص' : 'Copy')}</span>
              </button>
            </div>

            {/* Chat Bubble Emulation */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#F0F5F6] dark:bg-[#0E252D] border border-[#D7E1E4] dark:border-[#1A3D48] font-mono text-xs text-[#163842] dark:text-[#D5E2E5] whitespace-pre-line leading-relaxed max-h-[360px] overflow-y-auto">
              {previewMessage}
            </div>

            {/* Direct Send Target Info */}
            <div className="pt-2 text-xs text-[#526D75] dark:text-[#8AA2A9] flex items-center justify-between border-t border-[#E5ECEE] dark:border-[#1A3D48]">
              <span>{isAr ? 'المستلم: المحامي أ. مساعد القرشي' : 'Recipient: Adv. Musaid Al-Qurashi'}</span>
              <span className="font-mono font-bold text-[#102A32] dark:text-[#E8EEF0]" dir="ltr">
                {OFFICIAL_DATA.phone}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
