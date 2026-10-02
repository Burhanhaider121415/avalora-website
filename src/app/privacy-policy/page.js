import Link from 'next/link';
import styles from './styles.module.css';

export const metadata = {
  title: 'Privacy Policy | Avalora',
  description: 'Avalora Privacy Policy — how we handle website visitor data, business contact data, clinic client data, and patient inquiry data.',
};

export default function PrivacyPolicy() {
  return (
    <main id="main-content" className={styles.legalPage}>
      <div className={styles.container}>
        <Link href='/' className={styles.backLink}>&larr; Back to Home</Link>
        <h1 className={styles.title}>Privacy Policy</h1>

        <div className={styles.content}>
          <p className={styles.disclosure}>
            This is a preliminary policy outline, not a finalized Privacy Policy.
            Contact Avalora for current information about data handling before sharing sensitive information.
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
            Before any workflow involving protected health information is considered, the clinic should
            confirm applicable agreements, vendor coverage, permitted uses, access, retention, and
            deletion requirements. This outline does not establish those arrangements or policies.
          </p>

          <div className={styles.contact}>
            <p>Contact: <a href="mailto:burhan@theavalora.com">burhan@theavalora.com</a></p>
          </div>
        </div>
      </div>
    </main>
  );
}

