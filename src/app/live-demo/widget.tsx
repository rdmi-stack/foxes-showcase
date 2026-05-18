"use client";

import { useEffect } from "react";

// This is the EXACT integration a real customer site would do.
// They paste a snippet that injects /widget.js and calls foxes("init", {...}).
// We do the same here in a client component.

const WIDGET_ID = "69a6db203d7b0fedf3d8b5c7";  // "Showcase Widget" → Emma agent
const BACKEND_URL = "http://localhost:5050";

declare global {
  interface Window {
    foxes?: (cmd: string, opts: Record<string, unknown>) => void;
    __foxesWidgetReady?: boolean;
  }
}

export function LiveDemoWidget() {
  useEffect(() => {
    if (window.__foxesWidgetReady) return;
    window.__foxesWidgetReady = true;

    // Inject the loader exactly the way a customer site does.
    const script = document.createElement("script");
    script.src = `${BACKEND_URL}/widget.js`;
    script.async = true;
    script.dataset.foxesWidget = "live-demo";
    document.body.appendChild(script);

    script.onload = () => {
      // The loader exposes window.foxes — wait for it then init with the widgetId.
      const tryInit = (attempts = 0) => {
        if (typeof window.foxes === "function") {
          window.foxes("init", {
            widgetId: WIDGET_ID,
            baseUrl: BACKEND_URL,
          });
          // Tag the page so the verification script can detect successful init.
          (window as unknown as { __foxesInitialized?: boolean }).__foxesInitialized = true;
        } else if (attempts < 25) {
          setTimeout(() => tryInit(attempts + 1), 200);
        } else {
          console.error("[LiveDemo] window.foxes never appeared — widget loader may have failed");
        }
      };
      tryInit();
    };

    script.onerror = () => {
      console.error("[LiveDemo] Failed to load widget.js from", script.src);
    };
  }, []);

  return null;
}
