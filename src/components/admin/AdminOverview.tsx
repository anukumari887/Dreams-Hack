import { Users, CreditCard, TrendingUp, AlertTriangle, Activity } from "lucide-react";

const kpis = [
  { label: "Active Workers", value: "52,841", change: "+1,204 this week", icon: Users, color: "text-primary", bg: "bg-primary/10" },
  { label: "Total Payouts (Jan)", value: "₹1.24Cr", change: "+18% vs Dec", icon: CreditCard, color: "text-success", bg: "bg-success/10" },
  { label: "Active Triggers Today", value: "2", change: "Mumbai + Pune", icon: Activity, color: "text-danger", bg: "bg-danger/10" },
  { label: "Fraud Flags (MTD)", value: "14", change: "0.03% of claims", icon: AlertTriangle, color: "text-warning", bg: "bg-warning/10" },
];

const recentPayouts = [
  { worker: "Rahul K.", city: "Mumbai", trigger: "Heavy Rain", amount: "₹580", time: "9:41 AM", status: "Paid" },
  { worker: "Priya S.", city: "Pune", trigger: "Curfew", amount: "₹750", time: "9:38 AM", status: "Paid" },
  { worker: "Amit V.", city: "Mumbai", trigger: "Heavy Rain", amount: "₹580", time: "9:40 AM", status: "Processing" },
  { worker: "Sneha R.", city: "Mumbai", trigger: "Heavy Rain", amount: "₹580", time: "9:42 AM", status: "Paid" },
  { worker: "Kiran M.", city: "Delhi", trigger: "AQI Alert", amount: "₹450", time: "Yesterday", status: "Paid" },
];

export default function AdminOverview() {
  return (
    <div className="space-y-6 animate-scale-in">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground mb-1">Admin Overview</h1>
        <p className="text-sm text-muted-foreground">Platform performance at a glance — Jan 14, 2025</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="metric-card bg-card p-4 rounded-xl">
            <div className={`w-9 h-9 rounded-xl ${k.bg} flex items-center justify-center mb-3`}>
              <k.icon className={`w-4 h-4 ${k.color}`} />
            </div>
            <p className="text-xs text-muted-foreground mb-1">{k.label}</p>
            <p className="font-display font-bold text-xl text-foreground">{k.value}</p>
            <p className={`text-xs font-medium ${k.color}`}>{k.change}</p>
          </div>
        ))}
      </div>
      <div className="metric-card bg-card rounded-xl overflow-hidden">
        <div className="p-5 border-b border-border flex items-center justify-between">
          <h2 className="font-display font-bold text-foreground">Live Payout Feed</h2>
          <div className="flex items-center gap-2 text-xs text-success"><div className="w-2 h-2 rounded-full bg-success animate-pulse" /> Live</div>
        </div>
        <div className="divide-y divide-border">
          {recentPayouts.map((p, i) => (
            <div key={i} className="flex items-center gap-4 px-5 py-3.5 hover:bg-muted/30 transition-colors">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary flex-shrink-0">
                {p.worker[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground">{p.worker} <span className="text-muted-foreground font-normal">· {p.city}</span></p>
                <p className="text-xs text-muted-foreground">{p.trigger}</p>
              </div>
              <p className="text-sm font-bold text-success">{p.amount}</p>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${p.status === "Paid" ? "badge-active" : "badge-warning"}`}>{p.status}</span>
              <p className="text-xs text-muted-foreground w-16 text-right">{p.time}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { label: "Mumbai", workers: "18,200", payouts: "₹42.5L", risk: "HIGH", riskColor: "text-danger" },
          { label: "Delhi", workers: "14,600", payouts: "₹31.2L", risk: "MEDIUM", riskColor: "text-warning" },
          { label: "Bengaluru", workers: "9,800", payouts: "₹18.7L", risk: "LOW", riskColor: "text-success" },
        ].map((city) => (
          <div key={city.label} className="metric-card bg-card p-4 rounded-xl">
            <div className="flex justify-between items-start mb-2">
              <p className="font-display font-bold text-foreground">{city.label}</p>
              <span className={`text-xs font-bold ${city.riskColor}`}>{city.risk}</span>
            </div>
            <p className="text-xs text-muted-foreground">Workers: <span className="font-semibold text-foreground">{city.workers}</span></p>
            <p className="text-xs text-muted-foreground">Payouts MTD: <span className="font-semibold text-success">{city.payouts}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}
