"use client";

import { motion } from "framer-motion";
import { Map, Calendar, Home, Users, CheckCircle2, AlertTriangle, FileText, Target } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { StateData } from "@/data/statesData";
import styles from "./MyState.module.css";
import { Card } from "@/components/ui/Card";

interface StateDetailsProps {
  stateData: StateData | null;
}

export function StateDetails({ stateData }: StateDetailsProps) {
  const { t } = useLanguage();

  if (!stateData) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIconWrapper}>
          <Map size={48} className={styles.emptyIcon} />
        </div>
        <h2 className={styles.emptyTitle}>{t('myState.noRegionTitle')}</h2>
        <p className={styles.emptyDesc}>{t('myState.noRegionDesc')}</p>
      </div>
    );
  }

  return (
    <motion.div 
      className={styles.detailsContainer}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.demoWarning}>
        <AlertTriangle size={16} />
        <span>{t('myState.demoDataBadge')}</span>
      </div>

      <div className={styles.detailsHeader}>
        <h2 className={styles.stateName}>{stateData.name}</h2>
        <span className={styles.statusBadge}>{stateData.status}</span>
      </div>
      
      <p className={styles.localNote}>{stateData.localNote}</p>

      <div className={styles.timelineSection}>
        <h3 className={styles.sectionTitle}>{t('myState.timelineTitle')}</h3>
        <div className={styles.timeline}>
          {/* Phase 1 */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineIconWrapper}><FileText size={20} /></div>
            <div className={styles.timelineContent}>
              <h4>{t('myState.phase1')}</h4>
              <span className={styles.timelineDate}>Early 2027</span>
              <p>{t('myState.phase1Desc')}</p>
            </div>
          </div>
          {/* Phase 2 */}
          <div className={`${styles.timelineItem} ${styles.timelineActive}`}>
            <div className={styles.timelineIconWrapperActive}><Home size={20} /></div>
            <div className={styles.timelineContent}>
              <h4>{t('myState.phase2')}</h4>
              <span className={styles.timelineDate}>{stateData.houseListing}</span>
              <p>{t('myState.phase2Desc')}</p>
            </div>
          </div>
          {/* Phase 3 */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineIconWrapper}><Target size={20} /></div>
            <div className={styles.timelineContent}>
              <h4>{t('myState.phase3')}</h4>
              <span className={styles.timelineDate}>Late 2027</span>
              <p>{t('myState.phase3Desc')}</p>
            </div>
          </div>
          {/* Phase 4 */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineIconWrapper}><Users size={20} /></div>
            <div className={styles.timelineContent}>
              <h4>{t('myState.phase4')}</h4>
              <span className={styles.timelineDate}>{stateData.populationEnumeration}</span>
              <p>{t('myState.phase4Desc')}</p>
            </div>
          </div>
          {/* Phase 5 */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineIconWrapper}><CheckCircle2 size={20} /></div>
            <div className={styles.timelineContent}>
              <h4>{t('myState.phase5')}</h4>
              <span className={styles.timelineDate}>Late 2028</span>
              <p>{t('myState.phase5Desc')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.summaryCardsGrid}>
        <Card className={styles.summaryCard}>
          <span className={styles.cardLabel}>{t('myState.cardCurrentStatus')}</span>
          <strong className={styles.cardValue}>{stateData.status}</strong>
        </Card>
        <Card className={styles.summaryCard}>
          <span className={styles.cardLabel}>{t('myState.cardNextMilestone')}</span>
          <strong className={styles.cardValue}>{t('myState.phase2')} - {stateData.houseListing}</strong>
        </Card>
        <Card className={`${styles.summaryCard} ${styles.cardAccent}`}>
          <span className={styles.cardLabelAccent}>{t('myState.cardCitizenAction')}</span>
          <strong className={styles.cardValueAccent}>{stateData.localNote}</strong>
        </Card>
      </div>

    </motion.div>
  );
}
