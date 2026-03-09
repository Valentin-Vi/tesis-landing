'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { LanguageCode } from '../i18n/translations';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>('es');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get language from URL params or localStorage
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang') as LanguageCode | null;
    const storedLang = localStorage.getItem('language') as LanguageCode | null;

    const selectedLang = urlLang || storedLang || 'es';

    if (['es', 'en'].includes(selectedLang)) {
      setLanguageState(selectedLang);
    }

    setMounted(true);
  }, []);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);

    // Update URL param
    const params = new URLSearchParams(window.location.search);
    params.set('lang', lang);
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
