"use client";

import { useEffect } from "react";

/**
 * Branded showcase storefronts on the Foxes Technology site embed the AI
 * search agent widgets directly from the agent's CDN. The widget bundles
 * (foxes-widget.js, foxes-search-widget.js, foxes-chat-modal.js,
 * foxes-chat-page.js, foxes-inline-chat.js) all live there.
 */
const WIDGET_API = "https://ai-search-agent.netlify.app";
const WIDGET_ID = "wgt_CXtars0OalnORU0z2rgcvw";

type Attrs = Record<string, string | number | boolean | undefined>;

/**
 * Inject a `<script>` for one of the foxes-* widget bundles. Idempotent —
 * if the same bundle is already on the page, we leave it alone (HMR friendly).
 *
 * `bundlePath` is the path on the agent's CDN, e.g. "/widget/foxes-widget.js".
 */
export function useWidget(bundlePath: string, attrs: Attrs = {}) {
  useEffect(() => {
    const src = bundlePath.startsWith("http")
      ? bundlePath
      : WIDGET_API + bundlePath;

    const existing = document.querySelector<HTMLScriptElement>(
      `script[data-foxes-src="${src}"]`,
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.dataset.foxesSrc = src;
    script.setAttribute("data-widget-id", WIDGET_ID);
    for (const [key, value] of Object.entries(attrs)) {
      if (value === undefined || value === null || value === false) continue;
      script.setAttribute(`data-${key}`, String(value));
    }
    document.body.appendChild(script);
    // Leave the script on the page across hot reloads to preserve widget state.
  }, [bundlePath, JSON.stringify(attrs)]); // eslint-disable-line react-hooks/exhaustive-deps
}

export { WIDGET_ID, WIDGET_API };
