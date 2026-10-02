'use client';

import { motion } from 'framer-motion';
import styles from './styles/LeakCheckSection.module.css';

const leakFactors = [
  'Missed calls',
  'Slow callbacks',
  'After-hours inquiries',
  'Website form response',
  'Ad lead response',
  'English/Spanish inquiry flow',
  'Booking request completion',
];

export default function LeakCheck() {
  return (
    <section id="leak-check" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className={styles.cardContent}>
            <div className={styles.copyColumn}>
              <p className={styles.eyebrow}>Leak Check</p>
              <h2 className={styles.heading}>
                See the booking leak hiding in your call flow.
              </h2>
              <p className={styles.subtext}>
                Run Avalora&apos;s private Leak Check to estimate where missed calls,
                slow callbacks, after-hours inquiries, and unfinished booking requests
                may be costing your clinic appointment opportunities.
              </p>

              <div className={styles.ctaArea}>
                <a
                  href="https://leakcheck.theavalora.com"
                  className={styles.primaryCTA}
                >
                  Run the Leak Check
                </a>
                <p className={styles.supportLine}>
                  Private estimate. No guaranteed revenue claim. Takes under 60 seconds.
                </p>
              </div>
            </div>

            <div className={styles.factorsColumn}>
              <h3 className={styles.factorsHeading}>
                The Booking Leak Check looks at:
              </h3>
              <ul className={styles.factorsList}>
                {leakFactors.map((factor, i) => (
                  <motion.li
                    key={factor}
                    className={styles.factorItem}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <span className={styles.factorCheck}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{factor}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <p className={styles.microcopy}>
            No exact revenue promise. Just a practical way to see where patient
            demand may be slipping before booking.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
