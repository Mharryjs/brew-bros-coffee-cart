import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { BREW_BROS_LOGO } from "../assets/logo";
import { BRAND_INFO } from "../data/brewBrosData";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counter = { val: 0 };
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".pre-logo-circle",
        { scale: 0.5, opacity: 0, rotateY: -60 },
        { scale: 1, opacity: 1, rotateY: 0, duration: 1.1, ease: "back.out(1.5)" },
        0.1
      )
        .fromTo(
          ".pre-title",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          0.3
        )
        .fromTo(
          ".pre-tagline",
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          0.5
        )
        .to(
          counter,
          {
            val: 100,
            duration: 1.4,
            ease: "power2.inOut",
            onUpdate: () => setPercent(Math.round(counter.val)),
          },
          0.3
        )
        .fromTo(
          ".pre-progress-line",
          { scaleX: 0 },
          { scaleX: 1, duration: 1.4, ease: "power2.inOut" },
          0.3
        )
        .to(
          ".pre-content-fade",
          { y: -30, opacity: 0, duration: 0.45, ease: "power2.in" },
          "+=0.1"
        )
        .to(
          root.current,
          { yPercent: -100, duration: 0.85, ease: "power4.inOut" },
          "-=0.1"
        )
        .add(() => onDone(), "-=0.3");
    }, root);

    return () => ctx.revert();
  }, [onDone]);

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-roast-950 text-cream select-none overflow-hidden"
    >
      {/* Background warm glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gold/10 blur-[130px] pointer-events-none" />

      <div className="pre-content-fade relative z-10 flex flex-col items-center text-center px-4">
        {/* Logo Emblem */}
        <div className="pre-logo-circle relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-2 bg-roast-900 border-2 border-gold shadow-[0_0_40px_rgba(197,154,88,0.35)] mb-6">
          <img
            src={BREW_BROS_LOGO}
            alt="Brew Bros"
            className="w-full h-full object-contain rounded-full"
          />
        </div>

        <h2 className="pre-title font-display text-3xl sm:text-4xl font-bold tracking-widest text-cream uppercase">
          BREW <span className="gold-gradient-text italic font-normal">BROS</span>
        </h2>

        <p className="pre-tagline text-xs uppercase tracking-[0.25em] text-gold-light mt-2 font-semibold">
          {BRAND_INFO.heroSubtitle}
        </p>
        <p className="text-[11px] text-sand mt-1">
          📍 {BRAND_INFO.location}
        </p>

        {/* Progress bar */}
        <div className="mt-8 w-56 sm:w-72 h-[2px] bg-gold/15 rounded-full overflow-hidden">
          <div className="pre-progress-line w-full h-full bg-gradient-to-r from-gold via-gold-light to-caramel origin-left" />
        </div>

        <div className="mt-4 font-display text-2xl font-bold text-gold-light">
          {percent}%
        </div>
      </div>
    </div>
  );
}
