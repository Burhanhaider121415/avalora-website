'use client';

import { useState, useCallback } from 'react';
import styles from './styles/QuickAnswers.module.css';

/**
 * QuickAnswers — Accordion-style expandable FAQ cards
 * with smooth animations and emerald active-card accents.
 */

const QA_ITEMS = [
  {
    id: 'what-is-avalora',
    question: 'What is Avalora?',
    answer:
      'Avalora is a lead recovery and patient communication layer for Miami med spas. It supports front desk teams by capturing missed calls, after-hours inquiries, English/Spanish patient requests, forms, DMs, and booking intent, then routing clean details back to staff.',
  },
  {
    id: 'who-is-avalora-for',
    question: 'Who is Avalora for?',
    answer:
      'Avalora is built for Miami med spa owners, owner-injectors, practice managers, and aesthetic clinic operators who want faster patient response, fewer missed booking opportunities, and front desk relief without replacing the human patient experience.',
  },
  {
    id: 'what-avalora-does-not-do',
    question: 'What does Avalora not do?',
    answer:
      'Avalora does not replace receptionists, provide medical advice, diagnose patients, guarantee bookings, or force every clinic into the same workflow. It follows clinic-approved FAQs, captures structured information, and escalates sensitive questions back to the clinic team.',
  },
];

/* Chevron SVG for expand/collapse indicator */
function ChevronIcon() {
  return (
    <svg
      className={styles.chevronIcon}
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polyline points="2,4 6,8 10,4" />
    </svg>
  );
}

export default function QuickAnswers() {
  // First card open by default
  const [openId, setOpenId] = useState(QA_ITEMS[0].id);

  const toggle = useCallback((id) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section
      id="quick-answers"
      className={styles.section}
      aria-labelledby="quick-answers-heading"
    >
      <div className={styles.container}>
        {/* ── Header ── */}
        <header className={styles.header}>
          <h2 id="quick-answers-heading" className={styles.heading}>
            Quick Answers
          </h2>
        </header>

        {/* ── Accordion ── */}
        <div className={styles.accordion} role="list">
          {QA_ITEMS.map(({ id, question, answer }) => {
            const isOpen = openId === id;
            const panelId = `panel-${id}`;
            const triggerId = `trigger-${id}`;

            return (
              <div
                key={id}
                className={`${styles.card} ${isOpen ? styles.cardActive : ''}`}
                role="listitem"
              >
                {/* Trigger */}
                <button
                  id={triggerId}
                  className={`${styles.trigger} ${isOpen ? styles.triggerActive : ''}`}
                  onClick={() => toggle(id)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  type="button"
                >
                  <span className={styles.question}>{question}</span>
                  <span
                    className={`${styles.chevron} ${isOpen ? styles.chevronActive : ''}`}
                  >
                    <ChevronIcon />
                  </span>
                </button>

                {/* Answer Panel */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}
                >
                  <p className={styles.answer}>{answer}</p>
                </div>

                {/* Emerald accent bar on active card */}
                <div
                  className={`${styles.accentBar} ${isOpen ? styles.accentBarActive : ''}`}
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
