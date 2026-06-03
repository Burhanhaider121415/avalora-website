import styles from './styles.module.css';

export const metadata = {
  title: 'Business Associate Agreement | Avalora',
  description: 'Information about Avalora BAA-backed workflows for clinics handling protected health information.',
};

export default function BusinessAssociateAgreement() {
  return (
    <main className={styles.legalPage}>
      <div className={styles.container}>
        <a href='/' className={styles.backLink}>&larr; Back to Home</a>
        <h1 className={styles.title}>Business Associate Agreement</h1>

        <div className={styles.content}>
          <p>
            Some Avalora workflows may involve protected health information when Avalora supports a
            clinic&apos;s patient communication process.
          </p>
          <p>
            For PHI-bearing deployments, Avalora can support a Business Associate Agreement before
            those workflows go live.
          </p>

          <h2>A BAA-backed Avalora deployment is designed to define:</h2>
          <ul>
            <li>permitted uses and disclosures of PHI</li>
            <li>clinic-approved communication boundaries</li>
            <li>call recording, transcription, and summary handling</li>
            <li>staff access and handoff rules</li>
            <li>subprocessors and vendor documentation</li>
            <li>retention and deletion expectations</li>
            <li>incident and breach notification responsibilities</li>
            <li>human escalation for clinical, urgent, or sensitive questions</li>
          </ul>

          <p>
            Avalora does not treat vendor compliance alone as Avalora compliance. The full workflow, client
            agreement, vendor chain, and data handling process must be reviewed before making final
            compliance claims.
          </p>
          <p>
            During onboarding, Avalora reviews what information will be captured, where it will be stored,
            which vendors are involved, where data is routed, and what agreements are required before
            launch.
          </p>

          <div className={styles.contact}>
            <p>Contact: <a href="mailto:burhan@theavalora.com">burhan@theavalora.com</a></p>
          </div>
        </div>
      </div>
    </main>
  );
}

