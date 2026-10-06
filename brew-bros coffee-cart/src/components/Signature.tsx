import { Plus, Flame, Snowflake, Sparkles } from "lucide-react";
import { MENU_ITEMS, MenuItem } from "../data/brewBrosData";
import { useTilt } from "../hooks/useTilt";

interface SignatureProps {
  onAddToCart: (item: MenuItem) => void;
  onExploreMenu: () => void;
}

function SignatureCard({
  item,
  onAddToCart,
}: {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}) {
  const cardRef = useTilt<HTMLDivElement>(10, 1.03);

  return (
    <div
      ref={cardRef}
      className="group relative rounded-3xl glass-panel p-6 border-2 gold-border flex flex-col justify-between transition-all duration-500 hover:border-gold hover:shadow-[0_25px_60px_rgba(0,0,0,0.7)] cursor-pointer"
    >
      <div>
        {/* Image with Glow */}
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-5 bg-roast-900">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-roast-950 via-transparent to-transparent opacity-75" />

          {/* Badge */}
          {item.badge && (
            <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r from-gold to-caramel text-roast-950 text-[10px] font-extrabold uppercase tracking-wider shadow-md">
              {item.badge}
            </span>
          )}

          {/* Temp */}
          <span className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full glass-panel text-[11px] font-semibold text-cream">
            {item.temp === "Hot" && <Flame size={12} className="text-amber-400" />}
            {item.temp === "Iced" && <Snowflake size={12} className="text-sky-300" />}
            {item.temp === "Both" && (
              <>
                <Flame size={11} className="text-amber-400" />
                <Snowflake size={11} className="text-sky-300" />
              </>
            )}
            <span className="text-[10px]">{item.temp}</span>
          </span>

          <div className="absolute bottom-3 left-3">
            <span className="font-display text-2xl font-bold text-cream drop-shadow-md">
              Rs. {item.price}
            </span>
          </div>
        </div>

        <h3 className="font-display text-2xl font-bold text-cream group-hover:text-gold-light transition-colors">
          {item.name}
        </h3>
        <p className="text-xs text-gold/90 font-medium tracking-wide mt-1">
          {item.tagline}
        </p>
        <p className="text-xs text-cream-muted/80 font-light mt-3 leading-relaxed line-clamp-2">
          {item.description}
        </p>

        {item.roastNotes && (
          <div className="mt-4 pt-3 border-t border-gold/15 flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold text-sand tracking-wider">
              Notes:
            </span>
            <span className="text-[11px] text-cream-muted italic truncate">
              {item.roastNotes}
            </span>
          </div>
        )}
      </div>

      <button
        onClick={() => onAddToCart(item)}
        className="mt-6 w-full py-3 px-4 rounded-full bg-gradient-to-r from-gold to-caramel hover:from-gold-light hover:to-gold text-roast-950 font-bold text-xs uppercase tracking-wider shadow-md transition-all duration-300 hover:scale-102 flex items-center justify-center gap-2 cursor-pointer"
      >
        <Plus size={15} />
        <span>Add to Order</span>
      </button>
    </div>
  );
}

export default function Signature({
  onAddToCart,
  onExploreMenu,
}: SignatureProps) {
  const signatureItems = MENU_ITEMS.filter((i) => i.category === "signatures");

  return (
    <section className="relative py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border gold-border text-xs text-gold-light mb-4">
          <Sparkles size={13} className="text-gold" />
          <span className="font-semibold uppercase tracking-widest text-[11px]">
            Exclusive Coffee Cart Creations
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cream uppercase">
          THE BROS <span className="gold-gradient-text italic font-normal">SIGNATURES</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-cream-muted leading-relaxed">
          The four legendary drinks that put Brew Bros on the map across Jinnah Town and Quetta.
        </p>
      </div>

      {/* Signatures 4 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {signatureItems.map((item) => (
          <SignatureCard
            key={item.id}
            item={item}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      <div className="mt-14 text-center">
        <button
          onClick={onExploreMenu}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass-panel border-2 gold-border hover:border-gold text-cream hover:text-gold-light text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg"
        >
          <span>View All 16 Menu Offerings</span>
        </button>
      </div>
    </section>
  );
}
