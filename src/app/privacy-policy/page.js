import styles from './styles.module.css';

export const metadata = {
  title: 'Privacy Policy | Avalora',
  description: 'Avalora Privacy Policy — how we handle website visitor data, business contact data, clinic client data, and patient inquiry data.',
};

export default function PrivacyPolicy() {
  return (
    <main className={styles.legalPage}>
      <div className={styles.container}>
        <a href='/' className={styles.backLink}>&larr; Back to Home</a>
        <h1 className={styles.title}>Privacy Policy</h1>

        <div className={styles.content}>
          <p className={styles.disclosure}>
            The full Privacy Policy is being finalized by the Avalora legal and compliance team.
            This page will be updated with complete legal copy before launch.
          </p>

          <h2>Scope</h2>
          <p>
            This Privacy Policy will cover how Avalora collects, uses, shares, and protects information
            across its services, including:
          </p>
          <ul>
            <li>Who Avalora is</li>
            <li>Website visitor data</li>
            <li>Business contact data</li>
            <li>Clinic client data</li>
            <li>Patient/caller inquiry data</li>
            <li>Call recordings, transcripts, and summaries</li>
            <li>SMS, email, WhatsApp, and DM data</li>
            <li>Website forms and lead forms</li>
            <li>PHI handling where applicable</li>
            <li>How Avalora uses information</li>
            <li>How Avalora shares information</li>
            <li>Vendors/subprocessors</li>
            <li>Cookies, analytics, and tracking</li>
            <li>Data retention and deletion</li>
            <li>Security measures</li>
          </ul>

          <p className={styles.disclosure}>
            Where Avalora processes protected health information on behalf of a clinic, Avalora does
            so under the applicable agreement with that clinic, including a Business Associate
            Agreement where required. Avalora does not use PHI for advertising or unrelated
            marketing purposes.
          </p>

          <div className={styles.contact}>
            <p>Contact: <a href="mailto:burhan@theavalora.com">burhan@theavalora.com</a></p>
          </div>
        </div>
      </div>
    </main>
  );
}

