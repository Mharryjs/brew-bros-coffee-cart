import { useState } from "react";
import {
  MENU_CATEGORIES,
  MENU_ITEMS,
  MenuItem,
} from "../data/brewBrosData";
import {
  Sparkles,
  Plus,
  Flame,
  Snowflake,
  Check,
  Search,
} from "lucide-react";
import { useTilt } from "../hooks/useTilt";

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

function MenuCard({
  item,
  onAdd,
}: {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
}) {
  const tiltRef = useTilt<HTMLDivElement>(8, 1.02);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div
      ref={tiltRef}
      className="group relative flex flex-col justify-between rounded-2xl glass-panel p-5 border gold-border transition-all duration-300 hover:border-gold hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] cursor-pointer"
    >
      {/* Visual Image with Overlay Badge */}
      <div className="relative h-48 sm:h-52 w-full rounded-xl overflow-hidden mb-4 bg-roast-900">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-roast-950 via-transparent to-transparent opacity-80" />

        {/* Badge */}
        {item.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r from-gold to-caramel text-roast-950 text-[10px] font-extrabold uppercase tracking-wider shadow-md">
            {item.badge}
          </span>
        )}

        {/* Hot / Iced Indicator */}
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

        {/* Price Tag Overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <span className="font-display text-2xl font-bold text-cream drop-shadow-md">
            Rs. {item.price}
          </span>
        </div>
      </div>

      {/* Item Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display text-xl font-bold text-cream group-hover:text-gold-light transition-colors">
            {item.name}
          </h3>
          <p className="text-xs text-gold/90 font-medium tracking-wide mt-0.5">
            {item.tagline}
          </p>
          <p className="text-xs text-cream-muted/80 font-light mt-2.5 leading-relaxed line-clamp-2">
            {item.description}
          </p>

          {item.roastNotes && (
            <div className="mt-3 pt-2.5 border-t border-gold/15 flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold text-sand tracking-wider">
                Notes:
              </span>
              <span className="text-[11px] text-cream-muted italic truncate">
                {item.roastNotes}
              </span>
            </div>
          )}
        </div>

        {/* Add to Cart CTA */}
        <div className="mt-5 pt-3 border-t border-gold/15 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-wider text-sand">
            Fresh Cart Pour
          </span>

          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              added
                ? "bg-emerald-500 text-white scale-105"
                : "bg-gradient-to-r from-gold to-caramel text-roast-950 hover:from-gold-light hover:to-gold shadow-md hover:scale-105"
            }`}
          >
            {added ? (
              <>
                <Check size={14} />
                <span>Added</span>
              </>
            ) : (
              <>
                <Plus size={14} />
                <span>Add to Order</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MenuSection({ onAddToCart }: MenuSectionProps) {
  const [selectedCat, setSelectedCat] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCat = selectedCat === "all" || item.category === selectedCat;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="menu-section" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border gold-border text-xs text-gold-light mb-4">
          <Sparkles size={13} className="text-gold" />
          <span className="font-semibold uppercase tracking-widest text-[11px]">
            Served Hot &amp; Fresh From 5:30 PM to 10:00 PM
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cream uppercase">
          OUR CRAFT <span className="gold-gradient-text italic font-normal">MENU</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-cream-muted max-w-xl mx-auto leading-relaxed">
          Every cup is pulled fresh on our outdoor commercial machine at Jinnah Town, Quetta.
          Choose your favorite brew or order ahead for swift pickup at our cart.
        </p>

        {/* Search Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
          <div className="relative w-full">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-sand" />
            <input
              type="text"
              placeholder="Search coffee, latte, croissant..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full glass-panel border gold-border text-cream placeholder-sand/60 text-xs sm:text-sm focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = selectedCat === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-gold to-caramel text-roast-950 shadow-lg scale-105"
                    : "glass-panel text-cream-muted hover:text-white border gold-border hover:border-gold"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Menu Cards Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 glass-panel rounded-3xl p-8 max-w-md mx-auto">
          <p className="font-display text-2xl text-cream">No coffee found</p>
          <p className="text-xs text-sand mt-2">
            Try adjusting your search query or pick another category.
          </p>
          <button
            onClick={() => {
              setSelectedCat("all");
              setSearchQuery("");
            }}
            className="mt-4 px-5 py-2 rounded-full bg-gold text-roast-950 font-bold text-xs uppercase"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} onAdd={onAddToCart} />
          ))}
        </div>
      )}

      {/* Bottom Cart Notice */}
      <div className="mt-16 p-6 sm:p-8 rounded-3xl glass-panel border gold-border flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="font-display text-2xl font-bold text-cream">
            Custom Roast or Bulk Gathering Order?
          </h4>
          <p className="text-xs sm:text-sm text-cream-muted mt-1 max-w-xl">
            Having an evening hangout in Jinnah Town or office meeting in Quetta?
            We pack insulated carafes and fresh warm cups ready for drive-by collection.
          </p>
        </div>
        <a
          href="https://wa.me/923337890123?text=Hi%20Brew%20Bros%20Quetta!%20I%20want%20to%20place%20an%20order."
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shrink-0 flex items-center gap-2"
        >
          <span>WhatsApp Quick Order</span>
        </a>
      </div>
    </section>
  );
}
