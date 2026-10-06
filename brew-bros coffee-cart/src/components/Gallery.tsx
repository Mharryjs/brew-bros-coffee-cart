import { CART_GALLERY, TESTIMONIALS, BRAND_INFO } from "../data/brewBrosData";
import { Star, Sparkles, ChevronRight } from "lucide-react";
import { InstagramIcon } from "./SocialIcons";
import { useTilt } from "../hooks/useTilt";

function GalleryCard({
  item,
}: {
  item: (typeof CART_GALLERY)[0];
}) {
  const tilt = useTilt<HTMLDivElement>(8, 1.03);

  return (
    <div
      ref={tilt}
      className="group relative rounded-2xl overflow-hidden glass-panel border gold-border cursor-pointer transition-all duration-500 hover:border-gold hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
    >
      <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-roast-900">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-roast-950 via-roast-950/40 to-transparent opacity-85 group-hover:opacity-60 transition-opacity" />

        {/* Tag Pill */}
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-roast-950/80 border border-gold/40 text-[10px] uppercase font-bold text-gold-light tracking-wider backdrop-blur-md">
          {item.tag}
        </span>

        {/* Bottom Details */}
        <div className="absolute bottom-4 left-4 right-4">
          <h4 className="font-display text-lg sm:text-xl font-bold text-cream group-hover:text-gold-light transition-colors">
            {item.title}
          </h4>
          <p className="text-xs text-cream-muted/90 mt-1 line-clamp-1">
            {item.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery-section" className="relative py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border gold-border text-xs text-gold-light mb-4">
          <Sparkles size={13} className="text-gold" />
          <span className="font-semibold uppercase tracking-widest text-[11px]">
            Live Evenings In Quetta
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cream uppercase">
          THE CART <span className="gold-gradient-text italic font-normal">VIBES</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-cream-muted leading-relaxed">
          Warm lights, the hum of the grinder, and good conversations.
          Take a look into our daily routine at Jinnah Town.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {CART_GALLERY.map((item, idx) => (
          <GalleryCard key={idx} item={item} />
        ))}
      </div>

      {/* Instagram Integration Banner */}
      <div className="mt-16 p-8 rounded-3xl glass-panel border gold-border relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-caramel p-0.5 flex items-center justify-center shrink-0 shadow-lg">
            <div className="w-full h-full bg-roast-950 rounded-2xl flex items-center justify-center text-gold-light">
              <InstagramIcon size={30} />
            </div>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-cream">
              Follow Our Daily Stories
            </h3>
            <p className="text-xs sm:text-sm text-sand mt-0.5">
              Tag us in your cup photos <span className="text-gold-light font-semibold">@brewbros.cart</span> to get featured!
            </p>
          </div>
        </div>

        <a
          href={BRAND_INFO.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-caramel hover:from-gold-light hover:to-gold text-roast-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg hover:scale-105 shrink-0"
        >
          <InstagramIcon size={16} />
          <span>Visit Instagram</span>
          <ChevronRight size={16} />
        </a>
      </div>

      {/* Testimonials from Quetta Customers */}
      <div className="mt-20">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-gold font-bold">
            Customer Love
          </p>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-cream mt-1">
            What Quetta Says About Us
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel border gold-border flex flex-col justify-between transition-all duration-300 hover:border-gold hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-gold">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-gold" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-cream-muted/90 italic leading-relaxed">
                  "{t.review}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gold/15 flex flex-col">
                <span className="font-display font-bold text-cream text-base">
                  {t.name}
                </span>
                <span className="text-[11px] text-sand">{t.role}</span>
                <span className="text-[10px] text-gold-light font-semibold mt-1">
                  Ordered: {t.drink}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
