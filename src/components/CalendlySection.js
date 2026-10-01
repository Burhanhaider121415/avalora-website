'use client';

import { useEffect } from 'react';
import styles from './styles/CalendlySection.module.css';

export default function CalendlySection() {
  useEffect(() => {
    // Load Calendly script dynamically on component mount
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script if needed
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="book-call" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Book a Private Fit Call</h2>
        <p className={styles.subtext}>
          Choose a time below to discuss how Avalora can fit into your clinic&apos;s workflow.
        </p>
        <p className={styles.founderIdentity}><strong>Burhan Haider</strong> · Founder, Avalora<br />Your conversation about workflow and implementation.</p>
        <div className={styles.widgetWrapper}>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/burhanwithavalora?hide_gdpr_banner=1"
            style={{ minWidth: '100%', height: '700px' }}
          ></div>
        </div>
        <a className={styles.schedulerLink} href="https://calendly.com/burhanwithavalora" target="_blank" rel="noopener noreferrer">Open the scheduler in a new tab ↗</a>
      </div>
    </section>
  );
}
