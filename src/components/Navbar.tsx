import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/vmg-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/pricing", label: "Pricing" },
  { to: "/add-ons", label: "Add-Ons" },
  { to: "/laser-tag", label: "Laser Tag" },
  { to: "/house-party", label: "House Party" },
  { to: "/vr", label: "VR Thrills" },
  { to: "/service-area", label: "Service Area" },
  { to: "/policies", label: "Policies" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl bg-background/80 border-b border-border/60" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img src={logo} alt="VIP Mobile Gaming NJ logo" className="h-10 md:h-12 w-auto bg-white rounded-md p-1" width={120} height={48} />
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="text-sm font-bold tracking-widest text-primary">VMG</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">VIP Mobile Gaming NJ</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
                inactiveProps={{ className: "text-foreground/80 hover:text-primary" }}
                className="px-3 py-2 text-sm font-medium transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="tel:9734069001" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary">
              <Phone className="h-4 w-4" /> (973) 406-9001
            </a>
            <Link to="/contact" className="btn-primary hidden md:inline-flex !py-2 !px-5 text-sm">Book Now</Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 rounded-md border border-border/60 bg-surface/60"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl animate-fade-up">
            <div className="px-4 py-4 grid gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-primary bg-primary/10" }}
                  inactiveProps={{ className: "text-foreground/80" }}
                  className="px-4 py-3 rounded-lg text-sm font-medium"
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 justify-center">Book Now</Link>
              <a href="tel:9734069001" className="btn-ghost justify-center">
                <Phone className="h-4 w-4" /> (973) 406-9001
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Mobile floating CTA */}
      <Link
        to="/contact"
        className="md:hidden fixed bottom-4 right-4 z-40 btn-primary shadow-2xl animate-pulse-glow"
      >
        Book Now
      </Link>
    </>
  );
}
