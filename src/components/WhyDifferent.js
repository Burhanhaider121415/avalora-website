'use client';

import styles from './styles/WhyDifferent.module.css';

/* ── Comparison Data ── */

const comparisonRows = [
  {
    generic: 'Leads with "AI answering"',
    avalora: 'Leads with missed-call and booking recovery',
  },
  {
    generic: 'Can feel like staff replacement',
    avalora: 'Supports the front desk, not replacement',
  },
  {
    generic: 'Often uses generic scripts',
    avalora: 'Follows clinic-approved FAQs, tone, and rules',
  },
  {
    generic: 'Tries to answer broadly',
    avalora: 'Captures booking intent and escalates sensitive questions',
  },
  {
    generic: 'May overpromise automation',
    avalora: 'Uses clean handoffs and deeper workflows where supported',
  },
  {
    generic: 'Feels like SaaS or call center software',
    avalora: 'Feels like a premium patient communication layer',
  },
  {
    generic: 'Focuses on calls only',
    avalora:
      'Can support missed calls, after-hours, forms, DMs, and follow-up workflows where configured',
  },
  {
    generic: 'Pushes "24/7 automation"',
    avalora: 'Protects patient experience with human escalation',
  },
];

/* ── Component ── */

export default function WhyDifferent() {
  return (
    <section id="why-different" className={styles.section} aria-labelledby="why-different-heading">
      <div className={styles.container}>

        {/* Header */}
        <header className={styles.header}>
          <h2 id="why-different-heading" className={styles.heading}>
            Why Avalora Is Different
          </h2>
        </header>

        {/* Desktop Table */}
        <table className={styles.comparisonTable} role="table" aria-label="Comparison of generic AI receptionist versus Avalora">
          <thead className={styles.tableHead}>
            <tr>
              <th scope="col">Generic AI receptionist</th>
              <th scope="col">Avalora</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {comparisonRows.map((row, index) => (
              <tr key={index}>
                <td className={styles.genericCell}>{row.generic}</td>
                <td className={`${styles.avaloraCell} ${styles.avaloraColumnHighlight}`}>
                  {row.avalora}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile Stacked Cards */}
        <div className={styles.mobileCards} role="list" aria-label="Comparison of generic AI receptionist versus Avalora">
          {comparisonRows.map((row, index) => (
            <div key={index} className={styles.comparisonCard} role="listitem">
              <div className={styles.cardGeneric}>
                <span className={styles.genericLabel}>Generic AI receptionist</span>
                {row.generic}
              </div>
              <div className={styles.cardAvalora}>
                <span className={styles.avaloraLabel}>Avalora</span>
                {row.avalora}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Line */}
        <div className={styles.bottomLine}>
          <p className={styles.bottomLineText}>
            <strong>Many clinics search for an AI receptionist.</strong> Avalora is different. It is
            a controlled lead recovery and front desk support layer built to capture missed calls,
            after-hours inquiries, bilingual requests, and booking intent — without replacing the
            receptionist.
          </p>
        </div>

      </div>
    </section>
  );
}
