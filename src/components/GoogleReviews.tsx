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
    <section id="reviews" className="py-16 md:py-24 bg-[#F5F3ED]/60 dark:bg-[#131315]/60 border-y border-[#E8E5DC] dark:border-[#222226]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Google Maps Anchor */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-[#8B6E27] dark:text-[#D8AF3B] tracking-wider uppercase mb-2">
              {t.reviews.tag}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#141414] dark:text-[#F6F5F2] tracking-tight">
              {t.reviews.title}
            </h2>
            <p className="text-sm sm:text-base text-[#606066] dark:text-[#9A9992] mt-1.5">
              {t.reviews.subtitle}
            </p>
          </div>

          {/* Google Maps External Badge Button */}
          <a
            href={OFFICIAL_DATA.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#141414] dark:text-[#F3F2EE] bg-white dark:bg-[#1E1E22] border border-[#DDD9D0] dark:border-[#2E2E33] hover:border-[#8B6E27] dark:hover:border-[#D8AF3B] shadow-sm hover:shadow transition-all shrink-0 self-start md:self-auto"
          >
            <MapPin className="w-4 h-4 text-[#EA4335]" />
            <span>{t.reviews.viewOnGoogle}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#88888D]" />
          </a>
        </div>

        {/* Aggregate Proof Bar */}
        <div className="mb-8 p-4 rounded-xl bg-white dark:bg-[#18181B] border border-[#E5E2DA] dark:border-[#26262A] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-[#F59E0B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
              ))}
            </div>
            <span className="font-mono font-bold text-sm sm:text-base text-[#141414] dark:text-[#F3F2EE]">
              5.0 / 5.0
            </span>
            <span className="text-xs text-[#66666B] dark:text-[#9A9992] font-medium">
              {t.reviews.ratingBadge}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#2E7D32] dark:text-[#4ADE80] font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{isAr ? 'تقييمات حقيقية معتمدة من خرائط Google' : 'Google Maps Verified Client Reviews'}</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GOOGLE_REVIEWS.map((review) => {
            const author = isAr ? review.authorAr : review.authorEn;
            const comment = isAr ? review.commentAr : review.commentEn;
            const date = isAr ? review.dateAr : review.dateEn;

            return (
              <div
                key={review.id}
                className="p-7 rounded-2xl bg-white dark:bg-[#171719] border border-[#E5E2DA] dark:border-[#27272B] shadow-sm flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  
                  {/* Rating Stars & Verified Origin */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#F59E0B]">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#52525A] dark:text-[#8E8D88]">
                      <span className="w-2 h-2 rounded-full bg-[#34A853]" />
                      <span>{date}</span>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="text-sm sm:text-base text-[#222226] dark:text-[#E2E1DB] leading-relaxed italic">
                    "{comment}"
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-[#EFECE5] dark:border-[#242427] flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-[#141414] dark:text-[#F3F2EE]">
                      {author}
                    </div>
                    <div className="text-xs text-[#7A7A80] dark:text-[#8E8D88]">
                      {isAr ? 'عميل موثق لدى المكتب' : 'Verified Office Client'}
                    </div>
                  </div>

                  <a
                    href={OFFICIAL_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#8B6E27] dark:text-[#D8AF3B] hover:underline flex items-center gap-1"
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
