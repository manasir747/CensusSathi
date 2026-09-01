import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <p className={styles.text}>
          © 2027 Census Saathi. This is an educational guidance platform and not an official government portal.
        </p>
      </div>
    </footer>
  );
}
