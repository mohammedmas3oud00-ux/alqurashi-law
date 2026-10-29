import React, { useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Language } from '../types';
import { OFFICIAL_DATA } from '../translations';
import { openWhatsAppChat } from '../utils/whatsapp';

interface FloatingWhatsAppProps {
  lang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const isAr = lang === 'ar';

  const handleClick = () => {
    const message = isAr
      ? 'السلام عليكم ورحمة الله، أود التواصل مع مكتب المحامي والموثق مساعد سعود القرشي لطلب استشارة أو خدمة توثيق.'
      : 'Hello, I would like to contact the Office of Attorney & Notary Musaid Saud Al-Qurashi regarding legal counsel or notary services.';
    openWhatsAppChat(message);
  };

  return (
    <div className={`fixed bottom-4 sm:bottom-6 ${isAr ? 'left-4 sm:left-6' : 'right-4 sm:right-6'} z-40 flex items-center gap-2.5`}>
      {/* Subtle hover tooltip */}
      {showTooltip && (
        <div className="hidden sm:block px-3 py-1.5 rounded-lg bg-[#0E252D] text-white text-xs font-semibold shadow-xl border border-[#C5B088]/40 transition-opacity duration-200">
          {isAr ? 'محادثة فورية مع مكتب المحامي والموثق' : 'Direct WhatsApp Chat with Notary'}
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Direct WhatsApp Contact"
        className="w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </button>
    </div>
  );
};
