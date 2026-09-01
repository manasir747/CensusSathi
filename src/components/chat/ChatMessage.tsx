"use client";

import { ChatMessage as ChatMessageType } from "@/services/geminiService";
import { motion } from "framer-motion";
import styles from "./Chat.module.css";
import { Bot, User } from "lucide-react";

export function ChatMessage({ message }: { message: ChatMessageType }) {
  const isUser = message.role === 'user';

  const timeString = new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <motion.div 
      className={`${styles.messageWrapper} ${isUser ? styles.userWrapper : styles.assistantWrapper}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {!isUser && (
        <div className={styles.avatar}>
          <Bot size={20} />
        </div>
      )}
      
      <div className={`${styles.messageBubble} ${isUser ? styles.userBubble : styles.assistantBubble}`}>
        <p className={styles.messageContent}>{message.content}</p>
        <span className={`${styles.messageTime} ${isUser ? styles.userTime : styles.assistantTime}`}>
          {timeString}
        </span>
      </div>
      
      {isUser && (
        <div className={styles.avatarUser}>
          <User size={20} />
        </div>
      )}
    </motion.div>
  );
}
