import { createFileRoute, Link } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Home, Tv, Trophy, PackageCheck } from "lucide-react";
import img from "@/assets/house-party.jpg";

export const Route = createFileRoute("/house-party")({
  head: () => ({
    meta: [
      { title: "House Party Gaming Rental NJ — Indoor Game Centers | VIP Mobile Gaming" },
      { name: "description", content: "Bring 5 HD gaming centers right into your home or community space. Game coach and equipment included." },
      { property: "og:title", content: "House Party Gaming Rental NJ" },
      { property: "og:description", content: "5 HD gaming centers brought inside — game coach included." },
      { property: "og:image", content: "/house-party.jpg" },
    ],
  }),
  component: House,
});

function House() {
  return (
    <Layout>
      <PageHero
        eyebrow="House Party"
        title={<>The Gaming Truck — <span className="text-primary neon-text">Indoors</span></>}
        subtitle="Five HD gaming centers, a pro coach, and all the equipment delivered directly into your home or community space."
        image={img}
      >
        <Link to="/contact" className="btn-primary">Book A House Party</Link>
        <Link to="/pricing" className="btn-ghost">See Pricing</Link>
      </PageHero>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { i: Tv, t: "5 HD Gaming Centers", d: "Premium TVs and consoles, set up inside" },
            { i: Trophy, t: "Pro Game Coach", d: "Runs tournaments and keeps energy high" },
            { i: PackageCheck, t: "All Equipment", d: "Consoles, controllers, games — we bring it all" },
            { i: Home, t: "Home or Hall", d: "Living rooms, basements, community spaces" },
          ].map((c) => (
            <div key={c.t} className="card-glow reveal rounded-2xl p-6 text-center">
              <c.i className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-1">{c.t}</h3>
              <p className="text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
