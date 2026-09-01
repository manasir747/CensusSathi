"use client";

import { motion } from "framer-motion";
import { ArrowDown, Home, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "@/app/guide/page.module.css";

export function PhaseComparisonSection() {
  const { t } = useLanguage();

  return (
    <section className={`container ${styles.section}`}>
      <motion.div 
        className={styles.comparisonContainer}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.comparisonHeader}>
          <h2>{t('guide.phaseComparison.title')}</h2>
        </div>
        
        <div className={styles.comparisonFlow}>
          <div className={styles.compCardPrimary}>
            <div className={styles.compCardHeader}>
              <Home size={24} />
              <span>PHASE 1</span>
            </div>
            <p className={styles.compFocus}>{t('guide.phaseComparison.phase1Focus')}</p>
          </div>
          
          <div className={styles.compArrow}>
            <ArrowDown size={32} />
          </div>
          
          <div className={styles.compCardSecondary}>
            <div className={styles.compCardHeader}>
              <Users size={24} />
              <span>PHASE 2</span>
            </div>
            <p className={styles.compFocus}>{t('guide.phaseComparison.phase2Focus')}</p>
          </div>
        </div>

        <div className={styles.compTakeaway}>
          {t('guide.phaseComparison.takeaway')}
        </div>
      </motion.div>
    </section>
  );
}
