'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles/WorkflowModule.module.css';

const tabs = [
  {
    id: 'bilingual',
    label: 'Bilingual Intake',
    heading: 'Miami runs on English and Spanish.',
    text: 'If your front desk cannot handle Spanish-speaking inquiries, those patients will find a clinic that can. Avalora supports English/Spanish patient intake where your clinic needs it, ensuring language is never a barrier to booking.',
    bulletTitle: 'Avalora handles:',
    bullets: [
      'Spanish-speaking booking requests',
      'Bilingual patient communication',
      'Miami med spa lead recovery'
    ],
    imageType: 'es-badge'
  },
  {
    id: 'handoff',
    label: 'CRM & Handoff',
    heading: 'Clean summaries, not transcripts.',
    text: 'Your front desk does not have time to read call transcripts. Avalora extracts the exact details your team needs to take action, delivering a clean summary through the workflow that fits your clinic.',
    bulletTitle: 'Handoff methods:',
    bullets: [
      'Staff email & SMS notifications',
      'CRM-light tasks & Dashboard view',
      'Deeper workflows where supported'
    ],
    imageType: 'handoff-card'
  },
  {
    id: 'trust',
    label: 'Trust & Boundaries',
    heading: 'We respect the clinical line.',
    text: 'Avalora does not provide medical advice, diagnose patients, or recommend treatments. It follows your approved FAQs and routes clinical questions back to your staff.',
    bulletTitle: 'Configured around your rules:',
    bullets: [
      'Clinic-approved boundaries',
      'Human escalation protocols',
      'HIPAA-aware workflows available'
    ],
    imageType: 'shield-icon'
  }
];

export default function WorkflowModule() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const currentTabData = tabs.find(t => t.id === activeTab);

  return (
    <section id="workflow" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Core Capabilities</p>
          <h2 className={styles.heading}>Built for the reality of Med Spa operations.</h2>
        </div>

        <div className={styles.moduleLayout}>
          {/* Tabs Sidebar */}
          <div className={styles.tabsList} role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`${styles.tabButton} ${activeTab === tab.id ? styles.tabButtonActive : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Panel */}
          <div className={styles.contentPanel}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className={styles.tabContent}
              >
                <div className={styles.copyArea}>
                  <h3 className={styles.tabHeading}>{currentTabData.heading}</h3>
                  <p className={styles.tabText}>{currentTabData.text}</p>
                  
                  <div className={styles.bulletArea}>
                    <p className={styles.bulletTitle}>{currentTabData.bulletTitle}</p>
                    <ul className={styles.bulletList}>
                      {currentTabData.bullets.map((bullet, idx) => (
                        <li key={idx} className={styles.bulletItem}>
                          <span className={styles.bulletDot} />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.visualArea}>
                  {currentTabData.imageType === 'es-badge' && (
                    <div className={styles.visualPlaceholder}>
                      <div className={styles.esBadge}>
                        <span className={styles.esText}>ES</span>
                        <span className={styles.esLabel}>Hablamos Español</span>
                      </div>
                    </div>
                  )}
                  {currentTabData.imageType === 'handoff-card' && (
                    <div className={styles.visualPlaceholder}>
                      <div className={styles.handoffCard}>
                        <div className={styles.handoffHeader}>
                          <span className={styles.handoffDot}></span>
                          Action Required
                        </div>
                        <div className={styles.handoffBody}>
                          Patient prefers Friday PM for Filler Consult.
                        </div>
                      </div>
                    </div>
                  )}
                  {currentTabData.imageType === 'shield-icon' && (
                    <div className={styles.visualPlaceholder}>
                      <div className={styles.shieldIcon}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1B6B5A" strokeWidth="1.5">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <path d="M9 12l2 2 4-4" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
