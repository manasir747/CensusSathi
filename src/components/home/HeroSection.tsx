"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, MapPin, MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import styles from "@/app/page.module.css";

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
  animate: (custom: number) => ({
    y: [0, -10, 0],
    transition: { duration: 4, ease: "easeInOut", repeat: Infinity, delay: custom }
  })
};

export function HeroSection() {
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
          <motion.div variants={FADE_UP} className={styles.badge}>
            <span className={styles.badgeIcon}>🇮🇳</span> {t('hero.badge')}
          </motion.div>
          
          <motion.h1 variants={FADE_UP} className={styles.title}>
            {t('hero.title')}, <br />
            <span className="text-primary">{t('hero.subtitleHighlight')}</span>
          </motion.h1>
          
          <motion.p variants={FADE_UP} className={styles.subtitle}>
            {t('hero.description')}
          </motion.p>
          
          <motion.div variants={FADE_UP} className={styles.ctaGroup}>
            <Link href="/guide">
              <Button size="lg" className={styles.primaryCta}>{t('hero.ctaPrimary')}</Button>
            </Link>
            <Link href="/chat">
              <Button variant="outline" size="lg" className={styles.secondaryCta}>
                <MessageSquareText size={20} className={styles.btnIcon} />
                {t('hero.ctaSecondary')}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" } as any}
        >
          <div className={styles.illustrationCircle}>
            <div className={styles.decorCircle1}></div>
            <div className={styles.decorCircle2}></div>

            <motion.div custom={0} variants={FLOAT} animate="animate" className={`${styles.iconFloat} ${styles.illustIcon1Wrapper}`}>
              <Home size={64} className={styles.illustIcon1} />
            </motion.div>
            <motion.div custom={1.5} variants={FLOAT} animate="animate" className={`${styles.iconFloat} ${styles.illustIcon2Wrapper}`}>
              <MapPin size={48} className={styles.illustIcon2} />
            </motion.div>
            <motion.div custom={0.8} variants={FLOAT} animate="animate" className={`${styles.iconFloat} ${styles.illustIcon3Wrapper}`}>
              <MessageSquareText size={48} className={styles.illustIcon3} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
