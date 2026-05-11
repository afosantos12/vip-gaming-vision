import { createFileRoute, Link } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import { Film, Bike, RollerCoaster, Users } from "lucide-react";
import vr from "@/assets/vr.jpg";

export const Route = createFileRoute("/vr")({
  head: () => ({
    meta: [
      { title: "VIP Virtual Thrills — VR Party Rental NJ" },
      { name: "description", content: "Futuristic VR experiences: VR Theater, VR Motocross, VR Roller Coaster, and 4-person VR rides." },
      { property: "og:title", content: "VIP Virtual Thrills — VR Party Rental NJ" },
      { property: "og:description", content: "VR Theater, motocross, roller coaster and 4-person rides." },
      { property: "og:image", content: "/vr.jpg" },
    ],
  }),
  component: VR,
});

function VR() {
  return (
    <Layout>
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={vr} alt="Person wearing VR headset with red neon glow" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 animate-fade-up">VIP Virtual Thrills</p>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] animate-fade-up">
              Step Into <span className="text-primary neon-text">Another World</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground animate-fade-up">
              Cinematic, motion-driven VR experiences that turn your party into the future.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up">
              <Link to="/contact" className="btn-primary">Book VR Experience</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { i: Film, t: "VR Theater", d: "Immersive 360° cinematic experiences" },
            { i: Bike, t: "VR Motocross", d: "High-speed motion-driven racing" },
            { i: RollerCoaster, t: "VR Roller Coaster", d: "Stomach-dropping virtual rides" },
            { i: Users, t: "4-Person VR Ride", d: "Group experience — everyone goes together" },
          ].map((c) => (
            <div key={c.t} className="card-glow reveal rounded-2xl p-6 text-center group">
              <div className="h-14 w-14 rounded-2xl bg-primary/15 border border-primary/30 grid place-items-center mx-auto mb-4 transition-transform group-hover:scale-110">
                <c.i className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold mb-1">{c.t}</h3>
              <p className="text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
