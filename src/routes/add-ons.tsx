import { createFileRoute, Link } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Camera, Target, Gamepad2, Mic, Brush, PartyPopper, Trophy, Sparkles, Palette } from "lucide-react";

export const Route = createFileRoute("/add-ons")({
  head: () => ({
    meta: [
      { title: "Add-Ons — VIP Mobile Gaming NJ Party Extras" },
      { name: "description", content: "Photo booth, inflatable axe throw, giant Connect 4, soccer darts, VR, karaoke, face painting and more party add-ons." },
      { property: "og:title", content: "VIP Mobile Gaming NJ Add-Ons" },
      { property: "og:description", content: "Build the ultimate party with our premium add-ons." },
    ],
  }),
  component: AddOns,
});

const addons = [
  { i: Camera, t: "Photo Booth", d: "Instant prints, fun props, custom backdrops." },
  { i: Target, t: "Inflatable Axe Throw", d: "Safe foam axes — a guaranteed crowd favorite." },
  { i: Trophy, t: "Giant Connect 4", d: "Oversized strategy fun for all ages." },
  { i: PartyPopper, t: "Soccer Darts", d: "Inflatable target wall — kick to score." },
  { i: Gamepad2, t: "VR Gaming", d: "Immersive virtual reality experiences." },
  { i: Mic, t: "Karaoke", d: "Sing your heart out with pro-grade gear." },
  { i: Brush, t: "Face Painting", d: "Pro artists, dazzling designs." },
  { i: Sparkles, t: "Balloon Characters", d: "Custom balloon art from our entertainers." },
  { i: Palette, t: "Airbrush Tattoos", d: "Hundreds of designs to choose from." },
];

function AddOns() {
  return (
    <Layout>
      <PageHero
        eyebrow="Party Add-Ons"
        title={<>Stack The <span className="text-primary neon-text">Fun</span></>}
        subtitle="Mix and match premium add-ons to build the ultimate party. Available with any package."
      >
        <Link to="/contact" className="btn-primary">Build My Party</Link>
      </PageHero>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {addons.map((a) => (
            <div key={a.t} className="card-glow reveal rounded-2xl p-7 group">
              <div className="h-14 w-14 rounded-2xl bg-primary/15 border border-primary/30 grid place-items-center mb-5 transition-transform group-hover:scale-110">
                <a.i className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{a.t}</h3>
              <p className="text-muted-foreground text-sm">{a.d}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
