import Image from 'next/image';
import styles from './styles/FounderNote.module.css';

export default function FounderNote() {
  return (
    <section id="founder" className={styles.section} aria-labelledby="founder-heading">
      <div className={styles.container}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>The person behind the implementation</p>
          <h2 id="founder-heading">A quick note from Burhan</h2>
          <div className={styles.founderIdentity}>
            <Image src="/images/burhan-haider.jpeg" alt="Burhan Haider, founder of Avalora" width={88} height={88} className={styles.portrait} />
            <p className={styles.identity}><strong>Burhan Haider</strong><br />Founder, Avalora</p>
          </div>
          <p>Avalora is built for med spas that need a clearer path from inquiry to staff follow-up. It supports your clinic team, with clinic-approved information and human escalation where judgment matters.</p>
          <p>The private fit call is a conversation about your workflow, your boundaries, and whether Avalora fits.</p>
        </div>
        <div className={styles.videoSpace} aria-label="Founder video space; video not yet available">
          <span className={styles.videoLabel}>A personal introduction</span>
          <p>Founder video coming soon</p>
          <span className={styles.duration}>45–60 seconds · Burhan Haider</span>
        </div>
      </div>
    </section>
  );
}
