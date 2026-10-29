/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, Theme, FunnelState } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutFounder } from './components/AboutFounder';
import { ServicesSection } from './components/ServicesSection';
import { GoogleReviews } from './components/GoogleReviews';
import { WhatsAppFunnel } from './components/WhatsAppFunnel';
import { LocationContact } from './components/LocationContact';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [theme, setTheme] = useState<Theme>('light');
  const [funnelState, setFunnelState] = useState<FunnelState>({
    track: 'notary',
    clientType: 'individual',
    deliveryMode: 'office',
    fullName: '',
    phone: '',
    summary: '',
  });

  // Sync Language and Direction on <html>
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // Sync Theme on <html> with dark class
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavigateToFunnel = () => {
    const funnelEl = document.getElementById('funnel');
    if (funnelEl) {
      funnelEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForFunnel = (
    category: 'notary' | 'consultation' | 'litigation' | 'corporate',
    serviceTitle: string
  ) => {
    setFunnelState((prev) => ({
      ...prev,
      track: category,
      summary: prev.summary ? prev.summary : `${lang === 'ar' ? 'طلب بخصوص خدمة:' : 'Inquiry regarding:'} ${serviceTitle}`,
    }));
    handleNavigateToFunnel();
  };

  return (
    <div className="min-h-screen bg-[#F4F7F8] dark:bg-[#0B1C22] text-[#102A32] dark:text-[#E8EEF0] flex flex-col font-sans transition-colors duration-200 overflow-x-hidden w-full">
      {/* Top Bar Navigation */}
      <Header
        lang={lang}
        onToggleLang={handleToggleLang}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onNavigateToFunnel={handleNavigateToFunnel}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          lang={lang}
          onNavigateToFunnel={handleNavigateToFunnel}
        />

        <AboutFounder
          lang={lang}
        />

        <ServicesSection
          lang={lang}
          onSelectServiceForFunnel={handleSelectServiceForFunnel}
        />

        <GoogleReviews
          lang={lang}
        />

        <WhatsAppFunnel
          lang={lang}
          funnelState={funnelState}
          setFunnelState={setFunnelState}
        />

        <LocationContact
          lang={lang}
        />
      </main>

      {/* Floating Instant WhatsApp Action */}
      <FloatingWhatsApp
        lang={lang}
      />

      {/* Footer */}
      <Footer
        lang={lang}
      />
    </div>
  );
}
