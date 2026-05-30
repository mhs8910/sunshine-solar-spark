import { motion, useReducedMotion } from "motion/react";

/** Subtle, always-on background motion. Fixed, behind everything, pointer-events:none. */
export function AmbientBackground() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <motion.div
        className="absolute -top-40 -right-40 h-[640px] w-[640px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(245,166,35,0.25), transparent 70%)",
        }}
        animate={reduce ? undefined : { x: [0, 30, -20, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 h-[560px] w-[560px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(10,110,189,0.18), transparent 70%)",
        }}
        animate={reduce ? undefined : { x: [0, -20, 30, 0], y: [0, -15, 10, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(245,166,35,0.10), transparent 70%)",
        }}
        animate={reduce ? undefined : { scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
