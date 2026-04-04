import { useState } from "react";
import Navbar from "@/components/Navbar";
import WorkerSidebar from "@/components/worker/WorkerSidebar";
import WorkerOverview from "@/components/worker/WorkerOverview";
import WorkerPayouts from "@/components/worker/WorkerPayouts";
import WorkerCoverage from "@/components/worker/WorkerCoverage";
import WorkerAlerts from "@/components/worker/WorkerAlerts";

export type WorkerTab = "overview" | "payouts" | "coverage" | "alerts";

export default function WorkerDashboard() {
  const [activeTab, setActiveTab] = useState<WorkerTab>("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview": return <WorkerOverview />;
      case "payouts": return <WorkerPayouts />;
      case "coverage": return <WorkerCoverage />;
      case "alerts": return <WorkerAlerts />;
      default: return <WorkerOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex pt-16">
        <WorkerSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 ml-0 md:ml-64 p-6 lg:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
