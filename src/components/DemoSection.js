'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import DemoModal from './DemoModal';
import styles from './styles/DemoSection.module.css';

/* ─── Animation variants ─── */
const ease = [0.25, 0.1, 0.25, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease, delay },
});

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function DemoSection() {
  return (
    <section className={styles.section} id="demo">
      <div className={styles.container}>
        {/* Eyebrow */}
        <motion.span className={styles.eyebrow} {...fadeUp(0)}>
          Product Experience
        </motion.span>

        {/* Heading */}
        <motion.h2 className={styles.heading} {...fadeUp(0.1)}>
          Hear how Avalora handles a real med spa inquiry.
        </motion.h2>

        {/* Subtext */}
        <motion.p className={styles.subtext} {...fadeUp(0.2)}>
          Listen to a calm, clinic-approved intake flow for a high-intent
          after-hours Botox or filler inquiry — then see the exact summary your
          front desk receives.
        </motion.p>

        {/* Demo Preview Card */}
        <motion.div
          className={styles.demoPreview}
          onClick={() => window.dispatchEvent(new Event('openDemoModal'))}
          role="button"
          tabIndex={0}
          aria-label="Play demo: After-hours Botox/filler inquiry"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              window.dispatchEvent(new Event('openDemoModal'));
            }
          }}
          {...fadeUp(0.3)}
        >
          <div className={styles.uiMockup}>
            {/* Card 1 */}
            <div className={styles.mockupCard}>
              <div className={styles.mockupHeader}>
                <span className={styles.mockupTitle}>Missed Call Notification</span>
                <span className={styles.mockupTime}>11:02 AM</span>
              </div>
              <div className={styles.mockupBody}>
                <div className={styles.mockupRow}>
                  <span className={styles.mockupLabel}>Status</span>
                  <span className={styles.mockupBadgeMissed}>● Missed Call</span>
                </div>
                <div className={styles.mockupRow}>
                  <span className={styles.mockupLabel}>Patient</span>
                  <span className={styles.mockupValue}>Sarah Johnson<br/>(555) 123-4567</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className={styles.mockupCard}>
              <div className={styles.mockupHeader}>
                <span className={styles.mockupTitle}>Patient Intake Summary</span>
              </div>
              <div className={styles.mockupBody}>
                <div className={styles.mockupRow}>
                  <span className={styles.mockupLabel}>Treatment</span>
                  <span className={styles.mockupValue}>Filler consultation</span>
                </div>
                <div className={styles.mockupRow}>
                  <span className={styles.mockupLabel}>Language</span>
                  <span className={styles.mockupValue}>Spanish <span className={styles.mockupTag}>ES</span></span>
                </div>
                <div className={styles.mockupRow}>
                  <span className={styles.mockupLabel}>Preferred Time</span>
                  <span className={styles.mockupValue}>Friday after 4 PM</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className={styles.mockupCard}>
              <div className={styles.mockupHeader}>
                <span className={styles.mockupTitle}>Staff Handoff</span>
              </div>
              <div className={styles.mockupBody}>
                <div className={styles.mockupRow}>
                  <span className={styles.mockupLabel}>Status</span>
                  <span className={styles.mockupBadgeReady}>● Ready for Review</span>
                </div>
                <div className={styles.mockupRow}>
                  <span className={styles.mockupLabel}>Notes</span>
                  <span className={styles.mockupValue}>Spanish intake completed. Preferences captured.</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.playOverlay}>
            <div className={styles.playBtn}>
              <div className={styles.playIcon} />
            </div>
            <span className={styles.previewLabel}>
              After-hours Botox/filler inquiry
            </span>
          </div>
        </motion.div>

        {/* Floating Preview Cards */}
        <motion.div
          className={styles.previewCards}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Transcript Preview */}
          <motion.div className={styles.previewCard} variants={staggerItem}>
            <div className={styles.previewCardTitle}>Live Transcript</div>
            <div className={styles.transcript}>
              <div className={styles.transcriptLine}>
                <span className={styles.transcriptSpeaker}>Patient</span>
                <span className={styles.transcriptText}>
                  Hi, I&rsquo;m calling about Botox for my forehead lines&hellip;
                </span>
              </div>
              <div className={styles.transcriptLine}>
                <span className={`${styles.transcriptSpeaker} ${styles.avalora}`}>
                  Avalora
                </span>
                <span className={styles.transcriptText}>
                  Of course — I can help. Have you had Botox with us before, or
                  would this be your first visit?
                </span>
              </div>
              <div className={styles.transcriptLine}>
                <span className={styles.transcriptSpeaker}>Patient</span>
                <span className={styles.transcriptText}>
                  First time at your clinic. I&rsquo;ve had it done before
                  though.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Staff Handoff Preview */}
          <motion.div className={styles.previewCard} variants={staggerItem}>
            <div className={styles.previewCardTitle}>Staff Handoff</div>
            <div className={styles.handoffList}>
              <div className={styles.handoffItem}>
                <span className={styles.handoffDot} />
                <span className={styles.handoffText}>
                  <span className={styles.handoffLabel}>Treatment: </span>
                  Botox — forehead lines
                </span>
              </div>
              <div className={styles.handoffItem}>
                <span className={styles.handoffDot} />
                <span className={styles.handoffText}>
                  <span className={styles.handoffLabel}>History: </span>
                  Prior Botox experience, new to clinic
                </span>
              </div>
              <div className={styles.handoffItem}>
                <span className={styles.handoffDot} />
                <span className={styles.handoffText}>
                  <span className={styles.handoffLabel}>Intent: </span>
                  High — ready to schedule
                </span>
              </div>
              <div className={styles.handoffItem}>
                <span className={styles.handoffDot} />
                <span className={styles.handoffText}>
                  <span className={styles.handoffLabel}>Follow-up: </span>
                  Confirm availability, send intake form
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div className={styles.ctaArea} {...fadeUp(0.5)}>
          <button
            className={styles.ctaButton}
            onClick={() => window.dispatchEvent(new Event('openDemoModal'))}
            type="button"
          >
            Hear the Demo
          </button>
          <span className={styles.microcopy}>
            Demo examples use simulated or anonymized patient scenarios only.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
