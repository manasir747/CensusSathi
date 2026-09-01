"use client";

import { motion } from "framer-motion";
import { ChevronDown, FileText } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import phasesData from "@/data/phases.json";
import { CensusPhase } from "@/types/census";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import styles from "@/app/page.module.css";

const FADE_UP: any = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function TwoPhasesSection() {
  const { t } = useLanguage();
  const phases = phasesData as CensusPhase[];

  return (
    <section className={styles.phaseSection}>
      <div className="container">
        <motion.div 
          className={styles.phaseHeader}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={FADE_UP}
        >
          <h2>{t('phases.title')}</h2>
          <p>{t('phases.subtitle')}</p>
        </motion.div>

        <div className={styles.timeline}>
          <motion.div 
            className={styles.phaseNode}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.phaseIcon}>1</div>
            <div className={styles.phaseContent}>
              <h3>{t('phases.phase1Title') || phases[0].name}</h3>
              <p>{t('phases.phase1Desc') || phases[0].shortDescription}</p>
            </div>
          </motion.div>

          <motion.div 
            className={styles.timelineConnector}
            initial={{ height: 0 }}
            whileInView={{ height: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ChevronDown className={styles.connectorArrow} size={24} />
          </motion.div>

          <motion.div 
            className={styles.phaseNode}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className={styles.phaseIconSecondary}>2</div>
            <div className={styles.phaseContent}>
              <h3>{t('phases.phase2Title') || phases[1].name}</h3>
              <p>{t('phases.phase2Desc') || phases[1].shortDescription}</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className={styles.centerAction}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/guide">
            <Button size="lg" variant="outline" className={styles.phaseCta}>
              <FileText size={18} className={styles.btnIcon} />
              {t('phases.cta')}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
