import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { ProfileSection } from "@/components/dashboard/ProfileSection";
import { BookingsSection } from "@/components/dashboard/BookingsSection";
import { RatingsSection } from "@/components/dashboard/RatingsSection";
import { SettingsSection } from "@/components/dashboard/SettingsSection";
import { DeactivateSection } from "@/components/dashboard/DeactivateSection";

type SidebarItem = "profile" | "bookings" | "ratings" | "settings" | "deactivate";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState<SidebarItem>("profile");

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileSection />;
      case "bookings":
        return <BookingsSection />;
      case "ratings":
        return <RatingsSection />;
      case "settings":
        return <SettingsSection />;
      case "deactivate":
        return <DeactivateSection />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Sidebar */}
            <div className="lg:col-span-3">
              <DashboardSidebar 
                activeSection={activeSection} 
                onSectionChange={setActiveSection}
              />
            </div>

            {/* Right Content */}
            <div className="lg:col-span-9">
              {renderSection()}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
