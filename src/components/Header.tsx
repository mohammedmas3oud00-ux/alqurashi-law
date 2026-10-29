import React, { useState } from 'react';
import { Scale, Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { Language, Theme } from '../types';
import { DICTIONARY } from '../translations';

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

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF9F5]/90 dark:bg-[#121213]/90 backdrop-blur-md border-b border-[#E8E6E0] dark:border-[#252528] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark (Single cohesive lockup) */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-3 group whitespace-nowrap shrink-0"
          >
            <div className="w-10 h-10 rounded-lg bg-[#18181A] dark:bg-[#202022] border border-[#C59B27]/40 flex items-center justify-center text-[#D8AF3B] shadow-sm transition-transform duration-200 group-hover:scale-105">
              <Scale className="w-5 h-5" strokeWidth={1.75} />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-[#141414] dark:text-[#F3F2EE] tracking-tight">
                {lang === 'ar' ? 'المحامي والموثق مساعد القرشي' : 'Adv. & Notary Mosaed Al-Qurashi'}
              </span>
              <span className="text-xs text-[#826B2C] dark:text-[#C59B27] font-medium">
                {lang === 'ar' ? 'شركة مُتم للمحاماة والاستشارات القانونية' : 'Mutimm Law & Legal Consultations'}
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Single-line, quiet text) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A4A4F] dark:text-[#A6A59E]">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#about');
              }}
              className="hover:text-[#141414] dark:hover:text-[#F3F2EE] transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.about}
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#services');
              }}
              className="hover:text-[#141414] dark:hover:text-[#F3F2EE] transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.services}
            </a>
            <a
              href="#reviews"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#reviews');
              }}
              className="hover:text-[#141414] dark:hover:text-[#F3F2EE] transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.reviews}
            </a>
            <a
              href="#funnel"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#funnel');
              }}
              className="hover:text-[#141414] dark:hover:text-[#F3F2EE] transition-colors whitespace-nowrap shrink-0"
            >
              {t.funnel.tag}
            </a>
            <a
              href="#location"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#location');
              }}
              className="hover:text-[#141414] dark:hover:text-[#F3F2EE] transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.location}
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action + Utility Toggles */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language switch */}
            <button
              onClick={onToggleLang}
              aria-label="Toggle language"
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg text-[#333336] dark:text-[#CBCAC5] hover:bg-[#EAE8E1] dark:hover:bg-[#1E1E21] border border-[#E0DED7] dark:border-[#2C2C30] transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
            </button>

            {/* Dark / Light toggle */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 rounded-lg text-[#333336] dark:text-[#CBCAC5] hover:bg-[#EAE8E1] dark:hover:bg-[#1E1E21] border border-[#E0DED7] dark:border-[#2C2C30] transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#D8AF3B]" />
              ) : (
                <Moon className="w-4 h-4 text-[#444448]" />
              )}
            </button>

            {/* 1 Primary Action CTA */}
            <button
              onClick={onNavigateToFunnel}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs md:text-sm font-semibold rounded-lg text-white bg-[#141414] hover:bg-[#252528] dark:bg-[#F3F2EE] dark:text-[#141414] dark:hover:bg-[#E2E0D8] border border-transparent shadow-sm hover:shadow transition-all duration-150 whitespace-nowrap shrink-0 active:scale-[0.98]"
            >
              {t.nav.cta}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#222225] dark:text-[#EDEDE8] hover:bg-[#EAE8E1] dark:hover:bg-[#1E1E21] border border-[#E0DED7] dark:border-[#2C2C30]"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 border-t border-[#E8E6E0] dark:border-[#252528] bg-[#FAF9F5] dark:bg-[#121213] space-y-2">
          <button
            onClick={() => handleNavClick('#about')}
            className="block w-full text-start py-2.5 px-3 rounded-md text-sm font-medium text-[#222225] dark:text-[#EDEDE8] hover:bg-[#EAE8E1] dark:hover:bg-[#1E1E21]"
          >
            {t.nav.about}
          </button>
          <button
            onClick={() => handleNavClick('#services')}
            className="block w-full text-start py-2.5 px-3 rounded-md text-sm font-medium text-[#222225] dark:text-[#EDEDE8] hover:bg-[#EAE8E1] dark:hover:bg-[#1E1E21]"
          >
            {t.nav.services}
          </button>
          <button
            onClick={() => handleNavClick('#reviews')}
            className="block w-full text-start py-2.5 px-3 rounded-md text-sm font-medium text-[#222225] dark:text-[#EDEDE8] hover:bg-[#EAE8E1] dark:hover:bg-[#1E1E21]"
          >
            {t.nav.reviews}
          </button>
          <button
            onClick={() => handleNavClick('#funnel')}
            className="block w-full text-start py-2.5 px-3 rounded-md text-sm font-medium text-[#222225] dark:text-[#EDEDE8] hover:bg-[#EAE8E1] dark:hover:bg-[#1E1E21]"
          >
            {t.funnel.tag}
          </button>
          <button
            onClick={() => handleNavClick('#location')}
            className="block w-full text-start py-2.5 px-3 rounded-md text-sm font-medium text-[#222225] dark:text-[#EDEDE8] hover:bg-[#EAE8E1] dark:hover:bg-[#1E1E21]"
          >
            {t.nav.location}
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToFunnel();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold rounded-lg text-white bg-[#141414] dark:bg-[#F3F2EE] dark:text-[#141414]"
            >
              {t.nav.cta}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
