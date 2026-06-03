'use client';

import { useEffect, useRef } from 'react';
import styles from './styles/TrustSafety.module.css';

const trustCards = [
  {
    title: 'Clinic-approved FAQs',
    description:
      'Avalora follows your approved services, FAQs, tone, and booking rules.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 14l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Not medical advice',
    description:
      'Avalora does not diagnose, recommend treatment, or replace clinical judgment.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 9v6M14 18v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Human escalation',
    description:
      'Sensitive, urgent, clinical, or provider-specific requests can be routed back to your team.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="9" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 23c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Staff summaries',
    description:
      'Your team receives structured details instead of messy voicemail fragments.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="3" width="20" height="22" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 9h10M9 13h10M9 17h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Workflow control',
    description:
      "Avalora is configured around your clinic's rules, not a generic script.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 3v3M14 22v3M3 14h3M22 14h3M6.1 6.1l2.12 2.12M19.78 19.78l2.12 2.12M6.1 21.9l2.12-2.12M19.78 8.22l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function TrustSafety() {
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
    <section id="trust-safety" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={`${styles.header} ${styles.animate}`}>
          <h2 className={styles.heading}>
            Controlled, clinic-approved, and built to escalate.
          </h2>
          <p className={styles.intro}>
            Avalora is designed for patient communication boundaries, not
            open-ended medical conversation.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {trustCards.map((card, i) => (
            <div
              key={card.title}
              className={`${styles.card} ${styles.animate}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.cardIcon}>{card.icon}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>

        {/* HIPAA Block */}
        <div className={`${styles.hipaaBlock} ${styles.animate}`}>
          <div className={styles.hipaaInner}>
            <div className={styles.hipaaIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className={styles.hipaaContent}>
              <h3 className={styles.hipaaTitle}>HIPAA-aware workflows</h3>
              <p className={styles.hipaaText}>
                Avalora is designed for controlled, clinic-approved patient
                communication. Where protected health information is involved,
                Avalora supports BAA-backed workflows, approved FAQs, human
                escalation, structured summaries, and careful handoff rules.
              </p>
              <p className={styles.hipaaText}>
                Avalora does not provide medical advice, diagnose patients,
                recommend treatments, determine treatment eligibility, or replace
                clinical judgment. Clinical, urgent, sensitive,
                provider-specific, or unclear questions are routed back to the
                clinic team.
              </p>
              <a href="/hipaa-security" className={styles.hipaaButton}>
                Review HIPAA &amp; Security
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
