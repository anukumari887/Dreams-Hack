import { LayoutDashboard, CreditCard, Shield, Bell, LogOut, ChevronRight } from "lucide-react";
import type { WorkerTab } from "@/pages/WorkerDashboard";

const navItems = [
  { id: "overview" as WorkerTab, icon: LayoutDashboard, label: "Overview" },
  { id: "payouts" as WorkerTab, icon: CreditCard, label: "Payouts" },
  { id: "coverage" as WorkerTab, icon: Shield, label: "My Coverage" },
  { id: "alerts" as WorkerTab, icon: Bell, label: "Risk Alerts", badge: "3" },
];

interface Props {
  activeTab: WorkerTab;
  setActiveTab: (tab: WorkerTab) => void;
}

export default function WorkerSidebar({ activeTab, setActiveTab }: Props) {
  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 hidden md:flex flex-col bg-sidebar border-r border-sidebar-border z-40">
      {/* Worker info */}
      <div className="p-5 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-gradient-accent flex items-center justify-center text-lg">
            🧑🏽
          </div>
          <div>
            <p className="font-bold text-sidebar-foreground text-sm">Rahul Kumar</p>
            <p className="text-xs text-sidebar-foreground/50">Swiggy Delivery Partner</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 px-3 py-2 rounded-xl bg-success/15 border border-success/20">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-xs font-semibold text-success-foreground">Pro Shield — Active</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3">
        <p className="text-xs font-semibold text-sidebar-foreground/40 uppercase tracking-wider px-3 mb-2">Dashboard</p>
        <div className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all nav-item ${
                activeTab === item.id
                  ? "bg-sidebar-accent text-sidebar-primary border-l-4 border-sidebar-primary pl-2"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-4 h-4" />
                {item.label}
              </div>
              {item.badge ? (
                <span className="w-5 h-5 rounded-full bg-danger text-danger-foreground text-xs font-bold flex items-center justify-center">
                  {item.badge}
                </span>
              ) : (
                <ChevronRight className={`w-3 h-3 ${activeTab === item.id ? "opacity-100" : "opacity-0"}`} />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-sidebar-border">
        <div className="px-3 py-2 mb-2">
          <p className="text-xs text-sidebar-foreground/40 mb-1">Weekly Premium</p>
          <p className="font-display font-bold text-sidebar-primary text-lg">₹49</p>
          <p className="text-xs text-sidebar-foreground/40">Next deduction: Sun</p>
        </div>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-sidebar-foreground/50 hover:text-sidebar-foreground hover:bg-sidebar-accent/50 transition-all">
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
