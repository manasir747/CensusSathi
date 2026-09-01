"use client";

import { motion } from "framer-motion";
import { Building2, GraduationCap, Home, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import styles from "@/app/guide/page.module.css";

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

export function WhyItMattersSection() {
  const { t } = useLanguage();

  const cards = [
    { icon: <Building2 size={32} />, key: 'card1Title' },
    { icon: <GraduationCap size={32} />, key: 'card2Title' },
    { icon: <Home size={32} />, key: 'card3Title' },
    { icon: <Users size={32} />, key: 'card4Title' },
  ];

  return (
    <section className={`${styles.section} ${styles.altBackground}`}>
      <div className="container">
        <motion.div 
          className={styles.sectionHeader}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={FADE_UP}
        >
          <h2>{t('guide.whyItMatters.title')}</h2>
        </motion.div>

        <motion.div 
          className={styles.matterGrid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={STAGGER}
        >
          {cards.map((card, index) => (
            <motion.div key={index} variants={FADE_UP}>
              <Card className={styles.matterCard}>
                <CardHeader>
                  <div className={styles.iconWrapper}>{card.icon}</div>
                  <CardTitle className={styles.matterCardTitle}>
                    {t(`guide.whyItMatters.${card.key}`)}
                  </CardTitle>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
