import { createFileRoute, Link } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Check, Phone } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — VIP Mobile Gaming NJ Game Truck & Laser Tag Parties" },
      { name: "description", content: "Transparent pricing for game truck, laser tag, combo, and house party rentals in New Jersey. Custom packages available." },
      { property: "og:title", content: "VIP Mobile Gaming NJ Pricing" },
      { property: "og:description", content: "Game truck, laser tag, combo, and house party packages from $500." },
    ],
  }),
  component: Pricing,
});

const groups = [
  {
    name: "Birthday & Family Parties",
    accent: false,
    items: [
      { t: "1 Hour", p: "$500" },
      { t: "90 Minutes", p: "$549" },
      { t: "2 Hours", p: "$599" },
      { t: "Additional Time", p: "$125/hr" },
    ],
    perks: ["Up to 44 players", "Game coach included", "All consoles & games", "We come to you"],
  },
  {
    name: "Laser Tag",
    accent: true,
    items: [
      { t: "90 Minutes", p: "$550" },
      { t: "VIP Upgrade", p: "$750" },
      { t: "2 Hours", p: "$650" },
    ],
    perks: ["Battle Rifle Pro gear", "Indoor or outdoor", "Up to 20 players", "All ages welcome"],
  },
  {
    name: "Combo Parties",
    accent: false,
    items: [
      { t: "2 Hour Combo", p: "$800" },
      { t: "3 Hour Combo", p: "$1000" },
      { t: "Additional Time", p: "$200/hr" },
    ],
    perks: ["Game Truck + Laser Tag", "Maximum fun, one event", "Two professional hosts", "Best value bundle"],
  },
  {
    name: "House Party",
    accent: false,
    items: [
      { t: "90 Minutes", p: "$650" },
      { t: "2 Hours", p: "$700" },
    ],
    perks: ["5 HD gaming centers inside", "All equipment included", "Game coach included", "Great for homes & halls"],
  },
];

function Pricing() {
  return (
    <Layout>
      <PageHero
        eyebrow="Transparent Pricing"
        title={<>Pick Your <span className="text-primary neon-text">Package</span></>}
        subtitle="No hidden fees. No surprises. Just an unforgettable party."
      >
        <Link to="/contact" className="btn-primary">Book Now</Link>
        <a href="tel:9734069001" className="btn-ghost"><Phone className="h-4 w-4" /> Custom Pricing</a>
      </PageHero>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {groups.map((g) => (
            <div key={g.name} className={`card-glow reveal rounded-3xl p-7 md:p-9 ${g.accent ? "border-primary/60" : ""}`}>
              {g.accent && (
                <div className="inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-primary text-primary-foreground mb-3">Most Popular</div>
              )}
              <h3 className="text-2xl md:text-3xl font-black">{g.name}</h3>
              <div className="mt-6 space-y-3">
                {g.items.map((i) => (
                  <div key={i.t} className="flex items-center justify-between py-3 border-b border-border/60">
                    <span className="font-medium">{i.t}</span>
                    <span className="text-2xl font-black text-primary neon-text">{i.p}</span>
                  </div>
                ))}
              </div>
              <ul className="mt-6 space-y-2.5">
                {g.perks.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-primary" /> {p}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary w-full mt-7 justify-center">Reserve This Package</Link>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto px-6 text-center reveal">
          <div className="card-glow rounded-2xl p-6">
            <p className="text-muted-foreground">
              Special requests, large events, schools, corporate events, and custom packages available. <a href="tel:9734069001" className="text-primary font-semibold">Call for custom pricing.</a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
