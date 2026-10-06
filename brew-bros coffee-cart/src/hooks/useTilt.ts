import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * 3D tilt — rotates a card toward the cursor and exposes
 * --gx / --gy custom properties for a cursor-tracked glare.
 */
export function useTilt<T extends HTMLElement>(max = 8, scale = 1.02) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.set(el, { transformPerspective: 900, transformOrigin: "center" });
    const qx = gsap.quickTo(el, "rotationY", { duration: 0.65, ease: "power3" });
    const qy = gsap.quickTo(el, "rotationX", { duration: 0.65, ease: "power3" });
    const qs = gsap.quickTo(el, "scale", { duration: 0.65, ease: "power3" });

    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      qx(px * max * 2);
      qy(-py * max * 2);
      qs(scale);
      el.style.setProperty("--gx", `${(px + 0.5) * 100}%`);
      el.style.setProperty("--gy", `${(py + 0.5) * 100}%`);
    };
    const leave = () => {
      qx(0);
      qy(0);
      qs(1);
    };

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, [max, scale]);

  return ref;
}
