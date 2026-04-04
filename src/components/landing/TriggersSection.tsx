import { CloudRain, Wind, Waves, ShieldAlert, Zap, Thermometer, Clock, ArrowRight } from "lucide-react";

const triggers = [
  {
    icon: CloudRain,
    title: "Heavy Rainfall",
    threshold: "> 20mm/hour",
    payout: "Compensation = Expected − Actual",
    description: "IMD & Skymet real-time data triggers payouts when intense rain halts deliveries.",
    color: "bg-info-light border-info/20 text-info",
    iconBg: "bg-info/10",
    cities: ["Mumbai", "Chennai", "Kolkata"],
  },
  {
    icon: Zap,
    title: "Severe Air Pollution",
    threshold: "AQI > 300",
    payout: "Compensation = Expected − Actual",
    description: "CPCB/SAFAR AQI sensors trigger payouts during hazardous air quality episodes.",
    color: "bg-warning-light border-warning/20 text-warning-foreground",
    iconBg: "bg-warning/10",
    cities: ["Delhi", "Gurugram", "Noida"],
  },
  {
    icon: Waves,
    title: "Flash Floods",
    threshold: "Official flood alert",
    payout: "Compensation = Expected − Actual",
    description: "CWC flood bulletins and waterlogging sensors activate automatic compensation.",
    color: "bg-secondary-light border-secondary/20 text-secondary",
    iconBg: "bg-secondary/10",
    cities: ["Hyderabad", "Bengaluru", "Pune"],
  },
  {
    icon: ShieldAlert,
    title: "Curfew / Govt Restrictions",
    threshold: "Sec 144 / Govt Order",
    payout: "Compensation = Expected − Actual",
    description: "Government gazette, news APIs, and geofence verification trigger full-day coverage.",
    color: "bg-danger-light border-danger/20 text-danger",
    iconBg: "bg-danger/10",
    cities: ["All covered cities"],
  },
  {
    icon: Wind,
    title: "Cyclone / Natural Disaster",
    threshold: "Wind > 90 km/h",
    payout: "Compensation = Expected − Actual",
    description: "IMD cyclone tracking and NDMA disaster alerts trigger coverage before landfall.",
    color: "bg-primary-light border-primary/20 text-primary",
    iconBg: "bg-primary/10",
    cities: ["Bhubaneswar", "Visakhapatnam"],
  },
  {
    icon: Thermometer,
    title: "Extreme Heat Wave",
    threshold: "Temp > 45°C",
    payout: "Compensation = Expected − Actual",
    description: "IMD heatwave alerts cover workers during dangerous midday temperature extremes.",
    color: "bg-accent-light border-accent/20 text-accent",
    iconBg: "bg-accent/10",
    cities: ["Delhi", "Rajasthan", "Vidarbha"],
  },
];

export default function TriggersSection() {
  return (
    <section id="platform" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14 fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-light border border-primary/20 mb-4">
            <Clock className="w-3.5 h-3.5 text-primary" />
            <span className="text-sm font-semibold text-primary">Parametric Triggers</span>
          </div>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            When Nature Disrupts, <span className="text-gradient-accent">We Pay Instantly</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six measurable, real-time triggers. No claim forms. No waiting. No human judgment needed.
            Data speaks — payouts flow automatically.
          </p>
        </div>

        {/* Parametric condition */}
        <div className="mb-10 p-5 rounded-xl bg-primary-light border border-primary/20 text-center">
          <p className="text-sm font-semibold text-primary mb-2">⚙️ Parametric Trigger Condition</p>
          <p className="font-mono text-sm text-foreground">
            <span className="text-primary font-bold">Payout</span>
            <span className="text-muted-foreground"> triggered when: </span>
            <span className="text-danger font-bold">(Disruption Condition = TRUE)</span>
            <span className="text-muted-foreground"> AND </span>
            <span className="text-warning font-bold">(Income Drop Detected)</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {triggers.map((trigger) => (
            <div
              key={trigger.title}
              className="metric-card p-5 rounded-xl group cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className={`w-11 h-11 rounded-xl ${trigger.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <trigger.icon className={`w-5 h-5 ${trigger.color.split(" ").find(c => c.startsWith("text-"))}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-display font-semibold text-foreground">{trigger.title}</h3>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${trigger.color} border`}>
                      {trigger.threshold}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-accent mb-2">{trigger.payout}</p>
                  <p className="text-sm text-muted-foreground mb-3">{trigger.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {trigger.cities.map((c) => (
                      <span key={c} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flow diagram */}
        <div className="mt-14 p-6 lg:p-8 rounded-2xl bg-gradient-hero text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-20" />
          <div className="relative">
            <h3 className="font-display text-xl font-bold text-center mb-8">🧪 Demo Flow — From Prediction to Payout</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0">
              {[
                { step: "01", title: "Worker Registers", sub: "AI builds profile" },
                { step: "02", title: "Risk Predicted", sub: "Disruption forecasted" },
                { step: "03", title: "Alert Sent", sub: "WhatsApp / SMS" },
                { step: "04", title: "Income Drops", sub: "Disruption confirmed" },
                { step: "05", title: "AI Compensates", sub: "Expected − Actual" },
                { step: "06", title: "Instant Payout", sub: "UPI in minutes" },
              ].map((item, i, arr) => (
                <div key={item.step} className="flex items-center gap-2">
                  <div className="text-center px-3">
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-2">
                      <span className="text-xs font-bold text-accent">{item.step}</span>
                    </div>
                    <p className="text-sm font-semibold text-white whitespace-nowrap">{item.title}</p>
                    <p className="text-xs text-white/60 whitespace-nowrap">{item.sub}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-white/30 flex-shrink-0 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
