'use client';

import { useEffect, useState } from 'react';

const FAB_SELECTOR = 'button[class*="fabBase"]';

export default function RetellManager() {
  const [notice, setNotice] = useState('');

  useEffect(() => {
    let poll;
    let observer;
    let pendingOpen = false;
    let attempts = 0;
    let timeout;

    const getWidget = () => {
      const root = document.getElementById('retell-widget-root');
      return { root, shadow: root?.children[0]?.shadowRoot };
    };
    const openWidget = (shadow) => {
      const button = shadow?.querySelector(FAB_SELECTOR);
      if (!button) return false;
      // A repeated invitation should leave an already-open demo open.
      if (!button.className.includes('fabOpen')) button.click();
      return true;
    };
    const customizeText = (shadow) => {
      shadow.querySelectorAll('button span').forEach((span) => {
        if (span.textContent.trim() === 'Start to call') span.textContent = 'Start Live Demo';
      });
    };
    window.triggerRetellWidget = () => {
      const { shadow } = getWidget();
      if (openWidget(shadow)) { setNotice(''); return; }
      pendingOpen = true;
      setNotice('The demo is loading…');
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        pendingOpen = false;
        setNotice('The demo could not load. Please refresh and try again, or book a private fit call.');
      }, 10000);
    };
    poll = setInterval(() => {
      const { root, shadow } = getWidget();
      attempts += 1;
      if (!shadow?.querySelector(FAB_SELECTOR)) {
        if (attempts >= 120) clearInterval(poll);
        return;
      }
      clearInterval(poll);
      const style = document.createElement('style');
      style.textContent = `
        [class*="brandSubtitle"], [class*="poweredBy"] { display: none !important; }
        button[class*="fabBase"]:not([class*="fabOpen"]):not([class*="fabActiveCall"]) { display: none !important; }
      `;
      shadow.appendChild(style);
      root.dataset.avaloraReady = 'true';
      customizeText(shadow);
      observer = new MutationObserver(() => customizeText(shadow));
      observer.observe(shadow, { childList: true, subtree: true });
      if (pendingOpen) { clearTimeout(timeout); pendingOpen = false; openWidget(shadow); setNotice(''); }
    }, 250);

    return () => {
      clearInterval(poll);
      clearTimeout(timeout);
      observer?.disconnect();
      delete window.triggerRetellWidget;
    };
  }, []);

  return notice ? <aside className="demoNotice" role="status"><p>{notice}</p><button onClick={() => setNotice('')} aria-label="Dismiss demo status">×</button></aside> : null;
}
