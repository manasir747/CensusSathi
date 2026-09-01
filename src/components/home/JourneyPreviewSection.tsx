"use client";

import { motion } from "framer-motion";
import { Calendar, MonitorSmartphone, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
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

export function JourneyPreviewSection() {
  const { t } = useLanguage();

  const steps = [
    { icon: <Calendar size={24} />, key: 'step1' },
    { icon: <MonitorSmartphone size={24} />, key: 'step2' },
    { icon: <Users size={24} />, key: 'step3' },
    { icon: <ShieldCheck size={24} />, key: 'step4' },
  ];

  return (
    <section className={`container ${styles.section} ${styles.journeySection}`}>
      <motion.div 
        className={styles.sectionHeader}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP}
      >
        <h2>{t('journey.title')}</h2>
      </motion.div>

      <motion.div 
        className={styles.journeySteps}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={STAGGER}
      >
        {steps.map((step, index) => (
          <motion.div key={index} variants={FADE_UP} className={styles.journeyStep}>
            <div className={styles.stepIcon}>{step.icon}</div>
            <p className={styles.stepText}>{t(`journey.${step.key}`)}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className={styles.centerAction}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link href="/guide">
          <Button size="lg" className={styles.primaryCta}>
            {t('journey.cta')}
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
