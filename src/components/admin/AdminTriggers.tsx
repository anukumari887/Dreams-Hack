import { Zap, CloudRain, Wind } from "lucide-react";

const activeTriggers = [
  { id: 1, city: "Mumbai", type: "Heavy Rainfall", source: "IMD + Skymet", value: "23mm/hr", threshold: "20mm/hr", workersAffected: 8420, payoutPerWorker: "₹580", totalLiability: "₹48.8L", status: "LIVE", since: "9:32 AM", icon: CloudRain, color: "bg-danger text-danger-foreground" },
  { id: 2, city: "Pune", type: "Curfew Sec 144", source: "Govt Gazette", value: "Active", threshold: "Official Order", workersAffected: 3210, payoutPerWorker: "₹750", totalLiability: "₹24.1L", status: "LIVE", since: "8:15 AM", icon: Zap, color: "bg-warning text-warning-foreground" },
];

export default function AdminTriggers() {
  return (
    <div className="space-y-6 animate-scale-in">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground mb-1">Live Trigger Monitor</h1>
        <p className="text-sm text-muted-foreground">Real-time parametric trigger status across all cities</p>
      </div>
      <div className="space-y-4">
        {activeTriggers.map((t) => (
          <div key={t.id} className="metric-card bg-card rounded-xl p-5 border-l-4 border-danger">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-danger/10 flex items-center justify-center">
                  <t.icon className="w-5 h-5 text-danger" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-display font-bold text-foreground">{t.type} — {t.city}</p>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${t.color} trigger-pulse`}>{t.status}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Source: {t.source} · Active since {t.since}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Total Liability</p>
                <p className="font-display font-bold text-danger text-xl">{t.totalLiability}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Measured Value", value: t.value },
                { label: "Trigger Threshold", value: t.threshold },
                { label: "Workers Affected", value: t.workersAffected.toLocaleString() },
                { label: "Payout Per Worker", value: t.payoutPerWorker },
              ].map((item) => (
                <div key={item.label} className="bg-muted/50 rounded-xl p-3">
                  <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                  <p className="font-bold text-foreground text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="metric-card bg-card rounded-xl p-5">
        <h2 className="font-display font-bold text-foreground mb-4">All Monitored Data Sources</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { name: "IMD Rainfall API", status: "Online", latency: "1.2s" },
            { name: "CPCB AQI Feed", status: "Online", latency: "3.1s" },
            { name: "CWC Flood API", status: "Online", latency: "2.4s" },
            { name: "Skymet Hyperlocal", status: "Online", latency: "0.9s" },
            { name: "SAFAR Delhi AQI", status: "Online", latency: "1.8s" },
            { name: "NDMA Alerts", status: "Online", latency: "5.2s" },
            { name: "Govt Gazette Bot", status: "Online", latency: "8.5s" },
            { name: "Razorpay UPI", status: "Online", latency: "0.4s" },
          ].map((src) => (
            <div key={src.name} className="p-3 rounded-xl bg-muted/50 border border-border">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <p className="text-xs font-semibold text-foreground">{src.name}</p>
              </div>
              <p className="text-xs text-muted-foreground">Latency: {src.latency}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
