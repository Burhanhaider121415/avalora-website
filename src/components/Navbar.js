'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './styles/Navbar.module.css';

const NAV_LINKS = [
  { label: 'Demo', href: '/#demo' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Workflows', href: '/#workflow' },
  { label: 'Leak Check', href: '/#leak-check' },
  { label: 'FAQ', href: '/#faq' },
];

export default function Navbar() {
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
        <a href="/" className={styles.logo} aria-label="Avalora — Home">
          <Image
            src="/logo.jpeg"
            alt="Avalora"
            width={140}
            height={40}
            className={styles.logoImage}
            priority
          />
        </a>

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
          <button onClick={() => window.dispatchEvent(new Event('openDemoModal'))} className={`${styles.ctaPrimary}`}>
            Hear the Demo
          </button>
          <a
            href="/#book-call"
            className={`${styles.ctaSecondary}`}
          >
            Book a Private Fit Call
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
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
        id="mobile-menu"
        className={`${styles.mobileMenu} ${isMobileOpen ? styles.mobileMenuOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className={styles.mobileMenuInner}>
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
            <button
              onClick={() => {
                window.dispatchEvent(new Event('openDemoModal'));
                closeMobile();
              }}
              className={styles.mobilePrimaryCta}
            >
              Hear the Demo
            </button>
            <a
              href="/#book-call"
              className={styles.mobileSecondaryCta}
              onClick={closeMobile}
            >
              Book a Private Fit Call
            </a>
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
