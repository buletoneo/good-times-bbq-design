import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "STORY", path: "/story" },
    { name: "MENU", path: "/menu" },
    { name: "BLOG", path: "/blog" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary py-2 px-4">
        <div className="container-custom flex justify-center items-center gap-4 text-sm text-primary-foreground">
          <a href="tel:+14167770735" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Tel:</span> +1 (416) 777-0735
          </a>
          <span className="hidden sm:inline">|</span>
          <a href="mailto:info@goodtimesbbq.ca" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Email:</span> info@goodtimesbbq.ca
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container-custom flex items-center justify-between py-4 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Good Times <span className="text-primary">BBQ</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-display text-sm tracking-widest transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="outline" className="font-display tracking-widest border-foreground text-foreground hover:bg-foreground hover:text-background">
                REQUEST QUOTE
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            <div className="container-custom py-4 px-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-display text-lg tracking-widest py-2 transition-colors hover:text-primary ${
                    isActive(link.path) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full font-display tracking-widest border-foreground text-foreground hover:bg-foreground hover:text-background">
                  REQUEST QUOTE
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
