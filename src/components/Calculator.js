'use client';

import { useEffect, useRef } from 'react';
import styles from './styles/Calculator.module.css';

const leakFactors = [
  'Missed calls',
  'Slow callbacks',
  'After-hours inquiries',
  'Website form response',
  'Ad lead response',
  'English/Spanish inquiry flow',
  'Booking request completion',
];

export default function Calculator() {
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
    <section id="calculator" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={`${styles.header} ${styles.animate}`}>
          <h2 className={styles.heading}>
            See the booking leak hiding in your call flow.
          </h2>
          <p className={styles.subtext}>
            Estimate how much appointment opportunity may be slipping through
            missed calls, slow callbacks, after-hours inquiries, and unfinished
            booking requests.
          </p>
        </div>

        <div className={`${styles.calculatorCard} ${styles.animate}`}>
          <div className={styles.cardInner}>
            {/* Factors List */}
            <div className={styles.factorsSection}>
              <h3 className={styles.factorsHeading}>
                The Booking Leak Check looks at:
              </h3>
              <ul className={styles.factorsList}>
                {leakFactors.map((factor) => (
                  <li key={factor} className={styles.factorItem}>
                    <span className={styles.factorDot} />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Message Card */}
            <div className={styles.leakMessage}>
              <p className={styles.leakMessageText}>
                During your private fit call, we can review these leakage points in your current call flow. Avalora can review missed-call and booking leakage during the fit call.
              </p>
            </div>

            {/* CTA Area */}
            <div className={styles.ctaArea}>
              <a
                href="#"
                className={styles.primaryCTA}
                data-placeholder="true"
              >
                Book a Private Fit Call
              </a>
            </div>
          </div>

          {/* Microcopy */}
          <p className={styles.microcopy}>
            No exact revenue promise. Just a practical way to see where patient
            demand may be slipping before booking.
          </p>
        </div>
      </div>
    </section>
  );
}

