import { Check, Zap, Shield, TrendingUp, XCircle, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic Shield",
    tagline: "For part-time gig workers",
    weekly: "₹99",
    monthly: "~₹396/mo",
    coverage: "₹1,500/day",
    maxWeekly: "₹7,500",
    riskLevel: "Low Risk",
    features: [
      "Heavy Rain protection",
      "Curfew coverage",
      "UPI auto-payout",
      "SMS & WhatsApp alerts",
      "3 triggers covered",
    ],
    cta: "Start Basic",
    highlight: false,
    color: "border-border",
    badgeColor: "bg-muted text-muted-foreground",
  },
  {
    name: "Pro Shield",
    tagline: "Most popular — full-time delivery",
    weekly: "₹129",
    monthly: "~₹516/mo",
    coverage: "₹3,000/day",
    maxWeekly: "₹15,000",
    riskLevel: "Medium Risk",
    features: [
      "All 6 trigger types",
      "Priority UPI payout < 4hrs",
      "Income Prediction AI",
      "Worker Digital Twin profile",
      "Early disruption alerts",
      "Family referral discount 20%",
    ],
    cta: "Get Pro Shield",
    highlight: true,
    color: "border-accent shadow-accent",
    badgeColor: "bg-gradient-accent text-accent-foreground",
  },
  {
    name: "Elite Shield",
    tagline: "High-earners & fleet owners",
    weekly: "₹149",
    monthly: "~₹596/mo",
    coverage: "₹5,000/day",
    maxWeekly: "₹25,000",
    riskLevel: "High Risk",
    features: [
      "All Pro features",
      "Income replacement 85%",
      "Fleet coverage (up to 3 bikes)",
      "Legal support during curfews",
      "Priority customer support",
      "Annual festival bonus payout",
    ],
    cta: "Get Elite",
    highlight: false,
    color: "border-primary/40",
    badgeColor: "bg-primary-light text-primary",
  },
];

const exclusions = [
  "Worker chooses not to work",
  "Personal illness",
  "Internet/network issues",
  "App account bans",
  "Fake inactivity",
];

const formula = [
  { label: "Base Rate", value: "₹70/week", note: "All workers" },
  { label: "Risk Zone", value: "+₹10–30", note: "High-risk cities" },
  { label: "Activity Hours", value: "+₹5–15", note: "Peak hour multiplier" },
  { label: "History Score", value: "−₹5–15", note: "Claim frequency discount" },
  { label: "Season Factor", value: "+₹0–20", note: "Monsoon / cyclone season" },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-success-light border border-success/20 mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-success" />
            <span className="text-sm font-semibold text-success">Smart Pricing</span>
          </div>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            Plans That Fit <span className="text-gradient-accent">Every Gig Worker</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-powered dynamic pricing: ₹99 – ₹149/week based on your city's risk, work hours, and historical disruption data. No hidden fees.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border-2 p-6 bg-card transition-all ${plan.color} ${plan.highlight ? "scale-[1.02]" : ""}`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-accent whitespace-nowrap">
                    ⭐ Most Popular
                  </span>
                </div>
              )}
              <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${plan.badgeColor}`}>
                {plan.riskLevel}
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.tagline}</p>
              <div className="mb-5">
                <span className="font-display text-4xl font-bold text-foreground">{plan.weekly}</span>
                <span className="text-muted-foreground text-sm ml-1">/week</span>
                <p className="text-xs text-muted-foreground mt-1">{plan.monthly}</p>
              </div>
              <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-muted mb-5">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Daily Max</p>
                  <p className="font-bold text-foreground">{plan.coverage}</p>
                </div>
                <div className="w-px h-8 bg-border" />
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Weekly Max</p>
                  <p className="font-bold text-accent">{plan.maxWeekly}</p>
                </div>
              </div>
              <ul className="space-y-2.5 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-foreground">
                    <Check className="w-4 h-4 text-success flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/worker" className="block">
                <Button
                  className={`w-full font-semibold ${plan.highlight ? "bg-gradient-accent text-accent-foreground hover:opacity-90 shadow-accent border-0" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Exclusions */}
        <div className="mb-16 bg-danger/5 rounded-2xl p-6 border border-danger/20">
          <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
            <XCircle className="w-5 h-5 text-danger" />
            What's Not Covered (Exclusions)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {exclusions.map((e) => (
              <div key={e} className="flex items-center gap-2 text-sm text-muted-foreground">
                <XCircle className="w-3.5 h-3.5 text-danger flex-shrink-0" />
                {e}
              </div>
            ))}
          </div>
        </div>

        {/* Financial Viability */}
        <div className="mb-16 bg-success/5 rounded-2xl p-6 lg:p-8 border border-success/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-success-light flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-success" />
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground">Financial Viability</h3>
              <p className="text-sm text-muted-foreground">Risk pooling model — sustainable & scalable</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="metric-card bg-card p-4 rounded-xl text-center">
              <p className="text-xs text-muted-foreground mb-1">Workers Pool</p>
              <p className="font-display text-2xl font-bold text-foreground">1,000</p>
              <p className="text-xs text-muted-foreground">Active subscribers</p>
            </div>
            <div className="metric-card bg-card p-4 rounded-xl text-center">
              <p className="text-xs text-muted-foreground mb-1">Weekly Revenue</p>
              <p className="font-display text-2xl font-bold text-foreground">₹1,00,000</p>
              <p className="text-xs text-muted-foreground">₹100/week avg premium</p>
            </div>
            <div className="metric-card bg-card p-4 rounded-xl text-center">
              <p className="text-xs text-muted-foreground mb-1">Expected Claims</p>
              <p className="font-display text-2xl font-bold text-warning">₹60,000</p>
              <p className="text-xs text-muted-foreground">20% claim rate × ₹300 avg</p>
            </div>
            <div className="metric-card bg-card p-4 rounded-xl text-center">
              <p className="text-xs text-muted-foreground mb-1">Est. Weekly Profit</p>
              <p className="font-display text-2xl font-bold text-success">₹40,000</p>
              <p className="text-xs text-muted-foreground">40% margin</p>
            </div>
          </div>
        </div>

        {/* Pricing formula */}
        <div className="bg-muted/50 rounded-2xl p-6 lg:p-8 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground">AI Premium Pricing Formula</h3>
              <p className="text-sm text-muted-foreground">Dynamic, fair, and transparent</p>
            </div>
          </div>
          <div className="font-mono text-sm bg-card rounded-xl p-4 border border-border mb-5">
            <span className="text-primary font-bold">Premium</span>
            <span className="text-muted-foreground"> = BaseRate + </span>
            <span className="text-info">RiskZoneScore</span>
            <span className="text-muted-foreground"> × </span>
            <span className="text-accent">ActivityHoursMultiplier</span>
            <span className="text-muted-foreground"> − </span>
            <span className="text-success">HistoryDiscount</span>
            <span className="text-muted-foreground"> + </span>
            <span className="text-warning">SeasonFactor</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {formula.map((f) => (
              <div key={f.label} className="metric-card bg-card p-3 rounded-xl text-center">
                <p className="text-xs text-muted-foreground mb-1">{f.label}</p>
                <p className="font-bold text-foreground text-sm">{f.value}</p>
                <p className="text-xs text-muted-foreground">{f.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
