import { useEffect, useRef, useState } from "react";

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function useCountUp(
  target: number,
  isActive: boolean,
  duration = 1500,
  suffix = ""
) {
  const [display, setDisplay] = useState("0");
  const hasRun = useRef(false);

  useEffect(() => {
    if (!isActive || hasRun.current) return;
    hasRun.current = true;

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(`${target}${suffix}`);
      return;
    }

    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOut(progress);
      const current = Math.round(eased * target);

      if (progress < 1) {
        setDisplay(String(current));
        requestAnimationFrame(tick);
      } else {
        setDisplay(`${target}${suffix}`);
      }
    }

    requestAnimationFrame(tick);
  }, [isActive, target, duration, suffix]);

  return display;
}
