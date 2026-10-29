import React, { useState } from 'react';
import { Moon, Sun, Globe, Menu, X, ArrowLeft, ArrowRight } from 'lucide-react';
import { Language, Theme } from '../types';
import { DICTIONARY } from '../translations';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  theme: Theme;
  onToggleTheme: () => void;
  onNavigateToFunnel: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  theme,
  onToggleTheme,
  onNavigateToFunnel,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = DICTIONARY[lang];
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F4F7F8]/95 dark:bg-[#0B1C22]/95 backdrop-blur-md border-b border-[#D7E1E4] dark:border-[#1C3B45] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-6 h-18 sm:h-20">
          
          {/* Zone 1: Brand Wordmark with Official Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0 min-w-0"
            aria-label="الرئيسية"
          >
            <BrandLogo size="md" />
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-base font-bold text-[#102A32] dark:text-[#E8EEF0] tracking-tight leading-tight truncate">
                {isAr ? 'مساعد سعود القرشي' : 'Musaid Saud Al-Qurashi'}
              </span>
              <span className="text-[10px] sm:text-xs text-[#8A724B] dark:text-[#D4C3A3] font-medium tracking-tight truncate">
                {isAr ? 'للمحاماة والاستشارات القانونية' : 'For Law & Legal Consultations'}
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Single-line, quiet text) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#3A535C] dark:text-[#9DB3BA]">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#about');
              }}
              className="hover:text-[#102A32] dark:hover:text-[#E8EEF0] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {t.nav.about}
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#services');
              }}
              className="hover:text-[#102A32] dark:hover:text-[#E8EEF0] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {t.nav.services}
            </a>
            <a
              href="#reviews"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#reviews');
              }}
              className="hover:text-[#102A32] dark:hover:text-[#E8EEF0] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {t.nav.reviews}
            </a>
            <a
              href="#funnel"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#funnel');
              }}
              className="hover:text-[#102A32] dark:hover:text-[#E8EEF0] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {t.funnel.tag}
            </a>
            <a
              href="#location"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#location');
              }}
              className="hover:text-[#102A32] dark:hover:text-[#E8EEF0] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {t.nav.location}
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action + Utility Toggles */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Language switch */}
            <button
              onClick={onToggleLang}
              aria-label="Toggle language"
              className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 text-xs font-semibold rounded-lg text-[#163842] dark:text-[#C8DADB] hover:bg-[#E5ECEE] dark:hover:bg-[#163842] border border-[#CCD7DA] dark:border-[#1E434F] transition-colors min-h-[36px]"
            >
              <Globe className="w-3.5 h-3.5 text-[#A89369] dark:text-[#D4C3A3]" />
              <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
            </button>

            {/* Dark / Light toggle */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 rounded-lg text-[#163842] dark:text-[#C8DADB] hover:bg-[#E5ECEE] dark:hover:bg-[#163842] border border-[#CCD7DA] dark:border-[#1E434F] transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#D4C3A3]" />
              ) : (
                <Moon className="w-4 h-4 text-[#163842]" />
              )}
            </button>

            {/* 1 Primary Action CTA (Responsive: hidden on small mobile, visible on sm+) */}
            <button
              onClick={onNavigateToFunnel}
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg text-white bg-[#122F38] hover:bg-[#1A424F] dark:bg-[#C5B088] dark:text-[#0B1C22] dark:hover:bg-[#D4C3A3] shadow-sm hover:shadow transition-all duration-150 whitespace-nowrap shrink-0 active:scale-[0.98] min-h-[36px]"
            >
              <span>{t.nav.cta}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#102A32] dark:text-[#E8EEF0] hover:bg-[#E5ECEE] dark:hover:bg-[#163842] border border-[#CCD7DA] dark:border-[#1E434F] min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Polished with complete touch accessibility) */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 border-t border-[#D7E1E4] dark:border-[#1C3B45] bg-[#F4F7F8] dark:bg-[#0B1C22] space-y-2 animate-in fade-in duration-200">
          <button
            onClick={() => handleNavClick('#about')}
            className="block w-full text-start py-2.5 px-3 rounded-lg text-sm font-semibold text-[#102A32] dark:text-[#E8EEF0] hover:bg-[#E2EBEF] dark:hover:bg-[#14323B] transition-colors"
          >
            {t.nav.about}
          </button>
          <button
            onClick={() => handleNavClick('#services')}
            className="block w-full text-start py-2.5 px-3 rounded-lg text-sm font-semibold text-[#102A32] dark:text-[#E8EEF0] hover:bg-[#E2EBEF] dark:hover:bg-[#14323B] transition-colors"
          >
            {t.nav.services}
          </button>
          <button
            onClick={() => handleNavClick('#reviews')}
            className="block w-full text-start py-2.5 px-3 rounded-lg text-sm font-semibold text-[#102A32] dark:text-[#E8EEF0] hover:bg-[#E2EBEF] dark:hover:bg-[#14323B] transition-colors"
          >
            {t.nav.reviews}
          </button>
          <button
            onClick={() => handleNavClick('#funnel')}
            className="block w-full text-start py-2.5 px-3 rounded-lg text-sm font-semibold text-[#102A32] dark:text-[#E8EEF0] hover:bg-[#E2EBEF] dark:hover:bg-[#14323B] transition-colors"
          >
            {t.funnel.tag}
          </button>
          <button
            onClick={() => handleNavClick('#location')}
            className="block w-full text-start py-2.5 px-3 rounded-lg text-sm font-semibold text-[#102A32] dark:text-[#E8EEF0] hover:bg-[#E2EBEF] dark:hover:bg-[#14323B] transition-colors"
          >
            {t.nav.location}
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToFunnel();
              }}
              className="w-full py-3 text-center text-sm font-bold rounded-xl text-white bg-[#122F38] dark:bg-[#C5B088] dark:text-[#0B1C22] shadow-sm flex items-center justify-center gap-2"
            >
              <span>{t.nav.cta}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
