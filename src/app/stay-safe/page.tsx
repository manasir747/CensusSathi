import { Metadata } from 'next';
import { 
  StaySafeHero, 
  SafetyOverviewCards, 
  PrivacyDataSection, 
  VerificationStepper,
  ScamAwarenessSection,
  SuspiciousActionBanner,
  SafetyChecklist,
  SafetyFAQ
} from '@/components/stay-safe';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Stay Safe | Census Saathi',
  description: 'Learn how to protect your personal information and participate safely in Census 2027.',
};

export default function StaySafePage() {
  return (
    <main className={styles.pageContainer}>
      <StaySafeHero />
      <SafetyOverviewCards />
      <PrivacyDataSection />
      <VerificationStepper />
      <ScamAwarenessSection />
      <SuspiciousActionBanner />
      <SafetyChecklist />
      <SafetyFAQ />
      
      <div className="container">
        <p className={styles.pageDisclaimer}>
          Safety information on this page is provided for educational purposes. Census Saathi is not an official government enumeration portal. For authoritative instructions, always verify information through official government sources.
        </p>
      </div>
    </main>
  );
}
