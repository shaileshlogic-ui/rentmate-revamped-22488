import { User, Calendar, Star, Settings as SettingsIcon, Power } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type SidebarItem = "profile" | "bookings" | "ratings" | "settings" | "deactivate";

interface DashboardSidebarProps {
  activeSection: SidebarItem;
  onSectionChange: (section: SidebarItem) => void;
}

export const DashboardSidebar = ({ activeSection, onSectionChange }: DashboardSidebarProps) => {
  const menuItems = [
    { id: "profile" as SidebarItem, icon: User, label: "Profile" },
    { id: "bookings" as SidebarItem, icon: Calendar, label: "Bookings" },
    { id: "ratings" as SidebarItem, icon: Star, label: "Ratings" },
    { id: "settings" as SidebarItem, icon: SettingsIcon, label: "Settings" },
  ];

  return (
    <Card className="p-4 h-fit sticky top-4">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant={activeSection === item.id ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => onSectionChange(item.id)}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.label}
          </Button>
        ))}
        <Button
          variant={activeSection === "deactivate" ? "destructive" : "ghost"}
          className="w-full justify-start text-destructive hover:text-destructive"
          onClick={() => onSectionChange("deactivate")}
        >
          <Power className="mr-3 h-5 w-5" />
          Deactivate
        </Button>
      </nav>
    </Card>
  );
};
