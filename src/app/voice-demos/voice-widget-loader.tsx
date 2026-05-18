"use client";

import { useEffect } from "react";
import type { VoiceTenantDemo } from "./data";

const VOICE_APP_URL = process.env.NEXT_PUBLIC_VOICE_APP_URL || "http://localhost:3019";
const FRAME_ID = "foxes-new-voice-widget-frame";

declare global {
  interface Window {
    foxes?: (cmd: string, opts: Record<string, unknown>) => void;
  }
}

export function openVoiceDemoWidget() {
  const frame = document.getElementById(FRAME_ID) as HTMLIFrameElement | null;
  frame?.contentWindow?.postMessage({ type: "foxes:open-widget" }, VOICE_APP_URL);
}

export function VoiceWidgetLoader({ demo }: { demo: VoiceTenantDemo }) {
  useEffect(() => {
    window.foxes?.("destroy", {});
    document.querySelectorAll(".foxes-c, script[data-foxes-voice-widget]").forEach((node) => node.remove());

    return () => {
      window.foxes?.("destroy", {});
      document.querySelectorAll(".foxes-c").forEach((node) => node.remove());
    };
  }, []);

  return (
    <iframe
      id={FRAME_ID}
      key={demo.slug}
      title={`${demo.company} concierge`}
      src={`${VOICE_APP_URL}/widget-frame/${demo.slug}`}
      allow="microphone; autoplay; clipboard-write"
      className="fixed bottom-0 right-0 z-[80] h-[760px] max-h-screen w-[460px] max-w-full border-0 bg-transparent"
    />
  );
}
