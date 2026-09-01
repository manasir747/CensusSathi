"use client";

import { motion } from "framer-motion";
import { BookMarked } from "lucide-react";
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
    transition: { staggerChildren: 0.1 }
  }
};

export function CommonTermsSection() {
  const { t } = useLanguage();

  const terms = [
    { term: t('guide.terms.term1'), desc: t('guide.terms.desc1') },
    { term: t('guide.terms.term2'), desc: t('guide.terms.desc2') },
    { term: t('guide.terms.term3'), desc: t('guide.terms.desc3') },
    { term: t('guide.terms.term4'), desc: t('guide.terms.desc4') },
    { term: t('guide.terms.term5'), desc: t('guide.terms.desc5') },
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
          <h2>{t('guide.terms.title')}</h2>
        </motion.div>

        <motion.div 
          className={styles.termsGrid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={STAGGER}
        >
          {terms.map((item, index) => (
            <motion.div key={index} variants={FADE_UP} className={styles.termCard}>
              <div className={styles.termHeader}>
                <BookMarked size={20} className={styles.termIcon} />
                <h3 className={styles.termTitle}>{item.term}</h3>
              </div>
              <p className={styles.termDesc}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
