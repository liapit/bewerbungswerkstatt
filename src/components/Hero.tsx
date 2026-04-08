"use client";

import { useRef } from "react";
import {
  CV_STREAM_SPEED,
  CV_STREAM_SPEED_REVERSE,
  CV_STREAM_HOVER_SPEED,
} from "@/lib/constants";

// Each entry is one card in the conveyor. `highlighted` is baked in (~1 in 10).
// The entire array is duplicated at render time for the seamless loop.
const ROW_1_CARDS = [
  { hasPhoto: true,  headerLines: ["w-1/2", "w-1/3"], bodyLines: ["w-full", "w-5/6", "w-full", "w-3/4", "w-full", "w-2/3"], hasBlock: false, highlighted: false },
  { hasPhoto: false, headerLines: ["w-2/3", "w-2/5"], bodyLines: ["w-full", "w-4/5", "w-full", "w-5/6", "w-3/4"],           hasBlock: true,  highlighted: false },
  { hasPhoto: true,  headerLines: ["w-3/5", "w-1/4"], bodyLines: ["w-5/6", "w-full", "w-2/3", "w-full", "w-4/5", "w-full"], hasBlock: false, highlighted: false },
  { hasPhoto: false, headerLines: ["w-1/2", "w-1/3"], bodyLines: ["w-full", "w-3/4", "w-full", "w-5/6", "w-full"],           hasBlock: true,  highlighted: false  },
  { hasPhoto: true,  headerLines: ["w-2/5", "w-1/2"], bodyLines: ["w-full", "w-full", "w-3/4", "w-5/6", "w-full", "w-2/3"], hasBlock: false, highlighted: false },
  { hasPhoto: false, headerLines: ["w-3/4", "w-1/3"], bodyLines: ["w-4/5", "w-full", "w-full", "w-2/3", "w-5/6"],           hasBlock: true,  highlighted: false },
  { hasPhoto: true,  headerLines: ["w-1/2", "w-2/5"], bodyLines: ["w-full", "w-5/6", "w-3/4", "w-full", "w-full", "w-4/5"], hasBlock: false, highlighted: false },
  { hasPhoto: false, headerLines: ["w-2/3", "w-1/4"], bodyLines: ["w-full", "w-full", "w-5/6", "w-3/4", "w-full"],           hasBlock: true,  highlighted: false },
  { hasPhoto: true,  headerLines: ["w-3/5", "w-1/3"], bodyLines: ["w-full", "w-3/4", "w-full", "w-5/6", "w-2/3", "w-full"], hasBlock: false, highlighted: false },
  { hasPhoto: false, headerLines: ["w-1/2", "w-2/5"], bodyLines: ["w-5/6", "w-full", "w-full", "w-3/4", "w-full"],           hasBlock: true,  highlighted: false },
  { hasPhoto: true,  headerLines: ["w-2/3", "w-1/4"], bodyLines: ["w-full", "w-full", "w-2/3", "w-5/6", "w-full", "w-3/4"], hasBlock: false, highlighted: false },
  { hasPhoto: false, headerLines: ["w-3/4", "w-1/3"], bodyLines: ["w-full", "w-4/5", "w-full", "w-2/3", "w-5/6"],           hasBlock: true,  highlighted: false },
  { hasPhoto: true,  headerLines: ["w-1/2", "w-1/3"], bodyLines: ["w-5/6", "w-full", "w-3/4", "w-full", "w-full", "w-2/3"], hasBlock: false, highlighted: false },
  { hasPhoto: false, headerLines: ["w-2/5", "w-1/2"], bodyLines: ["w-full", "w-5/6", "w-full", "w-3/4", "w-full"],           hasBlock: true,  highlighted: true  },
  { hasPhoto: true,  headerLines: ["w-3/5", "w-2/5"], bodyLines: ["w-full", "w-2/3", "w-5/6", "w-full", "w-3/4", "w-full"], hasBlock: false, highlighted: false },
  { hasPhoto: false, headerLines: ["w-2/3", "w-1/3"], bodyLines: ["w-full", "w-full", "w-3/4", "w-5/6", "w-full"],           hasBlock: true,  highlighted: false },
];

const ROW_2_CARDS = [
  { hasPhoto: false, headerLines: ["w-2/3", "w-2/5"], bodyLines: ["w-full", "w-4/5", "w-full", "w-5/6", "w-3/4"],           hasBlock: true,  highlighted: false },
  { hasPhoto: true,  headerLines: ["w-1/2", "w-1/3"], bodyLines: ["w-full", "w-5/6", "w-full", "w-3/4", "w-full", "w-2/3"], hasBlock: false, highlighted: false},
  { hasPhoto: false, headerLines: ["w-3/4", "w-1/3"], bodyLines: ["w-4/5", "w-full", "w-full", "w-2/3", "w-5/6"],           hasBlock: true,  highlighted: false },
  { hasPhoto: true,  headerLines: ["w-3/5", "w-1/4"], bodyLines: ["w-5/6", "w-full", "w-2/3", "w-full", "w-4/5", "w-full"], hasBlock: false, highlighted: false },
  { hasPhoto: false, headerLines: ["w-1/2", "w-1/3"], bodyLines: ["w-full", "w-3/4", "w-full", "w-5/6", "w-full"],           hasBlock: true,  highlighted: false },
  { hasPhoto: true,  headerLines: ["w-2/5", "w-1/2"], bodyLines: ["w-full", "w-full", "w-3/4", "w-5/6", "w-full", "w-2/3"], hasBlock: false, highlighted: false },
  { hasPhoto: false, headerLines: ["w-2/3", "w-1/4"], bodyLines: ["w-full", "w-full", "w-5/6", "w-3/4", "w-full"],           hasBlock: true,  highlighted: false  },
  { hasPhoto: true,  headerLines: ["w-1/2", "w-2/5"], bodyLines: ["w-full", "w-5/6", "w-3/4", "w-full", "w-full", "w-4/5"], hasBlock: false, highlighted: false },
  { hasPhoto: false, headerLines: ["w-3/5", "w-1/3"], bodyLines: ["w-full", "w-3/4", "w-full", "w-2/3", "w-5/6"],           hasBlock: true,  highlighted: false },
  { hasPhoto: true,  headerLines: ["w-2/3", "w-1/4"], bodyLines: ["w-full", "w-full", "w-2/3", "w-5/6", "w-full", "w-3/4"], hasBlock: false, highlighted: false },
  { hasPhoto: false, headerLines: ["w-1/2", "w-2/5"], bodyLines: ["w-5/6", "w-full", "w-full", "w-3/4", "w-full"],           hasBlock: true,  highlighted: false },
  { hasPhoto: true,  headerLines: ["w-3/4", "w-1/3"], bodyLines: ["w-full", "w-4/5", "w-full", "w-2/3", "w-5/6", "w-full"], hasBlock: false, highlighted: false },
  { hasPhoto: false, headerLines: ["w-2/5", "w-1/2"], bodyLines: ["w-full", "w-5/6", "w-full", "w-3/4", "w-full"],           hasBlock: true,  highlighted: true },
  { hasPhoto: true,  headerLines: ["w-1/2", "w-1/3"], bodyLines: ["w-5/6", "w-full", "w-3/4", "w-full", "w-full", "w-2/3"], hasBlock: false, highlighted: false },
  { hasPhoto: false, headerLines: ["w-3/5", "w-2/5"], bodyLines: ["w-full", "w-full", "w-3/4", "w-5/6", "w-full"],           hasBlock: true,  highlighted: false },
  { hasPhoto: true,  headerLines: ["w-2/3", "w-1/3"], bodyLines: ["w-full", "w-2/3", "w-5/6", "w-full", "w-3/4", "w-full"], hasBlock: false, highlighted: false  },
];

type CardData = (typeof ROW_1_CARDS)[number];

const CvCard = ({ card }: { card: CardData }) => {
  const { highlighted, hasPhoto, headerLines, bodyLines, hasBlock } = card;
  const line = highlighted ? "bg-accent/40" : "bg-white/10";
  const lineBold = highlighted ? "bg-accent/50" : "bg-white/15";
  const sep = highlighted ? "bg-accent/25" : "bg-white/8";
  const block = highlighted ? "bg-accent/30" : "bg-white/8";

  return (
    <div
      className={`flex-shrink-0 w-20 sm:w-24 ml-3 aspect-[3/4] rounded-sm p-2 sm:p-3 flex flex-col gap-1.5 overflow-hidden transition-none ${
        highlighted
          ? "border-2 border-accent bg-accent/10 shadow-lg shadow-accent/20 scale-105"
          : "border border-white/15 bg-white/[0.03]"
      }`}
    >
      <div className={`flex gap-1.5 items-start ${hasPhoto ? "" : "flex-col"}`}>
        {hasPhoto && (
          <div className={`flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full ${highlighted ? "bg-accent/30" : "bg-white/10"}`} />
        )}
        <div className={`space-y-1 ${hasPhoto ? "flex-1 pt-0.5" : "w-full"}`}>
          {headerLines.map((w, i) => (
            <div key={i} className={`h-[2px] rounded-full ${w} ${lineBold}`} />
          ))}
        </div>
      </div>

      <div className={`h-px w-full ${sep}`} />

      <div className="space-y-1 flex-1">
        {bodyLines.map((w, i) => (
          <div key={i} className={`h-[2px] rounded-full ${w} ${line}`} />
        ))}
      </div>

      {hasBlock && (
        <div className="flex gap-0.5 mt-auto">
          <div className={`h-1.5 w-1/3 rounded-sm ${block}`} />
          <div className={`h-1.5 w-1/4 rounded-sm ${highlighted ? "bg-accent/25" : "bg-white/6"}`} />
          <div className={`h-1.5 w-1/5 rounded-sm ${block}`} />
        </div>
      )}
    </div>
  );
};

const CvStream = ({ cards, reverse }: { cards: CardData[]; reverse?: boolean }) => {
  const stripRef = useRef<HTMLDivElement>(null);

  const setSpeed = (rate: number) => {
    const el = stripRef.current;
    if (!el) return;
    for (const a of el.getAnimations()) a.playbackRate = rate;
  };

  return (
    <div
      className="cv-stream-track"
      onMouseEnter={() => setSpeed(CV_STREAM_HOVER_SPEED)}
      onMouseLeave={() => setSpeed(1)}
    >
      <div
        ref={stripRef}
        className={`flex ${reverse ? "animate-cv-stream-reverse" : "animate-cv-stream"} py-2`}
      >
        {/* First set */}
        {cards.map((card, i) => (
          <CvCard key={i} card={card} />
        ))}
        {/* Identical duplicate for seamless loop */}
        {cards.map((card, i) => (
          <CvCard key={`d-${i}`} card={card} />
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-hero text-hero-foreground">
      <div className="pt-28 pb-6 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <span className="hero-animate inline-block text-sm font-medium tracking-widest uppercase text-accent mb-6" style={{ animationDelay: "0.1s" }}>
            Für Professionals in Tech, Finance & Back Office
          </span>

          <h1 className="hero-animate text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6" style={{ animationDelay: "0.2s" }}>
            Heben Sie sich ab
            <br />
            <span className="text-accent">von der KI-generierten Masse</span>
          </h1>

          <p className="hero-animate text-lg lg:text-xl text-hero-foreground/70 max-w-2xl mx-auto mb-0 leading-relaxed" style={{ animationDelay: "0.4s" }}>
            Wir helfen Ihnen, Ihren besten Lebenslauf zu schreiben — authentisch,
            überzeugend und menschlich. Keine generischen Phrasen, sondern echte Worte,
            die Recruiter überzeugen.
          </p>
        </div>

        {/* Full-width CV streams */}
        <div className="hero-animate-scale mt-10" style={{ animationDelay: "0.6s" }}>
          <div
            className="cv-stream-container relative"
            style={{
              "--cv-stream-speed": `${CV_STREAM_SPEED}s`,
              "--cv-stream-speed-reverse": `${CV_STREAM_SPEED_REVERSE}s`,
            } as React.CSSProperties}
          >
            <CvStream cards={ROW_1_CARDS} reverse />
            <div className="h-3" />
            <CvStream cards={ROW_2_CARDS} />
          </div>
          <p className="text-sm text-hero-foreground/30 mt-4">
            Hunderte Bewerbungen. Fast alle identisch. Welche sticht heraus?
          </p>
        </div>
      </div>

      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
    </section>
  );
};

export default Hero;
