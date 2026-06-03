'use client';

import { useEffect, useRef } from 'react';

export default function RetellManager() {
  const injectedRef = useRef(false);

  useEffect(() => {
    if (injectedRef.current) return;
    injectedRef.current = true;

    // Create the Retell widget script element with all required data attributes
    const script = document.createElement('script');
    script.id = 'retell-widget';
    script.src = 'https://dashboard.retellai.com/retell-widget-v2.js';
    script.type = 'module';
    script.setAttribute('data-voice-public-key', 'public_key_f0c21d7fc2a86f6165b2a');
    script.setAttribute('data-voice-agent-id', 'agent_4ede89fd9d32176954f8b51052');
    script.setAttribute('data-title', 'Talk to Avalora');
    script.setAttribute('data-fab-text', 'Talk to Sofia');
    script.setAttribute('data-color', '#123C34');
    script.setAttribute('data-show-ai-popup', 'false');
    script.setAttribute('data-auto-open', 'false');
    document.body.appendChild(script);

    // Wait for the custom element to register, then set up trigger
    const setupWidget = () => {
      const widget = document.querySelector('retell-widget');
      if (widget && widget.shadowRoot) {
        // Hide "Your RetellAI assistant" subtitle text
        const hideSubtitle = () => {
          try {
            const iter = document.createNodeIterator(
              widget.shadowRoot,
              NodeFilter.SHOW_TEXT
            );
            let node;
            while ((node = iter.nextNode())) {
              if (
                node.nodeValue &&
                node.nodeValue.includes('Your RetellAI assistant')
              ) {
                if (node.parentElement) {
                  node.parentElement.style.display = 'none';
                }
              }
            }
          } catch (e) {
            // ignore
          }
        };
        hideSubtitle();
        // Keep hiding it in case it re-renders
        const hideInterval = setInterval(hideSubtitle, 1000);

        // Create trigger function
        window.triggerRetellWidget = () => {
          try {
            const w = document.querySelector('retell-widget');
            if (w && w.shadowRoot) {
              const btn = w.shadowRoot.querySelector('button');
              if (btn) {
                btn.click();
                return;
              }
            }
            // Fallback — try clicking the widget itself
            if (w) w.click();
          } catch (e) {
            console.error('Retell trigger error:', e);
          }
        };

        return () => clearInterval(hideInterval);
      }
    };

    // Poll until widget is ready (Retell loads async)
    let attempts = 0;
    const poll = setInterval(() => {
      attempts++;
      const cleanup = setupWidget();
      if (cleanup || attempts > 60) {
        clearInterval(poll);
      }
    }, 500);

    return () => {
      clearInterval(poll);
    };
  }, []);

  return null;
}
