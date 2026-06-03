'use client';

import styles from './styles/BookingLeak.module.css';

/* ── SVG Icons ── */

function PhoneIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function ClockIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ChatIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}

function GlobeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function ClipboardIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </svg>
  );
}

/* ── Leak Data ── */

const leakCards = [
  {
    icon: PhoneIcon,
    title: 'Missed calls',
    description:
      'High-intent consult calls can disappear into voicemail while your team is with patients.',
  },
  {
    icon: ClockIcon,
    title: 'Slow callbacks',
    description:
      'A patient asking about Botox after hours may keep searching within minutes.',
  },
  {
    icon: ChatIcon,
    title: 'Buried DMs and forms',
    description:
      'Instagram, ads, and website forms create interest. That interest still needs a response system.',
  },
  {
    icon: GlobeIcon,
    title: 'Bilingual gaps',
    description:
      'Miami patient demand often moves in English and Spanish. Response speed matters in both.',
  },
  {
    icon: ClipboardIcon,
    title: 'Unclear handoff',
    description:
      'If treatment interest, timing, urgency, and contact details are not captured cleanly, your team has to chase.',
  },
];

/* ── Component ── */

export default function BookingLeak() {
  return (
    <section id="booking-leak" className={styles.section} aria-labelledby="booking-leak-heading">
      <div className={styles.container}>

        {/* Header */}
        <header className={styles.header}>
          <h2 id="booking-leak-heading" className={styles.heading}>
            The leak usually happens between interest and booking.
          </h2>
          <p className={styles.intro}>
            Your clinic may already be creating demand through Instagram, Google, ads, referrals,
            website forms, treatment education, and patient word-of-mouth.
          </p>
        </header>

        {/* Premium visual flow break */}
        <div className={styles.visualFlow} aria-hidden="true">
          <div className={styles.flowStep}>
            <div className={styles.flowIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.flowText}>
              <span className={styles.flowLabel}>Patient Inquiry</span>
              <span className={styles.flowValue}>Call / DM / Form</span>
            </div>
          </div>

          <div className={styles.flowArrow}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className={styles.flowStepActive}>
            <div className={styles.flowIconActive}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.flowText}>
              <span className={styles.flowLabelActive}>Avalora Captures</span>
              <span className={styles.flowValueActive}>Instant Response</span>
            </div>
          </div>

          <div className={styles.flowArrow}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className={styles.flowStep}>
            <div className={styles.flowIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="4" y="3" width="16" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 9h6M9 13h6M9 17h4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.flowText}>
              <span className={styles.flowLabel}>Staff Handoff</span>
              <span className={styles.flowValue}>Clean Scheduled Task</span>
            </div>
          </div>
        </div>

        {/* Problem narrative */}
        <div className={styles.narrative}>
          <p className={styles.problem}>The problem is what happens next.</p>
          <p className={styles.detail}>
            Calls ring while staff checks in patients. Forms wait for a callback. Instagram DMs get
            buried. Spanish-speaking inquiries create bottlenecks. After-hours patients keep
            searching.
          </p>
          <p className={styles.keyLine}>Booking intent never becomes a clean staff task.</p>
          <p className={styles.empathy}>Your front desk is not slow. It is overloaded.</p>
        </div>

        {/* Leak cards */}
        <div className={styles.leakSection}>
          <h3 className={styles.leakHeading}>Where booking intent leaks</h3>
          <div className={styles.leakGrid} role="list">
            {leakCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <article key={card.title} className={styles.leakCard} role="listitem">
                  <div className={styles.iconWrapper}>
                    <IconComponent className={styles.icon} />
                  </div>
                  <h4 className={styles.cardTitle}>{card.title}</h4>
                  <p className={styles.cardDescription}>{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
