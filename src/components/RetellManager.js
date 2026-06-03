'use client';

import { useEffect, useRef } from 'react';

export default function RetellManager() {
  const injectedRef = useRef(false);

  useEffect(() => {
    if (injectedRef.current) return;
    injectedRef.current = true;

    // The Retell script is already injected via layout.js as a <script id="retell-widget">
    // The widget creates <div id="retell-widget-root"> with a shadow DOM child

    // Wait for the widget to fully render, then set up trigger + hide branding
    let attempts = 0;
    const poll = setInterval(() => {
      attempts++;
      if (attempts > 120) { clearInterval(poll); return; }

      const root = document.getElementById('retell-widget-root');
      if (!root || !root.children[0]) return;

      const widgetEl = root.children[0];
      const sr = widgetEl.shadowRoot;
      if (!sr) return;

      const fabBtn = sr.querySelector('button');
      if (!fabBtn) return;

      // Widget is ready — stop polling
      clearInterval(poll);

      // ─── Hide vendor branding + customize modal text ───
      const customizeBranding = () => {
        try {
          // Hide "Your RetellAI assistant" subtitle
          const subtitle = sr.querySelector('[class*="brandSubtitle"]');
          if (subtitle) subtitle.style.display = 'none';

          // Hide "Powered by Retell"
          const powered = sr.querySelector('[class*="poweredBy"]');
          if (powered) powered.style.display = 'none';

          // Change "Start to call" button text to "Start Live Demo"
          const allBtns = sr.querySelectorAll('button');
          allBtns.forEach(btn => {
            if (btn.textContent && btn.textContent.trim().includes('Start to call')) {
              // Find the text span inside
              const spans = btn.querySelectorAll('span');
              spans.forEach(span => {
                if (span.textContent.trim() === 'Start to call') {
                  span.textContent = 'Start Live Demo';
                }
              });
              if (spans.length === 0 && btn.childNodes.length > 0) {
                btn.childNodes.forEach(node => {
                  if (node.nodeType === 3 && node.textContent.trim() === 'Start to call') {
                    node.textContent = 'Start Live Demo';
                  }
                });
              }
            }
          });
        } catch (e) { /* ignore */ }
      };

      customizeBranding();
      // Keep customizing in case the widget re-renders
      const hideInterval = setInterval(customizeBranding, 800);

      // ─── Expose global trigger function ───
      window.triggerRetellWidget = () => {
        try {
          const r = document.getElementById('retell-widget-root');
          if (!r || !r.children[0]) return;
          const s = r.children[0].shadowRoot;
          if (!s) return;
          const btn = s.querySelector('button');
          if (btn) {
            btn.click();
          }
        } catch (e) {
          console.error('Retell trigger error:', e);
        }
      };

      // Cleanup on unmount
      return () => clearInterval(hideInterval);
    }, 500);

    return () => clearInterval(poll);
  }, []);

  return null;
}
