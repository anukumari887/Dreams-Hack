import { Bike, ShoppingBag, Package, Car, Wrench, Users, User, Brain, Bell, ShieldCheck } from "lucide-react";

const personas = [
  {
    icon: Bike,
    title: "Food Delivery Partner",
    platform: "Swiggy / Zomato",
    workers: "4.5M+",
    avgIncome: "₹18,000/mo",
    riskProfile: "High",
    premium: "₹149/week",
    painPoint: "Loses ₹400–800 on heavy rain days when orders drop 70%",
    color: "bg-accent-light text-accent border-accent/20",
  },
  {
    icon: ShoppingBag,
    title: "Grocery Delivery Partner",
    platform: "Blinkit / Zepto / Instamart",
    workers: "1.8M+",
    avgIncome: "₹15,500/mo",
    riskProfile: "Medium-High",
    premium: "₹129/week",
    painPoint: "Can't operate during AQI > 300 advisories or curfews",
    color: "bg-success-light text-success border-success/20",
  },
  {
    icon: Package,
    title: "E-commerce Delivery Agent",
    platform: "Amazon Flex / Meesho",
    workers: "2.2M+",
    avgIncome: "₹16,000/mo",
    riskProfile: "Medium",
    premium: "₹99/week",
    painPoint: "Flood alerts block entire pin codes — zero earnings for days",
    color: "bg-info-light text-info border-info/20",
  },
  {
    icon: Car,
    title: "Ride-hailing Driver",
    platform: "Ola / Uber / Rapido",
    workers: "3.5M+",
    avgIncome: "₹22,000/mo",
    riskProfile: "Medium",
    premium: "₹129/week",
    painPoint: "Night curfews post-incidents wipe out peak-hour earnings",
    color: "bg-primary-light text-primary border-primary/20",
  },
  {
    icon: Wrench,
    title: "Home Services Worker",
    platform: "Urban Company / Housejoy",
    workers: "0.8M+",
    avgIncome: "₹20,000/mo",
    riskProfile: "Low-Medium",
    premium: "₹99/week",
    painPoint: "Clients cancel during extreme weather; no compensation",
    color: "bg-secondary-light text-secondary border-secondary/20",
  },
  {
    icon: Users,
    title: "Hyperlocal Courier",
    platform: "Porter / Dunzo / Shadowfax",
    workers: "1.2M+",
    avgIncome: "₹14,000/mo",
    riskProfile: "High",
    premium: "₹149/week",
    painPoint: "Cyclone alerts in coastal cities = 3–5 days zero income",
    color: "bg-warning-light text-warning-foreground border-warning/20",
  },
];

const keyFeatures = [
  {
    icon: Brain,
    title: "Hyper-Local Disruption Engine",
    desc: "Predicts risks at micro-zone level using weather, AQI, traffic & historical data — more accurate than city-level predictions.",
  },
  {
    icon: User,
    title: "Worker Digital Twin",
    desc: "Each worker has an AI profile that learns work hours, delivery zones & earning behavior — used for risk, pricing & fraud detection.",
  },
  {
    icon: Bell,
    title: "Early Disruption Alerts",
    desc: "\"Heavy rain expected in your area at 7 PM\" — helps workers plan work, avoid unsafe zones & reduce risk proactively.",
  },
  {
    icon: ShieldCheck,
    title: "Income Prediction AI",
    desc: "Predicts daily earnings using past activity. Ensures realistic, personalized compensation that adapts per worker.",
  },
];

export default function PersonasSection() {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Key Features */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-light border border-primary/20 mb-4">
            <Brain className="w-3.5 h-3.5 text-primary" />
            <span className="text-sm font-semibold text-primary">Key Features</span>
          </div>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            Predictive Income <span className="text-gradient-accent">Protection System</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            PRISM predicts risks before they happen, alerts workers early, adjusts coverage dynamically, and automatically compensates income loss.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {keyFeatures.map((f) => (
            <div key={f.title} className="metric-card bg-card p-5 rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center mb-3">
                <f.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Featured Persona: Arjun */}
        <div className="mb-14 bg-card rounded-2xl p-6 lg:p-8 border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-full bg-gradient-accent flex items-center justify-center text-2xl">🧑🏽</div>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground">Meet Arjun Kumar, 26</h3>
              <p className="text-sm text-muted-foreground">Food Delivery Partner — Swiggy, Mumbai</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="p-3 rounded-xl bg-muted text-center">
              <p className="text-xs text-muted-foreground">Daily Earnings</p>
              <p className="font-bold text-foreground">₹500 – ₹850</p>
            </div>
            <div className="p-3 rounded-xl bg-muted text-center">
              <p className="text-xs text-muted-foreground">Weekly Earnings</p>
              <p className="font-bold text-foreground">₹3,500 – ₹5,000</p>
            </div>
            <div className="p-3 rounded-xl bg-muted text-center">
              <p className="text-xs text-muted-foreground">Risk Level</p>
              <p className="font-bold text-danger">High</p>
            </div>
            <div className="p-3 rounded-xl bg-muted text-center">
              <p className="text-xs text-muted-foreground">PRISM Premium</p>
              <p className="font-bold text-accent">₹129/week</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["Rain slows deliveries", "Heat causes fatigue", "Pollution affects health", "Flooding stops work"].map((p) => (
              <div key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-danger flex-shrink-0" />
                {p}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-foreground font-medium">
            👉 Arjun needs income stability + safety. PRISM gives him both.
          </p>
        </div>

        {/* Personas grid */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-light border border-accent/20 mb-4">
            <Users className="w-3.5 h-3.5 text-accent" />
            <span className="text-sm font-semibold text-accent">Who We Protect</span>
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Built for <span className="text-gradient-primary">Every Gig Worker</span> in India
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {personas.map((p) => (
            <div key={p.title} className="metric-card p-5 rounded-xl bg-card">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold mb-4 ${p.color}`}>
                <p.icon className="w-3.5 h-3.5" />
                {p.platform}
              </div>

              <h3 className="font-display font-bold text-foreground text-lg mb-1">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 italic">"{p.painPoint}"</p>

              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Workers</p>
                  <p className="font-bold text-sm text-foreground">{p.workers}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Avg Income</p>
                  <p className="font-bold text-sm text-foreground">{p.avgIncome}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">From</p>
                  <p className="font-bold text-sm text-accent">{p.premium}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
