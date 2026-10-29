import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { MapPin, Phone, Copy, Check, Download, Navigation, QrCode, ExternalLink, Maximize2, X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Language } from '../types';
import { DICTIONARY, OFFICIAL_DATA } from '../translations';
import { downloadLawyerVCard } from '../utils/vcard';
import { BrandLogo } from './BrandLogo';

interface LocationContactProps {
  lang: Language;
}

export const LocationContact: React.FC<LocationContactProps> = ({ lang }) => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [vCardDownloaded, setVCardDownloaded] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [showQrModal, setShowQrModal] = useState(false);
  const t = DICTIONARY[lang];
  const isAr = lang === 'ar';

  const whatsAppDirectUrl = `https://wa.me/${OFFICIAL_DATA.phoneRaw}`;

  // Generate authentic, scannable QR code for the WhatsApp direct link
  useEffect(() => {
    QRCode.toDataURL(whatsAppDirectUrl, {
      width: 280,
      margin: 1,
      color: {
        dark: '#102A32',
        light: '#FFFFFF',
      },
      errorCorrectionLevel: 'M',
    })
      .then((url: string) => {
        setQrDataUrl(url);
      })
      .catch((err: unknown) => {
        console.error('Error generating QR code:', err);
      });
  }, [whatsAppDirectUrl]);

  const handleCopyAddress = () => {
    const text = isAr ? OFFICIAL_DATA.addressAr : OFFICIAL_DATA.addressEn;
    navigator.clipboard.writeText(text);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(OFFICIAL_DATA.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleDownloadVCard = () => {
    downloadLawyerVCard();
    setVCardDownloaded(true);
    setTimeout(() => setVCardDownloaded(false), 3000);
  };

  // Google Maps embed URL using the provided exact coordinates (lat 21.4440127, lng 39.966812)
  const mapEmbedUrl = `https://maps.google.com/maps?q=${OFFICIAL_DATA.lat},${OFFICIAL_DATA.lng}&hl=${lang}&z=16&output=embed`;

  return (
    <section id="location" className="py-14 sm:py-20 md:py-24 bg-[#EAF0F2]/70 dark:bg-[#0D2128]/70 border-t border-[#D7E1E4] dark:border-[#173741]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="text-xs font-bold text-[#8A724B] dark:text-[#D4C3A3] tracking-wider uppercase mb-2">
            {t.location.tag}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#102A32] dark:text-[#F1F6F8] tracking-tight">
            {t.location.title}
          </h2>
          <p className="text-sm sm:text-base text-[#435F68] dark:text-[#A7BAC0] mt-1.5">
            {t.location.subtitle}
          </p>
        </div>

        {/* Location Grid: Details & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Details & Actions Card */}
          <div className="lg:col-span-5 p-5 sm:p-8 rounded-2xl bg-white dark:bg-[#122F38] border border-[#D7E1E4] dark:border-[#1E434F] shadow-sm flex flex-col justify-between space-y-5 sm:space-y-6">
            <div className="space-y-5 sm:space-y-6">
              
              {/* Office Title with Logo */}
              <div className="flex items-center gap-3">
                <BrandLogo size="md" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#102A32] dark:text-[#F1F6F8] leading-tight">
                    {isAr ? 'مساعد سعود القرشي للمحاماة' : 'Musaid Saud Al-Qurashi Law Firm'}
                  </h3>
                  <p className="text-xs text-[#8A724B] dark:text-[#D4C3A3] font-medium mt-0.5">
                    {isAr ? 'للمحاماة والاستشارات القانونية والتوثيق' : 'For Law & Legal Consultations'}
                  </p>
                </div>
              </div>

              {/* Physical Address */}
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF0F2] dark:bg-[#1A3D48] flex items-center justify-center text-[#EA4335] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#526D75] dark:text-[#8AA2A9] mb-0.5">
                      {isAr ? 'العنوان الفعلي بمكة المكرمة:' : 'Physical Address in Makkah:'}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#102A32] dark:text-[#F1F6F8] leading-snug">
                      {isAr ? OFFICIAL_DATA.addressAr : OFFICIAL_DATA.addressEn}
                    </div>
                    <div className="text-xs font-mono text-[#8A724B] dark:text-[#D4C3A3] mt-1">
                      {OFFICIAL_DATA.plusCode} · Postal Code: {OFFICIAL_DATA.postalCode}
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#E8EFF1] dark:bg-[#1A3D48] text-[#163842] dark:text-[#D5E2E5] hover:bg-[#DCE7EA] dark:hover:bg-[#204956] transition-colors min-h-[36px]"
                  >
                    {copiedAddress ? <Check className="w-3.5 h-3.5 text-[#25D366]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedAddress ? t.location.copiedAddress : t.location.copyAddress}</span>
                  </button>

                  <a
                    href={OFFICIAL_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#122F38] text-white dark:bg-[#C5B088] dark:text-[#0B1C22] hover:opacity-90 transition-opacity min-h-[36px]"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>{t.location.openGoogleMaps}</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                </div>
              </div>

              {/* Telephone & Contact */}
              <div className="space-y-2 pt-2 border-t border-[#E5ECEE] dark:border-[#1A3D48]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF0F2] dark:bg-[#1A3D48] flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#526D75] dark:text-[#8AA2A9] mb-0.5">
                      {t.location.phoneLabel}
                    </div>
                    <a
                      href={`tel:${OFFICIAL_DATA.phoneRaw}`}
                      className="text-base font-bold font-mono text-[#102A32] dark:text-[#F1F6F8] hover:underline"
                      dir="ltr"
                    >
                      {OFFICIAL_DATA.phone}
                    </a>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <button
                    onClick={handleCopyPhone}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#E8EFF1] dark:bg-[#1A3D48] text-[#163842] dark:text-[#D5E2E5] hover:bg-[#DCE7EA] dark:hover:bg-[#204956] transition-colors min-h-[36px]"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-[#25D366]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPhone ? t.location.copiedPhone : t.location.copyPhone}</span>
                  </button>

                  <a
                    href={whatsAppDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#25D366]/15 text-[#137A39] dark:text-[#4ADE80] hover:bg-[#25D366]/25 transition-colors min-h-[36px]"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

            {/* vCard & Authentic Scannable QR Code */}
            <div className="pt-4 border-t border-[#E5ECEE] dark:border-[#1A3D48] space-y-3">
              <button
                onClick={handleDownloadVCard}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold border border-[#CCD7DA] dark:border-[#224E5B] bg-[#F8FAFB] dark:bg-[#163842] text-[#102A32] dark:text-[#F1F6F8] hover:bg-[#EAEFF1] dark:hover:bg-[#1C4654] transition-all min-h-[44px]"
              >
                {vCardDownloaded ? (
                  <>
                    <Check className="w-4 h-4 text-[#25D366]" />
                    <span>{t.location.vCardSuccess}</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-[#8A724B] dark:text-[#D4C3A3]" />
                    <span>{t.location.downloadVCard}</span>
                  </>
                )}
              </button>

              {/* Scannable WhatsApp QR Code Box */}
              <div className="p-3.5 rounded-xl bg-[#F8FAFB] dark:bg-[#0E252D] border border-[#D7E1E4] dark:border-[#1F4855] flex items-center justify-between gap-3">
                <div className="flex flex-col space-y-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#102A32] dark:text-[#F1F6F8]">
                    <QrCode className="w-4 h-4 text-[#8A724B] dark:text-[#D4C3A3] shrink-0" />
                    <span className="truncate">{isAr ? 'رمز الواتساب الرسمي (قابل للمسح)' : 'Official WhatsApp QR Code'}</span>
                  </div>
                  <p className="text-[11px] text-[#526D75] dark:text-[#8AA2A9] leading-tight">
                    {isAr ? 'وجّه كاميرا هاتفك للمحادثة المباشرة أو اضغط للتكبير' : 'Scan with camera to chat or tap to enlarge'}
                  </p>
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => setShowQrModal(true)}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#8A724B] dark:text-[#D4C3A3] hover:underline"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span>{isAr ? 'تكبير الرمز' : 'Enlarge QR'}</span>
                    </button>
                  </div>
                </div>

                {/* Real Rendered QR Code */}
                <div
                  onClick={() => setShowQrModal(true)}
                  className="cursor-pointer group relative p-1.5 bg-white rounded-lg border border-[#CCD7DA] dark:border-white/20 shadow-sm shrink-0"
                  title={isAr ? 'اضغط للتكبير' : 'Click to enlarge'}
                >
                  {qrDataUrl ? (
                    <img
                      src={qrDataUrl}
                      alt="WhatsApp QR Code"
                      className="w-16 h-16 object-contain rounded"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-slate-100 animate-pulse rounded" />
                  )}
                </div>
              </div>

            </div>

          </div>

          {/* Interactive Map Embed (Responsive height) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#D7E1E4] dark:border-[#1E434F] bg-[#E8EFF1] dark:bg-[#0E252D] flex flex-col shadow-sm">
            <div className="p-3 px-4 bg-white/80 dark:bg-[#122F38]/80 backdrop-blur-sm border-b border-[#D7E1E4] dark:border-[#1E434F] flex items-center justify-between text-xs text-[#526D75] dark:text-[#9BB3BB]">
              <span className="font-semibold text-[#102A32] dark:text-[#F1F6F8]">{t.location.interactiveMapLabel}</span>
              <span className="font-mono">{OFFICIAL_DATA.lat}, {OFFICIAL_DATA.lng}</span>
            </div>
            
            <div className="relative w-full h-[320px] sm:h-[400px] lg:h-full min-h-[320px]">
              <iframe
                title="Google Maps Office Location"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-[1.02] dark:invert-[0.9] dark:hue-rotate-180 dark:contrast-[0.95]"
              />
            </div>
          </div>

        </div>

      </div>

      {/* QR Code Enlarged Modal */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-sm p-6 rounded-2xl bg-white dark:bg-[#122F38] border border-[#CCD7DA] dark:border-[#1E434F] shadow-2xl text-center space-y-4">
            
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 left-4 p-1.5 rounded-lg text-[#526D75] dark:text-[#9BB3BB] hover:bg-[#EAEFF1] dark:hover:bg-[#1A3D48] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pt-2 flex flex-col items-center">
              <BrandLogo size="md" className="mb-2" />
              <h3 className="text-base font-bold text-[#102A32] dark:text-[#F1F6F8]">
                {isAr ? 'امسح الرمز للتواصل المباشر' : 'Scan to Connect via WhatsApp'}
              </h3>
              <p className="text-xs text-[#526D75] dark:text-[#9BB3BB] mt-0.5">
                {isAr ? 'مساعد سعود القرشي للمحاماة والاستشارات القانونية' : 'Musaid Saud Al-Qurashi Law Firm'}
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#CCD7DA] inline-block shadow-inner">
              {qrDataUrl && (
                <img
                  src={qrDataUrl}
                  alt="Enlarged WhatsApp QR Code"
                  className="w-48 h-48 sm:w-52 sm:h-52 object-contain mx-auto"
                />
              )}
            </div>

            <div className="space-y-2">
              <a
                href={whatsAppDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#20BA5A] transition-colors shadow-sm min-h-[44px]"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>{isAr ? 'فتح المحادثة مباشرة في واتساب' : 'Open Directly in WhatsApp'}</span>
              </a>

              <div className="text-xs font-mono text-[#8A724B] dark:text-[#D4C3A3]" dir="ltr">
                {OFFICIAL_DATA.phone}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
