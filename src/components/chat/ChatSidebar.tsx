"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Bot, Languages, Shield, Info } from "lucide-react";
import styles from "./Chat.module.css";

interface ChatSidebarProps {
  onSuggestionClick: (text: string) => void;
}

export function ChatSidebar({ onSuggestionClick }: ChatSidebarProps) {
  const { t } = useLanguage();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <div className={styles.sidebarAvatar}>
          <Bot size={40} />
        </div>
        <div>
          <h1 className={styles.sidebarTitle}>{t('chat.sidebar.title')}</h1>
          <p className={styles.sidebarSubtitle}>{t('chat.sidebar.subtitle')}</p>
        </div>
      </div>
      
      <p className={styles.sidebarDesc}>
        {t('chat.sidebar.description')}
      </p>

      <div className={styles.indicators}>
        <div className={styles.indicatorBadge}><Languages size={14} /> 5 Languages</div>
        <div className={styles.indicatorBadge}><Shield size={14} /> Safe & Secure</div>
        <div className={styles.indicatorBadge}><Info size={14} /> Govt Guide</div>
      </div>

      <div className={styles.suggestionsContainer}>
        <h3 className={styles.suggestionsTitle}>{t('chat.sidebar.suggestionsTitle')}</h3>
        <div className={styles.suggestionsList}>
          {[0, 1, 2, 3].map((idx) => {
            const key = `chat.sidebar.suggestions.${idx}`;
            const suggestion = t(key);
            if (suggestion === key) return null;
            return (
              <button 
                key={idx} 
                className={styles.suggestionBtn}
                onClick={() => onSuggestionClick(suggestion)}
              >
                {suggestion}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
