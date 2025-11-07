import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const logoUrl = "https://iygvxnnumykapvaufncm.supabase.co/storage/v1/object/public/logo/logonova-Photoroom.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Soluções", id: "solucoes" },
    { label: "Sobre", id: "sobre" },
    { label: "Depoimentos", id: "depoimentos" },
    { label: "Contato", id: "cta-final" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass border-b border-primary/20 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="Voltar ao topo"
          >
            <img
              src={logoUrl}
              alt="AutoFlow IA²"
              className="h-8 sm:h-10 w-auto"
              loading="eager"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
            <span className="text-lg sm:text-xl font-bold gradient-text hidden sm:inline">
              AutoFlow IA²
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-semibold text-[#D946EF] hover:text-[#EC4899] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D946EF] focus-visible:ring-offset-2 rounded-md px-2 py-1 drop-shadow-[0_0_8px_rgba(217,70,239,0.8)] hover:drop-shadow-[0_0_12px_rgba(236,72,153,1)]"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("cta-final")}
              variant="gradient"
              size="sm"
              className="gap-2"
            >
              <Phone className="w-4 h-4" />
              Falar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/20 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left px-4 py-2 text-[#D946EF] hover:text-[#EC4899] hover:bg-[#D946EF]/10 rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D946EF] drop-shadow-[0_0_8px_rgba(217,70,239,0.8)] hover:drop-shadow-[0_0_12px_rgba(236,72,153,1)]"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("cta-final")}
                variant="gradient"
                className="mx-4 gap-2"
              >
                <Phone className="w-4 h-4" />
                Falar Agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

