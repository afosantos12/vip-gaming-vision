import { createFileRoute, Link } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/service-area")({
  head: () => ({
    meta: [
      { title: "Service Area — VIP Mobile Gaming NJ (Northern New Jersey)" },
      { name: "description", content: "We serve Morris, Essex, Union, Passaic, Bergen, Sussex and Hudson counties. 25 miles free from Towaco, NJ." },
      { property: "og:title", content: "VIP Mobile Gaming NJ — Service Area" },
      { property: "og:description", content: "Serving Northern New Jersey from Towaco, NJ." },
    ],
  }),
  component: Area,
});

const counties = [
  { n: "Morris", c: "Boonton · Parsippany · Morristown · Denville · Randolph" },
  { n: "Essex", c: "Montclair · Livingston · West Orange · Caldwell · Verona" },
  { n: "Union", c: "Westfield · Summit · Cranford · New Providence · Berkeley Heights" },
  { n: "Passaic", c: "Wayne · Clifton · Little Falls · Totowa · Woodland Park" },
  { n: "Bergen", c: "Ridgewood · Paramus · Mahwah · Wyckoff · Franklin Lakes" },
  { n: "Sussex", c: "Sparta · Newton · Vernon · Hopatcong · Andover" },
  { n: "Hudson", c: "Jersey City · Hoboken · Secaucus · Bayonne · North Bergen" },
];

function Area() {
  return (
    <Layout>
      <PageHero
        eyebrow="Northern New Jersey"
        title={<>Where We <span className="text-primary neon-text">Roll</span></>}
        subtitle="Headquartered in Towaco, NJ. Free travel within 25 miles — small surcharge beyond."
      />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Stylized map */}
          <div className="reveal relative aspect-square max-w-md mx-auto w-full">
            <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle, oklch(0.62 0.22 22 / 0.25), transparent 60%)" }} />
            <div className="absolute inset-12 rounded-full border-2 border-dashed border-primary/40 animate-pulse-glow" />
            <div className="absolute inset-24 rounded-full border-2 border-primary/30" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <MapPin className="h-10 w-10 text-primary mx-auto neon-text" />
                <div className="mt-2 font-black text-lg">Towaco, NJ</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Headquarters</div>
                <div className="mt-3 inline-flex px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">25 mi Free Zone</div>
              </div>
            </div>
          </div>

          <div className="grid gap-3 reveal">
            {counties.map((c) => (
              <div key={c.n} className="card-glow rounded-2xl p-5 flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/15 grid place-items-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold">{c.n} County</div>
                  <div className="text-sm text-muted-foreground">{c.c}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto px-6 text-center reveal">
          <div className="card-glow rounded-2xl p-8">
            <p className="text-lg text-muted-foreground">
              We travel up to <span className="text-primary font-bold">25 miles from Towaco, NJ with no travel fee</span>. A travel surcharge may apply beyond that radius — contact us for an exact quote.
            </p>
            <Link to="/contact" className="btn-primary mt-6">Check My Address</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
