import { AlertTriangle, CloudRain, Wind, Waves, Thermometer, Bell, MapPin } from "lucide-react";

const alerts = [
  {
    id: 1,
    severity: "HIGH",
    type: "Heavy Rainfall",
    icon: CloudRain,
    title: "IMD Orange Alert — Mumbai",
    description: "Rainfall of 23mm/hr recorded at Kurla weather station. Exceeds 20mm/hr payout threshold. Your payout of ₹580 is being processed.",
    time: "Today, 9:32 AM",
    actionable: true,
    payout: "₹580 processing",
    color: "border-danger bg-danger-light",
    iconColor: "text-danger",
    badgeColor: "badge-danger",
  },
  {
    id: 2,
    severity: "MEDIUM",
    type: "Air Pollution",
    icon: Wind,
    title: "AQI 312 — Andheri Zone",
    description: "Air quality is 'Very Poor'. Not yet at ₹450 payout threshold (AQI > 400). Stay updated — forecast suggests worsening by evening.",
    time: "Today, 11:15 AM",
    actionable: false,
    payout: null,
    color: "border-warning bg-warning-light",
    iconColor: "text-warning-foreground",
    badgeColor: "badge-warning",
  },
  {
    id: 3,
    severity: "INFO",
    type: "Cyclone Watch",
    icon: Waves,
    title: "Cyclone Mocha — 3 Days Away",
    description: "IMD tracking Cyclone Mocha in Bay of Bengal. Landfall predicted near Chennai coast. Coastal zone workers will receive automatic coverage.",
    time: "Yesterday, 6:00 PM",
    actionable: false,
    payout: null,
    color: "border-info bg-info-light",
    iconColor: "text-info",
    badgeColor: "badge-info",
  },
  {
    id: 4,
    severity: "LOW",
    type: "Heat Wave Advisory",
    icon: Thermometer,
    title: "IMD Heatwave Warning — Vidarbha",
    description: "Temperature forecast: 44°C on Thursday. Currently 1°C below ₹380 payout threshold. Activate heat coverage by upgrading to Elite Shield.",
    time: "Yesterday, 2:00 PM",
    actionable: false,
    payout: null,
    color: "border-accent/30 bg-accent-light",
    iconColor: "text-accent",
    badgeColor: "",
  },
];

const cityRisks = [
  { city: "Mumbai", risk: 88, level: "HIGH", reason: "Active rainfall", color: "bg-danger" },
  { city: "Delhi", risk: 62, level: "MEDIUM", reason: "AQI 312", color: "bg-warning" },
  { city: "Chennai", risk: 45, level: "MEDIUM", reason: "Cyclone watch", color: "bg-warning" },
  { city: "Bengaluru", risk: 18, level: "LOW", reason: "Clear sky", color: "bg-success" },
  { city: "Hyderabad", risk: 30, level: "LOW", reason: "Light drizzle", color: "bg-success" },
  { city: "Pune", risk: 55, level: "MEDIUM", reason: "Moderate rain", color: "bg-warning" },
];

export default function WorkerAlerts() {
  return (
    <div className="space-y-6 animate-scale-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground mb-1">Risk Alerts</h1>
          <p className="text-sm text-muted-foreground">Real-time weather and disruption intelligence for your city</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Bell className="w-4 h-4" />
          <span>Live updates</span>
          <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
        </div>
      </div>

      {/* Active alerts */}
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className={`rounded-xl p-4 border-l-4 ${alert.color}`}>
            <div className="flex items-start gap-3">
              <div className={`w-9 h-9 rounded-xl bg-white/60 flex items-center justify-center flex-shrink-0`}>
                <alert.icon className={`w-5 h-5 ${alert.iconColor}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <p className="font-semibold text-foreground text-sm">{alert.title}</p>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${alert.badgeColor || "bg-muted text-muted-foreground"}`}>
                    {alert.severity}
                  </span>
                  {alert.payout && (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-success-light text-success border border-success/20">
                      {alert.payout}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-1">{alert.description}</p>
                <p className="text-xs text-muted-foreground">{alert.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* City risk heatmap */}
      <div className="metric-card bg-card rounded-xl p-5">
        <div className="flex items-center gap-2 mb-5">
          <MapPin className="w-4 h-4 text-primary" />
          <h2 className="font-display font-bold text-foreground">City Risk Heatmap</h2>
          <span className="ml-auto text-xs text-muted-foreground">Live • IMD + CPCB</span>
        </div>
        <div className="space-y-3">
          {cityRisks.map((city) => (
            <div key={city.city} className="flex items-center gap-4">
              <span className="text-sm font-medium text-foreground w-20 flex-shrink-0">{city.city}</span>
              <div className="flex-1 bg-muted rounded-full h-2.5 overflow-hidden">
                <div
                  className={`h-full rounded-full ${city.color} transition-all`}
                  style={{ width: `${city.risk}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground w-24 flex-shrink-0 text-right">{city.reason}</span>
              <span className={`text-xs font-bold w-16 text-right flex-shrink-0 ${
                city.level === "HIGH" ? "text-danger" :
                city.level === "MEDIUM" ? "text-warning-foreground" : "text-success"
              }`}>{city.level}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground text-center">
          Risk score calculated using 14 data sources · Updated every 15 minutes
        </div>
      </div>
    </div>
  );
}
