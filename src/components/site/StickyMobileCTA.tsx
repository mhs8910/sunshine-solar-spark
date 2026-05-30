import { Phone, MessageCircle } from "lucide-react";

export function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-3 inset-x-3 z-50">
      <div className="grid grid-cols-2 gap-2 rounded-2xl bg-foreground/95 backdrop-blur p-2 shadow-elevated">
        <a
          href="tel:+923004242895"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-card text-foreground py-3 text-sm font-medium"
        >
          <Phone className="h-4 w-4" /> Call
        </a>
        <a
          href="https://wa.me/923004242895"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-gradient text-foreground py-3 text-sm font-semibold"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
