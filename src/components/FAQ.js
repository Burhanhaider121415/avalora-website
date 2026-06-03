'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './styles/FAQ.module.css';

const faqData = [
  // Product & Trust FAQs (1-6, more prominent)
  {
    question: 'Is Avalora replacing my receptionist?',
    answer:
      'No. Avalora supports your front desk by catching overflow, missed, and after-hours inquiries. Your team stays in control.',
    category: 'product',
  },
  {
    question: 'Can Avalora handle Spanish-speaking callers?',
    answer:
      'Yes, where configured. Avalora can support English/Spanish intake for Miami med spas, capture booking details, and route the right summary back to your team.',
    category: 'product',
  },
  {
    question: 'Does Avalora give medical advice?',
    answer:
      'No. Avalora does not diagnose, recommend treatment, or replace clinical judgment. It follows clinic-approved FAQs and routes clinical questions to your team.',
    category: 'product',
  },
  {
    question: 'Can Avalora work with our current CRM or booking system?',
    answer:
      'Avalora can start with clean handoffs, alerts, summaries, tasks, or structured exports. Deeper workflows may be supported depending on your systems.',
    category: 'product',
  },
  {
    question: 'What happens when a patient needs a human?',
    answer:
      'Avalora can escalate sensitive, urgent, clinical, provider-specific, or unclear requests to your team with a structured summary.',
    category: 'product',
  },
  {
    question: 'Can we approve what Avalora says?',
    answer:
      'Yes. Avalora should be configured around your approved services, FAQs, tone, boundaries, and escalation rules.',
    category: 'product',
  },
  // Setup & Workflow FAQs (7-12)
  {
    question: 'How long does setup take?',
    answer:
      'The final timeline depends on your workflow, services, language needs, handoff rules, and integration requirements. The private fit call identifies the correct setup path.',
    category: 'setup',
  },
  {
    question: 'Does Avalora answer every call?',
    answer:
      'Avalora can be configured for missed calls, overflow, after-hours inquiries, form leads, DMs, or specific workflows. It does not have to replace your normal front desk flow.',
    category: 'setup',
  },
  {
    question: 'Can Avalora handle Instagram DMs or WhatsApp?',
    answer:
      "Avalora can support DM or SMS/WhatsApp workflows where configured, but the first priority is building a reliable capture and handoff system around the clinic's real workflow.",
    category: 'setup',
  },
  {
    question: 'How is pricing determined?',
    answer:
      'Plans are based on call volume, language needs, workflow complexity, handoff requirements, and whether deeper integrations or follow-up workflows are needed.',
    category: 'setup',
  },
  {
    question: 'What does the private fit call include?',
    answer:
      'We review your call flow, missed-call process, after-hours demand, bilingual needs, booking workflow, CRM/EMR setup, consent requirements, and where patient inquiries currently leak.',
    category: 'setup',
  },
  {
    question:
      'Can Avalora help with reminders, reschedules, and follow-up?',
    answer:
      'Yes, where configured. Avalora can support reminders, reschedule/cancel intake, post-treatment follow-up, and compliant review request workflows where approved by clinic policy.',
    category: 'setup',
  },
  // Legal & Compliance FAQs (13-15)
  {
    question: 'Is Avalora HIPAA compliant?',
    answer:
      'Avalora supports HIPAA-aware workflows and BAA-backed deployment where protected health information is involved. Workflows are configured around clinic-approved FAQs, human escalation, structured summaries, and controlled handoff rules.',
    category: 'compliance',
  },
  {
    question: 'Do you sign a Business Associate Agreement?',
    answer:
      'Yes, where protected health information is involved. During onboarding, Avalora reviews the data flow, vendor chain, storage, routing, access rules, and agreement requirements before launch.',
    category: 'compliance',
  },
  {
    question: 'What about SOC 2?',
    answer:
      'Avalora can provide vendor security documentation where available. If voice infrastructure is supported by SOC 2-audited vendors, documentation can be reviewed during onboarding.',
    category: 'compliance',
  },
];

function FAQItem({ item, isOpen, onToggle, index }) {
  const contentRef = useRef(null);

  return (
    <div
      className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''} ${
        item.category === 'compliance' ? styles.complianceItem : ''
      }`}
    >
      <button
        className={styles.faqQuestion}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className={styles.questionText}>{item.question}</span>
        <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 8l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className={styles.faqAnswerWrapper}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight + 'px' : '0px',
        }}
      >
        <div ref={contentRef} className={styles.faqAnswer}>
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const sectionRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.animate}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const productFaqs = faqData.filter(
    (f) => f.category === 'product' || f.category === 'setup'
  );
  const complianceFaqs = faqData.filter((f) => f.category === 'compliance');

  return (
    <section id="faq" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={`${styles.header} ${styles.animate}`}>
          <h2 className={styles.heading}>Frequently Asked Questions</h2>
        </div>

        <div className={`${styles.faqList} ${styles.animate}`}>
          {productFaqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>

        <div className={`${styles.complianceSection} ${styles.animate}`}>
          <h3 className={styles.complianceHeading}>
            Compliance &amp; Security
          </h3>
          <div className={styles.faqList}>
            {complianceFaqs.map((item, i) => {
              const globalIndex = productFaqs.length + i;
              return (
                <FAQItem
                  key={globalIndex}
                  item={item}
                  index={globalIndex}
                  isOpen={openIndex === globalIndex}
                  onToggle={() => handleToggle(globalIndex)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
