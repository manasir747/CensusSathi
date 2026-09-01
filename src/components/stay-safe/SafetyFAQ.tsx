"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./StaySafe.module.css";

const faqs = [
  { qKey: "staySafe.faq1Q", aKey: "staySafe.faq1A" },
  { qKey: "staySafe.faq2Q", aKey: "staySafe.faq2A" },
  { qKey: "staySafe.faq3Q", aKey: "staySafe.faq3A" },
  { qKey: "staySafe.faq4Q", aKey: "staySafe.faq4A" },
  { qKey: "staySafe.faq5Q", aKey: "staySafe.faq5A" }
];

export function SafetyFAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.faqContainer}>
        <h2 className={styles.sectionTitleCenter}>{t('staySafe.faqTitle')}</h2>
        
        <div className={styles.accordion}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div key={index} className={styles.faqItem}>
                <button 
                  className={`${styles.faqHeader} ${isOpen ? styles.faqHeaderActive : ''}`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.faqQuestion}>{t(faq.qKey)}</span>
                  <ChevronDown 
                    size={20} 
                    className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ''}`} 
                  />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      className={styles.faqContent}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={styles.faqAnswer}>
                        {t(faq.aKey)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
