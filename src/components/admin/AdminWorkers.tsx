const workers = [
  { name: "Rahul Kumar", city: "Mumbai", platform: "Swiggy", plan: "Pro Shield", premium: "₹49/wk", status: "Active", claims: 5, totalPaid: "₹12,450" },
  { name: "Priya Sharma", city: "Pune", platform: "Zomato", plan: "Basic Shield", premium: "₹29/wk", status: "Active", claims: 2, totalPaid: "₹1,500" },
  { name: "Amit Verma", city: "Mumbai", platform: "Blinkit", plan: "Pro Shield", premium: "₹49/wk", status: "Active", claims: 3, totalPaid: "₹7,200" },
  { name: "Sneha Rao", city: "Bengaluru", platform: "Amazon Flex", plan: "Elite", premium: "₹89/wk", status: "Active", claims: 1, totalPaid: "₹4,500" },
  { name: "Kiran Mehta", city: "Delhi", platform: "Ola", plan: "Pro Shield", premium: "₹49/wk", status: "Suspended", claims: 8, totalPaid: "₹19,800" },
  { name: "Deepak Singh", city: "Hyderabad", platform: "Dunzo", plan: "Basic Shield", premium: "₹29/wk", status: "Active", claims: 0, totalPaid: "₹0" },
];

export default function AdminWorkers() {
  return (
    <div className="space-y-6 animate-scale-in">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground mb-1">Worker Management</h1>
        <p className="text-sm text-muted-foreground">52,841 active insured workers across 12 cities</p>
      </div>
      <div className="metric-card bg-card rounded-xl overflow-hidden">
        <div className="p-5 border-b border-border">
          <h2 className="font-display font-bold text-foreground">All Workers (Sample)</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                {["Worker", "City", "Platform", "Plan", "Premium", "Claims", "Total Paid", "Status"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {workers.map((w, i) => (
                <tr key={i} className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3 text-sm font-semibold text-foreground">{w.name}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{w.city}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{w.platform}</td>
                  <td className="px-4 py-3 text-sm text-foreground">{w.plan}</td>
                  <td className="px-4 py-3 text-sm font-medium text-accent">{w.premium}</td>
                  <td className="px-4 py-3 text-sm text-foreground">{w.claims}</td>
                  <td className="px-4 py-3 text-sm font-bold text-success">{w.totalPaid}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${w.status === "Active" ? "badge-active" : "badge-danger"}`}>
                      {w.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
