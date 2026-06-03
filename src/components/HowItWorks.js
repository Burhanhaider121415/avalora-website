'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './styles/HowItWorks.module.css';

const steps = [
  {
    number: 1,
    title: 'Learn',
    description:
      'We map your services, FAQs, booking rules, tone, escalation preferences, language needs, consent language, and front desk workflow.',
    icon: 'search',
    details: [
      'Services and treatment categories',
      'Approved FAQs',
      'Booking rules',
      'Provider preferences',
      'Language needs',
      'Escalation boundaries',
      'Call recording and disclosure preferences',
      'Consent and opt-out language',
      'Staff handoff preferences',
    ],
  },
  {
    number: 2,
    title: 'Capture',
    description:
      'Avalora captures missed calls, overflow calls, after-hours inquiries, form leads, ad leads, DMs where configured, and booking requests.',
    icon: 'funnel',
    details: [
      'Missed calls',
      'Overflow calls',
      'After-hours inquiries',
      'Website forms',
      'Ad leads',
      'Instagram DMs where configured',
      'Reschedule or cancellation requests',
    ],
  },
  {
    number: 3,
    title: 'Qualify',
    description:
      'Avalora collects the details your team needs: name, phone, treatment interest, preferred time, patient type, urgency, and notes.',
    icon: 'checklist',
    details: [
      'Name',
      'Phone',
      'Email if needed',
      'Treatment interest',
      'Preferred date/time',
      'New or returning patient',
      'Urgency',
      'Source of inquiry',
      'Notes for staff',
    ],
  },
  {
    number: 4,
    title: 'Handoff',
    description:
      'Your team receives a clean summary through the workflow that fits your clinic: staff alert, email, SMS, CRM-light task, spreadsheet, dashboard, or deeper integration where supported.',
    icon: 'handoff',
    details: [
      'Front desk alert',
      'Staff email',
      'SMS notification',
      'CRM-light handoff',
      'Google Sheet or Airtable',
      'Dashboard view',
      'Daily summary',
      'Deeper workflow where supported',
    ],
  },
];

function StepIcon({ type, className }) {
  const icons = {
    search: (
      <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 18l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    funnel: (
      <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M3 4h22l-8 9.6V22l-6 3V13.6L3 4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    checklist: (
      <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="3" width="20" height="22" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 17h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 21h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    handoff: (
      <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M5 14h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 8l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 8v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  };
  return icons[type] || null;
}

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const [openSteps, setOpenSteps] = useState({});

  const toggleStep = (index) => {
    setOpenSteps((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.revealed}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={`${styles.header} ${styles.revealed}`}>
          <p className={styles.sectionLabel}>How It Works</p>
          <h2 className={styles.heading}>
            Built around your current booking flow, not forced on top of it.
          </h2>
        </div>

        <div className={`${styles.stepsGrid} ${styles.revealed}`}>
          {/* Desktop connecting line */}
          <div className={styles.connectingLine} aria-hidden="true">
            <div className={styles.lineShimmer} />
          </div>

          {/* Mobile connecting line */}
          <div className={styles.mobileConnector} aria-hidden="true" />

          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepCircle} aria-hidden="true">
                {step.number}
              </div>

              <div className={styles.stepContent}>
                <StepIcon type={step.icon} className={styles.stepIcon} />
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>

                <button
                  className={styles.detailToggle}
                  onClick={() => toggleStep(index)}
                  aria-expanded={!!openSteps[index]}
                  aria-controls={`step-detail-${index}`}
                >
                  {openSteps[index] ? 'Hide details' : 'View details'}
                  <span
                    className={`${styles.toggleArrow} ${
                      openSteps[index] ? styles.toggleArrowOpen : ''
                    }`}
                    aria-hidden="true"
                  >
                    ▼
                  </span>
                </button>

                <div
                  id={`step-detail-${index}`}
                  className={`${styles.detailList} ${
                    openSteps[index] ? styles.detailListOpen : ''
                  }`}
                  role="region"
                  aria-label={`${step.title} details`}
                >
                  <ul className={styles.detailItems} role="list">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className={styles.detailItem}>
                        <span className={styles.detailDot} aria-hidden="true" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
