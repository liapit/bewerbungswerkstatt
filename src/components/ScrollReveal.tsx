"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
  threshold?: number;
  rootMargin?: string;
  direction?: "up" | "left" | "right";
}

export function ScrollReveal({
  children,
  className,
  delay,
  threshold,
  rootMargin,
  direction = "up",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold, rootMargin });

  const directionClass = {
    up: "translate-y-3 sm:translate-y-4",
    left: "-translate-x-4 sm:-translate-x-6",
    right: "translate-x-4 sm:translate-x-6",
  }[direction];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out",
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${directionClass}`,
        delay,
        className
      )}
    >
      {children}
    </div>
  );
}
