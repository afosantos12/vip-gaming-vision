import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import { useState } from "react";
import { Truck, Crosshair, Home, Sparkles, Camera, Target, Gamepad2, Mic, Brush, Check, ChevronRight, ChevronLeft, Phone, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book Your Party — VIP Mobile Gaming NJ" },
      { name: "description", content: "Reserve your game truck, laser tag, VR or combo party in Northern New Jersey. Easy online booking." },
      { property: "og:title", content: "Book Your Party — VIP Mobile Gaming NJ" },
      { property: "og:description", content: "Reserve your party with our quick online booking flow." },
    ],
  }),
  component: Contact,
});

const eventTypes = [
  { id: "truck", t: "Game Truck", d: "Up to 44 players · From $500", i: Truck },
  { id: "laser", t: "Laser Tag", d: "Up to 20 players · From $550", i: Crosshair },
  { id: "combo", t: "Combo Party", d: "Truck + Laser Tag · From $800", i: Sparkles },
  { id: "house", t: "House Party", d: "5 indoor stations · From $650", i: Home },
];

const packages: Record<string, { id: string; t: string; p: string }[]> = {
  truck: [
    { id: "1h", t: "1 Hour", p: "$500" },
    { id: "90", t: "90 Minutes", p: "$549" },
    { id: "2h", t: "2 Hours", p: "$599" },
  ],
  laser: [
    { id: "90", t: "90 Minutes", p: "$550" },
    { id: "vip", t: "VIP Upgrade", p: "$750" },
    { id: "2h", t: "2 Hours", p: "$650" },
  ],
  combo: [
    { id: "2h", t: "2 Hour Combo", p: "$800" },
    { id: "3h", t: "3 Hour Combo", p: "$1000" },
  ],
  house: [
    { id: "90", t: "90 Minutes", p: "$650" },
    { id: "2h", t: "2 Hours", p: "$700" },
  ],
};

const addons = [
  { id: "photo", t: "Photo Booth", i: Camera },
  { id: "axe", t: "Inflatable Axe Throw", i: Target },
  { id: "vr", t: "VR Gaming", i: Gamepad2 },
  { id: "karaoke", t: "Karaoke", i: Mic },
  { id: "face", t: "Face Painting", i: Brush },
  { id: "balloons", t: "Balloon Characters", i: Sparkles },
];

function Contact() {
  const [step, setStep] = useState(1);
  const [event, setEvent] = useState<string>("");
  const [pkg, setPkg] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [picked, setPicked] = useState<string[]>([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", notes: "" });

  const toggleAddon = (id: string) => setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const eventObj = eventTypes.find((e) => e.id === event);
  const pkgObj = event ? packages[event].find((p) => p.id === pkg) : undefined;

  const canNext = (step === 1 && event) || (step === 2 && pkg) || (step === 3 && date) || step === 4;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(6);
  };

  return (
    <Layout>
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">Book Your Party</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">Reserve In <span className="text-primary neon-text">Minutes</span></h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Pick your experience, package, date, and add-ons. We'll confirm by phone within 24 hours.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
          {/* FLOW */}
          <div className="lg:col-span-2">
            {/* Progress */}
            <div className="flex items-center gap-2 mb-8">
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className="flex-1 h-1.5 rounded-full overflow-hidden bg-surface-elevated">
                  <div className={`h-full transition-all duration-500 ${step >= n ? "bg-primary" : ""}`} style={{ width: step >= n ? "100%" : "0%" }} />
                </div>
              ))}
            </div>

            <div className="card-glow rounded-3xl p-6 md:p-8">
              {step === 1 && (
                <div className="animate-fade-up">
                  <h2 className="text-2xl font-black mb-1">Choose Your Experience</h2>
                  <p className="text-muted-foreground text-sm mb-6">What kind of party are we throwing?</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {eventTypes.map((e) => (
                      <button key={e.id} onClick={() => { setEvent(e.id); setPkg(""); }} className={`text-left rounded-2xl p-5 border transition-all ${event === e.id ? "border-primary bg-primary/10" : "border-border bg-surface/40 hover:border-primary/40"}`}>
                        <e.i className="h-6 w-6 text-primary mb-3" />
                        <div className="font-bold">{e.t}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{e.d}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="animate-fade-up">
                  <h2 className="text-2xl font-black mb-1">Pick A Package</h2>
                  <p className="text-muted-foreground text-sm mb-6">How long should the fun last?</p>
                  <div className="grid gap-3">
                    {(event ? packages[event] : []).map((p) => (
                      <button key={p.id} onClick={() => setPkg(p.id)} className={`flex items-center justify-between rounded-2xl p-5 border transition-all ${pkg === p.id ? "border-primary bg-primary/10" : "border-border bg-surface/40 hover:border-primary/40"}`}>
                        <span className="font-bold">{p.t}</span>
                        <span className="text-xl font-black text-primary">{p.p}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="animate-fade-up">
                  <h2 className="text-2xl font-black mb-1">Pick A Date</h2>
                  <p className="text-muted-foreground text-sm mb-6">Weekends fill up fast — book early.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">Date</span>
                      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="mt-1.5 w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary outline-none" />
                    </label>
                    <label className="block">
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">Start Time</span>
                      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="mt-1.5 w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary outline-none" />
                    </label>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="animate-fade-up">
                  <h2 className="text-2xl font-black mb-1">Add-Ons (Optional)</h2>
                  <p className="text-muted-foreground text-sm mb-6">Build the ultimate party.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {addons.map((a) => (
                      <button key={a.id} onClick={() => toggleAddon(a.id)} className={`flex items-center gap-3 rounded-2xl p-4 border transition-all ${picked.includes(a.id) ? "border-primary bg-primary/10" : "border-border bg-surface/40 hover:border-primary/40"}`}>
                        <a.i className="h-5 w-5 text-primary" />
                        <span className="font-medium text-sm flex-1 text-left">{a.t}</span>
                        {picked.includes(a.id) && <Check className="h-4 w-4 text-primary" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 5 && (
                <form onSubmit={submit} className="animate-fade-up space-y-4">
                  <h2 className="text-2xl font-black mb-1">Your Details</h2>
                  <p className="text-muted-foreground text-sm mb-2">We'll confirm by phone within 24 hours.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input required placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-4 py-3 rounded-xl bg-input border border-border focus:border-primary outline-none" />
                    <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="px-4 py-3 rounded-xl bg-input border border-border focus:border-primary outline-none" />
                    <input required type="tel" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="px-4 py-3 rounded-xl bg-input border border-border focus:border-primary outline-none" />
                    <input required placeholder="Event address (City, NJ)" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="px-4 py-3 rounded-xl bg-input border border-border focus:border-primary outline-none" />
                  </div>
                  <textarea placeholder="Anything else we should know?" rows={4} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary outline-none resize-none" />
                  <button type="submit" className="btn-primary w-full justify-center">Submit Booking Request</button>
                </form>
              )}

              {step === 6 && (
                <div className="text-center py-10 animate-fade-up">
                  <div className="h-16 w-16 rounded-full bg-primary/15 border border-primary grid place-items-center mx-auto mb-5 animate-pulse-glow">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-black">Request Received!</h2>
                  <p className="mt-3 text-muted-foreground">We'll be in touch within 24 hours to confirm your booking and lock in the date.</p>
                </div>
              )}

              {step < 5 && (
                <div className="mt-8 flex items-center justify-between">
                  <button disabled={step === 1} onClick={() => setStep(step - 1)} className="btn-ghost disabled:opacity-30">
                    <ChevronLeft className="h-4 w-4" /> Back
                  </button>
                  <button disabled={!canNext} onClick={() => setStep(step + 1)} className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed">
                    Continue <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* SUMMARY */}
          <aside className="lg:sticky lg:top-28 h-fit">
            <div className="card-glow rounded-3xl p-6 md:p-7">
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Your Summary</h3>
              <dl className="space-y-3 text-sm">
                <Row label="Experience" value={eventObj?.t} />
                <Row label="Package" value={pkgObj ? `${pkgObj.t} — ${pkgObj.p}` : undefined} />
                <Row label="Date" value={date} />
                <Row label="Time" value={time} />
                <Row label="Add-ons" value={picked.length ? picked.map((id) => addons.find((a) => a.id === id)?.t).join(", ") : undefined} />
              </dl>
              <div className="mt-6 pt-5 border-t border-border/60 text-xs text-muted-foreground space-y-2">
                <div className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-primary" /> (973) 406-9001</div>
                <div className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-primary" /> info@vipmobilegamingnj.com</div>
                <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-primary" /> Towaco, NJ — Serving N. NJ</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

function Row({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex justify-between gap-3">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className={`text-right font-medium ${value ? "" : "text-muted-foreground/50"}`}>{value || "—"}</dd>
    </div>
  );
}
