'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './styles/FrontDeskRelief.module.css';

const benefits = [
  'Support patients faster',
  'Reduce front desk pressure',
  'Capture overflow and after-hours interest',
  'Route clean summaries back to staff',
  'Keep human escalation in place',
  'Protect the patient experience',
];

function CheckIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="8.5" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <path
        d="M5.5 9.5L7.5 11.5L12.5 6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FrontDeskRelief() {
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
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll(
      `.${styles.revealed}, .${styles.revealedRight}`
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="front-desk-relief" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        {/* Copy Column */}
        <div className={styles.copyColumn}>
          <div className={styles.revealed}>
            <p className={styles.sectionLabel}>Front Desk Support</p>
            <h2 className={styles.heading}>
              Your front desk stays human.{' '}
              <span className={styles.headingAccent}>
                Avalora catches what they miss.
              </span>
            </h2>
          </div>

          <div className={styles.revealed}>
            <p className={styles.paragraph}>
              Your receptionist is doing more than answering phones.
            </p>
            <p className={styles.paragraph}>
              She is checking in patients, managing payments, calming nervous
              clients, updating provider schedules, handling DMs, and still
              trying to answer every call.
            </p>
            <p className={styles.paragraph}>
              Avalora adds a controlled capture layer around the moments your
              team cannot reach fast enough: overflow calls, missed calls,
              after-hours inquiries, repetitive booking questions, and follow-up
              requests.
            </p>
          </div>

          <div className={styles.revealed}>
            <p className={styles.listLabel}>Avalora helps your team:</p>
            <ul className={styles.benefitsList} role="list">
              {benefits.map((benefit, index) => (
                <li key={index} className={styles.benefitItem}>
                  <CheckIcon className={styles.checkIcon} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.closingBlock} ${styles.revealed}`}>
            <p className={styles.closingBold}>
              This is not receptionist replacement.
            </p>
            <p className={styles.closingText}>
              It is front desk support for the moments demand moves faster than
              the team can respond.
            </p>
          </div>
        </div>

        {/* Image Column */}
        <div className={`${styles.imageColumn} ${styles.revealedRight}`}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/medspa-reception.png"
              alt="Med spa front desk reception area with staff assisting patients"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              className={styles.image}
              priority={false}
            />
          </div>
          <div className={styles.imageAccent} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
