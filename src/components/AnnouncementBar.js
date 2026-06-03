import styles from './styles/AnnouncementBar.module.css';

export default function AnnouncementBar() {
  return (
    <div className={styles.bar} role="banner" aria-label="Announcement">
      <div className={styles.inner}>
        <p className={styles.message}>
          Miami med spas: recover missed calls, after-hours inquiries, and booking requests before patients go cold.
        </p>
        <a href="#demo" className={styles.cta}>
          Hear the Demo
          <span className={styles.arrow} aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
