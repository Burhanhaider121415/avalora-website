import styles from './styles.module.css';

export const metadata = {
  title: 'HIPAA & Security | Avalora',
  description: 'Avalora supports HIPAA-aware workflows and BAA-backed deployment for controlled, clinic-approved patient communication.',
};

export default function HIPAASecurity() {
  return (
    <main className={styles.legalPage}>
      <div className={styles.container}>
        <a href='/' className={styles.backLink}>&larr; Back to Home</a>
        <h1 className={styles.title}>HIPAA &amp; Security</h1>

        <div className={styles.content}>
          <p>
            Avalora is designed for controlled, clinic-approved patient communication. Where protected
            health information is involved, Avalora supports HIPAA-aware workflows and BAA-backed
            deployment.
          </p>
          <p>
            Avalora helps clinics capture, qualify, summarize, and route patient inquiries according to the
            clinic&apos;s approved services, FAQs, communication boundaries, and escalation rules.
          </p>
          <p>
            Avalora does not provide medical advice, diagnose patients, recommend treatments, determine
            treatment eligibility, or replace clinical judgment. Clinical, urgent, sensitive, provider-specific, or
            unclear questions are routed back to the clinic team.
          </p>
          <p>
            During onboarding, Avalora reviews the clinic&apos;s communication workflow, approved FAQs, call
            recording and transcription preferences, staff handoff rules, retention needs, access
            requirements, and vendor chain.
          </p>
          <p>
            Where protected health information is involved, Avalora reviews required Business Associate
            Agreement coverage and vendor documentation before PHI-bearing workflows go live.
          </p>
          <p>
            Avalora may use trusted third-party vendors for voice infrastructure, telephony, workflow
            automation, storage, alerts, dashboards, and integrations. Vendor security documentation and
            BAA coverage are reviewed based on the workflow being deployed.
          </p>

          <h2>What Avalora does not do</h2>
          <p>Avalora does not:</p>
          <ul>
            <li>provide medical advice</li>
            <li>diagnose patients</li>
            <li>recommend treatments</li>
            <li>determine treatment eligibility</li>
            <li>replace clinical judgment</li>
            <li>replace the clinic&apos;s staff</li>
            <li>act as an emergency service</li>
            <li>make broad compliance claims without workflow and vendor review</li>
          </ul>

          <h2>Human escalation</h2>
          <p>
            If a patient asks a clinical, urgent, sensitive, provider-specific, eligibility, or unclear question,
            Avalora routes the issue back to the clinic team according to the clinic&apos;s escalation rules.
          </p>
          <p className={styles.disclosure}>
            Suggested escalation language: &ldquo;That&apos;s something the clinic team should review directly. I can collect your question and
            route it to them, but I can&apos;t provide medical advice.&rdquo;
          </p>
          <p className={styles.disclosure}>
            Emergency language: &ldquo;If this may be an emergency, please call 911 or seek urgent medical care now. I can also
            route a note to the clinic team, but this line is not an emergency service.&rdquo;
          </p>

          <div className={styles.contact}>
            <p>Contact: <a href="mailto:burhan@theavalora.com">burhan@theavalora.com</a></p>
          </div>
        </div>
      </div>
    </main>
  );
}

