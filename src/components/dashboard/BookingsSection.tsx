import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Calendar, Clock, Download, Car } from "lucide-react";

export const BookingsSection = () => {
  const upcomingBookings = [
    {
      id: "1",
      vehicle: "Maruti Swift Dzire",
      type: "Sedan",
      pickup: "Mumbai Airport",
      drop: "Pune",
      date: "2024-10-25",
      time: "10:00 AM",
      price: 2500,
      status: "confirmed",
      bookingId: "BK-001",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=200&h=150&fit=crop",
    },
  ];

  const completedBookings = [
    {
      id: "2",
      vehicle: "Toyota Innova Crysta",
      type: "SUV",
      pickup: "Mumbai",
      drop: "Lonavala",
      date: "2024-10-15",
      time: "08:00 AM",
      price: 4500,
      status: "completed",
      bookingId: "BK-002",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=200&h=150&fit=crop",
    },
  ];

  const handleDownloadReceipt = (bookingId: string) => {
    // Generate receipt download
    const booking = completedBookings.find(b => b.bookingId === bookingId);
    if (!booking) return;

    const receiptContent = `
BOOKING RECEIPT
----------------
Booking ID: ${booking.bookingId}
Vehicle: ${booking.vehicle}
Type: ${booking.type}
From: ${booking.pickup}
To: ${booking.drop}
Date: ${booking.date}
Time: ${booking.time}
Amount: ₹${booking.price}
Status: ${booking.status}
----------------
Thank you for booking with us!
    `;

    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `receipt-${bookingId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">My Bookings</h2>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          {upcomingBookings.length > 0 ? (
            upcomingBookings.map((booking) => (
              <Card key={booking.id} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-4">
                  <img
                    src={booking.image}
                    alt={booking.vehicle}
                    className="w-full md:w-48 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{booking.vehicle}</h3>
                        <Badge variant="secondary" className="mt-1">{booking.type}</Badge>
                      </div>
                      <Badge className="bg-green-500">Confirmed</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{booking.pickup} → {booking.drop}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{booking.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{booking.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-xl font-bold text-primary">₹{booking.price}</p>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm">View Details</Button>
                        <Button variant="destructive" size="sm">Cancel</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <Car className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No upcoming bookings</p>
              <Button className="mt-4">Book a Vehicle</Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {completedBookings.map((booking) => (
            <Card key={booking.id} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row gap-4">
                <img
                  src={booking.image}
                  alt={booking.vehicle}
                  className="w-full md:w-48 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{booking.vehicle}</h3>
                      <Badge variant="secondary" className="mt-1">{booking.type}</Badge>
                    </div>
                    <Badge variant="outline">Completed</Badge>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{booking.pickup} → {booking.drop}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{booking.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{booking.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-xl font-bold">₹{booking.price}</p>
                    <div className="space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleDownloadReceipt(booking.bookingId)}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Receipt
                      </Button>
                      <Button variant="outline" size="sm">Book Again</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </Card>
  );
};
