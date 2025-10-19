import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export const DeactivateSection = () => {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-destructive">Deactivate Account</h2>

      <div className="space-y-6">
        <div className="flex items-start space-x-3 p-4 bg-destructive/10 rounded-lg">
          <AlertTriangle className="h-6 w-6 text-destructive mt-0.5" />
          <div>
            <h3 className="font-semibold text-destructive mb-2">Warning</h3>
            <p className="text-sm text-muted-foreground">
              Deactivating your account will disable your access to all services. You will lose access to:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
              <li>All your booking history</li>
              <li>Your saved preferences and settings</li>
              <li>Your ratings and reviews</li>
              <li>Any ongoing bookings will be cancelled</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            If you're experiencing issues with our service, please contact our support team before deactivating your account.
          </p>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" size="lg">
                Deactivate My Account
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently deactivate your account
                  and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  Yes, Deactivate Account
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </Card>
  );
};
