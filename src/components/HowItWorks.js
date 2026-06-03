'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles/HowItWorks.module.css';

const steps = [
  {
    number: 1,
    title: 'Learn',
    description:
      'We map your services, FAQs, booking rules, tone, escalation preferences, language needs, consent language, and front desk workflow.',
    details: [
      'Services and treatment categories',
      'Approved FAQs',
      'Booking rules',
      'Provider preferences',
      'Language needs',
      'Escalation boundaries',
      'Call recording and disclosure preferences',
      'Consent and opt-out language',
      'Staff handoff preferences',
    ],
  },
  {
    number: 2,
    title: 'Capture',
    description:
      'Avalora captures missed calls, overflow calls, after-hours inquiries, form leads, ad leads, DMs where configured, and booking requests.',
    details: [
      'Missed calls',
      'Overflow calls',
      'After-hours inquiries',
      'Website forms',
      'Ad leads',
      'Instagram DMs where configured',
      'Reschedule or cancellation requests',
    ],
  },
  {
    number: 3,
    title: 'Qualify',
    description:
      'Avalora collects the details your team needs: name, phone, treatment interest, preferred time, patient type, urgency, and notes.',
    details: [
      'Name',
      'Phone',
      'Email if needed',
      'Treatment interest',
      'Preferred date/time',
      'New or returning patient',
      'Urgency',
      'Source of inquiry',
      'Notes for staff',
    ],
  },
  {
    number: 4,
    title: 'Handoff',
    description:
      'Your team receives a clean summary through the workflow that fits your clinic: staff alert, email, SMS, CRM-light task, spreadsheet, dashboard, or deeper integration where supported.',
    details: [
      'Front desk alert',
      'Staff email',
      'SMS notification',
      'CRM-light handoff',
      'Google Sheet or Airtable',
      'Dashboard view',
      'Daily summary',
      'Deeper workflow where supported',
    ],
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [expandedDetails, setExpandedDetails] = useState({});

  const toggleDetails = (index) => {
    setExpandedDetails((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className={styles.eyebrow}>How It Works</p>
          <h2 className={styles.heading}>
            Built around your current booking flow, not forced on top of it.
          </h2>
        </motion.div>

        <motion.div
          className={styles.stepsLayout}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Step Navigation Pills */}
          <div className={styles.stepNav}>
            {steps.map((step, i) => (
              <button
                key={i}
                className={`${styles.stepPill} ${activeStep === i ? styles.stepPillActive : ''}`}
                onClick={() => setActiveStep(i)}
                aria-label={`Step ${step.number}: ${step.title}`}
              >
                <span className={styles.pillNumber}>{step.number}</span>
                <span className={styles.pillTitle}>{step.title}</span>
              </button>
            ))}
          </div>

          {/* Active Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              className={styles.stepContent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.stepBody}>
                <div className={styles.stepNumberLarge}>{String(steps[activeStep].number).padStart(2, '0')}</div>
                <h3 className={styles.stepTitle}>{steps[activeStep].title}</h3>
                <p className={styles.stepDescription}>{steps[activeStep].description}</p>

                <button
                  className={styles.detailToggle}
                  onClick={() => toggleDetails(activeStep)}
                  aria-expanded={!!expandedDetails[activeStep]}
                >
                  {expandedDetails[activeStep] ? 'Hide details' : 'View details'}
                  <span className={`${styles.toggleArrow} ${expandedDetails[activeStep] ? styles.toggleArrowOpen : ''}`}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3.5 5.25l3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence>
                  {expandedDetails[activeStep] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className={styles.detailList}
                    >
                      <ul className={styles.detailItems}>
                        {steps[activeStep].details.map((detail, di) => (
                          <li key={di} className={styles.detailItem}>
                            <span className={styles.detailDot} />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Visual Step Indicator */}
              <div className={styles.stepVisual}>
                <div className={styles.progressRing}>
                  <svg viewBox="0 0 100 100" className={styles.ringSvg}>
                    <circle cx="50" cy="50" r="42" className={styles.ringBg} />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      className={styles.ringProgress}
                      strokeDasharray={`${((activeStep + 1) / 4) * 264} 264`}
                    />
                  </svg>
                  <span className={styles.ringLabel}>{activeStep + 1}/4</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
