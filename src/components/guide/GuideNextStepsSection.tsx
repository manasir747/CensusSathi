"use client";

import { motion } from "framer-motion";
import { Calendar, Navigation, Bot } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import styles from "@/app/guide/page.module.css";

const FADE_UP: any = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function GuideNextStepsSection() {
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <section className={`${styles.section} ${styles.nextStepsSection}`}>
      <div className={`container ${styles.nextStepsContainer}`}>
        <motion.div 
          className={styles.mainActions}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={FADE_UP}
        >
          <Button size="lg" variant="primary" className={styles.actionBtn} onClick={() => router.push('/my-state')}>
            <Calendar size={20} className={styles.btnIcon} />
            {t('guide.nextSteps.cta1')}
          </Button>

          <Button size="lg" variant="outline" className={styles.actionBtnOutline} onClick={() => router.push('/guide')}>
            <Navigation size={20} className={styles.btnIcon} />
            {t('guide.nextSteps.cta2')}
          </Button>
        </motion.div>

        <motion.div 
          className={styles.botAction}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className={styles.questionText}>{t('guide.nextSteps.question')}</p>
          <Button size="sm" variant="outline" className={styles.botBtn} onClick={() => router.push('/chat')}>
            <Bot size={16} className={styles.btnIcon} />
            {t('guide.nextSteps.cta3')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
