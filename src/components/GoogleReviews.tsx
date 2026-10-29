import React from 'react';
import { Star, ExternalLink, MapPin, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY, GOOGLE_REVIEWS, OFFICIAL_DATA } from '../translations';

interface GoogleReviewsProps {
  lang: Language;
}

export const GoogleReviews: React.FC<GoogleReviewsProps> = ({ lang }) => {
  const t = DICTIONARY[lang];
  const isAr = lang === 'ar';

  return (
    <section id="reviews" className="py-14 sm:py-20 md:py-24 bg-[#EAF0F2]/60 dark:bg-[#0D2128]/60 border-y border-[#D7E1E4] dark:border-[#173741]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Google Maps Anchor */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-[#8A724B] dark:text-[#D4C3A3] tracking-wider uppercase mb-2">
              {t.reviews.tag}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#102A32] dark:text-[#F1F6F8] tracking-tight">
              {t.reviews.title}
            </h2>
            <p className="text-sm sm:text-base text-[#435F68] dark:text-[#A7BAC0] mt-1.5">
              {t.reviews.subtitle}
            </p>
          </div>

          {/* Google Maps External Badge Button */}
          <a
            href={OFFICIAL_DATA.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#102A32] dark:text-[#F1F6F8] bg-white dark:bg-[#122F38] border border-[#CCD7DA] dark:border-[#1E434F] hover:border-[#8A724B] dark:hover:border-[#D4C3A3] shadow-sm hover:shadow transition-all shrink-0 self-start md:self-auto min-h-[42px]"
          >
            <MapPin className="w-4 h-4 text-[#EA4335]" />
            <span>{t.reviews.viewOnGoogle}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#526D75] dark:text-[#9BB3BB]" />
          </a>
        </div>

        {/* Aggregate Proof Bar */}
        <div className="mb-6 sm:mb-8 p-4 rounded-xl bg-white dark:bg-[#122F38] border border-[#D7E1E4] dark:border-[#1C424E] flex flex-wrap items-center justify-between gap-3 sm:gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-[#F59E0B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
              ))}
            </div>
            <span className="font-mono font-bold text-sm sm:text-base text-[#102A32] dark:text-[#F1F6F8]">
              5.0 / 5.0
            </span>
            <span className="text-xs text-[#526D75] dark:text-[#9BB3BB] font-medium hidden xs:inline">
              {t.reviews.ratingBadge}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#2E7D32] dark:text-[#4ADE80] font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{isAr ? 'تقييمات موثقة من عملاء المكتب' : 'Verified Google Client Reviews'}</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {GOOGLE_REVIEWS.map((review) => {
            const author = isAr ? review.authorAr : review.authorEn;
            const comment = isAr ? review.commentAr : review.commentEn;
            const date = isAr ? review.dateAr : review.dateEn;

            return (
              <div
                key={review.id}
                className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-[#122F38] border border-[#D7E1E4] dark:border-[#1C424E] shadow-sm flex flex-col justify-between space-y-4 sm:space-y-5"
              >
                <div className="space-y-3.5">
                  
                  {/* Rating Stars & Verified Origin */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#F59E0B]">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#526D75] dark:text-[#9BB3BB]">
                      <span className="w-2 h-2 rounded-full bg-[#34A853]" />
                      <span>{date}</span>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="text-xs sm:text-sm md:text-base text-[#163842] dark:text-[#E2EFF2] leading-relaxed italic">
                    "{comment}"
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="pt-3.5 border-t border-[#E5ECEE] dark:border-[#1A3D48] flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-[#102A32] dark:text-[#F1F6F8]">
                      {author}
                    </div>
                    <div className="text-xs text-[#526D75] dark:text-[#8AA2A9]">
                      {isAr ? 'عميل موثق لدى المكتب' : 'Verified Office Client'}
                    </div>
                  </div>

                  <a
                    href={OFFICIAL_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#8A724B] dark:text-[#D4C3A3] hover:underline flex items-center gap-1"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
