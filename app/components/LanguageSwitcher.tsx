'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from './LanguageProvider';

export function LanguageSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <button
        onClick={() => setLanguage('es')}
        className={`px-4 py-2 rounded-lg font-semibold transition ${
          language === 'es'
            ? 'bg-black text-white'
            : 'bg-white text-gray-900 hover:bg-[#c7e320]'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 rounded-lg font-semibold transition ${
          language === 'en'
            ? 'bg-black text-white'
            : 'bg-white text-gray-900 hover:bg-[#c7e320]'
        }`}
      >
        EN
      </button>
    </div>
  );
}
