import Link from 'next/link';
import styles from './styles.module.css';
export const metadata = { title: 'Insights | Avalora', description: 'The future home of Avalora insights on Miami med spa front desk operations, inquiry recovery, and bilingual communication.' };
export default function Insights() {
  return <main id="main-content" className={styles.page}>
    <div className={styles.container}>
      <Link href="/" className={styles.back}>← Back to Avalora</Link>
      <p className={styles.eyebrow}>Perspectives on clinic operations</p>
      <h1>Insights</h1>
      <p className={styles.intro}>A considered look at the moments between patient interest and front desk follow-up.</p>
      <section className={styles.editorial} aria-labelledby="brief-heading">
        <span className={styles.label}>Coming soon</span>
        <h2 id="brief-heading">Miami Med Spa Ops Brief</h2>
        <p>The future home of practical notes on inquiry recovery, English/Spanish communication, and the workflows that support your clinic team.</p>
        <p className={styles.note}>Articles will appear here when published.</p>
      </section>
      <div className={styles.actions}><Link className="buttonDemo" href="/#how-it-works">Explore How It Works</Link><Link className="buttonBook" href="/#book-call">Book a Private Fit Call</Link></div>
    </div>
  </main>;
}
