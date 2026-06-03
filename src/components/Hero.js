'use client';

import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './styles/Hero.module.css';

export default function Hero() {
  const sectionRef = useScrollReveal();

  return (
    <section id="hero" className={styles.hero} aria-label="Hero" ref={sectionRef}>
      <div className={styles.container}>
        {/* ─── Left: Copy ─── */}
        <div className={styles.copyColumn}>
          <p className={styles.eyebrow} data-reveal>Built for Miami med spas</p>

          <h1 className={styles.headline} data-reveal data-reveal-delay="100">
            Bilingual call and booking recovery for Miami med spas.
          </h1>

          <p className={styles.subheadline} data-reveal data-reveal-delay="200">
            Avalora supports your front desk by capturing missed calls,
            after-hours inquiries, English/Spanish patient requests, and booking
            intent — then routing clean details back to your team.
          </p>

          <div className={styles.ctaGroup} data-reveal data-reveal-delay="300">
            <a href="#demo" className={styles.ctaPrimary}>
              <span className={styles.ctaIcon} aria-hidden="true">▶</span>
              Hear the Demo
            </a>
            <a
              href="#"
              className={styles.ctaSecondary}
              data-placeholder="true"
            >
              Book a Private Fit Call
            </a>
          </div>

          <p className={styles.microcopy} data-reveal data-reveal-delay="400">
            Front desk support. Clinic-approved FAQs. Human escalation when
            needed.
          </p>
        </div>

        {/* ─── Right: Visual ─── */}
        <div className={styles.visualColumn} aria-hidden="true">
          {/* Live Status Pill */}
          <div className={styles.statusPill} data-reveal data-reveal-delay="300">
            <span className={styles.pulseDot} />
            Capturing 24/7
          </div>

          {/* Main Dashboard Card (replaces Phone) */}
          <div className={styles.dashboardCard} data-reveal data-reveal-delay="400">
            <div className={styles.inquiryCard}>
              <div className={styles.inquiryHeader}>
                <span className={styles.inquiryIcon}>⚡</span>
                <span className={styles.inquiryTitle}>Incoming inquiry</span>
              </div>

              <div className={styles.inquiryRow}>
                <span className={styles.inquiryLabel}>Source</span>
                <span className={styles.inquiryValue}>Missed call</span>
              </div>

              <div className={styles.inquiryRow}>
                <span className={styles.inquiryLabel}>Treatment</span>
                <span className={styles.inquiryValue}>
                  Filler consultation
                </span>
              </div>

              <div className={styles.inquiryRow}>
                <span className={styles.inquiryLabel}>Preferred time</span>
                <span className={styles.inquiryValue}>
                  Friday after 4 PM
                </span>
              </div>

              <div className={styles.inquiryRow}>
                <span className={styles.inquiryLabel}>Language</span>
                <span className={styles.inquiryValue}>
                  Spanish{' '}
                  <span className={styles.badgeLang}>ES</span>
                </span>
              </div>

              <div className={styles.inquiryRow}>
                <span className={styles.inquiryLabel}>Patient type</span>
                <span className={styles.inquiryValue}>New patient</span>
              </div>

              <div className={styles.inquiryRow}>
                <span className={styles.inquiryLabel}>Urgency</span>
                <span className={styles.inquiryValue}>
                  <span className={`${styles.badge} ${styles.badgeAmber}`}>
                    Booking request
                  </span>
                </span>
              </div>

              <div className={styles.inquiryRow}>
                <span className={styles.inquiryLabel}>Status</span>
                <span className={styles.inquiryValue}>
                  <span className={`${styles.badge} ${styles.badgeTeal}`}>
                    Routed to front desk
                  </span>
                </span>
              </div>

              <div className={styles.inquiryRow}>
                <span className={styles.inquiryLabel}>Escalation</span>
                <span className={styles.inquiryValue}>
                  Human review available
                </span>
              </div>
            </div>
          </div>

          {/* Staff summary card — overlapping */}
          <div className={styles.staffCard} data-reveal data-reveal-delay="600">
            <div className={styles.staffCardHeader}>
              <div className={styles.staffCardIcon}>📋</div>
              <span className={styles.staffCardTitle}>Staff Summary</span>
            </div>
            <p className={styles.staffCardBody}>
              New patient asked about filler availability after 4 PM. Spanish
              intake completed. Preferred time captured. Route to front desk for
              scheduling review.
            </p>
            <div className={styles.staffCardStatus}>
              <span className={styles.checkIcon}>✓</span>
              Ready for review
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
