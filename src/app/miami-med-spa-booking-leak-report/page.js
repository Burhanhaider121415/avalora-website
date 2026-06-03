import styles from './styles.module.css';

export const metadata = {
  title: 'Miami Med Spa Booking Leak Report | Avalora',
  description: 'Understand where booking intent leaks in Miami med spas — missed calls, slow callbacks, after-hours inquiries, and unfinished booking requests.',
};

export default function BookingLeakReport() {
  return (
    <main className={styles.legalPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Miami Med Spa Booking Leak Report</h1>

        <div className={styles.content}>
          <p className={styles.disclosure}>
            The full Miami Med Spa Booking Leak Report is coming soon.
          </p>

          <p>
            This report will explore where booking intent commonly leaks in Miami med spas, including:
          </p>
          <ul>
            <li>Missed calls during peak check-in hours</li>
            <li>Slow callbacks that lose high-intent patients</li>
            <li>After-hours inquiries that sit until the next business day</li>
            <li>Website form and ad lead response delays</li>
            <li>English/Spanish inquiry handling bottlenecks</li>
            <li>Unfinished booking requests that never reach the front desk</li>
          </ul>

          <p>
            Want to see how much booking opportunity your clinic may be missing?
          </p>

          <div style={{ marginTop: '2rem' }}>
            <a
              href="#"
              data-placeholder="true"
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                background: 'var(--emerald, #1B6B5A)',
                color: 'white',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.05rem',
                transition: 'all 0.3s ease',
              }}
            >
              Book a Private Fit Call
            </a>
          </div>

          <div className={styles.contact}>
            <p>Contact: <a href="mailto:burhan@theavalora.com">burhan@theavalora.com</a></p>
          </div>
        </div>
      </div>
    </main>
  );
}
