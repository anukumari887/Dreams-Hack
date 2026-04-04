import { Download, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const payouts = [
  { id: "PAY-2025-0042", date: "14 Jan 2025", trigger: "Heavy Rainfall", amount: "₹580", status: "Processing", duration: "< 4hrs", city: "Mumbai" },
  { id: "PAY-2025-0038", date: "08 Jan 2025", trigger: "Curfew / Sec 144", amount: "₹750", status: "Paid", duration: "2h 14m", city: "Pune" },
  { id: "PAY-2025-0031", date: "03 Jan 2025", trigger: "Heavy Rainfall", amount: "₹580", status: "Paid", duration: "3h 05m", city: "Mumbai" },
  { id: "PAY-2024-0089", date: "18 Dec 2024", trigger: "Flash Flood Alert", amount: "₹800", status: "Paid", duration: "1h 48m", city: "Mumbai" },
  { id: "PAY-2024-0071", date: "04 Dec 2024", trigger: "Severe AQI > 400", amount: "₹450", status: "Paid", duration: "4h 10m", city: "Delhi" },
  { id: "PAY-2024-0055", date: "12 Nov 2024", trigger: "Heavy Rainfall", amount: "₹580", status: "Paid", duration: "2h 52m", city: "Mumbai" },
  { id: "PAY-2024-0040", date: "28 Oct 2024", trigger: "Cyclone Alert", amount: "₹700", status: "Paid", duration: "45m", city: "Chennai" },
];

const statusStyle: Record<string, string> = {
  Processing: "badge-warning",
  Paid: "badge-active",
  Rejected: "badge-danger",
};

export default function WorkerPayouts() {
  const total = payouts.filter(p => p.status === "Paid").reduce((acc, p) => acc + parseInt(p.amount.replace("₹", "")), 0);

  return (
    <div className="space-y-6 animate-scale-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground mb-1">Payout History</h1>
          <p className="text-sm text-muted-foreground">All your auto-payouts in one place</p>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="w-4 h-4" />
          Export CSV
        </Button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Received", value: `₹${total.toLocaleString()}`, color: "text-success" },
          { label: "Total Claims", value: `${payouts.length}`, color: "text-primary" },
          { label: "Avg. Payout Time", value: "2h 41m", color: "text-info" },
          { label: "Success Rate", value: "100%", color: "text-accent" },
        ].map((s) => (
          <div key={s.label} className="metric-card bg-card p-4 rounded-xl text-center">
            <p className={`font-display text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="metric-card bg-card rounded-xl overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h2 className="font-display font-bold text-foreground">All Payouts</h2>
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                {["Payout ID", "Date", "Trigger", "City", "Amount", "Status", "Speed"].map((h) => (
                  <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {payouts.map((p, i) => (
                <tr key={p.id} className={`border-b border-border hover:bg-muted/30 transition-colors ${i === 0 && p.status === "Processing" ? "bg-warning-light/30" : ""}`}>
                  <td className="px-5 py-3.5 text-sm font-mono text-foreground">{p.id}</td>
                  <td className="px-5 py-3.5 text-sm text-muted-foreground">{p.date}</td>
                  <td className="px-5 py-3.5 text-sm text-foreground font-medium">{p.trigger}</td>
                  <td className="px-5 py-3.5 text-sm text-muted-foreground">{p.city}</td>
                  <td className="px-5 py-3.5 text-sm font-bold text-success">{p.amount}</td>
                  <td className="px-5 py-3.5">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${statusStyle[p.status] || "badge-info"}`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-muted-foreground">{p.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
