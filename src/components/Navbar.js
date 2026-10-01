'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/Navbar.module.css';

const NAV_LINKS = [
  { label: 'Demo', href: '/#demo' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Workflows', href: '/#workflow' },
  { label: 'Leak Check', href: '/#leak-check' },
  { label: 'Insights', href: '/insights' },
];

export default function Navbar() {
  const panelRef = useRef(null);
  const toggleRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isMobileOpen]);

  const closeMobile = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  // Keep keyboard navigation within the open drawer, including an explicit close action.
  useEffect(() => {
    if (!isMobileOpen) return;
    const panel = panelRef.current;
    const items = Array.from(panel.querySelectorAll('a[href], button'));
    const previous = document.activeElement;
    items[0]?.focus();
    const handleKey = (event) => {
      if (event.key === 'Escape') { event.preventDefault(); closeMobile(); }
      if (event.key === 'Tab') {
        const first = items[0], last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    panel.addEventListener('keydown', handleKey);
    return () => { panel.removeEventListener('keydown', handleKey); previous?.focus(); };
  }, [isMobileOpen, closeMobile]);

  const toggleMobile = useCallback(() => {
    setIsMobileOpen((prev) => !prev);
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      role="banner"
    >
      <nav className={styles.nav} aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Avalora — Home">
          <Image
            src="/logo.jpeg"
            alt="Avalora"
            width={44}
            height={44}
            className={styles.logoImage}
            priority
          />
          <span className={styles.wordmark} aria-hidden="true">AVALORA</span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className={styles.links} role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className={styles.ctas}>
          <Link
            href="/#book-call"
            className={`buttonBook ${styles.bookButton}`}
          >
            Book a Fit Call
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          ref={toggleRef}
          className={`${styles.hamburger} ${isMobileOpen ? styles.hamburgerOpen : ''}`}
          onClick={toggleMobile}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`${styles.overlay} ${isMobileOpen ? styles.overlayVisible : ''}`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* Mobile Slide-in Panel */}
      <div
        ref={panelRef}
        inert={!isMobileOpen}
        aria-hidden={!isMobileOpen}
        id="mobile-menu"
        className={`${styles.mobileMenu} ${isMobileOpen ? styles.mobileMenuOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className={styles.mobileMenuInner}>
          <button className={styles.closeMenu} onClick={closeMobile} aria-label="Close menu">Close ×</button>
          <ul className={styles.mobileLinks} role="list">
            {NAV_LINKS.map((link, index) => (
              <li
                key={link.href}
                className={styles.mobileLinkItem}
                style={{ animationDelay: `${index * 50 + 100}ms` }}
              >
                <a
                  href={link.href}
                  className={styles.mobileLink}
                  onClick={closeMobile}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.mobileCtas}>
            <Link
              href="/#book-call"
              className="buttonBook"
              onClick={closeMobile}
            >
              Book a Private Fit Call
            </Link>
          </div>

          <div className={styles.mobileContact}>
            <a href="mailto:burhan@theavalora.com" className={styles.mobileEmail}>
              burhan@theavalora.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
