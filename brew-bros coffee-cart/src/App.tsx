import { useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { setLenis, scrollToTarget } from "./lib/scroll";

import { MenuItem } from "./data/brewBrosData";

import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Story from "./components/Story";
import MenuSection from "./components/MenuSection";
import Signature from "./components/Signature";
import Gallery from "./components/Gallery";
import Reservation from "./components/Reservation";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");

  // Cart state
  const [cartItems, setCartItems] = useState<{ item: MenuItem; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((entry) => entry.item.id === item.id);
      if (existing) {
        return prev.map((entry) =>
          entry.item.id === item.id
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((entry) => {
          if (entry.item.id === id) {
            const newQ = entry.quantity + delta;
            return newQ > 0 ? { ...entry, quantity: newQ } : null;
          }
          return entry;
        })
        .filter(Boolean) as { item: MenuItem; quantity: number }[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((entry) => entry.item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, entry) => acc + entry.quantity, 0);

  const done = useCallback(() => {
    setLoading(false);
    window.setTimeout(() => setMounted(false), 700);
  }, []);

  // Butter smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    setLenis(lenis);
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  const handleNavigate = (pageId: string) => {
    setCurrentPage(pageId);
    if (pageId === "home") {
      scrollToTarget(0);
    } else if (pageId === "menu") {
      const el = document.getElementById("menu-section");
      if (el) scrollToTarget("#menu-section");
      else scrollToTarget(0);
    } else if (pageId === "story") {
      const el = document.getElementById("story-section");
      if (el) scrollToTarget("#story-section");
      else scrollToTarget(0);
    } else if (pageId === "gallery") {
      const el = document.getElementById("gallery-section");
      if (el) scrollToTarget("#gallery-section");
      else scrollToTarget(0);
    } else if (pageId === "location") {
      const el = document.getElementById("location-section");
      if (el) scrollToTarget("#location-section");
      else scrollToTarget(0);
    }
  };

  return (
    <div className="relative min-h-screen bg-roast-950 text-cream selection:bg-gold selection:text-roast-950">
      <Cursor />
      {mounted && <Preloader onDone={done} />}

      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main>
        {/* If page is home, show the full 3D scroll experience */}
        {currentPage === "home" && (
          <>
            <Hero onNavigate={handleNavigate} active={!loading} />
            <Marquee />
            <Signature
              onAddToCart={handleAddToCart}
              onExploreMenu={() => handleNavigate("menu")}
            />
            <Story />
            <MenuSection onAddToCart={handleAddToCart} />
            <Gallery />
            <Reservation />
          </>
        )}

        {/* Multi-page dedicated views */}
        {currentPage === "menu" && (
          <div className="pt-20">
            <MenuSection onAddToCart={handleAddToCart} />
            <Signature
              onAddToCart={handleAddToCart}
              onExploreMenu={() => {}}
            />
            <Reservation />
          </div>
        )}

        {currentPage === "story" && (
          <div className="pt-20">
            <Story />
            <Gallery />
            <Reservation />
          </div>
        )}

        {currentPage === "gallery" && (
          <div className="pt-20">
            <Gallery />
            <Reservation />
          </div>
        )}

        {currentPage === "location" && (
          <div className="pt-20">
            <Reservation />
            <Gallery />
          </div>
        )}
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveItem}
        onClear={handleClearCart}
      />
    </div>
  );
}
