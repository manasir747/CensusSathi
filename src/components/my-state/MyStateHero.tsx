"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./MyState.module.css";

const FADE_UP: any = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function MyStateHero() {
  const { t } = useLanguage();

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <motion.div 
          className={styles.heroContent}
          initial="hidden"
          animate="show"
          variants={FADE_UP}
        >
          <h1 className={styles.title}>{t('myState.heroTitle')}</h1>
          <p className={styles.subtitle}>{t('myState.heroSubtitle')}</p>
        </motion.div>
      </div>
    </section>
  );
}
