"use client";

import Link from 'next/link';
import { Globe, Menu, MessageSquareText } from 'lucide-react';
import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🇮🇳</span>
          <span className={styles.logoText}>Census Saathi</span>
        </Link>
        
        <nav className={styles.desktopNav}>
          <Link href="/guide" className={styles.navLink}>How it Works</Link>
          <Link href="/timeline" className={styles.navLink}>My State</Link>
          <Link href="/security" className={styles.navLink}>Stay Safe</Link>
        </nav>
        
        <div className={styles.actions}>
          {/* Language Selector Dropdown */}
          <div className={styles.langSelector}>
            <button className={styles.langBtn} aria-label="Select Language">
              <Globe size={18} />
              <span>English</span>
            </button>
          </div>
          
          <Link href="/chat" className={styles.chatCta}>
            <MessageSquareText size={18} />
            <span>Ask Saathi</span>
          </Link>
          
          <button className={styles.mobileMenuBtn} aria-label="Menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
