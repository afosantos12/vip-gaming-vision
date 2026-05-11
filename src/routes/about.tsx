import { createFileRoute, Link } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Heart, Users, MapPin, Sparkles } from "lucide-react";
import truck from "@/assets/hero-truck.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About VIP Mobile Gaming NJ — Family-Owned in Towaco, NJ" },
      { name: "description", content: "Family-owned mobile gaming entertainment in Towaco, New Jersey. Bringing unforgettable, stress-free parties to families across Northern NJ." },
      { property: "og:title", content: "About VIP Mobile Gaming NJ" },
      { property: "og:description", content: "Family-owned & locally operated in Towaco, NJ." },
      { property: "og:image", content: "/hero-truck.jpg" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <PageHero
        eyebrow="Our Story"
        title={<>Family-Owned. <span className="text-primary neon-text">Gaming-Obsessed.</span></>}
        subtitle="VIP Mobile Gaming NJ was built by a family who believes parties should be unforgettable — and parents should be stress-free."
        image={truck}
      >
        <Link to="/contact" className="btn-primary">Book Your Event</Link>
      </PageHero>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-lg text-muted-foreground leading-relaxed reveal">
          <p>What started as a passion for gaming and a love of bringing families together has grown into Northern New Jersey's most loved mobile entertainment experience.</p>
          <p>From our headquarters in <span className="text-foreground font-semibold">Towaco, NJ</span>, we travel across Morris, Essex, Bergen, Union, Passaic, Sussex, and Hudson counties — delivering parties that kids brag about and parents thank us for.</p>
          <p>Every event is run by professional game coaches who know how to keep the energy high, the gameplay fair, and the experience absolutely magical for every kid in the truck.</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-surface/30">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-14 reveal">Our Journey</h2>
          <div className="space-y-6">
            {[
              { y: "Day One", t: "A Family Idea", d: "Two parents and a dream: turn local birthdays into legendary memories." },
              { y: "Year One", t: "The Truck Arrives", d: "Our flagship 11-station gaming truck rolls out of Towaco for its first party." },
              { y: "Today", t: "1,000+ Parties Later", d: "We've grown to laser tag, VR, game bus, and house parties — across all of Northern NJ." },
            ].map((s, i) => (
              <div key={i} className="card-glow reveal rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6">
                <div className="md:w-40 shrink-0">
                  <div className="text-xs font-bold uppercase tracking-widest text-primary">{s.y}</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{s.t}</h3>
                  <p className="text-muted-foreground">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { i: Heart, n: "1,000+", l: "Parties Hosted" },
            { i: Users, n: "44", l: "Max Players" },
            { i: MapPin, n: "7", l: "Counties Served" },
            { i: Sparkles, n: "5★", l: "Average Rating" },
          ].map((s, i) => (
            <div key={i} className="card-glow reveal rounded-2xl p-6 text-center">
              <s.i className="h-7 w-7 text-primary mx-auto mb-3" />
              <div className="text-3xl font-black neon-text text-primary">{s.n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
