import { BRAND_INFO } from "../data/brewBrosData";
import { BREW_BROS_LOGO } from "../assets/logo";
import {
  MapPin,
  Clock,
  ArrowUp,
  Award,
} from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "./SocialIcons";
import { scrollToTarget } from "../lib/scroll";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleScrollTop = () => {
    scrollToTarget(0);
  };

  return (
    <footer className="relative bg-gradient-to-b from-roast-950 via-roast-900 to-roast-950 border-t gold-border pt-16 pb-12 select-none overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gold/15">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold p-0.5 bg-roast-950 shadow-lg">
                <img
                  src={BREW_BROS_LOGO}
                  alt="Brew Bros Official Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-wider text-cream">
                  BREW BROS
                </span>
                <p className="text-[10px] uppercase font-bold tracking-widest text-gold-light">
                  Coffee Cart • Quetta
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cream-muted/80 max-w-sm leading-relaxed mb-6">
              "Best &amp; First Coffee Cart in Quetta."
              Bringing handcrafted espresso culture and good vibes to the streets of Jinnah Town every evening.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={BRAND_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel border gold-border text-gold-light hover:text-white hover:border-gold transition-all text-xs font-semibold"
              >
                <InstagramIcon size={15} />
                <span>@brewbros.cart</span>
              </a>

              <a
                href={`https://wa.me/923337890123`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:text-white hover:bg-emerald-600 transition-all text-xs font-semibold"
              >
                <WhatsAppIcon size={15} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-base font-bold text-cream uppercase tracking-wider mb-4 text-gold-light">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-cream-muted font-medium">
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="hover:text-gold transition-colors cursor-pointer"
                >
                  Home &amp; Hero
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("menu")}
                  className="hover:text-gold transition-colors cursor-pointer"
                >
                  Full Coffee Menu (Rs. 320 - 520)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("story")}
                  className="hover:text-gold transition-colors cursor-pointer"
                >
                  The Brothers' Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("gallery")}
                  className="hover:text-gold transition-colors cursor-pointer"
                >
                  Cart Gallery &amp; Vibes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("location")}
                  className="hover:text-gold transition-colors cursor-pointer"
                >
                  Visit Jinnah Town &amp; Pre-Order
                </button>
              </li>
            </ul>
          </div>

          {/* Visit & Timings Info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="font-display text-base font-bold text-cream uppercase tracking-wider mb-1 text-gold-light">
              Visit The Cart
            </h4>

            <div className="flex items-start gap-3 text-xs text-cream-muted">
              <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
              <div>
                <strong className="text-cream block">Location:</strong>
                Opposite Jamia Masjid, Jinnah Town, Quetta
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-cream-muted">
              <Clock size={16} className="text-gold shrink-0 mt-0.5" />
              <div>
                <strong className="text-cream block">Operating Hours:</strong>
                {BRAND_INFO.timings} Daily
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-cream-muted">
              <Award size={16} className="text-gold shrink-0 mt-0.5" />
              <div>
                <strong className="text-cream block">Credentials:</strong>
                {BRAND_INFO.heroSubtitle}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand">
          <p>© {new Date().getFullYear()} Brew Bros Coffee Cart. All rights reserved.</p>
          <p className="text-center">
            Handcrafted with 🤎 in Quetta, Balochistan.
          </p>
          <button
            onClick={handleScrollTop}
            className="flex items-center gap-1.5 text-gold-light hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
