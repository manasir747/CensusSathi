"use client";

import { Search, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { StateData } from "@/data/statesData";
import styles from "./MyState.module.css";

interface StateSelectorProps {
  states: StateData[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedStateId: string | null;
  onStateSelect: (id: string) => void;
}

export function StateSelector({
  states,
  searchQuery,
  onSearchChange,
  selectedStateId,
  onStateSelect
}: StateSelectorProps) {
  const { t } = useLanguage();
  
  const frequentStates = states.filter(s => s.isFrequent);
  const filteredStates = states.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.selectorCard}>
      <h2 className={styles.selectorTitle}>{t('myState.selectRegion')}</h2>
      
      <div className={styles.searchWrapper}>
        <Search size={20} className={styles.searchIcon} />
        <input 
          type="text" 
          className={styles.searchInput}
          placeholder={t('myState.searchPlaceholder')}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {!searchQuery && (
        <div className={styles.frequentSection}>
          <h3 className={styles.sectionSubtitle}>{t('myState.frequentlySearched')}</h3>
          <div className={styles.chipContainer}>
            {frequentStates.map(state => (
              <button 
                key={`freq-${state.id}`}
                className={`${styles.stateChip} ${selectedStateId === state.id ? styles.activeChip : ''}`}
                onClick={() => onStateSelect(state.id)}
              >
                {state.name}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className={styles.listSection}>
        <div className={styles.stateList}>
          {filteredStates.map(state => (
            <button
              key={state.id}
              className={`${styles.listItem} ${selectedStateId === state.id ? styles.activeItem : ''}`}
              onClick={() => onStateSelect(state.id)}
            >
              <div className={styles.itemIcon}>
                <MapPin size={18} />
              </div>
              <span className={styles.itemName}>{state.name}</span>
            </button>
          ))}
          {filteredStates.length === 0 && (
            <p className={styles.noResults}>No states found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
