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

        {/* Flow connector */}
        <div className={styles.flowConnector} aria-hidden="true">
          <span className={styles.flowDot} />
          <span className={styles.flowLine} />
          <span className={styles.flowDot} />
          <span className={styles.flowLine} />
          <span className={styles.flowDot} />
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
