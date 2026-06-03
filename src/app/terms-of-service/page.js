import styles from './styles.module.css';

export const metadata = {
  title: 'Terms of Service | Avalora',
  description: 'Avalora Terms of Service — lead recovery, booking support, and patient communication workflows for med spas.',
};

export default function TermsOfService() {
  return (
    <main className={styles.legalPage}>
      <div className={styles.container}>
        <a href='/' className={styles.backLink}>&larr; Back to Home</a>
        <h1 className={styles.title}>Terms of Service</h1>

        <div className={styles.content}>
          <p className={styles.disclosure}>
            The full Terms of Service are being finalized by the Avalora legal and compliance team.
            This page will be updated with complete legal copy before launch.
          </p>

          <h2>Core Terms</h2>
          <p>The finalized Terms of Service will cover:</p>
          <ul>
            <li>Avalora provides lead recovery, booking support, and patient communication workflows</li>
            <li>Avalora is not a medical provider</li>
            <li>Avalora does not provide medical advice, diagnosis, treatment recommendations,
              prescriptions, emergency services, or clinical decision-making</li>
            <li>The clinic is responsible for approving services, FAQs, scripts, tone, escalation rules,
              consent language, call recording disclosures, SMS consent language, and patient
              communication boundaries</li>
            <li>Avalora does not guarantee bookings, revenue, patient outcomes, response rates,
              appointment availability, or integration with every CRM, EMR, phone system, or booking
              platform</li>
            <li>Deeper integrations depend on the client&apos;s systems, permissions, API availability, vendor
              rules, and implementation scope</li>
            <li>Avalora workflows must not be used for emergency response</li>
          </ul>

          <div className={styles.contact}>
            <p>Contact: <a href="mailto:burhan@theavalora.com">burhan@theavalora.com</a></p>
          </div>
        </div>
      </div>
    </main>
  );
}

