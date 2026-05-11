import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/vmg-logo.png";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60 bg-surface/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div>
          <img src={logo} alt="VIP Mobile Gaming NJ" className="h-14 w-auto bg-white rounded-md p-1.5 mb-4" width={140} height={56} />
          <p className="text-sm text-muted-foreground leading-relaxed">
            New Jersey's premier mobile gaming truck, laser tag, and VR party experience. Family-owned in Towaco, NJ.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-surface-elevated hover:text-primary"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-surface-elevated hover:text-primary"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
            <li><Link to="/service-area" className="hover:text-foreground">Service Area</Link></li>
            <li><Link to="/policies" className="hover:text-foreground">Policies</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Experiences</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/laser-tag" className="hover:text-foreground">Laser Tag</Link></li>
            <li><Link to="/house-party" className="hover:text-foreground">House Party</Link></li>
            <li><Link to="/vr" className="hover:text-foreground">VIP Virtual Thrills</Link></li>
            <li><Link to="/add-ons" className="hover:text-foreground">Add-Ons</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Book Now</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> <a href="tel:9734069001" className="hover:text-foreground">(973) 406-9001</a></li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> <a href="mailto:info@vipmobilegamingnj.com" className="hover:text-foreground">info@vipmobilegamingnj.com</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> Towaco, NJ — serving Northern New Jersey</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} VIP Mobile Gaming NJ. All rights reserved.</p>
          <p>Serving Morris, Essex, Union, Passaic, Bergen, Sussex & Hudson counties.</p>
        </div>
      </div>
    </footer>
  );
}
