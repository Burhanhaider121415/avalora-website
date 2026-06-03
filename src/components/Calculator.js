'use client';

import { useState, useEffect, useRef } from 'react';
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
  const [showResult, setShowResult] = useState(false);
  const [estimateLow, setEstimateLow] = useState(0);
  const [estimateHigh, setEstimateHigh] = useState(0);

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

  const handleRunCheck = () => {
    // Placeholder calculation for demo
    const low = Math.floor(Math.random() * 40000 + 60000);
    const high = Math.floor(low * 1.6 + Math.random() * 30000);
    setEstimateLow(low);
    setEstimateHigh(high);
    setShowResult(true);
  };

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(num);
  };

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

            {/* CTA Area */}
            <div className={styles.ctaArea}>
              <button
                onClick={handleRunCheck}
                className={styles.primaryCTA}
                data-placeholder="true"
              >
                Run the Booking Leak Check
              </button>
              <a
                href="/miami-med-spa-booking-leak-report"
                className={styles.secondaryCTA}
              >
                Get the Miami Med Spa Booking Leak Report
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* Result Area */}
            {showResult && (
              <div className={styles.resultArea}>
                <div className={styles.resultGlow} />
                <p className={styles.resultText}>
                  Based on your inputs, your clinic may have an estimated annual
                  booking opportunity at risk of{' '}
                  <strong className={styles.resultAmount}>
                    {formatCurrency(estimateLow)}–{formatCurrency(estimateHigh)}
                  </strong>
                  . This is not a guarantee. It is a directional estimate to help
                  identify where missed calls, slow callbacks, and unfinished
                  booking requests may be creating leakage.
                </p>
              </div>
            )}
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
