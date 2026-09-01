"use client";

import { motion } from "framer-motion";
import { DollarSign, KeyRound, Link as LinkIcon, Building } from "lucide-react";
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
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

export function ScamAwarenessSection() {
  const { t } = useLanguage();

  return (
    <section id="scams" className={`container ${styles.section}`}>
      <h2 className={styles.sectionTitleCenter}>{t('staySafe.scamTitle')}</h2>
      
      <motion.div 
        className={styles.scamGrid}
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Scam 1 */}
        <motion.div variants={STAGGER_ITEM}>
          <Card className={styles.scamCard}>
            <div className={styles.scamHeader}>
              <div className={styles.scamIcon}><DollarSign size={24} /></div>
              <h3>{t('staySafe.scam1Title')}</h3>
            </div>
            <p className={styles.scamDesc}>{t('staySafe.scam1Desc')}</p>
            <div className={styles.redFlag}>
              <strong>{t('staySafe.redFlag')}:</strong> {t('staySafe.scamAction')}
            </div>
          </Card>
        </motion.div>
        
        {/* Scam 2 */}
        <motion.div variants={STAGGER_ITEM}>
          <Card className={styles.scamCard}>
            <div className={styles.scamHeader}>
              <div className={styles.scamIcon}><KeyRound size={24} /></div>
              <h3>{t('staySafe.scam2Title')}</h3>
            </div>
            <p className={styles.scamDesc}>{t('staySafe.scam2Desc')}</p>
            <div className={styles.redFlag}>
              <strong>{t('staySafe.redFlag')}:</strong> {t('staySafe.scamAction')}
            </div>
          </Card>
        </motion.div>
        
        {/* Scam 3 */}
        <motion.div variants={STAGGER_ITEM}>
          <Card className={styles.scamCard}>
            <div className={styles.scamHeader}>
              <div className={styles.scamIcon}><LinkIcon size={24} /></div>
              <h3>{t('staySafe.scam3Title')}</h3>
            </div>
            <p className={styles.scamDesc}>{t('staySafe.scam3Desc')}</p>
            <div className={styles.redFlag}>
              <strong>{t('staySafe.redFlag')}:</strong> {t('staySafe.scamAction')}
            </div>
          </Card>
        </motion.div>
        
        {/* Scam 4 */}
        <motion.div variants={STAGGER_ITEM}>
          <Card className={styles.scamCard}>
            <div className={styles.scamHeader}>
              <div className={styles.scamIcon}><Building size={24} /></div>
              <h3>{t('staySafe.scam4Title')}</h3>
            </div>
            <p className={styles.scamDesc}>{t('staySafe.scam4Desc')}</p>
            <div className={styles.redFlag}>
              <strong>{t('staySafe.redFlag')}:</strong> {t('staySafe.scamAction')}
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
