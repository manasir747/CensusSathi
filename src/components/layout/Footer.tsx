"use client";

import { useLanguage } from '@/context/LanguageContext';
import styles from './Footer.module.css';

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <p className={styles.text}>
          {t('footer.disclaimer')}
        </p>
      </div>
    </footer>
  );
}
