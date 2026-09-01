"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { SupportedLanguage } from '@/types/i18n';
import en from '@/translations/en.json';
import hi from '@/translations/hi.json';
import mr from '@/translations/mr.json';
import ta from '@/translations/ta.json';
import te from '@/translations/te.json';

const translations = { en, hi, mr, ta, te };

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<SupportedLanguage>('en');

  // Load saved language on mount
  useEffect(() => {
    const saved = localStorage.getItem('census-lang') as SupportedLanguage;
    if (saved && Object.keys(translations).includes(saved)) {
      setLanguageState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLanguage = useCallback((lang: SupportedLanguage) => {
    setLanguageState(lang);
    localStorage.setItem('census-lang', lang);
    document.documentElement.lang = lang;
  }, []);

  const t = useCallback((key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    let fallbackValue: any = translations['en'];

    for (const k of keys) {
      if (value) value = value[k];
      if (fallbackValue) fallbackValue = fallbackValue[k];
    }

    if (value === undefined || typeof value !== 'string') {
      if (fallbackValue !== undefined && typeof fallbackValue === 'string') {
        return fallbackValue;
      }
      console.warn(`Translation missing for key: ${key}`);
      return key; // Fallback to key itself if all fails
    }

    return value;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
