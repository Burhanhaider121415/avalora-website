'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles/WhatWeRecover.module.css';

/* ── Module Data ── */
const primaryModules = [
  {
    key: 'missed-call',
    title: 'Missed-call recovery',
    description:
      "When the front desk misses a call, Avalora captures the patient's intent, treatment interest, contact details, and preferred time so your team has a clean next step.",
    goodFor:
      'High-intent consult calls, voicemail leakage, missed callbacks, and new patient inquiries.',
  },
  {
    key: 'speed-lead',
    title: 'Speed-to-lead for ads, forms, and DMs',
    description:
      'When someone submits an inquiry, Avalora helps respond before the lead goes cold.',
    goodFor:
      'Instagram inquiries, Facebook lead forms, website forms, Google Business Profile calls, website clicks, or lead sources where configured.',
  },
  {
    key: 'after-hours',
    title: 'After-hours capture',
    description:
      'When your clinic is closed, Avalora captures the inquiry instead of letting it sit in voicemail.',
    goodFor:
      'Evening Botox questions, filler consultation requests, laser package inquiries, and next-day follow-up tasks.',
  },
];

const extendedModules = [
  {
    key: 'booking',
    title: 'Booking request intake',
    description:
      'Avalora collects treatment interest, preferred date and time, new or returning patient status, urgency, and notes for staff.',
    goodFor:
      'Neuromodulator consultations, dermal filler inquiries, RF microneedling series, IPL photofacial requests, GLP-1 consultations, and injectable appointments.',
  },
  {
    key: 'bilingual',
    title: 'Bilingual Miami intake',
    description:
      'Avalora supports English/Spanish patient intake where your clinic needs it, helping Spanish-speaking inquiries receive a clear, warm next step.',
    goodFor:
      'Spanish-speaking booking requests, bilingual patient communication, and Miami med spa lead recovery.',
  },
  {
    key: 'escalation',
    title: 'Human escalation and clean handoff',
    description:
      'Clinical questions, urgent concerns, provider-specific requests, and sensitive issues can be routed back to your team with a structured summary.',
    goodFor:
      'Clinic-approved boundaries, human review, staff summaries, and front desk alerts.',
  },
];

const supportingWorkflows = [
  'Confirmations',
  'Reminders',
  'Reschedule/cancel intake',
  'Post-treatment follow-up',
  'Compliant review request workflow (where approved by clinic policy)',
  'Consent-based call/SMS follow-up (where configured)',
  'SMS or WhatsApp workflows (where your clinic\u2019s process supports them)',
];

function ModuleCard({ mod, index }) {
  return (
    <motion.article
      className={styles.moduleCard}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</div>
      <h3 className={styles.cardTitle}>{mod.title}</h3>
      <p className={styles.cardDescription}>{mod.description}</p>
      <p className={styles.goodFor}>
        <span className={styles.goodForLabel}>Good for: </span>
        {mod.goodFor}
      </p>
    </motion.article>
  );
}

/* ── Component ── */
export default function WhatWeRecover() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="recover" className={styles.section} aria-labelledby="recover-heading">
      <div className={styles.container}>

        {/* Header */}
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className={styles.eyebrow}>Recovery Workflows</p>
          <h2 id="recover-heading" className={styles.heading}>
            Capture the patient inquiries your team cannot always reach in time.
          </h2>
          <p className={styles.subtext}>
            Avalora gives your front desk a controlled capture layer for the moments that usually
            slip: missed calls, after-hours inquiries, DMs, forms, booking questions, and follow-up
            requests.
          </p>
        </motion.header>

        {/* Primary Modules */}
        <div className={styles.moduleGrid}>
          {primaryModules.map((mod, index) => (
            <ModuleCard key={mod.key} mod={mod} index={index} />
          ))}
        </div>

        {/* Extended Modules - Toggle */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              className={styles.moduleGrid}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              style={{ overflow: 'hidden' }}
            >
              {extendedModules.map((mod, index) => (
                <ModuleCard key={mod.key} mod={mod} index={index + 3} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <div className={styles.toggleArea}>
          <button
            className={styles.toggleBtn}
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
          >
            {showAll ? 'Show less' : 'View all workflows'}
            <span className={`${styles.toggleChevron} ${showAll ? styles.toggleChevronOpen : ''}`}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>

        {/* Supporting Workflows (collapsed by default) */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              className={styles.workflowsSection}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h3 className={styles.workflowsHeading}>Available supporting workflows</h3>
              <div className={styles.workflowPills}>
                {supportingWorkflows.map((workflow) => (
                  <span key={workflow} className={styles.workflowPill}>
                    {workflow}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
