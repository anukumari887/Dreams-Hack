import { Shield, Twitter, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-hero text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-20" />
      <div className="container relative mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-accent flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl">PRI<span className="text-accent">SM</span></span>
            </div>
            <p className="text-sm text-white/60 mb-2 leading-relaxed">
              Predictive Risk & Income Shield for Mobility Workers.
            </p>
            <p className="text-xs text-white/40 mb-5 italic">
              Insurance that protects your income before the storm hits.
            </p>
            <div className="flex items-center gap-2">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon className="w-4 h-4 text-white/80" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: "Platform",
              links: ["How It Works", "Parametric Triggers", "Coverage Plans", "AI Engine", "Data Partners"],
            },
            {
              title: "Workers",
              links: ["Food Delivery", "Grocery Delivery", "E-commerce", "Ride-hailing", "Home Services"],
            },
            {
              title: "Company",
              links: ["About Us", "IRDAI Compliance", "Privacy Policy", "Terms of Service", "Careers"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Compliance banner */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-xs text-white/40">
              <span>🏛️ IRDAI Sandbox Compliant</span>
              <span>•</span>
              <span>🔒 ISO 27001 Security</span>
              <span>•</span>
              <span>📋 DPDP Act Compliant</span>
              <span>•</span>
              <span>🇮🇳 Made in India</span>
            </div>
            <div className="text-right">
              <p className="text-xs text-white/40">
                © 2025 PRISM Technologies Pvt. Ltd. · Insurance products subject to IRDAI regulations.
              </p>
              <p className="text-xs text-white/30 mt-1">
                📜 Created for innovation, research, and hackathon demonstration purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
