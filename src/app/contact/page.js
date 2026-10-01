import Link from 'next/link';
import styles from './contact.module.css';

export const metadata = {
  title: 'Contact Avalora | Miami Med Spa Lead Recovery',
  description:
    'For clinic inquiries, partnerships, or security questions. Book a private fit call or email us directly.',
};

export default function ContactPage() {
  return (
    <main id="main-content" className={styles.main}>
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Contact</p>
          <h1 className={styles.headline}>
            For clinic inquiries, partnerships, or security questions.
          </h1>
          <p className={styles.body}>
            If you are a Miami med spa owner or operator and want to understand
            whether Avalora fits your call flow, booking process, or bilingual
            patient communication needs, you can book a private fit call or
            email us directly.
          </p>

          <div className={styles.actions}>
            <Link href="/#book-call" className="buttonBook">
              Book a Private Fit Call
            </Link>
            <a
              href="mailto:burhan@theavalora.com"
              className={styles.emailLink}
            >
              burhan@theavalora.com
            </a>
          </div>

          <p className={styles.note}>
            For privacy, compliance, vendor documentation, or partnership
            questions, email us directly and include your clinic name.
          </p>
        </div>
      </section>
    </main>
  );
}
