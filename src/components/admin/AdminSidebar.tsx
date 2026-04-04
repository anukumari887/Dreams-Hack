import { LayoutDashboard, Users, ShieldAlert, Zap, LogOut, ChevronRight, TrendingUp } from "lucide-react";
import type { AdminTab } from "@/pages/AdminDashboard";

const navItems = [
  { id: "overview" as AdminTab, icon: LayoutDashboard, label: "Overview" },
  { id: "triggers" as AdminTab, icon: Zap, label: "Live Triggers", badge: "2" },
  { id: "workers" as AdminTab, icon: Users, label: "Workers" },
  { id: "fraud" as AdminTab, icon: ShieldAlert, label: "Fraud Detection" },
];

interface Props {
  activeTab: AdminTab;
  setActiveTab: (tab: AdminTab) => void;
}

export default function AdminSidebar({ activeTab, setActiveTab }: Props) {
  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 hidden md:flex flex-col bg-sidebar border-r border-sidebar-border z-40">
      <div className="p-5 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-bold text-sidebar-foreground text-sm">Admin Portal</p>
            <p className="text-xs text-sidebar-foreground/50">PRISM Insurer Dashboard</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-3">
        <p className="text-xs font-semibold text-sidebar-foreground/40 uppercase tracking-wider px-3 mb-2">Management</p>
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

      <div className="p-4 border-t border-sidebar-border">
        <div className="px-3 py-2 mb-2 rounded-xl bg-sidebar-accent/50">
          <p className="text-xs text-sidebar-foreground/40">Platform Health</p>
          <p className="font-bold text-success text-sm mt-0.5">99.7% Uptime</p>
          <p className="text-xs text-sidebar-foreground/40">All systems operational</p>
        </div>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-sidebar-foreground/50 hover:text-sidebar-foreground hover:bg-sidebar-accent/50 transition-all">
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
