"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./StaySafe.module.css";

export function SafetyChecklist() {
  const { t } = useLanguage();
  
  const [checks, setChecks] = useState([
    { id: 1, key: 'staySafe.check1', checked: false },
    { id: 2, key: 'staySafe.check2', checked: false },
    { id: 3, key: 'staySafe.check3', checked: false },
    { id: 4, key: 'staySafe.check4', checked: false },
    { id: 5, key: 'staySafe.check5', checked: false },
  ]);

  const checkedCount = checks.filter(c => c.checked).length;
  const isComplete = checkedCount === checks.length;
  const progressPercent = (checkedCount / checks.length) * 100;

  const toggleCheck = (id: number) => {
    setChecks(checks.map(c => c.id === id ? { ...c, checked: !c.checked } : c));
  };

  return (
    <section className={`container ${styles.section}`}>
      <motion.div 
        className={styles.checklistContainer}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className={styles.checklistHeader}>
          <h2 className={styles.sectionTitle}>{t('staySafe.checklistTitle')}</h2>
          <div className={styles.progressText}>
            {checkedCount} {t('staySafe.checksComplete')}
          </div>
        </div>
        
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill} 
            style={{ width: `${progressPercent}%` }} 
          />
        </div>

        <div className={styles.checkItems}>
          {checks.map((check) => (
            <label 
              key={check.id} 
              className={`${styles.checkItem} ${check.checked ? styles.checkItemActive : ''}`}
            >
              <input 
                type="checkbox" 
                checked={check.checked}
                onChange={() => toggleCheck(check.id)}
                className={styles.hiddenCheckbox}
              />
              <div className={`${styles.customCheckbox} ${check.checked ? styles.customCheckboxChecked : ''}`}>
                {check.checked && <Check size={16} />}
              </div>
              <span className={styles.checkText}>{t(check.key)}</span>
            </label>
          ))}
        </div>

        <AnimatePresence>
          {isComplete && (
            <motion.div 
              className={styles.successMessage}
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
            >
              <CheckCircle2 size={24} />
              <span>{t('staySafe.checklistSuccess')}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
