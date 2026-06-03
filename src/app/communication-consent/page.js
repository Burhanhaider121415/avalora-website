import styles from './styles.module.css';

export const metadata = {
  title: 'Communication Consent | Avalora',
  description: 'How Avalora handles communication consent for calls, SMS, and patient follow-up workflows.',
};

export default function CommunicationConsent() {
  return (
    <main className={styles.legalPage}>
      <div className={styles.container}>
        <a href='/' className={styles.backLink}>&larr; Back to Home</a>
        <h1 className={styles.title}>Communication Consent</h1>

        <div className={styles.content}>
          <p>
            Avalora may contact patients or prospective patients on behalf of a clinic to help collect
            requests, route booking intent, and support clinic-approved communication workflows.
          </p>

          <h2>Depending on the clinic&apos;s configuration, Avalora may support:</h2>
          <ul>
            <li>missed-call callbacks</li>
            <li>after-hours callbacks</li>
            <li>form lead follow-up</li>
            <li>booking request intake</li>
            <li>reschedule/cancel routing</li>
            <li>SMS workflows</li>
            <li>WhatsApp workflows where configured</li>
            <li>Instagram DM workflows where configured</li>
            <li>reminders</li>
            <li>follow-ups</li>
            <li>compliant review request workflows where approved by clinic policy</li>
          </ul>

          <p>
            Calls may be recorded, transcribed, or summarized only where enabled and disclosed
            according to the clinic&apos;s approved process.
          </p>

          <p className={styles.disclosure}>
            Suggested call disclosure: &ldquo;This is Avalora calling on behalf of [Clinic Name] to help collect your request and route
            it to the clinic team. This call may be recorded and summarized for the clinic team.&rdquo;
          </p>

          <p className={styles.disclosure}>
            Suggested SMS disclosure: &ldquo;[Clinic Name]: We&apos;re following up on your request. Reply STOP to opt out.&rdquo;
          </p>

          <p>
            Call, SMS, and follow-up workflows are configured around the clinic&apos;s consent language, opt-out
            process, and communication rules.
          </p>
          <p>
            Avalora can support call and SMS follow-up where consent and clinic communication rules
            allow.
          </p>
          <p>
            Avalora does not provide emergency services. If a caller describes a medical emergency or
            urgent symptoms, the workflow should instruct the caller to call 911 or seek urgent medical care
            and route the issue to the clinic team according to the clinic&apos;s escalation rules.
          </p>

          <div className={styles.contact}>
            <p>Contact: <a href="mailto:burhan@theavalora.com">burhan@theavalora.com</a></p>
          </div>
        </div>
      </div>
    </main>
  );
}

