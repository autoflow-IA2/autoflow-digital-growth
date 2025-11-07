import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, X } from "lucide-react";
import { useState } from "react";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(true);

  const scrollToCTA = () => {
    const ctaSection = document.getElementById("cta-final");
    ctaSection?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col gap-3 items-end animate-fade-in">
      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="w-8 h-8 rounded-full bg-background/90 backdrop-blur-sm border-2 border-primary/30 hover:border-primary flex items-center justify-center transition-all hover:scale-110 shadow-lg"
        aria-label="Fechar"
      >
        <X className="w-4 h-4 text-foreground" />
      </button>

      {/* Main CTA Button */}
      <Button
        onClick={scrollToCTA}
        variant="gradient"
        size="lg"
        className="rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none group min-w-[200px]"
      >
        <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
        <span className="font-bold">Falar Agora</span>
      </Button>

      {/* WhatsApp Quick Action */}
      <Button
        onClick={() => {
          const whatsappNumber = "5511917302219";
          window.open(`https://wa.me/${whatsappNumber}`, "_blank");
        }}
        variant="outline"
        size="lg"
        className="rounded-full bg-green-500 hover:bg-green-600 text-white border-green-600 shadow-xl hover:scale-105 transition-all duration-300"
      >
        <MessageSquare className="w-5 h-5 mr-2" />
        <span className="font-semibold">WhatsApp</span>
      </Button>
    </div>
  );
};

