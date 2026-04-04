import { Link } from "react-router-dom";
import { Shield, CloudRain, Zap, CheckCircle, ArrowRight, Star, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroWorker from "@/assets/hero-worker.jpg";

const stats = [
  { value: "11M+", label: "Gig Workers Protected" },
  { value: "₹2.8Cr", label: "Payouts Processed" },
  { value: "< 4 hrs", label: "Claim to Payout" },
  { value: "99.2%", label: "Automation Rate" },
];

const triggers = [
  { icon: CloudRain, label: "Heavy Rain > 20mm/hr", color: "bg-info/20 text-info" },
  { icon: Zap, label: "AQI > 300 (Hazardous)", color: "bg-warning/20 text-warning" },
  { icon: Shield, label: "Curfew / Section 144", color: "bg-danger/20 text-danger" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroWorker} alt="Delivery worker in rain" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
      </div>

      {/* Floating ambient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-6 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="slide-in-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-white/90">Predictive Risk & Income Shield for Mobility Workers</span>
            </div>

            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Insurance That{" "}
              <span className="text-gradient-accent">Protects</span>{" "}
              Before the Storm Hits
            </h1>

            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
              PRISM <strong className="text-white/90">predicts disruptions in advance</strong> and provides proactive protection. Compensation = Expected Income − Actual Income. <strong className="text-white/90">No claim forms, no waiting, no paperwork.</strong>
            </p>

            {/* Trigger pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {triggers.map((t) => (
                <div key={t.label} className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${t.color} backdrop-blur-sm border border-white/10`}>
                  <t.icon className="w-3.5 h-3.5" />
                  <span className="text-xs font-medium">{t.label}</span>
                </div>
              ))}
            </div>

            {/* Compensation Formula */}
            <div className="mb-8 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm inline-block">
              <div className="flex items-center gap-2 text-xs text-white/50 mb-1">
                <TrendingDown className="w-3.5 h-3.5" />
                <span className="font-semibold uppercase tracking-wider">Fair Compensation Formula</span>
              </div>
              <p className="font-mono text-sm text-white">
                <span className="text-accent font-bold">Compensation</span>
                <span className="text-white/60"> = </span>
                <span className="text-info">Expected Income</span>
                <span className="text-white/60"> − </span>
                <span className="text-warning">Actual Income</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link to="/worker">
                <Button size="lg" className="bg-gradient-accent text-accent-foreground font-bold hover:opacity-90 shadow-accent text-base px-7 border-0 group">
                  Start Free Coverage
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 text-base backdrop-blur-sm">
                Watch How It Works
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["🧑🏽", "👩🏾", "👨🏽", "👩🏽"].map((emoji, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-primary border-2 border-white/20 flex items-center justify-center text-sm">{emoji}</div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-accent text-accent" />)}
                  <span className="text-white font-semibold text-sm ml-1">4.9</span>
                </div>
                <p className="text-white/60 text-xs">Trusted by 50,000+ workers in 12 cities</p>
              </div>
            </div>
          </div>

          {/* Right — floating dashboard card */}
          <div className="hidden lg:block">
            <div className="float-anim">
              <div className="glass-card rounded-2xl p-6 max-w-sm ml-auto border border-white/15 shadow-lg-custom">
                {/* Live payout notification */}
                <div className="flex items-center gap-3 mb-5 p-3 rounded-xl bg-success/20 border border-success/30">
                  <div className="w-10 h-10 rounded-full bg-success/30 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-success-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Auto-Payout Triggered! 🎉</p>
                    <p className="text-xs text-white/70">₹580 sent to UPI in 12 minutes</p>
                  </div>
                </div>

                <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">Today's Risk Status</p>
                <div className="space-y-2.5">
                  {[
                    { city: "Mumbai", risk: "HIGH", reason: "Rainfall 24mm/hr", color: "text-danger", dot: "bg-danger" },
                    { city: "Delhi", risk: "MEDIUM", reason: "AQI 312 — Poor", color: "text-warning", dot: "bg-warning" },
                    { city: "Bengaluru", risk: "LOW", reason: "Clear conditions", color: "text-success", dot: "bg-success" },
                  ].map((item) => (
                    <div key={item.city} className="flex items-center justify-between py-2 px-3 rounded-lg bg-white/5">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-2 h-2 rounded-full ${item.dot} trigger-pulse`} />
                        <div>
                          <p className="text-sm font-semibold text-white">{item.city}</p>
                          <p className="text-xs text-white/50">{item.reason}</p>
                        </div>
                      </div>
                      <span className={`text-xs font-bold ${item.color}`}>{item.risk}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <p className="text-xl font-bold font-display text-white">₹99</p>
                    <p className="text-xs text-white/50">Weekly Premium</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold font-display text-accent">₹2,500</p>
                    <p className="text-xs text-white/50">Max Weekly Payout</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center glass-card rounded-xl p-4 border border-white/10">
              <p className="font-display text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
