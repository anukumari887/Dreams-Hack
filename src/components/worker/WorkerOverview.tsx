import { CloudRain, TrendingUp, CreditCard, Shield, AlertTriangle, CheckCircle, MapPin, Clock } from "lucide-react";

const metrics = [
  { label: "This Week's Earnings", value: "₹4,280", change: "+12%", icon: TrendingUp, color: "text-success", bg: "bg-success/10" },
  { label: "Active Coverage", value: "Pro Shield", change: "Renews Sunday", icon: Shield, color: "text-primary", bg: "bg-primary/10" },
  { label: "Total Payouts (2024)", value: "₹12,450", change: "5 claims paid", icon: CreditCard, color: "text-accent", bg: "bg-accent/10" },
  { label: "Current Risk Level", value: "HIGH", change: "Mumbai today", icon: AlertTriangle, color: "text-danger", bg: "bg-danger/10" },
];

const recentActivity = [
  { type: "payout", title: "Auto-payout triggered", amount: "+₹580", detail: "Heavy rain 23mm/hr • Mumbai", time: "2 hrs ago", icon: "💰", status: "success" },
  { type: "alert", title: "Risk Alert Sent", amount: "", detail: "Cyclone warning — coastal zone", time: "5 hrs ago", icon: "⚠️", status: "warning" },
  { type: "premium", title: "Weekly Premium Deducted", amount: "−₹49", detail: "Pro Shield renewed", time: "Sun, 12 Jan", icon: "🔄", status: "info" },
  { type: "payout", title: "Curfew Coverage Paid", amount: "+₹750", detail: "Section 144 declared • Pune", time: "8 Jan", icon: "💰", status: "success" },
];

export default function WorkerOverview() {
  return (
    <div className="space-y-6 animate-scale-in">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground mb-1">
            Good morning, Rahul 👋
          </h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" />
            <span>Mumbai, Maharashtra</span>
            <span>•</span>
            <Clock className="w-3.5 h-3.5" />
            <span>Tuesday, 14 Jan 2025</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-danger-light border border-danger/20">
          <CloudRain className="w-4 h-4 text-danger" />
          <div>
            <p className="text-xs font-bold text-danger">HIGH RISK TODAY</p>
            <p className="text-xs text-muted-foreground">Rain 23mm/hr forecast</p>
          </div>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="p-4 rounded-xl bg-danger-light border border-danger/30 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-danger/20 flex items-center justify-center flex-shrink-0">
          <CloudRain className="w-5 h-5 text-danger" />
        </div>
        <div className="flex-1">
          <p className="font-bold text-danger text-sm">⚡ Parametric Trigger Active — IMD Alert Level 3</p>
          <p className="text-xs text-muted-foreground">Rainfall exceeding 20mm/hr threshold detected in your zone. Auto-payout of ₹580 will be processed within 4 hours.</p>
        </div>
        <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-danger text-danger-foreground animate-pulse whitespace-nowrap">
          Processing...
        </span>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="metric-card bg-card p-4 rounded-xl">
            <div className={`w-9 h-9 rounded-xl ${m.bg} flex items-center justify-center mb-3`}>
              <m.icon className={`w-4 h-4 ${m.color}`} />
            </div>
            <p className="text-xs text-muted-foreground mb-1">{m.label}</p>
            <p className={`font-display font-bold text-lg text-foreground`}>{m.value}</p>
            <p className={`text-xs font-medium ${m.color}`}>{m.change}</p>
          </div>
        ))}
      </div>

      {/* Two column layout */}
      <div className="grid lg:grid-cols-3 gap-5">
        {/* Activity feed */}
        <div className="lg:col-span-2 metric-card bg-card rounded-xl p-5">
          <h2 className="font-display font-bold text-foreground mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {recentActivity.map((act, i) => (
              <div key={i} className="flex items-center gap-3 py-3 border-b border-border last:border-0">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${
                  act.status === "success" ? "bg-success-light" :
                  act.status === "warning" ? "bg-warning-light" : "bg-info-light"
                }`}>
                  {act.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground">{act.title}</p>
                  <p className="text-xs text-muted-foreground truncate">{act.detail}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  {act.amount && (
                    <p className={`text-sm font-bold ${act.amount.startsWith("+") ? "text-success" : "text-muted-foreground"}`}>
                      {act.amount}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">{act.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage summary */}
        <div className="space-y-4">
          <div className="metric-card bg-card rounded-xl p-5">
            <h3 className="font-display font-bold text-foreground mb-4">Coverage Status</h3>
            <div className="space-y-2.5">
              {[
                { trigger: "Heavy Rain", status: "ACTIVE", color: "badge-danger" },
                { trigger: "Air Pollution", status: "COVERED", color: "badge-active" },
                { trigger: "Flash Floods", status: "COVERED", color: "badge-active" },
                { trigger: "Curfew", status: "COVERED", color: "badge-active" },
                { trigger: "Cyclone", status: "COVERED", color: "badge-active" },
                { trigger: "Heat Wave", status: "COVERED", color: "badge-active" },
              ].map((item) => (
                <div key={item.trigger} className="flex items-center justify-between">
                  <span className="text-sm text-foreground">{item.trigger}</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${item.color}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly earnings chart */}
          <div className="metric-card bg-card rounded-xl p-5">
            <h3 className="font-display font-bold text-foreground mb-1">Earnings Protection</h3>
            <p className="text-xs text-muted-foreground mb-4">January 2025</p>
            <div className="flex items-end gap-1 h-16">
              {[60, 80, 45, 90, 55, 75, 95, 40, 85, 70, 30, 88, 65, 100].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t ${i === 13 ? "bg-danger" : i > 9 ? "bg-primary/40" : "bg-primary/20"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs text-muted-foreground">Jan 1</span>
              <span className="text-xs text-muted-foreground">Jan 14</span>
            </div>
            <div className="mt-3 pt-3 border-t border-border flex justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Protected Income</p>
                <p className="font-bold text-success text-sm">₹2,500/day</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Claimed</p>
                <p className="font-bold text-accent text-sm">₹1,330</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sample User Flow Story */}
      <div className="metric-card bg-card rounded-xl p-5 border-l-4 border-accent">
        <h3 className="font-display font-bold text-foreground mb-1 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-success" />
          Rahul's Story: Last Week's Payout
        </h3>
        <p className="text-sm text-muted-foreground mb-4">Here's exactly what happened during Tuesday's Mumbai storm:</p>
        <div className="flex flex-col md:flex-row gap-2">
          {[
            { time: "9:32 AM", event: "IMD alert: Rain 24mm/hr at Kurla zone", color: "bg-info-light text-info" },
            { time: "9:35 AM", event: "PRISM AI cross-verified Skymet + CPCB data", color: "bg-warning-light text-warning-foreground" },
            { time: "9:36 AM", event: "GPS confirmed: Rahul in covered zone", color: "bg-primary-light text-primary" },
            { time: "9:38 AM", event: "Fraud check passed — no anomaly detected", color: "bg-accent-light text-accent" },
            { time: "9:41 AM", event: "₹580 sent to Rahul's UPI — payout success!", color: "bg-success-light text-success" },
          ].map((step, i) => (
            <div key={i} className={`flex-1 p-3 rounded-lg ${step.color} border border-current/10`}>
              <p className="text-xs font-bold mb-1">{step.time}</p>
              <p className="text-xs">{step.event}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
