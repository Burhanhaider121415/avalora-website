'use client';

import { useEffect, useRef } from 'react';
import styles from './styles/FounderNote.module.css';

export default function FounderNote() {
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
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.animate}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="founder" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.accent} aria-hidden="true" />
        
        <h2 className={`${styles.heading} ${styles.animate}`}>
          Built from real med spa workflow research.
        </h2>

        <p className={`${styles.paragraph} ${styles.animate}`}>
          After studying how Miami med spas handle calls, DMs, booking requests,
          Spanish-speaking inquiries, and follow-ups, we built Avalora around
          one belief:
        </p>

        <blockquote className={`${styles.quote} ${styles.animate}`}>
          <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>
          No high-intent patient inquiry should disappear because the front desk
          was busy.
          <span className={styles.quoteMark} aria-hidden="true">&rdquo;</span>
        </blockquote>

        <p className={`${styles.closing} ${styles.animate}`}>
          Avalora is designed to support your staff, protect the patient
          experience, and turn interest into a cleaner next step.
        </p>
      </div>
    </section>
  );
}
