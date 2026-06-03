'use client';

import { motion } from 'framer-motion';
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
  return (
    <section id="your-plan" className={styles.section} aria-labelledby="plan-heading">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 id="plan-heading" className={styles.heading}>
            Built around your clinic&apos;s workflow.
          </h2>
        </motion.div>

        <motion.div
          className={styles.consultCard}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
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
              {planFactors.map((item, index) => (
                <motion.li
                  key={item}
                  className={styles.checkItem}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <span className={styles.checkIconWrapper}>
                    <svg
                      className={styles.checkIcon}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3.5 8l3 3 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className={styles.importantBlock}>
              <span className={styles.importantAccent} aria-hidden="true" />
              <p className={styles.importantSentence}>
                During the private fit call, we also review consent requirements,
                call recording preferences, handoff rules, vendor requirements,
                and whether BAA-backed workflows are needed.
              </p>
            </div>

            <div className={styles.ctaArea}>
              <a
                href="/#book-call"
                className={styles.primaryCTA}
              >
                Book a Private Fit Call
              </a>
              <p className={styles.supportLine}>
                15 minutes. We review your call volume, patient communication
                flow, bilingual needs, and missed booking opportunities.
              </p>
            </div>
          </div>

          <div className={styles.footerBar}>
            <p className={styles.microcopy}>
              Your plan is recommended after we understand your call volume,
              booking flow, bilingual needs, handoff rules, and workflow
              complexity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
