"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, MapPin, Compass, MessageSquareText, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./page.module.css";

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
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      delay: custom
    }
  })
};

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      
      {/* HERO SECTION */}
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
              {/* Background decorative circles */}
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

      {/* FEATURES SECTION */}
      <section className={`container ${styles.section}`}>
        <motion.div 
          className={styles.features}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
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
                <CardContent>
                  {t('features.understandDesc')}
                </CardContent>
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
                <CardContent>
                  {t('features.stateDesc')}
                </CardContent>
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
                <CardContent>
                  {t('features.worksDesc')}
                </CardContent>
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
                <CardContent>
                  {t('features.chatDesc')}
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* TWO PHASE TIMELINE */}
      <section className={styles.phaseSection}>
        <div className="container">
          <motion.div 
            className={styles.phaseHeader}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_UP}
          >
            <h2>{t('phases.title')}</h2>
            <p>{t('phases.subtitle')}</p>
          </motion.div>

          <div className={styles.timeline}>
            <motion.div 
              className={styles.phaseNode}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.phaseIcon}>1</div>
              <div className={styles.phaseContent}>
                <h3>{t('phases.phase1Title')}</h3>
                <p>{t('phases.phase1Desc')}</p>
              </div>
            </motion.div>

            <motion.div 
              className={styles.timelineConnector}
              initial={{ height: 0 }}
              whileInView={{ height: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ChevronDown className={styles.connectorArrow} size={24} />
            </motion.div>

            <motion.div 
              className={styles.phaseNode}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className={styles.phaseIconSecondary}>2</div>
              <div className={styles.phaseContent}>
                <h3>{t('phases.phase2Title')}</h3>
                <p>{t('phases.phase2Desc')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
