import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
  Award,
  ChevronDown,
} from "lucide-react";
import { BRAND_INFO } from "../data/brewBrosData";
import { BREW_BROS_LOGO } from "../assets/logo";
import { InstagramIcon } from "./SocialIcons";
import { useTilt } from "../hooks/useTilt";

gsap.registerPlugin(ScrollTrigger);

// Ultra-crisp cinematic commercial espresso extraction with golden crema & steam
const HERO_VIDEO = "https://videos.pexels.com/video-files/37156056/15740682_3840_2160_50fps.mp4";
const HERO_POSTER = "https://images.pexels.com/videos/37156056/arabic-coffee-cafe-vibes-coffe-mug-coffee-accessories-37156056.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920";

interface HeroProps {
  onNavigate: (page: string) => void;
  active: boolean;
}

export default function Hero({ onNavigate, active }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const badgeCardRef = useTilt<HTMLDivElement>(12, 1.03);
  const logoHeroRef = useTilt<HTMLDivElement>(14, 1.05);

  useEffect(() => {
    if (!active || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-badge-pill",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.1
      )
        .fromTo(
          ".hero-main-title",
          { y: 50, opacity: 0, rotateX: 20 },
          { y: 0, opacity: 1, rotateX: 0, duration: 1.2 },
          0.2
        )
        .fromTo(
          ".hero-description",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          0.4
        )
        .fromTo(
          ".hero-cta-btns",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          0.6
        )
        .fromTo(
          ".hero-3d-logo",
          { scale: 0.8, opacity: 0, rotateY: -30 },
          { scale: 1, opacity: 1, rotateY: 0, duration: 1.4, ease: "back.out(1.4)" },
          0.3
        )
        .fromTo(
          ".hero-stats-card",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          0.7
        );

      // 3D Scroll Scrub
      gsap.to(".hero-bg-media", {
        yPercent: 20,
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-parallax-content", {
        yPercent: -15,
        opacity: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [active]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 perspective-1200"
    >
      {/* Background Video with Dark Warm Caramel-Coffee Overlay */}
      <div className="hero-bg-media absolute inset-0 z-0 will-change-transform pointer-events-none">
        <video
          className="w-full h-full object-cover scale-105 filter brightness-95 contrast-105"
          src={HERO_VIDEO}
          poster={HERO_POSTER}
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Balanced Luxury Warm Amber Vignette & Gradients so video details (coffee stream & crema) shine through */}
        <div className="absolute inset-0 bg-gradient-to-b from-roast-950/70 via-roast-950/45 to-roast-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,154,88,0.12)_0%,rgba(13,10,7,0.65)_85%)]" />
      </div>

      {/* Floating 3D Gold Accent Rings */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full border border-gold/15 pointer-events-none blur-[1px] animate-pulse hidden md:block" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 rounded-full border border-gold-light/10 pointer-events-none blur-[2px] hidden md:block" />

      {/* Main Hero Container */}
      <div className="hero-parallax-content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Brand Message */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left preserve-3d">
            
            {/* Pill Announcement */}
            <div className="hero-badge-pill inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border gold-border text-xs md:text-sm text-gold-light mb-6 shadow-lg">
              <Sparkles size={14} className="text-gold animate-spin-slow" />
              <span className="font-semibold tracking-wider uppercase text-[11px] md:text-xs">
                {BRAND_INFO.heroSubtitle}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-cream-muted text-[11px]">Since Day One</span>
            </div>

            {/* Giant Title with Light Golden Gradient */}
            <h1 className="hero-main-title font-display text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight text-cream leading-[1.05] uppercase">
              BREW <span className="gold-gradient-text italic font-normal">BROS</span>
              <span className="block text-2xl sm:text-4xl md:text-5xl font-light normal-case tracking-normal text-cream-muted mt-2">
                Good Coffee • Better Vibes
              </span>
            </h1>

            {/* Subtitle & Key Credentials */}
            <p className="hero-description max-w-xl text-base sm:text-lg text-cream-muted font-normal mt-6 leading-relaxed">
              Quetta’s groundbreaking outdoor specialty coffee cart. From our velvety{" "}
              <strong className="text-gold-light font-semibold">Spanish Caramel Lattes</strong> to cold-extracted{" "}
              <strong className="text-gold-light font-semibold">Nitro Brews</strong>, freshly prepared every evening.
            </p>

            {/* Key Location & Timing Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6 text-xs text-cream-muted">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-roast-850/80 border gold-border">
                <Clock size={14} className="text-gold" />
                <span className="font-medium text-cream">{BRAND_INFO.timings} Daily</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-roast-850/80 border gold-border">
                <MapPin size={14} className="text-gold" />
                <span className="font-medium text-cream">Jinnah Town Quetta</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta-btns flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8 w-full sm:w-auto">
              <button
                onClick={() => onNavigate("menu")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold-light via-gold to-caramel hover:from-white hover:to-gold-light text-roast-950 font-bold text-sm tracking-wider uppercase shadow-[0_10px_35px_rgba(197,154,88,0.4)] transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <span>Explore The Menu</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => onNavigate("location")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full glass-panel border gold-border hover:border-gold text-cream font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white/5 cursor-pointer"
              >
                <MapPin size={15} className="text-gold" />
                <span>Find Cart Location</span>
              </button>

              <a
                href={BRAND_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-4 rounded-full glass-panel border gold-border text-gold-light hover:text-white transition-colors"
                title="Follow on Instagram @brewbros.cart"
              >
                <InstagramIcon size={18} />
              </a>
            </div>

          </div>

          {/* Right Column: 3D Interactive Logo & Highlights */}
          <div className="lg:col-span-5 flex flex-col items-center preserve-3d">
            
            {/* Interactive 3D Brand Emblem Card */}
            <div
              ref={logoHeroRef}
              className="hero-3d-logo relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 rounded-3xl glass-panel p-6 flex flex-col items-center justify-center border-2 gold-border shadow-[0_25px_60px_rgba(0,0,0,0.7)] group cursor-pointer"
            >
              {/* Golden circular glow behind logo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/20 via-transparent to-roast-950/60 pointer-events-none" />
              <div className="absolute -inset-1 rounded-3xl bg-gold/10 blur-xl group-hover:bg-gold/25 transition-all duration-500 pointer-events-none" />

              {/* Logo Asset */}
              <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full p-1 bg-roast-950/90 border-2 border-gold/70 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                <img
                  src={BREW_BROS_LOGO}
                  alt="Brew Bros Official Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>

              {/* Float Pill under Logo */}
              <div className="relative z-10 mt-5 flex items-center gap-2 px-4 py-1.5 rounded-full bg-roast-950/90 border border-gold/50 text-gold-light text-xs font-bold tracking-widest uppercase">
                <Award size={13} className="text-gold" />
                <span>Quetta's #1 Coffee Cart</span>
              </div>
            </div>

            {/* Quick Stats Pill */}
            <div
              ref={badgeCardRef}
              className="hero-stats-card w-full max-w-md mt-6 grid grid-cols-3 gap-2 p-3 rounded-2xl glass-panel border gold-border text-center"
            >
              <div className="p-2 border-r border-gold/15">
                <p className="font-display text-lg sm:text-xl font-bold text-gold-light">100%</p>
                <p className="text-[10px] uppercase text-sand font-medium">Arabica</p>
              </div>
              <div className="p-2 border-r border-gold/15">
                <p className="font-display text-lg sm:text-xl font-bold text-gold-light">5:30-10</p>
                <p className="text-[10px] uppercase text-sand font-medium">PM Daily</p>
              </div>
              <div className="p-2">
                <p className="font-display text-lg sm:text-xl font-bold text-gold-light">#1 Cart</p>
                <p className="text-[10px] uppercase text-sand font-medium">In Quetta</p>
              </div>
            </div>

          </div>

        </div>

        {/* Scroll indicator */}
        <div className="mt-14 sm:mt-20 flex flex-col items-center justify-center text-center">
          <button
            onClick={() => onNavigate("menu")}
            className="flex flex-col items-center gap-2 text-sand hover:text-gold-light transition-colors cursor-pointer group"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">
              Explore Our Handcrafted Menu
            </span>
            <ChevronDown size={18} className="animate-bounce text-gold group-hover:text-gold-light" />
          </button>
        </div>

      </div>
    </section>
  );
}
