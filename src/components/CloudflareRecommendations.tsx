import React, { useState } from 'react';
import { Cloud, Copy, Check, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY } from '../translations';

interface CloudflareRecommendationsProps {
  lang: Language;
}

export const CloudflareRecommendations: React.FC<CloudflareRecommendationsProps> = ({ lang }) => {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const t = DICTIONARY[lang];

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2500);
  };

  return (
    <div className="py-10 bg-[#FAF9F6] dark:bg-[#151517] border-y border-[#E8E5DC] dark:border-[#222226]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-white dark:bg-[#1A1A1D] border border-[#E5E2DA] dark:border-[#2A2A2E] shadow-sm">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 pb-4 border-b border-[#EFECE5] dark:border-[#252528]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#F6821F]/10 flex items-center justify-center text-[#F6821F]">
                <Cloud className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#8B6E27] dark:text-[#D8AF3B] uppercase tracking-wider block">
                  {t.cloudflare.badge}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-[#141414] dark:text-[#F3F2EE]">
                  {t.cloudflare.title}
                </h4>
              </div>
            </div>
            <p className="text-xs text-[#6B6B70] dark:text-[#9A9992] max-w-md">
              {t.cloudflare.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Option 1 */}
            <div className="p-4 rounded-xl bg-[#FAF9F5] dark:bg-[#202024] border border-[#E8E5DC] dark:border-[#2D2D32] flex items-center justify-between gap-3">
              <div>
                <div className="text-sm font-bold font-mono text-[#141414] dark:text-[#F3F2EE]" dir="ltr">
                  https://{t.cloudflare.opt1Title}
                </div>
                <div className="text-xs text-[#606066] dark:text-[#9A9992] mt-0.5">
                  {t.cloudflare.opt1Desc}
                </div>
              </div>
              <button
                onClick={() => handleCopy(`https://${t.cloudflare.opt1Title}`)}
                className="p-2 rounded-lg bg-white dark:bg-[#28282C] border border-[#DDD9D0] dark:border-[#38383E] text-[#333338] dark:text-[#D1D0C9] hover:text-[#141414] dark:hover:text-white transition-colors shrink-0"
                title="Copy URL"
              >
                {copiedUrl === `https://${t.cloudflare.opt1Title}` ? (
                  <Check className="w-4 h-4 text-[#25D366]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Option 2 */}
            <div className="p-4 rounded-xl bg-[#FAF9F5] dark:bg-[#202024] border border-[#E8E5DC] dark:border-[#2D2D32] flex items-center justify-between gap-3">
              <div>
                <div className="text-sm font-bold font-mono text-[#141414] dark:text-[#F3F2EE]" dir="ltr">
                  https://{t.cloudflare.opt2Title}
                </div>
                <div className="text-xs text-[#606066] dark:text-[#9A9992] mt-0.5">
                  {t.cloudflare.opt2Desc}
                </div>
              </div>
              <button
                onClick={() => handleCopy(`https://${t.cloudflare.opt2Title}`)}
                className="p-2 rounded-lg bg-white dark:bg-[#28282C] border border-[#DDD9D0] dark:border-[#38383E] text-[#333338] dark:text-[#D1D0C9] hover:text-[#141414] dark:hover:text-white transition-colors shrink-0"
                title="Copy URL"
              >
                {copiedUrl === `https://${t.cloudflare.opt2Title}` ? (
                  <Check className="w-4 h-4 text-[#25D366]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
