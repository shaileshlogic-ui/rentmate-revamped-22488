import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Clock, User, Car, History, Settings } from "lucide-react";

const Dashboard = () => {
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
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=200&h=150&fit=crop",
    },
  ];

  const pastBookings = [
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
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=200&h=150&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8 bg-muted">
        <div className="container mx-auto px-4">
          {/* User Profile Header */}
          <Card className="p-6 mb-8 animate-fade-in">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">John Doe</h1>
                  <p className="text-muted-foreground">john@example.com</p>
                </div>
              </div>
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 animate-scale-in">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Bookings</p>
                  <p className="text-3xl font-bold">12</p>
                </div>
                <Car className="h-10 w-10 text-primary" />
              </div>
            </Card>
            <Card className="p-6 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Upcoming</p>
                  <p className="text-3xl font-bold">1</p>
                </div>
                <Calendar className="h-10 w-10 text-accent" />
              </div>
            </Card>
            <Card className="p-6 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Spent</p>
                  <p className="text-3xl font-bold">₹45k</p>
                </div>
                <History className="h-10 w-10 text-primary" />
              </div>
            </Card>
          </div>

          {/* Bookings */}
          <Card className="p-6">
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="upcoming">Upcoming Bookings</TabsTrigger>
                <TabsTrigger value="past">Past Bookings</TabsTrigger>
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
                            <Badge className="bg-green-500">{booking.status}</Badge>
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

              <TabsContent value="past" className="space-y-4">
                {pastBookings.map((booking) => (
                  <Card key={booking.id} className="p-4 hover:shadow-md transition-shadow opacity-75">
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
                          <Badge variant="outline">{booking.status}</Badge>
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
                          <Button variant="outline" size="sm">Book Again</Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
