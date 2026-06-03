'use client';

import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — Lightweight scroll-triggered reveal animations.
 *
 * Adds `.visible` class to elements with `[data-reveal]` attribute
 * when they enter the viewport. Supports staggered delays via
 * `data-reveal-delay="200"` (ms). One-time animation — disconnects
 * after reveal.
 *
 * Usage:
 *   const sectionRef = useScrollReveal();
 *   <section ref={sectionRef}>
 *     <div data-reveal>Fades in on scroll</div>
 *     <div data-reveal data-reveal-delay="200">Fades in with delay</div>
 *   </section>
 */
export default function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const {
      threshold = 0.12,
      rootMargin = '0px 0px -40px 0px',
    } = options;

    const elements = container.querySelectorAll('[data-reveal]');

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = parseInt(el.dataset.revealDelay || '0', 10);

            if (delay > 0) {
              setTimeout(() => {
                el.classList.add('revealed');
              }, delay);
            } else {
              el.classList.add('revealed');
            }

            observer.unobserve(el);
          }
        });
      },
      { threshold, rootMargin }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [options]);

  return ref;
}
