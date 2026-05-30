import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { Sun, Battery, Home, Zap } from "lucide-react";

/**
 * Floating 3D-feel solar ecosystem (SVG + layered HTML).
 * Light, GPU-friendly, cursor-reactive. Replaces heavy WebGL/Spline.
 */
export function SolarEcosystem() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const reduce = useReducedMotion();
  const sx = useSpring(mx, { stiffness: 60, damping: 14 });
  const sy = useSpring(my, { stiffness: 60, damping: 14 });

  // Parallax layers
  const sunX = useTransform(sx, (v) => v * -18);
  const sunY = useTransform(sy, (v) => v * -18);
  const panelX = useTransform(sx, (v) => v * 12);
  const panelY = useTransform(sy, (v) => v * 12);
  const batteryX = useTransform(sx, (v) => v * 22);
  const batteryY = useTransform(sy, (v) => v * 22);
  const homeX = useTransform(sx, (v) => v * -8);
  const homeY = useTransform(sy, (v) => v * -8);

  useEffect(() => {
    if (reduce) return;
    function onMove(e: MouseEvent) {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
      my.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduce]);

  return (
    <div
      ref={ref}
      className="relative w-full h-[460px] rounded-[28px] overflow-hidden border border-border bg-card shadow-elevated"
      style={{ perspective: 1200 }}
    >
      {/* Ambient sky background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF7E8] via-[#FAFCFF] to-[#E8F1FB]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(245,166,35,0.35),transparent_55%),radial-gradient(circle_at_15%_85%,rgba(10,110,189,0.18),transparent_60%)]" />
      <div className="absolute inset-0 solar-grid opacity-60" />

      {/* Energy flow SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 600 460"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="flow-amber" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F5A623" stopOpacity="0" />
            <stop offset="50%" stopColor="#F5A623" stopOpacity="1" />
            <stop offset="100%" stopColor="#F5A623" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flow-sky" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0A6EBD" stopOpacity="0" />
            <stop offset="50%" stopColor="#0A6EBD" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0A6EBD" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Sun → Panels */}
        <path
          d="M 470,90 C 400,150 340,180 300,210"
          stroke="rgba(245,166,35,0.25)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="2 6"
        />
        {/* Panels → Battery */}
        <path
          d="M 300,235 C 230,260 180,290 150,330"
          stroke="rgba(10,110,189,0.25)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="2 6"
        />
        {/* Battery → Home */}
        <path
          d="M 175,355 C 250,355 330,355 400,340"
          stroke="rgba(10,110,189,0.25)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="2 6"
        />

        {/* Animated travelling particles */}
        <circle r="3.5" fill="url(#flow-amber)">
          <animateMotion
            dur="3.2s"
            repeatCount="indefinite"
            path="M 470,90 C 400,150 340,180 300,210"
          />
        </circle>
        <circle r="3" fill="#F5A623" opacity="0.9">
          <animateMotion
            dur="3.2s"
            begin="1.1s"
            repeatCount="indefinite"
            path="M 470,90 C 400,150 340,180 300,210"
          />
        </circle>
        <circle r="3" fill="#0A6EBD">
          <animateMotion
            dur="3.6s"
            repeatCount="indefinite"
            path="M 300,235 C 230,260 180,290 150,330"
          />
        </circle>
        <circle r="3" fill="#0A6EBD">
          <animateMotion
            dur="3.6s"
            begin="1.4s"
            repeatCount="indefinite"
            path="M 300,235 C 230,260 180,290 150,330"
          />
        </circle>
        <circle r="3" fill="#0A6EBD">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M 175,355 C 250,355 330,355 400,340"
          />
        </circle>
      </svg>

      {/* Sun */}
      <motion.div
        style={{ x: sunX, y: sunY }}
        className="absolute top-8 right-10"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="relative h-24 w-24 rounded-full bg-amber-gradient shadow-amber-glow flex items-center justify-center"
        >
          <Sun className="h-10 w-10 text-foreground" strokeWidth={1.6} />
          <div className="absolute inset-0 rounded-full ring-4 ring-amber/30 animate-ping" />
        </motion.div>
      </motion.div>

      {/* Solar panel array */}
      <motion.div
        style={{ x: panelX, y: panelY, rotateX: 38, rotateZ: -8 }}
        className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="grid grid-cols-3 gap-1.5 p-2 rounded-xl bg-gradient-to-br from-[#1a2b4a] to-[#0a1730] shadow-elevated">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: [0.45, 0.85, 0.45] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                delay: i * 0.12,
                ease: "easeInOut",
              }}
              className="h-7 w-10 rounded-sm bg-gradient-to-br from-[#3a6fa8] to-[#1f4475] border border-[#4d7fb0]/40"
            />
          ))}
        </div>
        <div className="mt-1 h-1.5 w-full bg-foreground/70 rounded-sm" />
      </motion.div>

      {/* Battery */}
      <motion.div
        style={{ x: batteryX, y: batteryY }}
        className="absolute left-8 bottom-20"
      >
        <div className="rounded-2xl bg-card border border-border shadow-elevated p-3 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <Battery className="h-4 w-4 text-amber" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em]">Battery</span>
          </div>
          <div className="mt-2 h-1.5 w-28 rounded-full bg-muted overflow-hidden">
            <motion.div
              initial={{ width: "20%" }}
              animate={{ width: ["20%", "92%", "20%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="h-full bg-amber-gradient"
            />
          </div>
          <p className="mt-1.5 font-mono text-[10px] text-muted-foreground">Storing surplus</p>
        </div>
      </motion.div>

      {/* Home */}
      <motion.div
        style={{ x: homeX, y: homeY }}
        className="absolute right-10 bottom-16"
      >
        <div className="rounded-2xl bg-foreground text-primary-foreground p-3 shadow-elevated">
          <div className="flex items-center gap-2">
            <Home className="h-4 w-4 text-amber" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em]">Your home</span>
          </div>
          <div className="mt-2 flex items-center gap-1.5">
            <Zap className="h-3 w-3 text-amber" />
            <span className="font-mono text-[11px] text-amber">6.2 kW live</span>
          </div>
        </div>
      </motion.div>

      {/* Floating producing badge */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-card/90 backdrop-blur px-3 py-1.5 border border-border"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em]">Live system · 8.4 kW</span>
      </motion.div>
    </div>
  );
}
