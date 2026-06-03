'use client';

import { useEffect, useRef } from 'react';
import styles from './styles/YourPlan.module.css';

const planFactors = [
  'Monthly call volume',
  'Missed-call recovery needs',
  'After-hours demand',
  'English/Spanish support',
  'Ad/form/DM response',
  'Booking request intake',
  'Front desk handoff',
  'Escalation rules',
  'Consent and disclosure requirements',
  'CRM-light setup',
  'Deeper integrations where supported',
  'Follow-up and review workflows',
];

export default function YourPlan() {
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
    <section id="your-plan" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={`${styles.header} ${styles.animate}`}>
          <h2 className={styles.heading}>
            Built around your clinic&apos;s workflow.
          </h2>
        </div>

        <div className={`${styles.consultCard} ${styles.animate}`}>
          <div className={styles.cardBody}>
            <p className={styles.paragraph}>
              Avalora plans are scoped around your call volume, bilingual needs,
              after-hours demand, booking workflow, handoff rules, and
              integration complexity.
            </p>
            <p className={styles.paragraph}>
              Every clinic handles calls, DMs, forms, booking requests, and
              follow-ups differently. Your Avalora plan is built after a private
              fit call so we can understand what needs to be captured, where it
              should be routed, and how your front desk should stay in control.
            </p>

            <h3 className={styles.checklistHeading}>
              Your plan may be based on:
            </h3>

            <ul className={styles.checklist}>
              {planFactors.map((item) => (
                <li key={item} className={styles.checkItem}>
                  <svg
                    className={styles.checkIcon}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M6.5 10l2.5 2.5 5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className={styles.importantSentence}>
              During the private fit call, we also review consent requirements,
              call recording preferences, handoff rules, vendor requirements,
              and whether BAA-backed workflows are needed.
            </p>

            <div className={styles.ctaArea}>
              <a
                href="#"
                className={styles.primaryCTA}
                data-placeholder="true"
              >
                Book a Private Fit Call
              </a>
              <p className={styles.supportLine}>
                15 minutes. We review your call volume, patient communication
                flow, bilingual needs, and missed booking opportunities.
              </p>
            </div>
          </div>

          <p className={styles.microcopy}>
            Your plan is recommended after we understand your call volume,
            booking flow, bilingual needs, handoff rules, and workflow
            complexity.
          </p>
        </div>
      </div>
    </section>
  );
}
