'use client';

import styles from './styles/Footer.module.css';

const NAV_LINKS = [
  { label: 'Demo', href: '/#demo' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Workflows', href: '/#workflow' },
  { label: 'Leak Check', href: '/#leak-check' },
  { label: 'FAQ', href: '/#faq' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'HIPAA & Security', href: '/hipaa-security' },
  { label: 'BAA', href: '/business-associate-agreement' },
  { label: 'Communication Consent', href: '/communication-consent' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        {/* Top Row — Brand + Columns */}
        <div className={styles.top}>
          {/* Brand Column */}
          <div className={styles.brand}>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={styles.topTapArea}
              aria-label="Back to top"
            >
              <span className={styles.topTapLabel}>Back to top ↑</span>
              <span className={styles.logoText}>AVALORA</span>
            </button>
            <p className={styles.tagline}>
              Lead recovery, booking support, and patient communication for Miami med spas.
            </p>
            <p className={styles.missionLine}>
              Your front desk stays human. Avalora catches the missed moments.
            </p>
          </div>

          {/* Navigation Column */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Navigate</h4>
            <ul className={styles.columnList} role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  {link.label === 'Demo' ? (
                    <button 
                      onClick={() => window.triggerRetellWidget?.()}
                      className={styles.columnLink}
                      style={{ background: 'none', border: 'none', padding: '3px 0', cursor: 'pointer', textAlign: 'left' }}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a href={link.href} className={styles.columnLink}>
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Legal</h4>
            <ul className={styles.columnList} role="list">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.columnLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact</h4>
            <a
              href="mailto:burhan@theavalora.com"
              className={styles.email}
            >
              burhan@theavalora.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className={styles.divider} />

        {/* Disclaimer */}
        <div className={styles.disclaimer}>
          <p className={styles.disclaimerText}>
            Avalora does not provide medical advice, diagnose patients, recommend
            treatments, determine treatment eligibility, or replace clinical judgment.
            Patient communication workflows are configured around clinic-approved FAQs,
            escalation rules, consent requirements, and handoff preferences.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Avalora. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className={styles.backToTop}
            aria-label="Back to top"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M9 14V4M9 4L4 9M9 4L14 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
