"use client";

import { motion } from "framer-motion";
import { BotMessageSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import styles from "@/app/page.module.css";

const FADE_UP: any = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const FLOAT: any = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, ease: "easeInOut", repeat: Infinity }
  }
};

export function AiCtaSection() {
  const { t } = useLanguage();

  return (
    <section className={`container ${styles.section}`}>
      <motion.div 
        className={styles.aiCard}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP}
      >
        <div className={styles.aiContent}>
          <h2>{t('aiCta.title')}</h2>
          <p>{t('aiCta.subtitle')}</p>
          <Link href="/chat">
            <Button size="lg" className={styles.aiBtn}>
              <BotMessageSquare size={20} className={styles.btnIcon} />
              {t('aiCta.cta')}
            </Button>
          </Link>
        </div>
        <motion.div variants={FLOAT} animate="animate" className={styles.aiVisual}>
          <BotMessageSquare size={120} className={styles.aiIconLarge} />
        </motion.div>
      </motion.div>
    </section>
  );
}
