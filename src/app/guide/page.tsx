import {
  GuideHeroSection,
  GuideWhatIsCensus,
  WhyItMattersSection,
  TwoPhasesDetailSection,
  PhaseComparisonSection,
  CommonTermsSection,
  CitizenSummarySection,
  GuideNextStepsSection
} from "@/components/guide";
import styles from "./page.module.css";

export const metadata = {
  title: "Understand Census | Census Saathi",
  description: "Learn what the Census is, why it matters, and what to expect in simple language.",
};

export default function GuidePage() {
  return (
    <main className={styles.page}>
      <GuideHeroSection />
      <GuideWhatIsCensus />
      <WhyItMattersSection />
      <TwoPhasesDetailSection />
      <PhaseComparisonSection />
      <CommonTermsSection />
      <CitizenSummarySection />
      <GuideNextStepsSection />
    </main>
  );
}
