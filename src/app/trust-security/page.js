import Link from 'next/link';
import styles from '../styles/Legal.module.css';
export const metadata = { title: 'Trust & Security | Avalora', description: 'Clinic control, human escalation, and the security questions to review before an Avalora implementation.' };
export default function TrustSecurity() {
  return <main id="main-content" className={styles.legalPage}><div className={styles.container}>
    <Link href="/" className={styles.backLink}>← Back to Home</Link>
    <h1 className={styles.title}>Trust &amp; Security</h1>
    <div className={styles.content}>
      <p>Avalora’s role is to support the med-spa front desk. Your clinic decides the approved information, communication boundaries, and handoff process for its workflow.</p>
      <h2>Clinic control and human judgment</h2>
      <p>Clinic-approved FAQs and escalation rules should be agreed before implementation. Avalora does not provide medical advice, diagnose, recommend treatment, determine eligibility, or replace clinical judgment.</p>
      <h2>Review before launch</h2>
      <p>Use the fit call to identify what must be confirmed for your clinic. Request the relevant documentation before proceeding with patient-data workflows.</p>
      <ul><li>What information is collected and where it is routed</li><li>Who can access recordings, transcripts, and summaries, if used</li><li>Consent, recording, retention, and deletion requirements</li><li>Required vendor documentation and agreements, including BAA coverage where applicable</li><li>When a request must reach a human and how staff receives it</li></ul>
      <h2>Claims and operating evidence</h2>
      <p>The product demo and illustrated workflow cards are examples. They are not customer results, testimonials, or proof of a completed clinic deployment. This page does not claim HIPAA compliance or SOC 2 certification, and it does not establish vendor coverage or a data retention policy.</p>
      <p>For workflow-specific security questions, contact <a href="mailto:burhan@theavalora.com">burhan@theavalora.com</a>.</p>
      <Link href="/#book-call" className="buttonBook">Book a Private Fit Call</Link>
    </div>
  </div></main>;
}
