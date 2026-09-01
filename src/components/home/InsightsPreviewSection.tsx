"use client";

import { motion } from "framer-motion";
import { LineChart, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import styles from "@/app/page.module.css";

const FADE_UP: any = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function InsightsPreviewSection() {
  const { t } = useLanguage();

  return (
    <section className={`container ${styles.section} ${styles.insightsSection}`}>
      <motion.div 
        className={styles.insightsCard}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP}
      >
        <div className={styles.insightsIconWrapper}>
          <LineChart size={40} className={styles.insightsIcon} />
        </div>
        <div className={styles.insightsContent}>
          <h2>{t('insightsPreview.title')}</h2>
          <p>{t('insightsPreview.subtitle')}</p>
          <div className={styles.historicalNote}>
            {t('insightsPreview.historicalNote')}
          </div>
          <Link href="/insights">
            <Button variant="outline" className={styles.insightsBtn}>
              {t('insightsPreview.cta')}
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
