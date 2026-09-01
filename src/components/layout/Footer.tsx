"use client";

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerBrand}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🇮🇳</span>
            <span>Census Saathi</span>
          </div>
          <p className={styles.description}>
            {t('footer.disclaimer')}
          </p>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.linkGroup}>
            <h3>{t('footer.quickLinks')}</h3>
            <Link href="/" className={styles.link}>{t('navigation.home')}</Link>
            <Link href="/guide" className={styles.link}>{t('navigation.howItWorks')}</Link>
            <Link href="/timeline" className={styles.link}>{t('navigation.myState')}</Link>
          </div>
          <div className={styles.linkGroup}>
            <h3>{t('footer.legal')}</h3>
            <Link href="/security" className={styles.link}>{t('navigation.staySafe')}</Link>
            <Link href="/chat" className={styles.link}>{t('navigation.askSaathi')}</Link>
            <Link href="/insights" className={styles.link}>{t('insightsPreview.title')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
