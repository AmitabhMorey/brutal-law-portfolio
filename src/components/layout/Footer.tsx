import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background border-t-4 border-foreground">
      {/* Marquee */}
      <div className="bg-primary text-primary-foreground border-b-4 border-background overflow-hidden py-3">
        <div className="marquee whitespace-nowrap">
          <span className="inline-block font-mono font-bold text-lg tracking-wider">
            JUSTICE PREVAILS • WINNING CASES SINCE 2005 • FREE CONSULTATION • 
            JUSTICE PREVAILS • WINNING CASES SINCE 2005 • FREE CONSULTATION • 
            JUSTICE PREVAILS • WINNING CASES SINCE 2005 • FREE CONSULTATION • 
            JUSTICE PREVAILS • WINNING CASES SINCE 2005 • FREE CONSULTATION • 
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-primary border-4 border-background shadow-[4px_4px_0_0_hsl(var(--background))] flex items-center justify-center font-mono font-bold text-2xl text-primary-foreground">
                JD
              </div>
              <div>
                <h3 className="font-bold text-xl">JAMES DRAKE</h3>
                <p className="text-sm font-mono opacity-80">Attorney at Law</p>
              </div>
            </div>
            <p className="font-mono text-sm opacity-80 leading-relaxed">
              Fighting for justice with unwavering dedication. 
              Your rights, our mission.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg uppercase tracking-wider border-b-4 border-primary pb-2 inline-block">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Cases", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="group flex items-center gap-2 font-mono hover:text-primary transition-colors"
                  >
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg uppercase tracking-wider border-b-4 border-primary pb-2 inline-block">
              Practice Areas
            </h4>
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary"></span>
                Criminal Defense
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary"></span>
                Corporate Law
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary"></span>
                Civil Litigation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary"></span>
                Family Law
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg uppercase tracking-wider border-b-4 border-primary pb-2 inline-block">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                <span className="font-mono text-sm">
                  123 Legal Avenue, Suite 500<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <a href="tel:+1234567890" className="font-mono text-sm hover:text-primary transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <a href="mailto:james@drakelaw.com" className="font-mono text-sm hover:text-primary transition-colors">
                  james@drakelaw.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t-4 border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-sm opacity-80">
            © {currentYear} James Drake Law. All rights reserved.
          </p>
          <div className="flex gap-6 font-mono text-sm">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
