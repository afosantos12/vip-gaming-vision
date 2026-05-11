import { createFileRoute, Link } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import { Crosshair, Users, Sun, Moon, Phone } from "lucide-react";
import laser from "@/assets/laser-tag.jpg";

export const Route = createFileRoute("/laser-tag")({
  head: () => ({
    meta: [
      { title: "Laser Tag Party Rental NJ — Battle Rifle Pro | VIP Mobile Gaming" },
      { name: "description", content: "Professional Battle Rifle Pro laser tag for parties in New Jersey. Indoor or outdoor, up to 20 players, all ages." },
      { property: "og:title", content: "Laser Tag Party Rental NJ" },
      { property: "og:description", content: "Tactical Battle Rifle Pro laser tag — indoor or outdoor — up to 20 players." },
      { property: "og:image", content: "/laser-tag.jpg" },
    ],
  }),
  component: Laser,
});

function Laser() {
  return (
    <Layout>
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={laser} alt="Laser tag battle with red neon lights" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 animate-fade-up">Battle Rifle Pro</p>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] animate-fade-up">
              Tactical <span className="text-primary neon-text">Laser Tag</span> Combat
            </h1>
            <p className="mt-6 text-lg text-muted-foreground animate-fade-up">
              Fast-paced team battles with professional infrared gear. Day or night, indoor or outdoor — we transform any space into a battlefield.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up">
              <Link to="/contact" className="btn-primary">Book Laser Tag</Link>
              <Link to="/pricing" className="btn-ghost">View Pricing</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { i: Crosshair, t: "Battle Rifle Pro", d: "Professional-grade IR gear" },
            { i: Users, t: "Up to 20 Players", d: "Team-based mayhem" },
            { i: Sun, t: "Indoor or Outdoor", d: "Day or night, any space" },
            { i: Moon, t: "All Ages", d: "Kids, teens, adults — all welcome" },
          ].map((c) => (
            <div key={c.t} className="card-glow reveal rounded-2xl p-6 text-center">
              <c.i className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-1">{c.t}</h3>
              <p className="text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-surface/30">
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Combine With Game Truck</h2>
          <p className="text-lg text-muted-foreground mb-8">Our Combo Parties pair the gaming truck with full laser tag battles — the ultimate event for any age.</p>
          <Link to="/pricing" className="btn-primary">See Combo Pricing</Link>
          <a href="tel:9734069001" className="btn-ghost ml-2"><Phone className="h-4 w-4" /> Call Now</a>
        </div>
      </section>
    </Layout>
  );
}
