'use client';

import { useEffect } from 'react';

export default function RetellManager() {
  useEffect(() => {
    // Hide Retell branding subtitle periodically since it can re-render
    const interval = setInterval(() => {
      const widget = document.querySelector('retell-widget');
      if (widget && widget.shadowRoot) {
        // Hide popup (the "Talk to Sofia" bubble if any)
        const popup = widget.shadowRoot.querySelector('.retell-popup');
        if (popup) popup.style.display = 'none';

        // Hide "Your RetellAI assistant" text
        const iter = document.createNodeIterator(widget.shadowRoot, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = iter.nextNode())) {
          if (node.nodeValue && node.nodeValue.includes('Your RetellAI assistant')) {
            if (node.parentElement) {
              node.parentElement.style.display = 'none';
            }
          }
        }
      }
    }, 500);

    const triggerRetell = () => {
      const retellWidget = document.querySelector('retell-widget');
      if (retellWidget) {
        // Try to click the inner button
        const btn = retellWidget.shadowRoot?.querySelector('button');
        if (btn) {
          btn.click();
        } else {
          retellWidget.click();
        }
      }
    };

    window.triggerRetellWidget = triggerRetell;

    // Listen for existing "Hear the Demo" buttons
    window.addEventListener('openDemoModal', triggerRetell);

    return () => {
      clearInterval(interval);
      window.removeEventListener('openDemoModal', triggerRetell);
    };
  }, []);

  return null;
}
