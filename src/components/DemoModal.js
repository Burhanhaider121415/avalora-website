'use client';

import { useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles/DemoModal.module.css';

/* ── Animation variants ── */
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    y: 40,
    scale: 0.97,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.25 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/* ── Waveform bar heights (26 bars) ── */
const BAR_COUNT = 26;
const barHeights = [
  18, 30, 45, 60, 38, 72, 55, 28, 65, 42,
  50, 70, 35, 58, 22, 48, 68, 40, 56, 32,
  62, 44, 75, 36, 52, 26,
];

export default function DemoModal({ isOpen, onClose }) {
  const modalRef = useRef(null);

  /* ── Escape key handler ── */
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  /* ── Focus trap ── */
  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    document.body.classList.add('demo-open');

    // Focus the modal on open
    const timer = setTimeout(() => {
      modalRef.current?.focus();
    }, 100);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.body.classList.remove('demo-open');
      clearTimeout(timer);
    };
  }, [isOpen, handleKeyDown]);

  /* ── Trap focus inside modal ── */
  const handleTabTrap = useCallback((e) => {
    if (e.key !== 'Tab') return;
    const modal = modalRef.current;
    if (!modal) return;

    const focusable = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener('keydown', handleTabTrap);
    return () => document.removeEventListener('keydown', handleTabTrap);
  }, [isOpen, handleTabTrap]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.backdrop}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.35 }}
          onClick={onClose}
          aria-modal="true"
          role="dialog"
          aria-label="Avalora demo modal"
        >
          {/* ── Modal Card ── */}
          <motion.div
            className={styles.modal}
            ref={modalRef}
            tabIndex={-1}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleTabTrap}
          >
            {/* Close button */}
            <button
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close demo modal"
            >
              ✕
            </button>

            {/* Stagger container for content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* ── Header ── */}
              <motion.div className={styles.header} variants={fadeUp}>
                <h2 className={styles.title}>
                  Talk to Avalora
                </h2>
                <p className={styles.subtitle}>
                  Try a simulated med spa inquiry with Sofia.
                </p>
              </motion.div>

              {/* ── Waveform + Play ── */}
              <motion.div className={styles.waveSection} variants={fadeUp}>
                <div className={styles.waveContainer}>
                  {barHeights.slice(0, BAR_COUNT).map((h, i) => (
                    <motion.div
                      key={i}
                      className={styles.waveBar}
                      initial={{ height: 6 }}
                      animate={{
                        height: [6, h, h * 0.5, h * 0.85, 6],
                      }}
                      transition={{
                        duration: 2.2,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        delay: i * 0.08,
                      }}
                    />
                  ))}
                </div>

                <button 
                  className={styles.talkBtn} 
                  onClick={() => {
                    const retellWidget = document.querySelector('retell-widget');
                    if (retellWidget && retellWidget.shadowRoot) {
                      const btn = retellWidget.shadowRoot.querySelector('button');
                      if (btn) btn.click();
                      else retellWidget.click();
                    } else if (retellWidget) {
                      retellWidget.click();
                    }
                  }}
                  aria-label="Talk to Sofia"
                >
                  Talk to Sofia
                </button>
              </motion.div>

              {/* ── Divider ── */}
              <motion.hr className={styles.divider} variants={fadeUp} />

              {/* ── Simulated Scenario Card ── */}
              <motion.div className={styles.glassCard} variants={fadeUp}>
                <p className={styles.scenarioTitle}>Simulated Scenario</p>
                <div className={styles.scenarioRows}>
                  <div className={styles.scenarioRow}>
                    <span className={styles.scenarioLabel}>Patient</span>
                    <span>New patient asking about filler availability</span>
                  </div>
                  <div className={styles.scenarioRow}>
                    <span className={styles.scenarioLabel}>Language</span>
                    <span>Spanish intake completed</span>
                  </div>
                  <div className={styles.scenarioRow}>
                    <span className={styles.scenarioLabel}>Time</span>
                    <span>Prefers Friday after 4 PM</span>
                  </div>
                  <div className={styles.scenarioRow}>
                    <span className={styles.scenarioLabel}>Status</span>
                    <span className={styles.statusBadge}>
                      <span className={styles.statusDot} />
                      Ready for staff review
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* ── Staff Handoff Card ── */}
              <motion.div className={styles.glassCard} variants={fadeUp}>
                <div className={styles.handoffHeader}>
                  <h3 className={styles.handoffTitle}>Staff Handoff</h3>
                  <span className={styles.handoffArrow}>→</span>
                </div>
                <p className={styles.handoffBody}>
                  Patient is interested in Botox/filler consultation this week.
                  New patient. Prefers tomorrow afternoon. Please review
                  availability and call back.
                </p>
              </motion.div>

              {/* ── Footer Notes ── */}
              <motion.div className={styles.footerNotes} variants={fadeUp}>
                <p className={styles.disclaimer}>
                  Demo scenarios are simulated and do not provide medical advice.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
