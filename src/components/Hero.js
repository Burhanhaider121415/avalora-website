'use client';

import styles from './styles/Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Hero">
      <div className={styles.container}>
        {/* ─── Left: Copy ─── */}
        <div className={styles.copyColumn}>
          <p className={styles.eyebrow}>Built for Miami med spas</p>

          <h1 className={styles.headline}>
            Bilingual call and booking recovery for Miami med spas.
          </h1>

          <p className={styles.subheadline}>
            Avalora supports your front desk by capturing missed calls,
            after-hours inquiries, English/Spanish patient requests, and booking
            intent — then routing clean details back to your team.
          </p>

          <div className={styles.ctaGroup}>
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

          <p className={styles.microcopy}>
            Front desk support. Clinic-approved FAQs. Human escalation when
            needed.
          </p>
        </div>

        {/* ─── Right: Phone Visual ─── */}
        <div className={styles.visualColumn} aria-hidden="true">
          {/* Phone frame */}
          <div className={styles.phoneFrame}>
            <div className={styles.phoneNotch} />
            <div className={styles.phoneScreen}>
              {/* Inquiry card */}
              <div className={styles.inquiryCard}>
                <div className={styles.inquiryHeader}>
                  <span className={styles.pulseDot} />
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
          </div>

          {/* Staff summary card — overlapping phone */}
          <div className={styles.staffCard}>
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
