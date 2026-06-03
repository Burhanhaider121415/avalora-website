'use client';

import { useEffect, useRef } from 'react';
import styles from './styles/FinalCTA.module.css';

export default function FinalCTA() {
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
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.animate}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="final-cta" className={styles.section} ref={sectionRef}>
      {/* Floating waveform decorations */}
      <div className={styles.bgDecor} aria-hidden="true">
        <div className={styles.wave1} />
        <div className={styles.wave2} />
        <div className={styles.floatingCard1} />
        <div className={styles.floatingCard2} />
      </div>

      <div className={styles.container}>
        <h2 className={`${styles.heading} ${styles.animate}`}>
          Let your front desk stay focused while Avalora catches the missed
          moments.
        </h2>

        <p className={`${styles.paragraph} ${styles.animate}`}>
          If your clinic is already creating demand, the next step is protecting
          the path from inquiry to booked appointment.
        </p>

        <p className={`${styles.paragraph} ${styles.animate}`}>
          Hear the demo, see the handoff, and decide whether Avalora fits your
          workflow.
        </p>

        <div className={`${styles.ctaGroup} ${styles.animate}`}>
          <button onClick={() => window.dispatchEvent(new Event('openDemoModal'))} className={styles.primaryCTA}>
            Hear the Demo
          </button>
          <a
            href="/#book-call"
            className={styles.secondaryCTA}
          >
            Book a Private Fit Call
          </a>
        </div>

        <p className={`${styles.microcopy} ${styles.animate}`}>
          Built for Miami med spas. Scoped around your workflow. No public
          package forced on your clinic.
        </p>

        <p className={`${styles.trustMicrocopy} ${styles.animate}`}>
          BAA-backed workflows available where protected health information is
          involved. Call recording, SMS follow-up, and patient handoff rules are
          configured during onboarding.
        </p>
      </div>
    </section>
  );
}
