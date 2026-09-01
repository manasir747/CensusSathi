"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Card } from "@/components/ui/Card";
import styles from "./StaySafe.module.css";

export function PrivacyDataSection() {
  const { t } = useLanguage();

  return (
    <section id="privacy" className={`container ${styles.section}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.sectionTitle}>{t('staySafe.privacyTitle')}</h2>
        
        <Card className={styles.privacyCard}>
          <ul className={styles.privacyList}>
            <li>
              <CheckCircle2 size={24} className={styles.checkIcon} />
              <span>{t('staySafe.privacyPoint1')}</span>
            </li>
            <li>
              <CheckCircle2 size={24} className={styles.checkIcon} />
              <span>{t('staySafe.privacyPoint2')}</span>
            </li>
            <li>
              <CheckCircle2 size={24} className={styles.checkIcon} />
              <span>{t('staySafe.privacyPoint3')}</span>
            </li>
            <li>
              <CheckCircle2 size={24} className={styles.checkIcon} />
              <span>{t('staySafe.privacyPoint4')}</span>
            </li>
            <li>
              <CheckCircle2 size={24} className={styles.checkIcon} />
              <span>{t('staySafe.privacyPoint5')}</span>
            </li>
            <li>
              <CheckCircle2 size={24} className={styles.checkIcon} />
              <span>{t('staySafe.privacyPoint6')}</span>
            </li>
          </ul>
          
          <div className={styles.disclaimerBox}>
            <AlertCircle size={20} className={styles.alertIcon} />
            <p>{t('staySafe.privacyDisclaimer')}</p>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
