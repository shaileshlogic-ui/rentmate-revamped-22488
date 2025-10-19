import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export const SettingsSection = () => {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>

      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Notifications</h3>
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notifications" className="flex flex-col gap-1">
              <span>Email Notifications</span>
              <span className="text-sm text-muted-foreground">Receive booking updates via email</span>
            </Label>
            <Switch id="email-notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="sms-notifications" className="flex flex-col gap-1">
              <span>SMS Notifications</span>
              <span className="text-sm text-muted-foreground">Receive booking updates via SMS</span>
            </Label>
            <Switch id="sms-notifications" defaultChecked />
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t">
          <h3 className="text-lg font-semibold">Privacy</h3>
          <div className="flex items-center justify-between">
            <Label htmlFor="profile-visibility" className="flex flex-col gap-1">
              <span>Profile Visibility</span>
              <span className="text-sm text-muted-foreground">Make your profile visible to others</span>
            </Label>
            <Switch id="profile-visibility" />
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t">
          <h3 className="text-lg font-semibold">Password</h3>
          <Button variant="outline">Change Password</Button>
        </div>
      </div>
    </Card>
  );
};
