'use client';

import styles from './styles/TrustStrip.module.css';

const TRUST_ITEMS = [
  { icon: '🏥', text: 'Built for Miami med spas' },
  { icon: '🌐', text: 'English/Spanish intake' },
  { icon: '👥', text: 'Front desk support, not replacement' },
  { icon: '🌙', text: 'After-hours capture' },
  { icon: '✅', text: 'Clinic-approved FAQs' },
  { icon: '🤝', text: 'Human escalation' },
  { icon: '📋', text: 'Clean staff handoff' },
];

export default function TrustStrip() {
  return (
    <section
      id="trust-strip"
      className={styles.trustStrip}
      aria-label="Trust and relevance indicators"
    >
      <div className={styles.container}>
        <ul className={styles.pillList} role="list">
          {TRUST_ITEMS.map((item) => (
            <li key={item.text} className={styles.pill}>
              <span className={styles.pillIcon} aria-hidden="true">
                {item.icon}
              </span>
              <span className={styles.pillText}>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
