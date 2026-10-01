'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './styles/FrontDeskRelief.module.css';

const benefits = [
  'Your team keeps control of the next step',
  'Clinic-approved information and clear boundaries',
  'Human escalation when judgment matters',
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
              Avalora supports the team.
            </span>
          </h2>

          <p className={styles.paragraph}>
            Your team is welcoming patients, managing schedules, and answering
            questions. Avalora supports them when calls and inquiries overlap,
            so they can stay focused on the people in front of them.
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
              Your staff stays responsible for patient care, decisions, and follow-up.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
