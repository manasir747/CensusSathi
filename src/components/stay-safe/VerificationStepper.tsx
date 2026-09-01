"use client";

import { motion } from "framer-motion";
import { BadgeCheck, FileSearch, Eye } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./StaySafe.module.css";

const STAGGER_CONTAINER: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const STAGGER_ITEM: any = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function VerificationStepper() {
  const { t } = useLanguage();

  return (
    <section className={`container ${styles.section} ${styles.bgAlt}`}>
      <div className={styles.stepperContainer}>
        <h2 className={styles.sectionTitleCenter}>{t('staySafe.verifyTitle')}</h2>
        
        <motion.div 
          className={styles.stepper}
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Step 1 */}
          <motion.div className={styles.step} variants={STAGGER_ITEM}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepIconWrapper}>
              <BadgeCheck size={32} />
            </div>
            <h3 className={styles.stepTitle}>{t('staySafe.verifyStep1')}</h3>
            <p className={styles.stepDesc}>{t('staySafe.verifyStep1Desc')}</p>
          </motion.div>
          
          <div className={styles.stepDivider}></div>
          
          {/* Step 2 */}
          <motion.div className={styles.step} variants={STAGGER_ITEM}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepIconWrapper}>
              <FileSearch size={32} />
            </div>
            <h3 className={styles.stepTitle}>{t('staySafe.verifyStep2')}</h3>
            <p className={styles.stepDesc}>{t('staySafe.verifyStep2Desc')}</p>
          </motion.div>
          
          <div className={styles.stepDivider}></div>
          
          {/* Step 3 */}
          <motion.div className={styles.step} variants={STAGGER_ITEM}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepIconWrapper}>
              <Eye size={32} />
            </div>
            <h3 className={styles.stepTitle}>{t('staySafe.verifyStep3')}</h3>
            <p className={styles.stepDesc}>{t('staySafe.verifyStep3Desc')}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
