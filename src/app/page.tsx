"use client";

import {
  HeroSection,
  QuickActionsSection,
  WhatIsCensusSection,
  TwoPhasesSection,
  JourneyPreviewSection,
  StateCtaSection,
  AiCtaSection,
  SafetyPreviewSection,
  InsightsPreviewSection
} from "@/components/home";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <QuickActionsSection />
      <WhatIsCensusSection />
      <TwoPhasesSection />
      <JourneyPreviewSection />
      <StateCtaSection />
      <AiCtaSection />
      <SafetyPreviewSection />
      <InsightsPreviewSection />
    </div>
  );
}
