import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

export function CursorGlow() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.6 });
  const [enabled, setEnabled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    if (window.matchMedia("(pointer: fine)").matches) setEnabled(true);
  }, [reduce]);

  useEffect(() => {
    if (!enabled) return;
    function onMove(e: MouseEvent) {
      x.set(e.clientX - 200);
      y.set(e.clientY - 200);
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled, x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      style={{
        x: sx,
        y: sy,
        background:
          "radial-gradient(closest-side, rgba(245,166,35,0.18), transparent 70%)",
      }}
      className="pointer-events-none fixed top-0 left-0 z-[5] h-[400px] w-[400px] rounded-full blur-2xl mix-blend-multiply"
    />
  );
}
