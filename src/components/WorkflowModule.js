'use client';

import { useState } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './styles/WorkflowModule.module.css';

// ─── Bilingual Data ───
const bilingualSampleData = {
  en: {
    name: 'Maria Gutierrez',
    treatment: 'Botox — Forehead and crow\'s feet',
    time: 'Thursday afternoon',
    patient: 'Returning patient',
    source: 'Missed call — after hours',
    status: 'Ready for staff review',
  },
  es: {
    name: 'Maria Gutierrez',
    treatment: 'Botox — Frente y patas de gallo',
    time: 'Jueves por la tarde',
    patient: 'Paciente recurrente',
    source: 'Llamada perdida — fuera de horario',
    status: 'Listo para revisión del equipo',
  },
};

const bilingualLabels = {
  en: {
    name: 'Patient Name',
    treatment: 'Treatment Interest',
    time: 'Preferred Time',
    patient: 'Patient Type',
    source: 'Inquiry Source',
  },
  es: {
    name: 'Nombre del Paciente',
    treatment: 'Interés de Tratamiento',
    time: 'Horario Preferido',
    patient: 'Tipo de Paciente',
    source: 'Fuente de Consulta',
  },
};

const bilingualWorkflows = [
  'English/Spanish patient communication',
  'Spanish-speaking booking requests',
  'Treatment interest and preferred time capture',
  'Clinic-approved answers only',
  'Human escalation when needed',
  'Bilingual handoff summaries',
];

// ─── CRM Data ───
const handoffOptions = [
  'CRM-light handoff',
  'Staff summaries',
  'Front desk alerts',
  'Structured booking request data',
  'Email or SMS notifications',
  'Spreadsheet or dashboard summaries',
  'Deeper workflows where supported',
];

const inquirySources = [
  { label: 'Phone Calls', icon: '📞' },
  { label: 'Website Forms', icon: '📋' },
  { label: 'Instagram DMs', icon: '💬' },
  { label: 'After-Hours', icon: '🌙' },
  { label: 'SMS / WhatsApp', icon: '📱' },
];

// ─── Trust Data ───
const trustCards = [
  {
    title: 'Clinic-approved FAQs',
    description: 'Avalora follows your approved services, FAQs, tone, and booking rules.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 14l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Not medical advice',
    description: 'Avalora does not diagnose, recommend treatment, or replace clinical judgment.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 9v6M14 18v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Human escalation',
    description: 'Sensitive, urgent, clinical, or provider-specific requests can be routed back to your team.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="9" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 23c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Staff summaries',
    description: 'Your team receives structured details instead of messy voicemail fragments.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="3" width="20" height="22" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 9h10M9 13h10M9 17h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Workflow control',
    description: "Avalora is configured around your clinic's rules, not a generic script.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 3v3M14 22v3M3 14h3M22 14h3M6.1 6.1l2.12 2.12M19.78 19.78l2.12 2.12M6.1 21.9l2.12-2.12M19.78 8.22l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

// ─── Shared Icons ───
function GlobeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="9" cy="9" rx="3.5" ry="7.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2 9h14" stroke="currentColor" strokeWidth="1.2" />
      <path d="M3.5 5h11M3.5 13h11" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function ArrowIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function WorkflowModule() {
  const sectionRef = useScrollReveal();
  const [activeTab, setActiveTab] = useState(0);
  const [activeLang, setActiveLang] = useState('en');

  const biData = bilingualSampleData[activeLang];
  const biLabels = bilingualLabels[activeLang];

  return (
    <section id="workflow" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        
        {/* Header */}
        <header className={styles.header}>
          <p className={styles.eyebrow} data-reveal>Built for the Real Clinic Workflow</p>
          <h2 className={styles.heading} data-reveal data-reveal-delay="100">
            One system. Three critical workflows.
          </h2>
        </header>

        {/* Tab Navigation */}
        <div className={styles.tabBarWrapper} data-reveal data-reveal-delay="200">
          <div className={styles.tabBar} role="tablist">
            {['Bilingual Intake', 'CRM & Handoff', 'Trust & Safety'].map((tab, idx) => (
              <button
                key={idx}
                role="tab"
                aria-selected={activeTab === idx}
                className={`${styles.tabBtn} ${activeTab === idx ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className={styles.tabContentArea} data-reveal data-reveal-delay="300">
          
          {/* TAB 0: Bilingual Intake */}
          {activeTab === 0 && (
            <div className={styles.tabPanel} role="tabpanel">
              <div className={styles.bilingualGrid}>
                <div className={styles.bilingualCopy}>
                  <p className={styles.panelTitle}>
                    <span className={styles.panelTitleAccent}>English/Spanish</span>{' '}
                    intake for Miami patient demand.
                  </p>
                  <p className={styles.panelDesc}>
                    Miami med spas often serve patients who move between English and Spanish. Response speed matters in both. Avalora helps capture Spanish-speaking inquiries, answer only clinic-approved basics, and route the right details back to your team.
                  </p>
                  <p className={styles.listLabel}>Bilingual workflows can support:</p>
                  <ul className={styles.workflowList} role="list">
                    {bilingualWorkflows.map((item, index) => (
                      <li key={index} className={styles.workflowItem}>
                        <GlobeIcon className={styles.workflowIcon} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className={styles.microcopy}>
                    SMS and call workflows are the default. WhatsApp can be added where it fits your clinic's process.
                  </p>
                </div>
                
                <div className={styles.bilingualVisual}>
                  <div className={styles.bilingualCard} role="region" aria-label="Bilingual intake card preview">
                    <div className={styles.cardHeader}>
                      <span className={styles.cardHeaderLabel}>Intake Summary</span>
                      <div className={styles.langToggle} role="tablist">
                        <button
                          role="tab"
                          aria-selected={activeLang === 'en'}
                          className={`${styles.langBtn} ${activeLang === 'en' ? styles.langBtnActive : ''}`}
                          onClick={() => setActiveLang('en')}
                        >
                          EN
                        </button>
                        <button
                          role="tab"
                          aria-selected={activeLang === 'es'}
                          className={`${styles.langBtn} ${activeLang === 'es' ? styles.langBtnActive : ''}`}
                          onClick={() => setActiveLang('es')}
                        >
                          ES
                        </button>
                      </div>
                    </div>
                    <div className={styles.cardBody}>
                      <div className={styles.cardField}>
                        <p className={styles.fieldLabel}>{biLabels.name}</p>
                        <p className={styles.fieldValue}>{biData.name}</p>
                      </div>
                      <div className={styles.cardField}>
                        <p className={styles.fieldLabel}>{biLabels.treatment}</p>
                        <p className={styles.fieldValue}>{biData.treatment}</p>
                      </div>
                      <div className={styles.cardField}>
                        <p className={styles.fieldLabel}>{biLabels.time}</p>
                        <p className={styles.fieldValue}>{biData.time}</p>
                      </div>
                      <div className={styles.cardField}>
                        <p className={styles.fieldLabel}>{biLabels.patient}</p>
                        <p className={styles.fieldValue}>{biData.patient}</p>
                      </div>
                      <div className={styles.cardField}>
                        <p className={styles.fieldLabel}>{biLabels.source}</p>
                        <p className={styles.fieldValue}>{biData.source}</p>
                      </div>
                      <div className={`${styles.statusBadge} ${styles.statusReady}`}>
                        <span className={styles.statusDot} aria-hidden="true" />
                        {biData.status}
                      </div>
                    </div>
                    <div className={styles.cardFooter}>
                      <ArrowIcon className={styles.footerIcon} />
                      <span className={styles.footerText}>
                        {activeLang === 'en' ? 'Routed to front desk for review' : 'Enviado a recepción para revisión'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 1: CRM & Handoff */}
          {activeTab === 1 && (
            <div className={styles.tabPanel} role="tabpanel">
              <div className={styles.crmGrid}>
                <div className={styles.crmCopy}>
                  <p className={styles.panelTitle}>
                    Your CRM only helps after the lead is captured.
                  </p>
                  <p className={styles.panelDesc}>
                    Avalora helps catch the calls, forms, DMs, and after-hours inquiries your systems may never see. Med spa systems vary. Some support deeper integrations. Others need cleaner alerts, summaries, tasks, spreadsheets, or front desk handoffs first. Avalora is built to work around your current workflow instead of forcing a new one on your team.
                  </p>
                  <div className={styles.importantNote}>
                    <div className={styles.noteIcon}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M10 6v5M10 13.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <p className={styles.noteText}>
                      No universal integration promise. The private fit call identifies what should be captured, where it should go, and how your team should stay in control.
                    </p>
                  </div>
                </div>
                
                <div className={styles.crmVisual}>
                  <div className={styles.flowDiagram}>
                    <div className={styles.flowColumn}>
                      <h3 className={styles.flowLabel}>Inquiry Sources</h3>
                      <div className={styles.sourceCards}>
                        {inquirySources.map((source, i) => (
                          <div key={source.label} className={styles.sourceCard} style={{ animationDelay: `${i * 0.1}s` }}>
                            <span className={styles.sourceIcon}>{source.icon}</span>
                            <span className={styles.sourceText}>{source.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={styles.flowArrow}>
                      <div className={styles.arrowLine} />
                      <div className={styles.arrowHead} />
                    </div>
                    <div className={styles.flowColumn}>
                      <div className={styles.avaloraHub}>
                        <div className={styles.hubGlow} />
                        <span className={styles.hubLabel}>Avalora</span>
                        <span className={styles.hubSub}>Capture &amp; Route</span>
                      </div>
                    </div>
                    <div className={styles.flowArrow}>
                      <div className={styles.arrowLine} />
                      <div className={styles.arrowHead} />
                    </div>
                    <div className={styles.flowColumn}>
                      <h3 className={styles.flowLabel}>Handoff Options</h3>
                      <div className={styles.optionCards}>
                        {handoffOptions.map((option, i) => (
                          <div key={option} className={styles.optionCard} style={{ animationDelay: `${i * 0.1}s` }}>
                            <span className={styles.optionCheck}>✓</span>
                            <span className={styles.optionText}>{option}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Trust & Safety */}
          {activeTab === 2 && (
            <div className={styles.tabPanel} role="tabpanel">
              <div className={styles.trustIntro}>
                <p className={styles.panelTitle}>
                  Controlled, clinic-approved, and built to escalate.
                </p>
                <p className={styles.panelDesc}>
                  Avalora is designed for patient communication boundaries, not open-ended medical conversation.
                </p>
              </div>
              
              <div className={styles.trustGrid}>
                {trustCards.map((card, i) => (
                  <div key={card.title} className={styles.trustCard} style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className={styles.trustIcon}>{card.icon}</div>
                    <h3 className={styles.trustTitle}>{card.title}</h3>
                    <p className={styles.trustDesc}>{card.description}</p>
                  </div>
                ))}
              </div>

              <div className={styles.hipaaBlock}>
                <div className={styles.hipaaInner}>
                  <div className={styles.hipaaIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className={styles.hipaaContent}>
                    <h3 className={styles.hipaaTitle}>HIPAA-aware workflows</h3>
                    <p className={styles.hipaaText}>
                      Avalora is designed for controlled, clinic-approved patient communication. Where protected health information is involved, Avalora supports BAA-backed workflows, approved FAQs, human escalation, structured summaries, and careful handoff rules.
                    </p>
                    <p className={styles.hipaaText}>
                      Avalora does not provide medical advice, diagnose patients, recommend treatments, determine treatment eligibility, or replace clinical judgment. Clinical, urgent, sensitive, provider-specific, or unclear questions are routed back to the clinic team.
                    </p>
                    <a href="/hipaa-security" className={styles.hipaaButton}>
                      Review HIPAA &amp; Security
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
}
