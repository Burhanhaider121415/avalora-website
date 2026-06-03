'use client';

import { useEffect, useRef } from 'react';
import styles from './styles/CRMHandoff.module.css';

const handoffOptions = [
  'CRM-light handoff',
  'Staff summaries',
  'Front desk alerts',
  'Structured booking request data',
  'Email or SMS notifications',
  'Spreadsheet or dashboard summaries',
  'Deeper workflows where supported',
];

const inquirySources = [
  { label: 'Phone Calls', icon: '📞' },
  { label: 'Website Forms', icon: '📋' },
  { label: 'Instagram DMs', icon: '💬' },
  { label: 'After-Hours', icon: '🌙' },
  { label: 'SMS / WhatsApp', icon: '📱' },
];

export default function CRMHandoff() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.animate}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="crm-handoff" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={`${styles.header} ${styles.animate}`}>
          <h2 className={styles.heading}>
            Your CRM only helps after the lead is captured.
          </h2>
          <p className={styles.subtext}>
            Avalora helps catch the calls, forms, DMs, and after-hours inquiries
            your systems may never see.
          </p>
        </div>

        <div className={`${styles.content} ${styles.animate}`}>
          <p className={styles.paragraph}>
            Med spa systems vary. Some support deeper integrations. Others need
            cleaner alerts, summaries, tasks, spreadsheets, or front desk
            handoffs first.
          </p>
          <p className={styles.paragraph}>
            Avalora is built to work around your current workflow instead of
            forcing a new one on your team.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className={`${styles.flowDiagram} ${styles.animate}`}>
          {/* Inquiry Sources */}
          <div className={styles.flowColumn}>
            <h3 className={styles.flowLabel}>Inquiry Sources</h3>
            <div className={styles.sourceCards}>
              {inquirySources.map((source, i) => (
                <div
                  key={source.label}
                  className={styles.sourceCard}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span className={styles.sourceIcon}>{source.icon}</span>
                  <span className={styles.sourceText}>{source.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className={styles.flowArrow}>
            <div className={styles.arrowLine} />
            <div className={styles.arrowHead} />
          </div>

          {/* Avalora Hub */}
          <div className={styles.flowColumn}>
            <div className={styles.avaloraHub}>
              <div className={styles.hubGlow} />
              <span className={styles.hubLabel}>Avalora</span>
              <span className={styles.hubSub}>Capture &amp; Route</span>
            </div>
          </div>

          {/* Arrow */}
          <div className={styles.flowArrow}>
            <div className={styles.arrowLine} />
            <div className={styles.arrowHead} />
          </div>

          {/* Handoff Options */}
          <div className={styles.flowColumn}>
            <h3 className={styles.flowLabel}>Handoff Options</h3>
            <div className={styles.optionCards}>
              {handoffOptions.map((option, i) => (
                <div
                  key={option}
                  className={styles.optionCard}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span className={styles.optionCheck}>✓</span>
                  <span className={styles.optionText}>{option}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className={`${styles.importantNote} ${styles.animate}`}>
          <div className={styles.noteIcon}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 6v5M10 13.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <p className={styles.noteText}>
            No universal integration promise. The private fit call identifies
            what should be captured, where it should go, and how your team
            should stay in control.
          </p>
        </div>
      </div>
    </section>
  );
}
