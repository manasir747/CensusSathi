"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Info, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import styles from "@/app/page.module.css";

const FADE_UP: any = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function SafetyPreviewSection() {
  const { t } = useLanguage();

  return (
    <section className={`container ${styles.section} ${styles.safetySection}`}>
      <motion.div 
        className={styles.safetyCard}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP}
      >
        <div className={styles.safetyHeader}>
          <ShieldAlert size={32} className={styles.safetyIcon} />
          <h2>{t('safetyPreview.title')}</h2>
        </div>
        
        <ul className={styles.safetyList}>
          <li>
            <Info size={20} className={styles.listIcon} />
            <span>{t('safetyPreview.point1')}</span>
          </li>
          <li>
            <Info size={20} className={styles.listIcon} />
            <span>{t('safetyPreview.point2')}</span>
          </li>
          <li>
            <Info size={20} className={styles.listIcon} />
            <span>{t('safetyPreview.point3')}</span>
          </li>
        </ul>

        <Link href="/security">
          <Button variant="outline" className={styles.safetyBtn}>
            {t('safetyPreview.cta')}
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
