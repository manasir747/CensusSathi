"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, MapPin, Compass, MessageSquareText, ChevronDown } from "lucide-react";
import styles from "./page.module.css";

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function HomePage() {
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
              <span className={styles.badgeIcon}>🇮🇳</span> Official Guide to Census 2027
            </motion.div>
            
            <motion.h1 variants={FADE_UP} className={styles.title}>
              Census 2027, <br />
              <span className="text-primary">made simple.</span>
            </motion.h1>
            
            <motion.p variants={FADE_UP} className={styles.subtitle}>
              Your friendly, multilingual guide to the upcoming Indian Census.
              Learn what to expect, how to participate, and how to stay safe.
            </motion.p>
            
            <motion.div variants={FADE_UP} className={styles.ctaGroup}>
              <Link href="/guide">
                <Button size="lg" className={styles.primaryCta}>Understand Census</Button>
              </Link>
              <Link href="/chat">
                <Button variant="outline" size="lg" className={styles.secondaryCta}>
                  <MessageSquareText size={20} className={styles.btnIcon} />
                  Ask Census Saathi
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.illustrationCircle}>
              <Home size={64} className={styles.illustIcon1} />
              <MapPin size={48} className={styles.illustIcon2} />
              <MessageSquareText size={48} className={styles.illustIcon3} />
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
                  <CardTitle>Understand Census</CardTitle>
                </CardHeader>
                <CardContent>
                  Learn about the two phases of the census and what information is collected.
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
                  <CardTitle>Check My State</CardTitle>
                </CardHeader>
                <CardContent>
                  Find out exactly when the Census is happening in your state or Union Territory.
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
                  <CardTitle>How It Works</CardTitle>
                </CardHeader>
                <CardContent>
                  A step-by-step guide explaining the survey process and how to participate safely.
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
                  <CardTitle>Ask Census Saathi</CardTitle>
                </CardHeader>
                <CardContent>
                  Have questions? Chat with our AI assistant in your preferred language.
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
            <h2>The Two Phases of Census 2027</h2>
            <p>The census is conducted in two separate visits to your home.</p>
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
                <h3>Phase 1: House Listing</h3>
                <p>Government workers will visit to collect basic information about your house and amenities.</p>
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
                <h3>Phase 2: Population Enumeration</h3>
                <p>A few months later, workers will return to count the members of your household.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
