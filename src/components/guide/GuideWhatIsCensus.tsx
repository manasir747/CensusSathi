"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "@/app/guide/page.module.css";

const FADE_UP: any = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function GuideWhatIsCensus() {
  const { t } = useLanguage();

  return (
    <section className={`container ${styles.section}`}>
      <motion.div 
        className={styles.eduCard}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP}
      >
        <div className={styles.eduContent}>
          <h2>{t('guide.whatIs.title')}</h2>
          <p>{t('guide.whatIs.description')}</p>
        </div>
        
        <div className={styles.eduFlowVertical}>
          <div className={styles.flowRow}>
            <div className={styles.flowItem}>{t('guide.whatIs.flow1')}</div>
            <span className={styles.flowPlus}>+</span>
            <div className={styles.flowItem}>{t('guide.whatIs.flow2')}</div>
          </div>
          
          <ArrowDown className={styles.flowArrow} size={24} />
          <div className={styles.flowItemPrimary}>{t('guide.whatIs.flow3')}</div>
          
          <ArrowDown className={styles.flowArrow} size={24} />
          <div className={styles.flowItemSecondary}>{t('guide.whatIs.flow4')}</div>
          
          <ArrowDown className={styles.flowArrow} size={24} />
          <div className={styles.flowItemSuccess}>{t('guide.whatIs.flow5')}</div>
        </div>
      </motion.div>
    </section>
  );
}
