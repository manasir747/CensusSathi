"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChatMessage as ChatMessageType, sendMessageToGemini } from "@/services/geminiService";
import { ChatMessage } from "./ChatMessage";
import { TypingIndicator } from "./TypingIndicator";
import { Bot, Send, Trash2, Mic } from "lucide-react";
import styles from "./Chat.module.css";

interface ChatAreaProps {
  externalInput: string | null;
  onClearExternalInput: () => void;
}

export function ChatArea({ externalInput, onClearExternalInput }: ChatAreaProps) {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add welcome message initially
    setMessages([
      {
        id: "msg-welcome",
        role: "assistant",
        content: t('chat.welcomeMessage'),
        timestamp: new Date()
      }
    ]);
  }, [t]);

  useEffect(() => {
    if (externalInput) {
      handleSendMessage(externalInput);
      onClearExternalInput();
    }
  }, [externalInput]);

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const newUserMsg: ChatMessageType = {
      id: `msg-${Date.now()}`,
      role: "user",
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputValue("");
    setIsTyping(true);

    try {
      // Call abstract gemini service
      const responseText = await sendMessageToGemini(text, messages);
      
      const newAssistantMsg: ChatMessageType = {
        id: `msg-${Date.now() + 1}`,
        role: "assistant",
        content: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newAssistantMsg]);
    } catch (error) {
      console.error("Failed to get response", error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleClearChat = () => {
    if (confirm(t('chat.header.clearConfirm'))) {
      setMessages([
        {
          id: `msg-welcome-${Date.now()}`,
          role: "assistant",
          content: t('chat.welcomeMessage'),
          timestamp: new Date()
        }
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  return (
    <div className={styles.chatArea}>
      <header className={styles.chatHeader}>
        <div className={styles.headerInfo}>
          <div className={styles.headerAvatar}>
            <Bot size={24} />
          </div>
          <div>
            <h2 className={styles.headerTitle}>{t('chat.header.title')}</h2>
            <div className={styles.statusLine}>
              <span className={styles.statusDot}></span>
              <span className={styles.statusText}>{t('chat.header.status')}</span>
            </div>
          </div>
        </div>
        <button className={styles.clearBtn} onClick={handleClearChat}>
          <Trash2 size={16} />
          <span className={styles.clearText}>{t('chat.header.clearChat')}</span>
        </button>
      </header>

      <div className={styles.messagesContainer}>
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        {isTyping && (
          <div className={`${styles.messageWrapper} ${styles.assistantWrapper}`}>
            <div className={styles.avatar}>
              <Bot size={20} />
            </div>
            <div className={`${styles.messageBubble} ${styles.assistantBubble}`}>
              <TypingIndicator />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className={styles.composerContainer}>
        <div className={styles.inputWrapper}>
          <button className={styles.micBtn} aria-label="Voice input">
            <Mic size={20} />
          </button>
          <input 
            type="text" 
            className={styles.chatInput}
            placeholder={t('chat.input.placeholder')}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button 
            className={styles.sendBtn} 
            disabled={!inputValue.trim() || isTyping}
            onClick={() => handleSendMessage(inputValue)}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
