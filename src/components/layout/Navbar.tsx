"use client";

import Link from 'next/link';
import { Globe, Menu, MessageSquareText } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { LANGUAGE_NAMES, SupportedLanguage } from '@/types/i18n';
import styles from './Navbar.module.css';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🇮🇳</span>
          <span className={styles.logoText}>Census Saathi</span>
        </Link>
        
        <nav className={styles.desktopNav}>
          <Link href="/guide" className={styles.navLink}>{t('navigation.howItWorks')}</Link>
          <Link href="/my-state" className={styles.navLink}>{t('navigation.myState')}</Link>
          <Link href="/stay-safe" className={styles.navLink}>{t('navigation.staySafe')}</Link>
        </nav>
        
        <div className={styles.actions}>
          <div className={styles.langSelector}>
            <select 
              className={styles.langSelectDropdown}
              value={language}
              onChange={(e) => setLanguage(e.target.value as SupportedLanguage)}
              aria-label={t('navigation.selectLanguage')}
            >
              {(Object.keys(LANGUAGE_NAMES) as SupportedLanguage[]).map((langCode) => (
                <option key={langCode} value={langCode}>
                  {LANGUAGE_NAMES[langCode]}
                </option>
              ))}
            </select>
            <div className={styles.langBtn} aria-hidden="true">
              <Globe size={18} />
              <span>{LANGUAGE_NAMES[language]}</span>
            </div>
          </div>
          
          <Link href="/chat" className={styles.chatCta}>
            <MessageSquareText size={18} />
            <span>{t('navigation.askSaathi')}</span>
          </Link>
          
          <button className={styles.mobileMenuBtn} aria-label="Menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
