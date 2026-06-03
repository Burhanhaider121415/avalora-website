'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './styles/DemoSection.module.css';

/* ─── Animation variants ─── */
const ease = [0.25, 0.1, 0.25, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease, delay },
});

export default function DemoSection() {
  return (
    <section className={styles.section} id="demo">
      <div className={styles.container}>
        {/* Eyebrow */}
        <motion.span className={styles.eyebrow} {...fadeUp(0)}>
          Product Experience
        </motion.span>

        {/* Heading */}
        <motion.h2 className={styles.heading} {...fadeUp(0.1)}>
          Hear how Avalora handles a real med spa inquiry.
        </motion.h2>

        {/* Subtext */}
        <motion.p className={styles.subtext} {...fadeUp(0.2)}>
          Listen to a calm, clinic-approved intake flow for a high-intent
          after-hours Botox or filler inquiry in English or Spanish.
        </motion.p>

        {/* Luxury Receptionist & Button Overlay */}
        <motion.div
          className={styles.demoPreview}
          {...fadeUp(0.3)}
        >
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/medspa-reception.png" 
              alt="Luxury Med Spa Reception" 
              fill
              className={styles.receptionImage}
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.overlay}>
              <button
                className={styles.talkButton}
                onClick={() => {
                  if (window.triggerRetellWidget) window.triggerRetellWidget();
                }}
                type="button"
              >
                <div className={styles.playIcon} />
                Hear Demo
              </button>
              <p className={styles.overlayNote}>
                Sofia can respond in English or Spanish.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
