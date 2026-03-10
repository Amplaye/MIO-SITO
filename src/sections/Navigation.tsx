import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Servizi", href: "#servizi" },
  { label: "Processo", href: "#processo" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contatti", href: "#contatti" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold text-white hidden sm:block">
              NEXUS
            </span>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white rounded-xl transition-all duration-300 hover:scale-105">
              <a href="#contatti">Inizia il tuo progetto</a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-lg glass flex items-center justify-center text-white"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-xl mt-2">
              <a href="#contatti">Inizia il tuo progetto</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
