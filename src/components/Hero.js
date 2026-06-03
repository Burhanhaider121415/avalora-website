'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './styles/Hero.module.css';

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const cardReveal = (delay = 0) => ({
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] },
  },
});

const floatY = (offset = 8, dur = 5) => ({
  y: [0, -offset, 0],
  transition: {
    duration: dur,
    repeat: Infinity,
    repeatType: 'mirror',
    ease: 'easeInOut',
  },
});

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <div className={styles.bgImage}>
        <Image
          src="/images/hero-reception.png"
          alt="Luxury med spa reception"
          fill
          style={{ objectFit: 'cover' }}
          priority
          quality={90}
        />
      </div>

      {/* Dark Warm Overlay */}
      <div className={styles.overlay} />

      {/* Content Grid */}
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* ── Left Column ── */}
        <div className={styles.copyColumn}>
          <motion.span className={styles.eyebrow} variants={fadeUp}>
            Built for Miami med spas
          </motion.span>

          <motion.h1 className={styles.headline} variants={fadeUp}>
            Bilingual call and booking recovery for Miami med spas.
          </motion.h1>

          <motion.p className={styles.subheadline} variants={fadeUp}>
            Avalora supports your front desk by capturing missed calls,
            after-hours inquiries, English/Spanish patient requests, and booking
            intent — then routing clean details back to your team.
          </motion.p>

          <motion.div className={styles.ctaGroup} variants={fadeUp}>
            <button
              className={styles.ctaPrimary}
              onClick={() => window.triggerRetellWidget?.()}
            >
              Hear the Demo
            </button>
            <a href="/#book-call" className={styles.ctaSecondary}>
              Book a Private Fit Call
            </a>
          </motion.div>

          <motion.p className={styles.microcopy} variants={fadeUp}>
            Front desk support. Clinic-approved FAQs. Human escalation when
            needed.
          </motion.p>
        </div>

        {/* ── Right Column — Floating Glass Cards ── */}
        <div className={styles.cardsColumn}>
          {/* Main Inquiry Card */}
          <motion.div
            className={styles.glassCard}
            variants={cardReveal(0.5)}
            animate={floatY(8, 5.5)}
          >
            <div className={styles.cardHeader}>
              <span className={styles.cardDot} />
              <span className={styles.cardLabel}>New Inquiry Captured</span>
            </div>

            <div className={styles.cardRow}>
              <span className={styles.cardKey}>Source</span>
              <span className={styles.cardValue}>Missed call</span>
            </div>
            <div className={styles.cardRow}>
              <span className={styles.cardKey}>Treatment</span>
              <span className={styles.cardValue}>Filler consultation</span>
            </div>
            <div className={styles.cardRow}>
              <span className={styles.cardKey}>Language</span>
              <span className={styles.cardValue}>
                Spanish{' '}
                <span className={styles.badge}>ES</span>
              </span>
            </div>
            <div className={styles.cardRow}>
              <span className={styles.cardKey}>Status</span>
              <span className={`${styles.cardValue} ${styles.statusValue}`}>
                Routed to front desk
              </span>
            </div>
          </motion.div>

          {/* Staff Summary Card */}
          <motion.div
            className={`${styles.glassCard} ${styles.summaryCard}`}
            variants={cardReveal(0.8)}
            animate={floatY(6, 6.5)}
          >
            <div className={styles.cardHeader}>
              <span className={`${styles.cardDot} ${styles.dotGold}`} />
              <span className={styles.cardLabel}>Staff Summary</span>
            </div>
            <p className={styles.summaryText}>
              Patient called after hours requesting filler consultation in
              Spanish. Availability preferences captured. Ready for front desk
              follow-up.
            </p>
            <div className={styles.summaryMeta}>
              <span className={styles.metaTag}>Auto-translated</span>
              <span className={styles.metaTag}>No escalation needed</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
