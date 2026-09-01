"use client";

import { useState } from "react";
import { ChatSidebar, ChatArea } from "@/components/chat";
import styles from "./page.module.css";

export default function ChatPage() {
  const [externalInput, setExternalInput] = useState<string | null>(null);

  const handleSuggestionClick = (suggestion: string) => {
    setExternalInput(suggestion);
  };

  return (
    <main className={styles.page}>
      <div className={styles.chatContainer}>
        <ChatSidebar onSuggestionClick={handleSuggestionClick} />
        <div className={styles.chatAreaWrapper}>
          <ChatArea 
            externalInput={externalInput} 
            onClearExternalInput={() => setExternalInput(null)} 
          />
        </div>
      </div>
    </main>
  );
}
