"use client";

import { useEffect, useState } from "react";

export default function DigitalClock() {
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const time = now.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const date = now.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mt-4 flex items-center justify-center gap-3 rounded-xl border border-black/5 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 px-4 py-3 shadow-sm">
      <span className="inline-flex h-3 w-3 rounded-full bg-emerald-500 animate-pulse" aria-hidden />
      <div className="leading-tight">
        <div className="font-mono text-xl tracking-widest">{time}</div>
        <div className="text-xs text-gray-600 dark:text-gray-300">{date}</div>
      </div>
    </div>
  );
}
