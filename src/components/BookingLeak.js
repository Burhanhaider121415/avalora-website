'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './styles/BookingLeak.module.css';

const inputSources = [
  { icon: '📞', label: 'Missed Call', sub: 'During patient check-in' },
  { icon: '💬', label: 'Instagram DM', sub: 'Ad-driven inquiry' },
  { icon: '🌙', label: 'After-Hours', sub: 'Evening inquiry' },
];

const outputDestinations = [
  { label: 'Staff Summary', color: '#1B6B5A' },
  { label: 'CRM-Light Task', color: '#0D4A3A' },
  { label: 'Bilingual Handoff', color: '#2A9D8F' },
  { label: 'Human Review', color: '#C8A97D' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function BookingLeak() {
  return (
    <section id="booking-leak" className={styles.section} aria-labelledby="booking-leak-heading">
      <div className={styles.container}>
        {/* Header */}
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className={styles.eyebrow}>The Hidden Leak</p>
          <h2 id="booking-leak-heading" className={styles.heading}>
            The leak usually happens between interest and booking.
          </h2>
          <p className={styles.intro}>
            Your clinic may already be creating demand through Instagram, Google, ads, referrals,
            website forms, treatment education, and patient word-of-mouth.
          </p>
        </motion.header>

        {/* Premium Visual Flow */}
        <motion.div
          className={styles.flowContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.15 }}
        >
          {/* Input Sources */}
          <div className={styles.flowColumn}>
            <p className={styles.flowColumnLabel}>Patient Inquiries</p>
            {inputSources.map((source, i) => (
              <motion.div key={source.label} className={styles.sourceCard} variants={fadeUp}>
                <span className={styles.sourceEmoji}>{source.icon}</span>
                <div>
                  <p className={styles.sourceLabel}>{source.label}</p>
                  <p className={styles.sourceSub}>{source.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center: Avalora Hub */}
          <motion.div className={styles.hubColumn} variants={fadeUp}>
            <div className={styles.connectorLine} aria-hidden="true" />
            <div className={styles.avaloraHub}>
              <div className={styles.hubPulse} />
              <span className={styles.hubTitle}>Avalora</span>
              <span className={styles.hubSub}>Captures &amp; Routes</span>
            </div>
            <div className={styles.connectorLine} aria-hidden="true" />
          </motion.div>

          {/* Output Destinations */}
          <div className={styles.flowColumn}>
            <p className={styles.flowColumnLabel}>Staff Handoff</p>
            {outputDestinations.map((dest, i) => (
              <motion.div key={dest.label} className={styles.destCard} variants={fadeUp}>
                <span className={styles.destDot} style={{ background: dest.color }} />
                <span className={styles.destLabel}>{dest.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Narrative */}
        <motion.div
          className={styles.narrative}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className={styles.problem}>The problem is what happens next.</p>
          <p className={styles.detail}>
            Calls ring while staff checks in patients. Forms wait for a callback. Instagram DMs get
            buried. Spanish-speaking inquiries create bottlenecks. After-hours patients keep
            searching.
          </p>
          <p className={styles.keyLine}>Booking intent never becomes a clean staff task.</p>
          <p className={styles.empathy}>Your front desk is not slow. It is overloaded.</p>
        </motion.div>
      </div>
    </section>
  );
}
