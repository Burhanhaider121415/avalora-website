'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './styles/BilingualIntake.module.css';

const sampleData = {
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

const fieldLabels = {
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

const workflows = [
  'English/Spanish patient communication',
  'Spanish-speaking booking requests',
  'Treatment interest and preferred time capture',
  'Clinic-approved answers only',
  'Human escalation when needed',
  'Bilingual handoff summaries',
];

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
      <path
        d="M3 7h8M7 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BilingualIntake() {
  const sectionRef = useRef(null);
  const [activeLang, setActiveLang] = useState('en');

  const data = sampleData[activeLang];
  const labels = fieldLabels[activeLang];

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
    <section id="bilingual" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        {/* Copy Column */}
        <div className={styles.copyColumn}>
          <div className={styles.revealed}>
            <p className={styles.sectionLabel}>Bilingual Support</p>
            <h2 className={styles.heading}>
              <span className={styles.headingAccent}>English/Spanish</span>{' '}
              intake for Miami patient demand.
            </h2>
          </div>

          <div className={styles.revealed}>
            <p className={styles.paragraph}>
              Miami med spas often serve patients who move between English and
              Spanish. Response speed matters in both.
            </p>
            <p className={styles.paragraph}>
              Avalora helps capture Spanish-speaking inquiries, answer only
              clinic-approved basics, and route the right details back to your
              team.
            </p>
          </div>

          <div className={styles.revealed}>
            <p className={styles.listLabel}>
              Bilingual workflows can support:
            </p>
            <ul className={styles.workflowList} role="list">
              {workflows.map((item, index) => (
                <li key={index} className={styles.workflowItem}>
                  <GlobeIcon className={styles.workflowIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.revealed}>
            <p className={styles.microcopy}>
              SMS and call workflows are the default. WhatsApp can be added
              where it fits your clinic&apos;s process.
            </p>
          </div>
        </div>

        {/* Visual Column — Bilingual Intake Card */}
        <div className={`${styles.visualColumn} ${styles.revealedRight}`}>
          <div
            className={styles.bilingualCard}
            role="region"
            aria-label="Bilingual intake card preview"
          >
            {/* Card Header with Toggle */}
            <div className={styles.cardHeader}>
              <span className={styles.cardHeaderLabel}>Intake Summary</span>
              <div
                className={styles.langToggle}
                role="tablist"
                aria-label="Language selector"
              >
                <button
                  role="tab"
                  aria-selected={activeLang === 'en'}
                  className={`${styles.langBtn} ${
                    activeLang === 'en' ? styles.langBtnActive : ''
                  }`}
                  onClick={() => setActiveLang('en')}
                >
                  EN
                </button>
                <button
                  role="tab"
                  aria-selected={activeLang === 'es'}
                  className={`${styles.langBtn} ${
                    activeLang === 'es' ? styles.langBtnActive : ''
                  }`}
                  onClick={() => setActiveLang('es')}
                >
                  ES
                </button>
              </div>
            </div>

            {/* Card Body */}
            <div className={styles.cardBody}>
              <div className={styles.cardField}>
                <p className={styles.fieldLabel}>{labels.name}</p>
                <p className={styles.fieldValue}>{data.name}</p>
              </div>
              <div className={styles.cardField}>
                <p className={styles.fieldLabel}>{labels.treatment}</p>
                <p className={styles.fieldValue}>{data.treatment}</p>
              </div>
              <div className={styles.cardField}>
                <p className={styles.fieldLabel}>{labels.time}</p>
                <p className={styles.fieldValue}>{data.time}</p>
              </div>
              <div className={styles.cardField}>
                <p className={styles.fieldLabel}>{labels.patient}</p>
                <p className={styles.fieldValue}>{data.patient}</p>
              </div>
              <div className={styles.cardField}>
                <p className={styles.fieldLabel}>{labels.source}</p>
                <p className={styles.fieldValue}>{data.source}</p>
              </div>

              <div className={`${styles.statusBadge} ${styles.statusReady}`}>
                <span className={styles.statusDot} aria-hidden="true" />
                {data.status}
              </div>
            </div>

            {/* Card Footer */}
            <div className={styles.cardFooter}>
              <ArrowIcon className={styles.footerIcon} />
              <span className={styles.footerText}>
                {activeLang === 'en'
                  ? 'Routed to front desk for review'
                  : 'Enviado a recepción para revisión'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
