import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Sun } from "lucide-react";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1600);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center gap-5">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-gradient shadow-amber-glow"
            >
              <Sun className="h-8 w-8 text-foreground" strokeWidth={2} />
              <motion.span
                className="absolute inset-0 rounded-2xl ring-2 ring-amber/40"
                animate={{ scale: [1, 1.35], opacity: [0.7, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
              />
            </motion.div>
            <div className="flex flex-col items-center gap-2">
              <span className="font-display font-semibold tracking-tight text-foreground">
                Sunshine Solar
              </span>
              <div className="h-[2px] w-40 overflow-hidden rounded-full bg-muted">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full w-full bg-amber-gradient"
                />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Charging your energy story
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
