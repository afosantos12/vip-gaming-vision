import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Sparkles, ShieldCheck, Truck, Thermometer, Gamepad2, Users, Star, ChevronRight, Phone,
  Zap, Trophy, MapPin,
} from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-truck.jpg";
import interiorImg from "@/assets/truck-interior.jpg";
import laserImg from "@/assets/laser-tag.jpg";
import vrImg from "@/assets/vr.jpg";
import busImg from "@/assets/game-bus.jpg";
import houseImg from "@/assets/house-party.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VIP Mobile Gaming NJ — Game Truck, Laser Tag & VR Parties in New Jersey" },
      { name: "description", content: "New Jersey's premier mobile gaming truck, game bus, laser tag and VR party rental. Family-owned, climate controlled, up to 44 players. Serving Morris, Essex, Bergen & more." },
      { property: "og:title", content: "VIP Mobile Gaming NJ — Ultimate Mobile Video Game Party" },
      { property: "og:description", content: "Luxury game truck, laser tag and VR experiences delivered to your driveway anywhere in Northern NJ." },
      { property: "og:image", content: "/hero-truck.jpg" },
    ],
  }),
  component: Home,
});

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <span>{n}{suffix}</span>;
}

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="VIP Mobile Gaming truck at night with red neon lighting" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>
        <div className="absolute inset-0 grid-bg opacity-50" />

        {/* Floating controllers */}
        <Gamepad2 className="absolute top-32 right-10 h-16 w-16 text-primary/30 animate-float hidden md:block" />
        <Gamepad2 className="absolute bottom-32 left-10 h-12 w-12 text-primary/20 animate-float hidden md:block" style={{ animationDelay: "1.5s" }} />

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 animate-fade-up">
              <Sparkles className="h-3.5 w-3.5" /> Northern New Jersey · Family-Owned
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] animate-fade-up">
              New Jersey's <span className="text-primary neon-text">Ultimate</span> Mobile Video Game Party
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-up">
              VIP Mobile Gaming brings the party directly to your driveway with luxury gaming trucks, laser tag battles, VR experiences, game buses, and unforgettable events.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up">
              <Link to="/contact" className="btn-primary text-base">Book Now <ChevronRight className="h-4 w-4" /></Link>
              <Link to="/pricing" className="btn-ghost">View Pricing</Link>
              <a href="tel:9734069001" className="btn-ghost"><Phone className="h-4 w-4" /> (973) 406-9001</a>
            </div>

            {/* Trust badges */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-5 gap-3 animate-fade-up">
              {[
                { i: Users, t: "Up to 44 Players" },
                { i: Thermometer, t: "Climate Controlled" },
                { i: Truck, t: "We Come To You" },
                { i: Trophy, t: "Game Coach Included" },
                { i: MapPin, t: "Serving North Jersey" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-border/60 bg-surface/60 backdrop-blur">
                  <b.i className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-xs font-medium leading-tight">{b.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY PARENTS LOVE VIP */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Why Parents Love VIP" title={<>Effortless. Premium. <span className="text-primary">Unforgettable.</span></>} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { i: Sparkles, t: "No Mess, No Stress", d: "We bring it all and clean it all up. You enjoy the party." },
              { i: Truck, t: "We Come To You", d: "Anywhere in Northern NJ. Right in your driveway." },
              { i: ShieldCheck, t: "Safe & Sanitized", d: "Equipment fully cleaned between every event." },
              { i: Thermometer, t: "Climate Controlled", d: "Heat in winter, A/C in summer. Always comfortable." },
              { i: Trophy, t: "Pro Game Coaches", d: "Friendly hosts run the entire experience." },
              { i: Gamepad2, t: "Latest Consoles & Games", d: "Xbox, PlayStation, Nintendo Switch — every hit title." },
            ].map((c, i) => (
              <div key={i} className="card-glow reveal rounded-2xl p-6">
                <div className="h-12 w-12 rounded-xl bg-primary/15 border border-primary/30 grid place-items-center mb-4">
                  <c.i className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{c.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="relative py-24 md:py-32 bg-surface/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Experiences" title={<>Choose Your <span className="text-primary">Adventure</span></>} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { img: heroImg, t: "Game Truck", d: "11 HD stations · Up to 44 players · Stadium seating.", to: "/pricing" },
              { img: busImg, t: "Game Bus", d: "6 × 55-inch TVs · 18 players · Newest consoles.", to: "/pricing" },
              { img: laserImg, t: "Laser Tag", d: "Battle Rifle Pro · Indoor/outdoor · Up to 20 players.", to: "/laser-tag" },
              { img: houseImg, t: "House Party", d: "5 HD gaming centers brought inside your home.", to: "/house-party" },
              { img: vrImg, t: "VR Experiences", d: "VR Theater, motocross, roller coaster & more.", to: "/vr" },
              { img: interiorImg, t: "Combo Parties", d: "Mix Game Truck + Laser Tag for the ultimate event.", to: "/pricing" },
            ].map((s, i) => (
              <Link key={i} to={s.to} className="card-glow reveal rounded-2xl overflow-hidden group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={s.img} alt={s.t} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1.5">{s.t}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{s.d}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">Learn more <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GAME TRUCK FEATURE */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={interiorImg} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">The Flagship</p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">The Ultimate Game Truck Experience</h2>
            <p className="mt-5 text-muted-foreground text-lg">A self-powered cinematic gaming arena that pulls right up to your driveway.</p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {["11 HD gaming stations", "9 inside + 2 outside", "Up to 44 players", "Stadium seating", "LED neon lighting", "Heat & A/C", "Self-powered generator", "Works almost anywhere"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Zap className="h-4 w-4 text-primary" /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <Link to="/contact" className="btn-primary">Reserve Your Date</Link>
              <Link to="/pricing" className="btn-ghost">See Pricing</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 reveal">
            {[
              { n: 11, s: "", l: "HD Stations" },
              { n: 44, s: "", l: "Max Players" },
              { n: 1000, s: "+", l: "Parties Hosted" },
              { n: 100, s: "%", l: "Climate Controlled" },
            ].map((s, i) => (
              <div key={i} className="card-glow rounded-2xl p-6 text-center">
                <div className="text-4xl md:text-5xl font-black text-primary neon-text">
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GAME BUS */}
      <section className="relative py-24 md:py-32 bg-surface/30">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal rounded-2xl overflow-hidden border border-border">
            <img src={busImg} alt="Compact game bus exterior" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="reveal">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">Compact Game Bus</p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">Perfect For Tighter Streets</h2>
            <p className="mt-5 text-muted-foreground text-lg">All the gaming power in a smaller footprint — ideal for neighborhoods where the truck won't fit.</p>
            <ul className="mt-6 space-y-3">
              {["6 × 55-inch TVs", "Up to 18 players", "Newest consoles", "Same incredible vibes"].map((f) => (
                <li key={f} className="flex items-center gap-3"><Zap className="h-4 w-4 text-primary" /> {f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* LASER TAG */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={laserImg} alt="" className="w-full h-full object-cover opacity-30" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl reveal">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">Battle Rifle Pro</p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">Laser Tag, <span className="text-primary neon-text">Reimagined</span></h2>
            <p className="mt-5 text-muted-foreground text-lg">Tactical, fast-paced team battles with professional-grade gear — indoor or outdoor, day or night.</p>
            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {["Indoor / Outdoor", "Up to 20 Players", "All Ages Welcome"].map((t) => (
                <div key={t} className="card-glow rounded-xl p-4 text-center text-sm font-semibold">{t}</div>
              ))}
            </div>
            <Link to="/laser-tag" className="btn-primary mt-8">Explore Laser Tag</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-24 md:py-32 bg-surface/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Real Parents · Real Reviews" title={<>What Families Are <span className="text-primary">Saying</span></>} />
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { n: "Jennifer M.", r: "The easiest birthday party I have ever thrown. The kids didn't want to leave the truck!" },
              { n: "Mark T.", r: "Our game coach was incredible — kept all 20 kids engaged the entire time. Worth every penny." },
              { n: "Priya K.", r: "Saved our last-minute party. They booked us in 48 hours and showed up with a spotless truck." },
              { n: "Dave R.", r: "Combo with laser tag was insane. Best birthday in 12 years of being a dad." },
              { n: "Lauren S.", r: "Truck was spotless, climate controlled, and the kids loved every game. 10/10." },
              { n: "Anthony P.", r: "Professional, on-time, and the LED lighting made it feel like a real esports event." },
            ].map((t, i) => (
              <div key={i} className="card-glow reveal rounded-2xl p-6">
                <div className="flex gap-0.5 mb-3">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-primary text-primary" />)}</div>
                <p className="text-sm leading-relaxed text-foreground/90">"{t.r}"</p>
                <p className="mt-4 text-xs font-semibold text-muted-foreground uppercase tracking-widest">— {t.n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA PREVIEW */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Service Area" title={<>Bringing The Party To <span className="text-primary">Northern NJ</span></>} />
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="reveal relative aspect-square max-w-md mx-auto w-full">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative grid grid-cols-3 gap-3 p-6">
                {["Morris", "Essex", "Union", "Sussex", "Passaic", "Bergen", "Hudson"].map((c, i) => (
                  <div
                    key={c}
                    className={`card-glow rounded-xl p-4 text-center ${i === 0 ? "col-span-3 border-primary/60" : ""}`}
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">County</div>
                    <div className="text-lg font-bold">{c}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal">
              <p className="text-lg text-muted-foreground">
                Based in <span className="text-foreground font-semibold">Towaco, NJ</span>, we travel up to <span className="text-primary font-bold">25 miles with no travel fee</span>. Travel surcharge may apply beyond that radius.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {["Morris", "Essex", "Union", "Passaic", "Bergen", "Sussex", "Hudson"].map((c) => (
                  <div key={c} className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-surface/60">
                    <MapPin className="h-4 w-4 text-primary" /> <span className="text-sm font-medium">{c} County</span>
                  </div>
                ))}
              </div>
              <Link to="/service-area" className="btn-ghost mt-8">View Full Service Area</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black leading-tight reveal">
            Ready To <span className="text-primary neon-text">Level Up</span> Your Party?
          </h2>
          <p className="mt-5 text-lg text-muted-foreground reveal">Dates fill up fast — especially weekends. Reserve yours in minutes.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 reveal">
            <Link to="/contact" className="btn-primary text-base">Book Now</Link>
            <a href="tel:9734069001" className="btn-ghost"><Phone className="h-4 w-4" /> Call (973) 406-9001</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) {
  return (
    <div className="text-center mb-14 reveal">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">{eyebrow}</p>
      <h2 className="text-4xl md:text-5xl font-black leading-tight">{title}</h2>
    </div>
  );
}
