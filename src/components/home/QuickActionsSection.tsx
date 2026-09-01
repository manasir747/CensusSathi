"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, MapPin, Compass, MessageSquareText } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
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
    transition: { staggerChildren: 0.15 }
  }
};

export function QuickActionsSection() {
  const { t } = useLanguage();

  return (
    <section className={`container ${styles.section}`}>
      <motion.div 
        className={styles.sectionHeader}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP}
      >
        <h2>{t('features.title')}</h2>
      </motion.div>

      <motion.div 
        className={styles.features}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={STAGGER}
      >
        <motion.div variants={FADE_UP}>
          <Link href="/guide" className={styles.cardLink}>
            <Card hoverable className={styles.featureCard}>
              <CardHeader>
                <div className={styles.iconWrapper}>
                  <Home size={32} />
                </div>
                <CardTitle>{t('features.understandTitle')}</CardTitle>
              </CardHeader>
              <CardContent>{t('features.understandDesc')}</CardContent>
            </Card>
          </Link>
        </motion.div>

        <motion.div variants={FADE_UP}>
          <Link href="/timeline" className={styles.cardLink}>
            <Card hoverable className={styles.featureCard}>
              <CardHeader>
                <div className={styles.iconWrapper}>
                  <MapPin size={32} />
                </div>
                <CardTitle>{t('features.stateTitle')}</CardTitle>
              </CardHeader>
              <CardContent>{t('features.stateDesc')}</CardContent>
            </Card>
          </Link>
        </motion.div>

        <motion.div variants={FADE_UP}>
          <Link href="/guide" className={styles.cardLink}>
            <Card hoverable className={styles.featureCard}>
              <CardHeader>
                <div className={styles.iconWrapper}>
                  <Compass size={32} />
                </div>
                <CardTitle>{t('features.worksTitle')}</CardTitle>
              </CardHeader>
              <CardContent>{t('features.worksDesc')}</CardContent>
            </Card>
          </Link>
        </motion.div>

        <motion.div variants={FADE_UP}>
          <Link href="/chat" className={styles.cardLink}>
            <Card hoverable className={styles.featureCard}>
              <CardHeader>
                <div className={styles.iconWrapperPrimary}>
                  <MessageSquareText size={32} />
                </div>
                <CardTitle>{t('features.chatTitle')}</CardTitle>
              </CardHeader>
              <CardContent>{t('features.chatDesc')}</CardContent>
            </Card>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
