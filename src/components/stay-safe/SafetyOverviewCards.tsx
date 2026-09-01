"use client";

import { motion } from "framer-motion";
import { Shield, UserCheck, KeySquare, Flag } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Card } from "@/components/ui/Card";
import styles from "./StaySafe.module.css";

const STAGGER_CONTAINER: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const STAGGER_ITEM: any = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function SafetyOverviewCards() {
  const { t } = useLanguage();

  return (
    <section className={`container ${styles.section}`}>
      <motion.div 
        className={styles.overviewGrid}
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={STAGGER_ITEM}>
          <Card className={styles.overviewCard}>
            <div className={styles.iconWrapper}><Shield size={24} /></div>
            <h3>{t('staySafe.overviewCard1Title')}</h3>
            <p>{t('staySafe.overviewCard1Desc')}</p>
          </Card>
        </motion.div>
        
        <motion.div variants={STAGGER_ITEM}>
          <Card className={styles.overviewCard}>
            <div className={styles.iconWrapper}><UserCheck size={24} /></div>
            <h3>{t('staySafe.overviewCard2Title')}</h3>
            <p>{t('staySafe.overviewCard2Desc')}</p>
          </Card>
        </motion.div>
        
        <motion.div variants={STAGGER_ITEM}>
          <Card className={styles.overviewCard}>
            <div className={styles.iconWrapper}><KeySquare size={24} /></div>
            <h3>{t('staySafe.overviewCard3Title')}</h3>
            <p>{t('staySafe.overviewCard3Desc')}</p>
          </Card>
        </motion.div>
        
        <motion.div variants={STAGGER_ITEM}>
          <Card className={styles.overviewCard}>
            <div className={styles.iconWrapper}><Flag size={24} /></div>
            <h3>{t('staySafe.overviewCard4Title')}</h3>
            <p>{t('staySafe.overviewCard4Desc')}</p>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
