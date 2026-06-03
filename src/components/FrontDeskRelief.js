'use client';

import { motion } from 'framer-motion';
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

export default function FrontDeskRelief() {
  return (
    <section id="front-desk-relief" className={styles.section}>
      <div className={styles.container}>
        {/* Image Column */}
        <motion.div
          className={styles.imageColumn}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className={styles.imageWrapper}>
            <Image
              src="/images/frontdesk-scene.png"
              alt="Premium med spa front desk with warm lighting and organized reception area"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              className={styles.image}
            />
          </div>
          {/* Glass accent overlay */}
          <div className={styles.imageAccent} aria-hidden="true">
            <span className={styles.accentDot} />
            <span className={styles.accentText}>Front desk stays in control</span>
          </div>
        </motion.div>

        {/* Copy Column */}
        <motion.div
          className={styles.copyColumn}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className={styles.eyebrow}>Front Desk Support</p>
          <h2 className={styles.heading}>
            Your front desk stays human.{' '}
            <span className={styles.headingAccent}>
              Avalora catches what they miss.
            </span>
          </h2>

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

          <p className={styles.listLabel}>Avalora helps your team:</p>
          <ul className={styles.benefitsList} role="list">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                className={styles.benefitItem}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <svg className={styles.checkIcon} viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <circle cx="9" cy="9" r="8" stroke="#1B6B5A" strokeWidth="1.5" opacity="0.3" />
                  <path d="M5.5 9.5L7.5 11.5L12.5 6.5" stroke="#1B6B5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{benefit}</span>
              </motion.li>
            ))}
          </ul>

          <div className={styles.closingBlock}>
            <p className={styles.closingBold}>
              This is not receptionist replacement.
            </p>
            <p className={styles.closingText}>
              It is front desk support for the moments demand moves faster than
              the team can respond.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
