import Image from 'next/image';
import styles from './styles/Footer.module.css';

const NAV_LINKS = [
  { label: 'Demo', href: '#demo' },
  { label: 'What We Recover', href: '#recover' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Booking Leak Calculator', href: '#calculator' },
  { label: 'Miami Med Spa Booking Leak Report', href: '#' , placeholder: true },
  { label: 'FAQ', href: '#faq' },
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

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        {/* Top Row — Brand + Columns */}
        <div className={styles.top}>
          {/* Brand Column */}
          <div className={styles.brand}>
            <a href="/" className={styles.logoLink} aria-label="Avalora — Home">
              <Image
                src="/logo.jpeg"
                alt="Avalora"
                width={160}
                height={46}
                className={styles.logoImage}
              />
            </a>
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
                  <a
                    href={link.href}
                    className={styles.columnLink}
                    {...(link.placeholder ? { 'data-placeholder': 'true' } : {})}
                  >
                    {link.label}
                  </a>
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
        </div>
      </div>
    </footer>
  );
}
