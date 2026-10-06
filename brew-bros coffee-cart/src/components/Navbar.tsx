import { useState, useEffect } from "react";
import { BRAND_INFO } from "../data/brewBrosData";
import { BREW_BROS_LOGO } from "../assets/logo";
import { InstagramIcon } from "./SocialIcons";
import {
  Clock,
  MapPin,
  Menu as MenuIcon,
  X,
  ShoppingBag,
} from "lucide-react";
import { scrollToTarget } from "../lib/scroll";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({
  currentPage,
  onNavigate,
  cartCount,
  onOpenCart,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "menu", label: "Menu & Order" },
    { id: "story", label: "The Cart Story" },
    { id: "gallery", label: "Vibes & Gallery" },
    { id: "location", label: "Visit & Hours" },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    scrollToTarget(0);
  };

  return (
    <>
      {/* Main Glass Navbar */}
      <header
        className={`fixed left-0 right-0 top-0 z-[120] transition-all duration-400 ${
          scrolled
            ? "glass-nav py-3.5 shadow-2xl"
            : "bg-gradient-to-b from-roast-950/85 via-roast-950/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand with Original Logo Asset */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3.5 group text-left cursor-pointer"
          >
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-gold/60 p-0.5 bg-roast-950 transition-all duration-300 group-hover:scale-105 group-hover:border-gold-light group-hover:shadow-[0_0_20px_rgba(197,154,88,0.45)]">
              <img
                src={BREW_BROS_LOGO}
                alt="Brew Bros Coffee Cart Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl md:text-2xl font-bold tracking-wider text-cream group-hover:text-gold-light transition-colors">
                BREW BROS
              </span>
              <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.25em] text-gold/90">
                Coffee Cart • Quetta
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "text-roast-950 bg-gradient-to-r from-gold-light via-gold to-gold-deep shadow-md font-bold"
                      : "text-cream-muted hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* View Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-full glass-panel border gold-border text-cream hover:text-gold-light hover:border-gold transition-all duration-300 cursor-pointer"
              title="Cart & Quick Order"
            >
              <ShoppingBag size={16} className="text-gold" />
              <span className="text-xs font-semibold hidden sm:inline">Order</span>
              {cartCount > 0 && (
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gold text-roast-950 font-bold text-[10px] animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Visit Cart CTA */}
            <button
              onClick={() => handleNavClick("location")}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-gold to-caramel hover:from-gold-light hover:to-gold text-roast-950 text-xs font-bold uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <MapPin size={13} />
              <span>Jinnah Town</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg border gold-border text-cream lg:hidden hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-[115] bg-roast-950/98 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col justify-between pt-32 pb-8 px-6 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 p-3 rounded-2xl glass-panel mb-4">
            <img
              src={BREW_BROS_LOGO}
              alt="Brew Bros"
              className="w-12 h-12 rounded-full border border-gold"
            />
            <div>
              <p className="font-display font-bold text-cream text-lg">Brew Bros Cart</p>
              <p className="text-[11px] text-gold">{BRAND_INFO.heroSubtitle}</p>
            </div>
          </div>

          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-5 py-3.5 rounded-xl text-base font-semibold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-gold to-caramel text-roast-950 font-bold"
                    : "text-cream hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-3 pt-6 border-t border-gold/20">
          <div className="flex items-center gap-2 text-xs text-sand">
            <Clock size={14} className="text-gold" />
            <span>Daily: {BRAND_INFO.timings}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-sand">
            <MapPin size={14} className="text-gold" />
            <span>{BRAND_INFO.location}</span>
          </div>
          <a
            href={BRAND_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gold text-gold font-bold text-xs uppercase tracking-wider"
          >
            <InstagramIcon size={16} />
            Follow @brewbros.cart
          </a>
        </div>
      </div>
    </>
  );
}
