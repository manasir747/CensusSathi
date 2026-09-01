"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import styles from "./StaySafe.module.css";

const FADE_UP: any = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function StaySafeHero() {
  const { t } = useLanguage();

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <motion.div 
          className={styles.heroContent}
          initial="hidden"
          animate="show"
          variants={FADE_UP}
        >
          <div className={styles.badge}>
            <ShieldCheck size={16} />
            <span>{t('staySafe.heroBadge')}</span>
          </div>
          <h1 className={styles.title}>{t('staySafe.heroTitle')}</h1>
          <p className={styles.subtitle}>{t('staySafe.heroSubtitle')}</p>
          
          <div className={styles.heroActions}>
            <Button size="lg" variant="primary" onClick={() => handleScroll('privacy')}>
              <Lock size={18} className="mr-2" />
              {t('staySafe.btnPrivacy')}
            </Button>
            <Button size="lg" variant="outline" onClick={() => handleScroll('scams')}>
              <AlertTriangle size={18} className="mr-2" />
              {t('staySafe.btnScams')}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
