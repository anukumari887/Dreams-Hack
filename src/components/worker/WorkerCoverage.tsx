import { Shield, Check, ArrowUpRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const coverageDetails = [
  { trigger: "Heavy Rainfall > 20mm/hr", payout: "₹580/day", maxDays: "7 days/month", source: "IMD + Skymet", status: true },
  { trigger: "Air Quality Index > 400", payout: "₹450/day", maxDays: "5 days/month", source: "CPCB / SAFAR", status: true },
  { trigger: "Flash Flood Official Alert", payout: "₹800/day", maxDays: "5 days/month", source: "CWC Bulletin", status: true },
  { trigger: "Curfew / Section 144", payout: "₹750/day", maxDays: "7 days/month", source: "Govt Gazette + News", status: true },
  { trigger: "Cyclone / Storm > 90 km/h", payout: "₹700/day", maxDays: "3 days/event", source: "IMD Cyclone Track", status: true },
  { trigger: "Extreme Heat > 45°C", payout: "₹380/day", maxDays: "10 days/month", source: "IMD Heatwave Alert", status: true },
];

export default function WorkerCoverage() {
  return (
    <div className="space-y-6 animate-scale-in">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground mb-1">My Coverage</h1>
        <p className="text-sm text-muted-foreground">Your active Pro Shield policy details</p>
      </div>

      {/* Policy card */}
      <div className="rounded-2xl bg-gradient-hero p-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2 blur-2xl" />
        <div className="relative">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-white/60 text-sm mb-1">Policy ID</p>
              <p className="font-mono font-bold">GS-PRO-2025-00421</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/20 border border-success/30">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs font-bold text-success-foreground">ACTIVE</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Plan", value: "Pro Shield" },
              { label: "Weekly Premium", value: "₹49" },
              { label: "Max Daily Payout", value: "₹2,500" },
              { label: "Renews", value: "Sun, 19 Jan" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-white/50 text-xs mb-1">{item.label}</p>
                <p className="font-display font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coverage table */}
      <div className="metric-card bg-card rounded-xl overflow-hidden">
        <div className="p-5 border-b border-border">
          <h2 className="font-display font-bold text-foreground">All Covered Triggers</h2>
          <p className="text-xs text-muted-foreground mt-0.5">6 of 6 triggers active on your plan</p>
        </div>
        <div className="divide-y divide-border">
          {coverageDetails.map((c) => (
            <div key={c.trigger} className="flex items-center gap-4 p-4 hover:bg-muted/30 transition-colors">
              <div className="w-8 h-8 rounded-full bg-success/15 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-success" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground">{c.trigger}</p>
                <p className="text-xs text-muted-foreground">Source: {c.source} · Max {c.maxDays}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-sm font-bold text-success">{c.payout}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upgrade CTA */}
      <div className="metric-card bg-card rounded-xl p-5 flex items-center justify-between gap-4 border border-accent/20 bg-accent-light/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-bold text-foreground">Upgrade to Elite Shield</p>
            <p className="text-sm text-muted-foreground">Get 85% income replacement + fleet coverage</p>
          </div>
        </div>
        <Button className="bg-gradient-accent text-accent-foreground hover:opacity-90 border-0 gap-2 flex-shrink-0">
          Upgrade <ArrowUpRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="text-center py-4">
        <p className="text-xs text-muted-foreground mb-2">Questions about your coverage?</p>
        <Button variant="outline" size="sm" className="gap-2">
          <Phone className="w-3.5 h-3.5" />
          Chat with Support (WhatsApp)
        </Button>
      </div>
    </div>
  );
}
