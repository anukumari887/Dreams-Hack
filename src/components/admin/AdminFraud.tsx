import { AlertTriangle, Brain } from "lucide-react";

const flags = [
  { worker: "Kiran Mehta", city: "Delhi", reason: "8 claims in 30 days — 12× avg", score: 94, model: "LSTM Anomaly", action: "Suspended" },
  { worker: "Raj Patel", city: "Mumbai", reason: "GPS outside zone during claim", score: 78, model: "Isolation Forest", action: "Under Review" },
  { worker: "Anita B.", city: "Pune", reason: "Claim filed 2min after trigger", score: 61, model: "Behavioral Rule", action: "Monitoring" },
];

const methods = [
  { icon: "🧠", name: "LSTM Anomaly Detection", desc: "Detects unusual claim frequency patterns over time" },
  { icon: "🌲", name: "Isolation Forest", desc: "Flags outliers in GPS location vs declared work zone" },
  { icon: "📊", name: "XGBoost Classifier", desc: "Predicts fraud probability from 40+ behavioral features" },
  { icon: "📍", name: "Geofence Verification", desc: "Validates worker was in trigger-affected area at claim time" },
];

export default function AdminFraud() {
  return (
    <div className="space-y-6 animate-scale-in">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground mb-1">Fraud Detection</h1>
        <p className="text-sm text-muted-foreground">AI-powered anomaly detection — 97.8% precision</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {methods.map((m) => (
          <div key={m.name} className="metric-card bg-card p-4 rounded-xl flex items-start gap-3">
            <span className="text-2xl">{m.icon}</span>
            <div>
              <p className="font-semibold text-foreground text-sm">{m.name}</p>
              <p className="text-xs text-muted-foreground">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="metric-card bg-card rounded-xl overflow-hidden">
        <div className="p-5 border-b border-border flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-danger" />
          <h2 className="font-display font-bold text-foreground">Flagged Claims</h2>
        </div>
        <div className="divide-y divide-border">
          {flags.map((f, i) => (
            <div key={i} className="p-4 flex items-center gap-4 hover:bg-muted/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-danger/10 flex items-center justify-center flex-shrink-0">
                <Brain className="w-5 h-5 text-danger" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-foreground">{f.worker} · {f.city}</p>
                <p className="text-xs text-muted-foreground">{f.reason}</p>
                <p className="text-xs text-muted-foreground">Model: {f.model}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className={`text-lg font-bold font-display ${f.score > 80 ? "text-danger" : f.score > 60 ? "text-warning-foreground" : "text-muted-foreground"}`}>{f.score}<span className="text-xs">/100</span></p>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${f.action === "Suspended" ? "badge-danger" : "badge-warning"}`}>{f.action}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
