import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Cases", path: "/cases" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-4 border-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-12 h-12 bg-primary border-4 border-foreground shadow-brutal-sm flex items-center justify-center font-mono font-bold text-xl group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-brutal transition-all">
              JD
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">
              JAMES DRAKE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 font-bold uppercase text-sm tracking-wider border-4 border-transparent transition-all hover:border-foreground hover:bg-accent",
                  location.pathname === link.path && "bg-primary border-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild variant="brutal" size="sm">
              <Link to="/contact">Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-12 h-12 border-4 border-foreground shadow-brutal-sm flex items-center justify-center hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal transition-all"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t-4 border-foreground py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 font-bold uppercase tracking-wider border-4 border-transparent transition-all hover:border-foreground hover:bg-accent",
                  location.pathname === link.path && "bg-primary border-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button asChild variant="brutal" className="w-full">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
