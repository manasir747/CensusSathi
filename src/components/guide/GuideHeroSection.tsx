"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "@/app/guide/page.module.css";

const FADE_UP: any = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const FLOAT: any = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 4, ease: "easeInOut", repeat: Infinity }
  }
};

export function GuideHeroSection() {
  const { t } = useLanguage();

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <motion.div 
          className={styles.heroContent}
          initial="hidden"
          animate="show"
          variants={STAGGER}
        >
          <motion.div variants={FADE_UP} className={styles.iconBadge}>
            <BookOpen size={24} className={styles.badgeIcon} />
          </motion.div>
          <motion.h1 variants={FADE_UP} className={styles.title}>
            {t('guide.hero.title')}
          </motion.h1>
          <motion.p variants={FADE_UP} className={styles.subtitle}>
            {t('guide.hero.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div 
          className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" } as any}
        >
          <motion.div variants={FLOAT} animate="animate" className={styles.illustration}>
            <BookOpen size={100} className={styles.illustIcon} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
