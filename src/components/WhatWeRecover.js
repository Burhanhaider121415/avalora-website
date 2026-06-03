'use client';

import styles from './styles/WhatWeRecover.module.css';

/* ── SVG Icons ── */

function PhoneIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function LightningIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function MoonIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

function CalendarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
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

function ShieldIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

/* ── Module Data ── */

const modules = [
  {
    icon: PhoneIcon,
    title: 'Missed-call recovery',
    description:
      "When the front desk misses a call, Avalora captures the patient's intent, treatment interest, contact details, and preferred time so your team has a clean next step.",
    goodFor:
      'High-intent consult calls, voicemail leakage, missed callbacks, and new patient inquiries.',
  },
  {
    icon: LightningIcon,
    title: 'Speed-to-lead for ads, forms, and DMs',
    description:
      'When someone submits an inquiry, Avalora helps respond before the lead goes cold.',
    goodFor:
      'Instagram inquiries, Facebook lead forms, website forms, Google Business Profile calls, website clicks, or lead sources where configured.',
  },
  {
    icon: MoonIcon,
    title: 'After-hours capture',
    description:
      'When your clinic is closed, Avalora captures the inquiry instead of letting it sit in voicemail.',
    goodFor:
      'Evening Botox questions, filler consultation requests, laser package inquiries, and next-day follow-up tasks.',
  },
  {
    icon: CalendarIcon,
    title: 'Booking request intake',
    description:
      'Avalora collects treatment interest, preferred date and time, new or returning patient status, urgency, and notes for staff.',
    goodFor:
      'Neuromodulator consultations, dermal filler inquiries, RF microneedling series, IPL photofacial requests, GLP-1 consultations, and injectable appointments.',
  },
  {
    icon: GlobeIcon,
    title: 'Bilingual Miami intake',
    description:
      'Avalora supports English/Spanish patient intake where your clinic needs it, helping Spanish-speaking inquiries receive a clear, warm next step.',
    goodFor:
      'Spanish-speaking booking requests, bilingual patient communication, and Miami med spa lead recovery.',
  },
  {
    icon: ShieldIcon,
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

/* ── Component ── */

export default function WhatWeRecover() {
  return (
    <section id="recover" className={styles.section} aria-labelledby="recover-heading">
      <div className={styles.container}>

        {/* Header */}
        <header className={styles.header}>
          <h2 id="recover-heading" className={styles.heading}>
            Capture the patient inquiries your team cannot always reach in time.
          </h2>
          <p className={styles.subtext}>
            Avalora gives your front desk a controlled capture layer for the moments that usually
            slip: missed calls, after-hours inquiries, DMs, forms, booking questions, and follow-up
            requests.
          </p>
        </header>

        {/* Module Grid + Mockup Container */}
        <div className={styles.contentWrapper}>
          <div className={styles.moduleGrid} role="list">
            {modules.map((mod) => {
              const IconComponent = mod.icon;
              return (
                <article key={mod.title} className={styles.moduleCard} role="listitem">
                  <div className={styles.cardIcon}>
                    <IconComponent className={styles.icon} />
                  </div>
                  <h3 className={styles.cardTitle}>{mod.title}</h3>
                  <p className={styles.cardDescription}>{mod.description}</p>
                  <p className={styles.goodFor}>
                    <span className={styles.goodForLabel}>Good for: </span>
                    {mod.goodFor}
                  </p>
                </article>
              );
            })}
          </div>

          <div className={styles.mockupColumn}>
            <div className={styles.mockupSticky}>
              <div className={styles.mockupCard}>
                <span className={styles.mockupTag}>Active Capture</span>
                <img 
                  src="/images/phone-ui-mockup.png" 
                  alt="Avalora Patient Intake Interface" 
                  className={styles.mockupImage}
                />
              </div>
              <div className={styles.mockupCardSecondary}>
                <span className={styles.mockupTagSecondary}>Staff Handoff</span>
                <img 
                  src="/images/staff-summary-card.png" 
                  alt="Staff Summary Notification" 
                  className={styles.mockupImage}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Workflows */}
        <div className={styles.workflowsSection}>
          <h3 className={styles.workflowsHeading}>Available supporting workflows</h3>
          <ul className={styles.workflowsList}>
            {supportingWorkflows.map((workflow) => (
              <li key={workflow} className={styles.workflowItem}>
                {workflow}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
