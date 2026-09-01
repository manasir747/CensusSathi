"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "@/app/page.module.css";

const FADE_UP: any = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function WhatIsCensusSection() {
  const { t } = useLanguage();

  return (
    <section className={`container ${styles.section} ${styles.educationalSection}`}>
      <motion.div 
        className={styles.eduCard}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP}
      >
        <div className={styles.eduContent}>
          <h2>{t('whatIsCensus.title')}</h2>
          <p>{t('whatIsCensus.description')}</p>
        </div>
        
        <div className={styles.eduFlow}>
          <div className={styles.flowItem}>{t('whatIsCensus.flow1')}</div>
          <ArrowRight className={styles.flowArrow} size={24} />
          <div className={styles.flowItem}>{t('whatIsCensus.flow2')}</div>
          <ArrowRight className={styles.flowArrow} size={24} />
          <div className={styles.flowItemPrimary}>{t('whatIsCensus.flow3')}</div>
          <ArrowRight className={styles.flowArrow} size={24} />
          <div className={styles.flowItemSuccess}>{t('whatIsCensus.flow4')}</div>
        </div>
      </motion.div>
    </section>
  );
}
