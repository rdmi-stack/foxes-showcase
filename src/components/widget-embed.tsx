"use client";

import { useEffect } from "react";

const WIDGET_ID = "69a6db203d7b0fedf3d8b5c7";
const BACKEND_URL = "http://localhost:5050";

export function WidgetEmbed() {
  useEffect(() => {
    // Check if script already loaded
    if (document.querySelector('script[data-foxes-widget]')) return;

    const script = document.createElement("script");
    script.src = `${BACKEND_URL}/widget.js`;
    script.async = true;
    script.setAttribute("data-foxes-widget", "true");
    document.body.appendChild(script);

    script.onload = () => {
      // The widget script defines window.foxes — wait for it
      const tryInit = (attempts = 0) => {
        if ((window as any).foxes) {
          (window as any).foxes("init", {
            widgetId: WIDGET_ID,
            baseUrl: BACKEND_URL,
          });
        } else if (attempts < 20) {
          setTimeout(() => tryInit(attempts + 1), 200);
        }
      };
      tryInit();
    };

    return () => {
      // Cleanup on unmount
      const el = document.querySelector('script[data-foxes-widget]');
      if (el) el.remove();
    };
  }, []);

  return null;
}
