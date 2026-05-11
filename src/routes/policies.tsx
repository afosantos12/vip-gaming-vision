import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/policies")({
  head: () => ({
    meta: [
      { title: "Policies — VIP Mobile Gaming NJ" },
      { name: "description", content: "Cancellation, weather, supervision, parking, and other policies for VIP Mobile Gaming NJ rentals." },
      { property: "og:title", content: "VIP Mobile Gaming NJ Policies" },
      { property: "og:description", content: "Cancellation, weather, supervision, parking, and other policies." },
    ],
  }),
  component: Policies,
});

const policies = [
  { t: "Cancellation Policy", d: "Deposits are non-refundable but may be applied to a rescheduled event within 6 months, subject to availability." },
  { t: "Weather Policy", d: "Our trucks are fully climate controlled and run rain or shine. We will only reschedule for severe weather (lightning, dangerous winds, etc.)." },
  { t: "Supervised Children", d: "At least one adult/parent must be present at all times during the event. Game coaches are entertainers, not babysitters." },
  { t: "Food & Drink Policy", d: "No food or drink permitted inside the gaming truck or bus. We provide a clean, premium environment for every party." },
  { t: "M-Rated Games", d: "We never play M-rated games unless explicitly requested in writing by the host parent and only with an all-adult audience." },
  { t: "Alcohol & Drugs", d: "No alcohol or drug use is permitted near the truck or by participants during the event. Our coaches reserve the right to end events that violate this policy." },
  { t: "Parking Requirements", d: "We need approximately 40 feet of flat parking on the street, driveway, or a private lot. Tree branches must clear 13 feet of vertical space." },
  { t: "Damage Liability", d: "The host is responsible for damage caused by guests beyond normal use. We treat your home like ours — please return the favor." },
];

function Policies() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Layout>
      <PageHero
        eyebrow="Policies & FAQ"
        title={<>Clear Rules. <span className="text-primary neon-text">Zero Surprises.</span></>}
        subtitle="Everything you need to know before booking your party."
      />
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-3">
          {policies.map((p, i) => (
            <div key={i} className="card-glow reveal rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-bold text-lg">{p.t}</span>
                <ChevronDown className={`h-5 w-5 text-primary transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed animate-fade-up">{p.d}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
