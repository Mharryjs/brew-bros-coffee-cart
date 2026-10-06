import { BREW_BROS_LOGO } from "../assets/logo";
import { Clock, Award, Coffee, Heart } from "lucide-react";
import { useTilt } from "../hooks/useTilt";

export default function Story() {
  const cardTiltRef = useTilt<HTMLDivElement>(10, 1.02);

  const pillars = [
    {
      icon: Coffee,
      title: "First in Quetta",
      desc: "Before Brew Bros, specialty espresso on the go didn't exist in Quetta. We built the city's very first dedicated street coffee cart from scratch.",
    },
    {
      icon: Clock,
      title: "5:30 to 10:00 PM Ritual",
      desc: "As the Quetta evening cools down and Jamia Masjid lights up, the aroma of dark roast espresso takes over Jinnah Town.",
    },
    {
      icon: Heart,
      title: "Good Coffee, Better Vibes",
      desc: "More than just caffeine — it's an outdoor community gathering spot for students, professionals, and coffee lovers.",
    },
    {
      icon: Award,
      title: "Specialty Grade Arabica",
      desc: "No instant powders, no shortcuts. Every single drink uses calibrated doses of freshly ground specialty beans.",
    },
  ];

  return (
    <section id="story-section" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial warmth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side with 3D Tilt Badge */}
          <div className="lg:col-span-5 preserve-3d">
            <div
              ref={cardTiltRef}
              className="relative rounded-3xl glass-panel p-8 border-2 gold-border shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col items-center text-center"
            >
              {/* Backlight */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-gold/15 to-transparent pointer-events-none" />

              {/* Logo Emblem */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-2 bg-roast-950 border-2 border-gold shadow-2xl mb-6">
                <img
                  src={BREW_BROS_LOGO}
                  alt="Brew Bros Quetta Cart"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>

              <h3 className="font-display text-2xl font-bold text-cream">
                The Brew Bros Cart
              </h3>
              <p className="text-xs uppercase tracking-widest text-gold font-semibold mt-1">
                Jinnah Town • Quetta
              </p>

              <div className="w-full mt-6 pt-6 border-t border-gold/20 flex items-center justify-around text-center">
                <div>
                  <p className="font-display text-xl font-bold text-gold-light">#1</p>
                  <p className="text-[10px] uppercase text-sand">In Quetta</p>
                </div>
                <div className="w-px h-8 bg-gold/20" />
                <div>
                  <p className="font-display text-xl font-bold text-gold-light">5:30-10</p>
                  <p className="text-[10px] uppercase text-sand">PM Evenings</p>
                </div>
                <div className="w-px h-8 bg-gold/20" />
                <div>
                  <p className="font-display text-xl font-bold text-gold-light">100%</p>
                  <p className="text-[10px] uppercase text-sand">Arabica</p>
                </div>
              </div>
            </div>
          </div>

          {/* Story & Philosophy Side */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border gold-border text-xs text-gold-light mb-4">
              <span className="font-semibold uppercase tracking-widest text-[11px]">
                The Story Behind The Brothers
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-cream uppercase leading-tight">
              HOW WE BROUGHT SPECIALTY COFFEE TO{" "}
              <span className="gold-gradient-text italic font-normal">THE STREETS OF QUETTA</span>
            </h2>

            <p className="mt-6 text-sm sm:text-base text-cream-muted leading-relaxed">
              Brew Bros was born from a simple belief: Quetta deserved authentic, barista-crafted
              coffee served with warmth, style, and brotherhood. We rolled our custom-fabricated
              coffee cart right opposite Jamia Masjid in Jinnah Town — lighting up the pavement
              every evening from 5:30 PM to 10:00 PM.
            </p>

            <p className="mt-4 text-sm sm:text-base text-cream-muted leading-relaxed">
              Whether you are pulling up after evening prayers, heading home from university,
              or looking for a warm, cozy corner to chat with friends, Brew Bros is Quetta’s
              outdoor living room.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl glass-panel border gold-border transition-all duration-300 hover:border-gold"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-xl bg-gold/15 text-gold-light">
                        <Icon size={18} />
                      </div>
                      <h4 className="font-display text-base font-bold text-cream">
                        {p.title}
                      </h4>
                    </div>
                    <p className="text-xs text-cream-muted/80 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quote banner */}
            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-roast-900 to-roast-850 border border-gold/30 flex items-center gap-4">
              <span className="text-3xl text-gold font-display italic">“</span>
              <p className="text-xs sm:text-sm text-cream-muted italic font-medium">
                "Not just a cup of coffee, but an evening atmosphere Quetta always deserved."
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
