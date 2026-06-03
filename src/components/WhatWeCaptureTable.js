'use client';

import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './styles/WhatWeCaptureTable.module.css';

const captureData = [
  {
    type: 'Missed call',
    captures: 'Name, phone, treatment interest, urgency',
    destination: 'Front desk summary',
  },
  {
    type: 'After-hours inquiry',
    captures: 'Treatment, preferred time, new/returning patient status',
    destination: 'Next-day follow-up task',
  },
  {
    type: 'Instagram DM or form',
    captures: 'Source, interest, contact details',
    destination: 'Staff alert or CRM-light task',
  },
  {
    type: 'Spanish-speaking inquiry',
    captures: 'Language, request, booking intent',
    destination: 'Bilingual handoff summary',
  },
  {
    type: 'Reschedule/cancel request',
    captures: 'Appointment need, reason, timing',
    destination: 'Human review',
  },
  {
    type: 'Follow-up request',
    captures: 'Patient need, timing, notes',
    destination: 'Staff summary',
  },
];

export default function WhatWeCaptureTable() {
  const sectionRef = useScrollReveal();

  return (
    <section id="what-we-capture" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header} data-reveal>
          <p className={styles.sectionLabel}>Capture Intelligence</p>
          <h2 className={styles.heading}>
            What Avalora captures — and where it goes.
          </h2>
          <p className={styles.subtitle}>
            Every inquiry type is handled with structure. Details are collected,
            organized, and routed back to your team — nothing is lost.
          </p>
        </div>

        {/* Desktop Table */}
        <div className={styles.tableWrapper} data-reveal data-reveal-delay="200">
          <table className={styles.table} role="table">
            <thead>
              <tr>
                <th scope="col">Inquiry Type</th>
                <th scope="col">What Avalora Captures</th>
                <th scope="col">Where It Goes</th>
              </tr>
            </thead>
            <tbody>
              {captureData.map((row, index) => (
                <tr key={index}>
                  <td>
                    <span className={styles.inquiryType}>
                      <span className={styles.inquiryDot} aria-hidden="true" />
                      {row.type}
                    </span>
                  </td>
                  <td className={styles.captureDetail}>
                    {row.captures}
                  </td>
                  <td>
                    <span className={styles.destinationTag}>
                      <svg
                        className={styles.destinationIcon}
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {row.destination}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Scroll-Snap Cards */}
        <div className={styles.mobileCards} data-reveal data-reveal-delay="200">
          {captureData.map((row, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardDot} aria-hidden="true" />
                <h3 className={styles.cardTitle}>{row.type}</h3>
              </div>
              <div className={styles.cardRow}>
                <span className={styles.cardLabel}>What Avalora Captures</span>
                <span className={styles.cardValue}>{row.captures}</span>
              </div>
              <div className={styles.cardRow}>
                <span className={styles.cardLabel}>Where It Goes</span>
                <span className={styles.cardDestination}>
                  {row.destination}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
