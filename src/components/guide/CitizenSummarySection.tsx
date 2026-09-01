"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "@/app/guide/page.module.css";

const FADE_UP: any = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function CitizenSummarySection() {
  const { t } = useLanguage();

  return (
    <section className={`container ${styles.section}`}>
      <motion.div 
        className={styles.summaryCard}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP}
      >
        <div className={styles.summaryHeader}>
          <Info size={32} className={styles.summaryIcon} />
          <h2>{t('guide.summary.title')}</h2>
        </div>
        
        <ul className={styles.summaryList}>
          <li>
            <div className={styles.bulletPoint}>1</div>
            <p>{t('guide.summary.point1')}</p>
          </li>
          <li>
            <div className={styles.bulletPoint}>2</div>
            <p>{t('guide.summary.point2')}</p>
          </li>
          <li>
            <div className={styles.bulletPoint}>3</div>
            <p>{t('guide.summary.point3')}</p>
          </li>
          <li>
            <div className={styles.bulletPoint}>4</div>
            <p>{t('guide.summary.point4')}</p>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
