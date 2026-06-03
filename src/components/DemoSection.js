'use client';

import { useMemo } from 'react';
import styles from './styles/DemoSection.module.css';

/**
 * DemoSection — Premium demo experience with audio/video player
 * and live transcript/handoff preview.
 */

/* Generate waveform bar heights for visual variety */
function generateBarHeights(count) {
  const heights = [];
  for (let i = 0; i < count; i++) {
    // Create a natural-looking waveform shape: taller in middle, shorter at edges
    const position = i / (count - 1);
    const curve = Math.sin(position * Math.PI);
    const base = 12;
    const range = 48;
    const jitter = Math.sin(i * 2.7) * 8 + Math.cos(i * 1.3) * 6;
    heights.push(Math.round(base + curve * range + jitter));
  }
  return heights;
}

const CAPTURED_DETAILS = [
  { label: 'Treatment interest', value: 'Botox or filler' },
  { label: 'Patient type', value: 'New patient' },
  { label: 'Preferred time', value: 'Tomorrow afternoon' },
  { label: 'Question type', value: 'Availability and consultation request' },
  { label: 'Next step', value: 'Front desk review' },
];

export default function DemoSection() {
  const barHeights = useMemo(() => generateBarHeights(26), []);

  return (
    <section id="demo" className={styles.section} aria-labelledby="demo-heading">
      <div className={styles.container}>
        {/* ── Section Header ── */}
        <header className={styles.header}>
          <h2 id="demo-heading" className={styles.heading}>
            Hear how Avalora handles a real med spa inquiry.
          </h2>
          <p className={styles.subtext}>
            Listen to a calm, clinic-approved intake flow for a high-intent
            after-hours Botox or filler inquiry — then see the exact summary
            your front desk receives.
          </p>
        </header>

        {/* ── Two-Column Grid ── */}
        <div className={styles.grid}>
          {/* LEFT — Demo Player */}
          <div className={styles.playerCard} role="region" aria-label="Demo player">
            <div className={styles.playerInner}>
              <p className={styles.scenarioLabel}>After-hours Botox/filler inquiry</p>

              {/* Waveform Visualization */}
              <div className={styles.waveformContainer} aria-hidden="true">
                {barHeights.map((height, i) => (
                  <span
                    key={i}
                    className={styles.waveBar}
                    style={{ height: `${height}px` }}
                  />
                ))}
              </div>

              {/* Play Button */}
              <button
                className={styles.playButton}
                aria-label="Play demo audio"
                type="button"
              >
                <span className={styles.playIcon} />
              </button>

              {/* Placeholder Note */}
              <p className={styles.placeholderNote}>
                [DEMO VIDEO PLACEHOLDER — insert final Avalora demo video later]
              </p>

              {/* Primary CTA */}
              <a
                href="#"
                className={styles.primaryCta}
                data-placeholder="true"
                role="button"
              >
                Hear the Demo
              </a>
            </div>
          </div>

          {/* RIGHT — Transcript & Handoff */}
          <div className={styles.transcriptColumn}>
            {/* Patient Chat Bubble */}
            <div className={`${styles.chatBubble} ${styles.patientBubble}`}>
              <span className={styles.bubbleLabel}>Patient</span>
              <q>
                Hi, I wanted to ask about Botox or filler appointments this
                week. Are you open tomorrow?
              </q>
            </div>

            {/* Avalora Response Bubble */}
            <div className={`${styles.chatBubble} ${styles.avalonBubble}`}>
              <span className={styles.bubbleLabel}>Avalora</span>
              <q>
                I can help collect a few details for the team. Are you a new or
                returning patient, and do you have a preferred time?
              </q>
            </div>

            {/* Captured Details Card */}
            <div className={styles.detailsCard}>
              <h3 className={styles.detailsTitle}>Captured Details</h3>
              <dl className={styles.detailsList}>
                {CAPTURED_DETAILS.map(({ label, value }) => (
                  <div key={label} className={styles.detailRow}>
                    <dt className={styles.detailLabel}>{label}</dt>
                    <dd className={styles.detailValue}>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Staff Handoff Card */}
            <div className={styles.handoffCard}>
              <h3 className={styles.handoffTitle}>
                <span className={styles.handoffIcon} aria-hidden="true">
                  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L15 8L8 15M15 8H1" strokeWidth="2" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Staff Handoff
              </h3>
              <p className={styles.handoffContent}>
                Patient is interested in Botox/filler consultation this week.
                New patient. Prefers tomorrow afternoon. Please review
                availability and call back.
              </p>
            </div>

            {/* Secondary CTA */}
            <a
              href="#"
              className={styles.secondaryCta}
              data-placeholder="true"
            >
              Book a Private Fit Call
            </a>
          </div>
        </div>

        {/* ── Microcopy Disclaimer ── */}
        <p className={styles.microcopy}>
          Demo examples use simulated or anonymized patient scenarios only.
        </p>
      </div>
    </section>
  );
}
