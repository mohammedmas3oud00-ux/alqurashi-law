import React from 'react';

interface BrandLogoProps {
  variant?: 'mark' | 'full';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
  lang?: 'ar' | 'en';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  className = '',
  showText = false,
  lang = 'ar',
}) => {
  const isAr = lang === 'ar';

  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32 md:w-40 md:h-40',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official Identity Logo Mark */}
      <div
        className={`${sizeClasses[size]} relative rounded-xl overflow-hidden shrink-0 bg-[#122F38] border border-[#C5B088]/40 shadow-sm flex items-center justify-center`}
      >
        <img
          src="/assets/aistudio/image_4ce784a0.png"
          alt="شعار مساعد سعود القرشي للمحاماة والاستشارات القانونية"
          className="w-full h-full object-cover transform scale-110"
          loading="eager"
        />
      </div>

      {showText && (
        <div className="flex flex-col text-start">
          <span className="text-sm sm:text-base font-bold text-[#102A32] dark:text-[#E8EEF0] tracking-tight leading-tight">
            {isAr ? 'مساعد سعود القرشي' : 'Musaid Saud Al-Qurashi'}
          </span>
          <span className="text-[11px] sm:text-xs text-[#8A724B] dark:text-[#D4C3A3] font-medium tracking-tight">
            {isAr ? 'للمحاماة والاستشارات القانونية' : 'For Law & Legal Consultations'}
          </span>
        </div>
      )}
    </div>
  );
};
