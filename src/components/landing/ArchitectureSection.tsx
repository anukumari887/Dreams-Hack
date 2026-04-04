import { Brain, Database, Globe, Cpu, Cloud, CreditCard, ShieldAlert } from "lucide-react";

const archLayers = [
  {
    layer: "Frontend",
    icon: Globe,
    color: "bg-info-light text-info",
    tech: ["React + TypeScript", "HTML, CSS, JavaScript", "Progressive Web App", "Hindi/Regional UI"],
  },
  {
    layer: "Backend API",
    icon: Cpu,
    color: "bg-primary-light text-primary",
    tech: ["FastAPI (Python)", "REST APIs", "Redis Cache", "Microservices"],
  },
  {
    layer: "AI/ML Engine",
    icon: Brain,
    color: "bg-accent-light text-accent",
    tech: ["Scikit-learn", "Pandas", "Prophet", "Fraud Detection LSTM"],
  },
  {
    layer: "Data Layer",
    icon: Database,
    color: "bg-success-light text-success",
    tech: ["PostgreSQL", "TimescaleDB", "S3 Document Store", "Kafka Event Stream"],
  },
  {
    layer: "Cloud & Infra",
    icon: Cloud,
    color: "bg-secondary-light text-secondary",
    tech: ["AWS Mumbai Region", "Auto-scaling ECS", "CloudFront CDN", "CI/CD GitHub Actions"],
  },
  {
    layer: "Payments",
    icon: CreditCard,
    color: "bg-warning-light text-warning-foreground",
    tech: ["UPI via Razorpay", "NEFT/IMPS fallback", "Aadhaar eKYC", "DigiLocker Verification"],
  },
];

const dataPartners = [
  { name: "Weather API", role: "Weather & Rainfall Data", logo: "🌧️" },
  { name: "AQI API", role: "Air Quality Index", logo: "🏭" },
  { name: "Maps API", role: "Geolocation & Routes", logo: "🗺️" },
  { name: "Govt Alerts", role: "NDMA & Disaster Alerts", logo: "⚠️" },
  { name: "IMD India", role: "Cyclone & Heatwave", logo: "⛅" },
  { name: "CPCB", role: "Pollution Monitoring", logo: "💨" },
  { name: "CWC", role: "Flood Bulletin API", logo: "🌊" },
  { name: "Razorpay", role: "UPI Instant Payouts", logo: "💸" },
];

const aiModels = [
  {
    name: "Risk Prediction",
    algorithm: "Random Forest + XGBoost Ensemble",
    input: "Historical disruption, city, season, worker zone",
    output: "Risk score 0–100 per micro-zone",
    accuracy: "91.4%",
  },
  {
    name: "Premium Pricing",
    algorithm: "Gradient Boosting Regression",
    input: "Risk score, work hours, claim history, city tier",
    output: "Optimal weekly premium ₹99–₹149",
    accuracy: "MAE ₹3.2",
  },
  {
    name: "Fraud Detection",
    algorithm: "LSTM + Isolation Forest",
    input: "GPS logs, claim patterns, behavioral data, sensor data",
    output: "Multi-Signal Trust Score 0–100",
    accuracy: "97.8% precision",
  },
  {
    name: "Income Prediction",
    algorithm: "Prophet + Worker Digital Twin",
    input: "Past earnings, work hours, delivery zones, seasonality",
    output: "Expected daily income ₹",
    accuracy: "94.1%",
  },
];

const trustScoreTable = [
  { range: "80–100", action: "Approved", color: "text-success" },
  { range: "50–80", action: "Manual Review", color: "text-warning" },
  { range: "< 50", action: "Rejected", color: "text-danger" },
];

export default function ArchitectureSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-light border border-primary/20 mb-4">
            <Brain className="w-3.5 h-3.5 text-primary" />
            <span className="text-sm font-semibold text-primary">System Architecture & AI</span>
          </div>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            Powered by <span className="text-gradient-primary">Deep Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A multi-layered platform combining real-time data pipelines, AI/ML models, and instant payment rails.
          </p>
        </div>

        {/* Tech stack layers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {archLayers.map((layer) => (
            <div key={layer.layer} className="metric-card bg-card p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${layer.color}`}>
                  <layer.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-foreground">{layer.layer}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {layer.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-muted text-foreground border border-border font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AI Models */}
        <div className="mb-14">
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-6">AI/ML Model Suite</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {aiModels.map((model) => (
              <div key={model.name} className="metric-card bg-card p-5 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-display font-bold text-foreground">{model.name}</h4>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-success-light text-success border border-success/20">
                    {model.accuracy}
                  </span>
                </div>
                <p className="text-xs font-semibold text-accent mb-2">{model.algorithm}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                  <span className="font-medium text-foreground">Input:</span> {model.input}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">Output:</span> {model.output}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust & Anti-Fraud */}
        <div className="mb-14 bg-card rounded-2xl p-6 lg:p-8 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-danger/10 flex items-center justify-center">
              <ShieldAlert className="w-5 h-5 text-danger" />
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground">🔐 Trust & Anti-Fraud System</h3>
              <p className="text-sm text-muted-foreground">Multi-Signal Trust Score (0–100)</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-sm">Trust Score Actions</h4>
              <div className="space-y-2">
                {trustScoreTable.map((row) => (
                  <div key={row.range} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                    <span className="font-mono font-bold text-sm text-foreground">{row.range}</span>
                    <span className={`text-sm font-bold ${row.color}`}>{row.action}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-sm">Signals Used</h4>
              <div className="space-y-2">
                {["Behavioral AI analysis", "Sensor data (accelerometer)", "Weather/API validation", "Crowd data (nearby workers)", "Network consistency check", "GPS spoofing detection"].map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Data Partners */}
        <div>
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-6">Data Partners & External APIs</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {dataPartners.map((partner) => (
              <div key={partner.name} className="metric-card bg-card p-4 rounded-xl text-center">
                <div className="text-3xl mb-2">{partner.logo}</div>
                <p className="font-bold text-sm text-foreground">{partner.name}</p>
                <p className="text-xs text-muted-foreground">{partner.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
