"use client";

import { useEffect, useRef, useState } from "react";

const NUGGET_COUNT = 5;
// Nuggets start once the seam line is partly drawn, then follow it down
const FIRST_NUGGET_DELAY_MS = 300;
const NUGGET_STAGGER_MS = 180;

// Animation lifecycle, read by the .weld-seam rules in globals.css:
// - "static": server render, reduced motion, or no JS; the seam is shown finished
// - "armed": hydrated and waiting offscreen; the seam is hidden
// - "welding": in view; the seam draws and the nuggets flash, once
type WeldState = "static" | "armed" | "welding";

// The joint between the two product banners: a red seam line with a row of
// spot-weld nuggets. Desktop only, since the banners only meet from md up.
export default function WeldSeam() {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<WeldState>("static");

  useEffect(() => {
    const el = ref.current;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!el || reduceMotion) return;

    setState("armed");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setState("welding");
        observer.disconnect();
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    // Centered on the left edge of its positioned parent
    <div
      ref={ref}
      aria-hidden
      data-weld={state}
      className="weld-seam pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-3.5 -translate-x-1/2 justify-center md:flex"
    >
      <span className="weld-seam-line w-1 bg-brand" />
      <span className="absolute inset-0 flex flex-col justify-evenly">
        {Array.from({ length: NUGGET_COUNT }, (_, i) => (
          <span
            key={i}
            className="weld-nugget size-3.5 rounded-full"
            style={{
              animationDelay: `${FIRST_NUGGET_DELAY_MS + i * NUGGET_STAGGER_MS}ms`,
            }}
          />
        ))}
      </span>
    </div>
  );
}
