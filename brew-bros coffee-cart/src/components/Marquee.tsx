import { Diamond } from "lucide-react";

const MARQUEE_ITEMS = [
  "BEST & FIRST COFFEE CART IN QUETTA",
  "OPPOSITE JAMIA MASJID, JINNAH TOWN",
  "5:30 PM TO 10:00 PM DAILY",
  "SPANISH CARAMEL LATTE",
  "100% FRESH ARABICA EXTRACTION",
  "THE BROS CORTADO",
  "GOOD COFFEE • BETTER VIBES",
  "INSTAGRAM @BREWBROS.CART",
];

export default function Marquee() {
  const renderList = (ariaHidden: boolean) => (
    <div aria-hidden={ariaHidden} className="flex shrink-0 items-center gap-8 py-3.5">
      {MARQUEE_ITEMS.map((text, i) => (
        <span key={i} className="flex items-center gap-6 whitespace-nowrap">
          <span className="font-display text-lg md:text-xl font-bold tracking-widest uppercase text-cream-muted/90 hover:text-gold-light transition-colors">
            {text}
          </span>
          <Diamond size={10} className="fill-gold text-gold shrink-0 animate-pulse" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative border-y gold-border bg-gradient-to-r from-roast-950 via-roast-900 to-roast-950 overflow-hidden select-none">
      {/* Golden Edge Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-roast-950 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-roast-950 to-transparent pointer-events-none" />

      <div className="flex overflow-hidden">
        <div className="animate-marquee flex gap-8">
          {renderList(false)}
          {renderList(true)}
        </div>
      </div>
    </div>
  );
}
