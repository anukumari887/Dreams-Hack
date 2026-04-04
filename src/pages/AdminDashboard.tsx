import { useState } from "react";
import Navbar from "@/components/Navbar";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminOverview from "@/components/admin/AdminOverview";
import AdminWorkers from "@/components/admin/AdminWorkers";
import AdminFraud from "@/components/admin/AdminFraud";
import AdminTriggers from "@/components/admin/AdminTriggers";

export type AdminTab = "overview" | "workers" | "fraud" | "triggers";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<AdminTab>("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview": return <AdminOverview />;
      case "workers": return <AdminWorkers />;
      case "fraud": return <AdminFraud />;
      case "triggers": return <AdminTriggers />;
      default: return <AdminOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex pt-16">
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 ml-0 md:ml-64 p-6 lg:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
