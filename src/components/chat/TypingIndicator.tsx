import { motion } from "framer-motion";
import styles from "./Chat.module.css";

export function TypingIndicator() {
  return (
    <div className={styles.typingContainer}>
      <motion.div
        className={styles.typingDot}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={styles.typingDot}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.div
        className={styles.typingDot}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
    </div>
  );
}
