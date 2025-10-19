import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Fuel, Settings, MapPin, Shield, Star, Check } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";

const VehicleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock vehicle data
  const vehicle = {
    id: id || "1",
    name: "Maruti Swift Dzire",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=500&fit=crop",
    type: "Sedan",
    seats: 4,
    fuel: "Petrol",
    transmission: "Manual",
    price: 2500,
    rating: 4.5,
    reviews: 128,
    description: "The Maruti Swift Dzire is a perfect blend of style, comfort, and efficiency. Ideal for both city rides and long journeys, this sedan offers a smooth driving experience with its spacious interiors and modern features.",
    features: [
      "Air Conditioning",
      "Power Steering",
      "Power Windows",
      "ABS",
      "Airbags",
      "Music System",
      "GPS Navigation",
      "Child Safety Locks",
    ],
    images: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1597404294360-feeaa5ab4d6b?w=800&h=500&fit=crop",
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="text-sm text-muted-foreground mb-6">
            <span className="hover:text-primary cursor-pointer" onClick={() => navigate("/")}>Home</span>
            {" / "}
            <span className="hover:text-primary cursor-pointer" onClick={() => navigate("/vehicles")}>Vehicles</span>
            {" / "}
            <span>{vehicle.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Vehicle Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Main Image */}
              <div className="rounded-lg overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-3 gap-4">
                {vehicle.images.map((img, index) => (
                  <div key={index} className="rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                    <img src={img} alt={`${vehicle.name} ${index + 1}`} className="w-full h-24 object-cover" />
                  </div>
                ))}
              </div>

              {/* Vehicle Details */}
              <Card className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{vehicle.name}</h1>
                    <div className="flex items-center space-x-4">
                      <Badge variant="secondary">{vehicle.type}</Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        <span className="font-medium">{vehicle.rating}</span>
                        <span className="text-muted-foreground">({vehicle.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-muted rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Seats</p>
                      <p className="font-semibold">{vehicle.seats}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Fuel className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Fuel</p>
                      <p className="font-semibold">{vehicle.fuel}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Settings className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Transmission</p>
                      <p className="font-semibold">{vehicle.transmission}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Insurance</p>
                      <p className="font-semibold">Included</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3">Description</h2>
                  <p className="text-muted-foreground">{vehicle.description}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Features</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {vehicle.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <div className="mb-6">
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-4xl font-bold text-primary">₹{vehicle.price}</span>
                    <span className="text-muted-foreground">/ day</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Free cancellation up to 24 hours</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Pickup & Drop</p>
                      <p className="text-sm text-muted-foreground">Available across major cities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Verified & Sanitized</p>
                      <p className="text-sm text-muted-foreground">Regular maintenance & cleaning</p>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full mb-3"
                  size="lg"
                  onClick={() => navigate(`/booking/${vehicle.id}`)}
                >
                  Book Now
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  Contact Support
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VehicleDetails;
