import { MapPin, Calendar, Rocket, CheckCircle } from "lucide-react";

const roadmapPhases = [
  {
    phase: "01",
    weeks: "Week 1–2",
    title: "Foundation Sprint",
    color: "bg-info-light text-info border-info/20",
    dotColor: "bg-info",
    tasks: [
      "Design system & brand identity",
      "Worker onboarding flow (React PWA)",
      "Aadhaar eKYC integration",
      "PostgreSQL schema setup",
      "Weather & AQI API integration",
      "Basic parametric trigger engine",
    ],
    milestone: "MVP onboarding live",
  },
  {
    phase: "02",
    weeks: "Week 3–4",
    title: "AI Engine & Automation",
    color: "bg-accent-light text-accent border-accent/20",
    dotColor: "bg-accent",
    tasks: [
      "Income Prediction AI (Prophet)",
      "Worker Digital Twin profiles",
      "Dynamic premium pricing (₹99–₹149)",
      "Razorpay UPI payout integration",
      "Worker dashboard & early alerts",
      "WhatsApp notification bot",
    ],
    milestone: "First automated payout",
  },
  {
    phase: "03",
    weeks: "Week 5",
    title: "Fraud Detection & Admin",
    color: "bg-warning-light text-warning-foreground border-warning/20",
    dotColor: "bg-warning",
    tasks: [
      "Multi-Signal Trust Score (0–100)",
      "GPS & sensor-based verification",
      "Admin/insurer dashboard",
      "Compliance & audit logging",
      "Load testing & security audit",
      "City risk heatmap visualization",
    ],
    milestone: "Platform hardened",
  },
  {
    phase: "04",
    weeks: "Week 6",
    title: "Launch & Demo",
    color: "bg-success-light text-success border-success/20",
    dotColor: "bg-success",
    tasks: [
      "Beta pilot with 500 workers",
      "Partnership deck (IRDAI compliance)",
      "Investor pitch & demo video",
      "Performance metrics dashboard",
      "Scale planning documentation",
      "Hackathon submission & presentation",
    ],
    milestone: "🚀 Public launch",
  },
];

const futureScale = [
  { icon: "📱", title: "Mobile App", desc: "Native Android/iOS app for on-the-go protection" },
  { icon: "💸", title: "Real-time UPI", desc: "Instant UPI payments integrated with all banks" },
  { icon: "⛓️", title: "Blockchain", desc: "Transparent claim records on blockchain ledger" },
  { icon: "🤖", title: "Advanced AI", desc: "Deep learning forecasting with 99%+ accuracy" },
  { icon: "🤝", title: "Platform Integration", desc: "Embedded insurance in Swiggy, Zomato, Blinkit" },
  { icon: "🏦", title: "Micro-lending", desc: "Income-backed micro-loans for covered workers" },
];

export default function RoadmapSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-warning-light border border-warning/20 mb-4">
            <Calendar className="w-3.5 h-3.5 text-warning-foreground" />
            <span className="text-sm font-semibold text-warning-foreground">6-Week Hackathon Roadmap</span>
          </div>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            From Idea to <span className="text-gradient-accent">Live Platform</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A structured sprint plan to build, test, and launch PRISM within the hackathon timeline.
          </p>
        </div>

        {/* Roadmap phases */}
        <div className="relative mb-16">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {roadmapPhases.map((phase, i) => (
              <div key={phase.phase} className={`relative flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-start md:items-center`}>
                <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full ${phase.dotColor} border-4 border-background z-10 items-center justify-center`}>
                  <span className="text-xs font-bold text-white">{phase.phase}</span>
                </div>

                <div className={`w-full md:w-[calc(50%-3rem)] ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                  <div className={`metric-card bg-card p-5 rounded-xl border ${phase.color.split(" ").find(c => c.startsWith("border-"))}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${phase.color} mr-2`}>{phase.weeks}</span>
                        <h3 className="font-display font-bold text-foreground mt-1">{phase.title}</h3>
                      </div>
                    </div>
                    <ul className="space-y-1.5 mb-4">
                      {phase.tasks.map((task) => (
                        <li key={task} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-3.5 h-3.5 text-success flex-shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 pt-3 border-t border-border">
                      <Rocket className="w-4 h-4 text-accent" />
                      <span className="text-sm font-bold text-accent">Milestone: {phase.milestone}</span>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block w-[calc(50%-3rem)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory */}
        <div className="mb-16 bg-card rounded-2xl p-6 border border-border">
          <h3 className="font-display font-bold text-foreground mb-3">⚖️ Regulatory Consideration</h3>
          <p className="text-sm text-muted-foreground mb-3">PRISM can operate as:</p>
          <div className="flex flex-wrap gap-3">
            <span className="text-sm px-4 py-2 rounded-full bg-primary-light text-primary border border-primary/20 font-medium">Embedded Insurance Product</span>
            <span className="text-sm px-4 py-2 rounded-full bg-accent-light text-accent border border-accent/20 font-medium">Partner with Licensed Insurers</span>
          </div>
          <p className="text-sm text-muted-foreground mt-3">👉 Ensures compliance with IRDAI insurance regulations in India.</p>
        </div>

        {/* Future Scale */}
        <div className="bg-gradient-hero rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-20" />
          <div className="relative">
            <h3 className="font-display text-2xl font-bold text-center mb-2">🔮 Future Enhancements</h3>
            <p className="text-center text-white/60 mb-8 text-sm">Beyond the hackathon — scaling PRISM across India</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {futureScale.map((item) => (
                <div key={item.title} className="glass-card rounded-xl p-4 border border-white/10">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-white/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
