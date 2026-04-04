import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Shield, Menu, X, Bell, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isLanding ? "bg-transparent" : "bg-card border-b border-border shadow-sm-custom"}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-accent flex items-center justify-center shadow-accent">
            <Shield className="w-5 h-5 text-accent-foreground" />
          </div>
          <span className={`font-display font-bold text-xl tracking-tight ${isLanding ? "text-white" : "text-foreground"}`}>
            PRI<span className="text-accent">SM</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {isLanding ? (
            <>
              {["Platform", "How It Works", "Pricing", "For Partners"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                  className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-all"
                >
                  {item}
                </a>
              ))}
            </>
          ) : (
            <>
              <Link to="/worker" className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${location.pathname === "/worker" ? "bg-primary-light text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}>
                Worker Dashboard
              </Link>
              <Link to="/admin" className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${location.pathname === "/admin" ? "bg-primary-light text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}>
                Admin Dashboard
              </Link>
            </>
          )}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          {isLanding ? (
            <>
              <Link to="/worker">
                <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 border-0">
                  Log In
                </Button>
              </Link>
              <Link to="/worker">
                <Button className="bg-gradient-accent text-accent-foreground font-semibold hover:opacity-90 shadow-accent border-0">
                  Get Protected →
                </Button>
              </Link>
            </>
          ) : (
            <>
              <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-danger"></span>
              </button>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-muted cursor-pointer hover:bg-border transition-colors">
                <div className="w-7 h-7 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-foreground">RK</span>
                </div>
                <span className="text-sm font-medium text-foreground">Rahul K.</span>
                <ChevronDown className="w-3 h-3 text-muted-foreground" />
              </div>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button className={`md:hidden p-2 rounded-lg ${isLanding ? "text-white hover:bg-white/10" : "text-foreground hover:bg-muted"}`} onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={`md:hidden px-6 pb-4 ${isLanding ? "bg-primary/95 backdrop-blur-md" : "bg-card border-b border-border"}`}>
          <div className="flex flex-col gap-2">
            <Link to="/worker" className="px-4 py-3 text-sm font-medium text-white/90 hover:text-white rounded-lg hover:bg-white/10" onClick={() => setMobileOpen(false)}>
              Worker Dashboard
            </Link>
            <Link to="/admin" className="px-4 py-3 text-sm font-medium text-white/90 hover:text-white rounded-lg hover:bg-white/10" onClick={() => setMobileOpen(false)}>
              Admin Dashboard
            </Link>
            <Link to="/worker">
              <Button className="w-full mt-2 bg-gradient-accent text-accent-foreground font-semibold">
                Get Protected →
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
