"use client";

import { motion } from "framer-motion";
import { Home, Users, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "@/app/guide/page.module.css";

const FADE_UP: any = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function TwoPhasesDetailSection() {
  const { t } = useLanguage();

  return (
    <section className={`container ${styles.section}`}>
      <motion.div 
        className={styles.sectionHeader}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP}
      >
        <h2>{t('guide.twoPhasesDetail.title')}</h2>
      </motion.div>

      <div className={styles.phasesDetailContainer}>
        {/* PHASE 1 */}
        <motion.div 
          className={styles.phaseDetailCard}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.phaseDetailHeader}>
            <div className={styles.phaseBadgePrimary}>1</div>
            <div>
              <h3>{t('guide.twoPhasesDetail.phase1.title')}</h3>
              <Home size={32} className={styles.phaseTitleIcon} />
            </div>
          </div>
          <p className={styles.phaseDesc}>{t('guide.twoPhasesDetail.phase1.desc')}</p>
          
          <div className={styles.phaseItemsGrid}>
            {[0, 1, 2, 3, 4, 5, 6].map((idx) => {
              const key = `guide.twoPhasesDetail.phase1.items.${idx}`;
              const text = t(key);
              if (text === key) return null;
              return (
                <div key={idx} className={styles.phaseItem}>
                  <CheckCircle2 size={16} className={styles.itemIcon} />
                  <span>{String(text)}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* PHASE 2 */}
        <motion.div 
          className={styles.phaseDetailCard}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.phaseDetailHeader}>
            <div className={styles.phaseBadgeSecondary}>2</div>
            <div>
              <h3>{t('guide.twoPhasesDetail.phase2.title')}</h3>
              <Users size={32} className={styles.phaseTitleIconAlt} />
            </div>
          </div>
          <p className={styles.phaseDesc}>{t('guide.twoPhasesDetail.phase2.desc')}</p>
          
          <div className={styles.phaseItemsGrid}>
            {[0, 1, 2, 3, 4, 5].map((idx) => {
              const key = `guide.twoPhasesDetail.phase2.items.${idx}`;
              const text = t(key);
              if (text === key) return null;
              return (
                <div key={idx} className={styles.phaseItemAlt}>
                  <CheckCircle2 size={16} className={styles.itemIconAlt} />
                  <span>{String(text)}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
