"use client";

import { motion } from "framer-motion";
import { Map } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import styles from "@/app/page.module.css";

const FADE_UP: any = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function StateCtaSection() {
  const { t } = useLanguage();

  return (
    <section className={styles.bannerSection}>
      <div className="container">
        <motion.div 
          className={styles.bannerContent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={FADE_UP}
        >
          <div className={styles.bannerText}>
            <h2>{t('stateCta.title')}</h2>
            <p>{t('stateCta.subtitle')}</p>
          </div>
          <Link href="/timeline">
            <Button size="lg" className={styles.bannerBtn}>
              <Map size={20} className={styles.btnIcon} />
              {t('stateCta.cta')}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
