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
      ? 'السلام عليكم ورحمة الله، أود التواصل مع مكتب المحامي والموثق مساعد القرشي لطلب استشارة أو خدمة توثيق.'
      : 'Hello, I would like to contact the Office of Attorney & Notary Mosaed Al-Qurashi regarding legal counsel or notary services.';
    openWhatsAppChat(message);
  };

  return (
    <div className={`fixed bottom-6 ${isAr ? 'left-6' : 'right-6'} z-40 flex items-center gap-3`}>
      {/* Subtle hover tooltip */}
      {showTooltip && (
        <div className="hidden sm:block px-3 py-1.5 rounded-lg bg-[#141414] text-white dark:bg-[#F3F2EE] dark:text-[#141414] text-xs font-semibold shadow-lg transition-opacity duration-200">
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
