'use client';

import { useEffect, useMemo, useState } from 'react';

interface Props {
  text: string | string[];
  className?: string;
  typingSpeed?: number; // ms per character
  pauseBetween?: number; // ms pause between strings
  loop?: boolean;
}

export default function HeroTypewriter({
  text,
  className,
  typingSpeed = 40,
  pauseBetween = 1200,
  loop = true,
}: Props) {
  const strings = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);
  const [idx, setIdx] = useState(0);
  const [len, setLen] = useState(0);

  useEffect(() => {
    let mounted = true;
    const current = strings[idx] ?? '';

    // Type characters one-by-one
    if (len < current.length) {
      const t = setTimeout(() => mounted && setLen((l) => l + 1), typingSpeed);
      return () => clearTimeout(t);
    }

    // Finished this string
    const t = setTimeout(() => {
      if (!mounted) return;
      const next = idx + 1;
      if (next < strings.length) {
        setIdx(next);
        setLen(0);
      } else if (loop) {
        setIdx(0);
        setLen(0);
      }
    }, pauseBetween);

    return () => {
      mounted = false;
      clearTimeout(t);
    };
  }, [idx, len, strings, typingSpeed, pauseBetween, loop]);

  const displayed = (strings[idx] ?? '').slice(0, len);

  return (
    <p className={className}>
      {displayed}
      <span className="ml-1 opacity-60 animate-pulse">|</span>
    </p>
  );
}
