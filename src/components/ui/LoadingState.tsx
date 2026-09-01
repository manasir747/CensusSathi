import { Loader2 } from 'lucide-react';
import styles from './LoadingState.module.css';

interface LoadingStateProps {
  message?: string;
  fullPage?: boolean;
}

export function LoadingState({ message = "Loading...", fullPage = false }: LoadingStateProps) {
  return (
    <div className={`${styles.container} ${fullPage ? styles.fullPage : ''}`}>
      <Loader2 className={styles.spinner} size={40} />
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}
