"use client";

import { motion } from "framer-motion";
import { ShieldAlert, XCircle, MessageSquareText } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import styles from "./StaySafe.module.css";

export function SuspiciousActionBanner() {
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <section className={`container ${styles.section}`}>
      <motion.div 
        className={styles.suspiciousBanner}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className={styles.suspiciousHeader}>
          <ShieldAlert size={40} className={styles.suspiciousIcon} />
          <h2>{t('staySafe.suspiciousTitle')}</h2>
        </div>
        
        <div className={styles.suspiciousGrid}>
          <ul className={styles.suspiciousList}>
            <li><XCircle size={20} className={styles.xIcon} /> <span>{t('staySafe.suspiciousPoint1')}</span></li>
            <li><XCircle size={20} className={styles.xIcon} /> <span>{t('staySafe.suspiciousPoint2')}</span></li>
            <li><XCircle size={20} className={styles.xIcon} /> <span>{t('staySafe.suspiciousPoint3')}</span></li>
          </ul>
          <ul className={styles.suspiciousList}>
            <li><XCircle size={20} className={styles.xIcon} /> <span>{t('staySafe.suspiciousPoint4')}</span></li>
            <li><XCircle size={20} className={styles.xIcon} /> <span>{t('staySafe.suspiciousPoint5')}</span></li>
            <li><XCircle size={20} className={styles.xIcon} /> <span>{t('staySafe.suspiciousPoint6')}</span></li>
          </ul>
        </div>
        
        <div className={styles.suspiciousCta}>
          <Button variant="primary" size="lg" onClick={() => router.push('/chat')}>
            <MessageSquareText size={20} className="mr-2" />
            {t('staySafe.btnAskSaathi')}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
