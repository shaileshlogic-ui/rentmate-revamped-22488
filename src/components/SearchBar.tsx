import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Calendar, Clock, Search, Car, Truck, Music, Lightbulb } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export const SearchBar = () => {
  const [serviceType, setServiceType] = useState("cabs");
  const [tripType, setTripType] = useState("one-way");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/vehicles");
  };

  return (
    <div className="w-full">
      <Tabs value={serviceType} onValueChange={setServiceType} className="w-full">
        {/* Icon-based Tab Navigation */}
        <div className="flex justify-center items-center gap-2 md:gap-8 mb-6 pb-6 border-b flex-wrap">
          {[
            { value: "cabs", label: "Cabs", icon: Car },
            { value: "transport", label: "Transport", icon: Truck },
            { value: "dj", label: "DJ & Sound", icon: Music },
            { value: "roadlights", label: "Roadlights", icon: Lightbulb },
          ].map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.value}
                onClick={() => setServiceType(service.value)}
                className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all ${
                  serviceType === service.value
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-muted text-muted-foreground"
                }`}
              >
                <Icon className="h-6 w-6" />
                <span className="text-xs md:text-sm font-medium">{service.label}</span>
              </button>
            );
          })}
        </div>

        <TabsContent value="cabs" className="mt-0">
          {/* Trip Type Radio Buttons */}
          <RadioGroup value={tripType} onValueChange={setTripType} className="flex gap-4 md:gap-6 mb-6 flex-wrap">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="one-way" id="one-way" />
              <Label htmlFor="one-way" className="cursor-pointer text-sm">One Way</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="round-trip" id="round-trip" />
              <Label htmlFor="round-trip" className="cursor-pointer text-sm">Round Trip</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="multi-city" id="multi-city" />
              <Label htmlFor="multi-city" className="cursor-pointer text-sm">Multi City</Label>
            </div>
          </RadioGroup>

          <form onSubmit={handleSearch} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Label className="text-xs text-muted-foreground mb-1 block">From</Label>
                <MapPin className="absolute left-3 top-8 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Pickup Location" className="pl-10" required />
              </div>
              <div className="relative">
                <Label className="text-xs text-muted-foreground mb-1 block">To</Label>
                <MapPin className="absolute left-3 top-8 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Drop Location" className="pl-10" required />
              </div>
              <div className="relative">
                <Label className="text-xs text-muted-foreground mb-1 block">Departure</Label>
                <Calendar className="absolute left-3 top-8 h-5 w-5 text-muted-foreground" />
                <Input type="date" className="pl-10" required />
              </div>
              <div className="relative">
                <Label className="text-xs text-muted-foreground mb-1 block">Pickup Time</Label>
                <Clock className="absolute left-3 top-8 h-5 w-5 text-muted-foreground" />
                <Input type="time" className="pl-10" required />
              </div>
            </div>
            <Button type="submit" className="w-full md:w-auto px-12 bg-primary hover:bg-primary/90" size="lg">
              <Search className="mr-2 h-5 w-5" />
              SEARCH
            </Button>
          </form>
        </TabsContent>

        <TabsContent value="transport" className="mt-0">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Label className="text-xs text-muted-foreground mb-1 block">From</Label>
                <MapPin className="absolute left-3 top-8 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Pickup Location" className="pl-10" required />
              </div>
              <div className="relative">
                <Label className="text-xs text-muted-foreground mb-1 block">To</Label>
                <MapPin className="absolute left-3 top-8 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Drop Location" className="pl-10" required />
              </div>
              <div className="relative">
                <Label className="text-xs text-muted-foreground mb-1 block">Pickup Date</Label>
                <Calendar className="absolute left-3 top-8 h-5 w-5 text-muted-foreground" />
                <Input type="date" className="pl-10" required />
              </div>
              <div className="relative">
                <Label className="text-xs text-muted-foreground mb-1 block">Vehicle Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Vehicle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mini-truck">Mini Truck</SelectItem>
                    <SelectItem value="truck">Truck</SelectItem>
                    <SelectItem value="tempo">Tempo</SelectItem>
                    <SelectItem value="trailer">Trailer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button type="submit" className="w-full md:w-auto px-12 bg-primary hover:bg-primary/90" size="lg">
              <Search className="mr-2 h-5 w-5" />
              SEARCH
            </Button>
          </form>
        </TabsContent>

        <TabsContent value="dj" className="mt-0">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="relative">
                <Label className="text-xs text-muted-foreground mb-1 block">Event Location</Label>
                <MapPin className="absolute left-3 top-8 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Enter Location" className="pl-10" required />
              </div>
              <div className="relative">
                <Label className="text-xs text-muted-foreground mb-1 block">Event Date</Label>
                <Calendar className="absolute left-3 top-8 h-5 w-5 text-muted-foreground" />
                <Input type="date" className="pl-10" required />
              </div>
              <div className="relative">
                <Label className="text-xs text-muted-foreground mb-1 block">Event Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="party">Party</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button type="submit" className="w-full md:w-auto px-12 bg-primary hover:bg-primary/90" size="lg">
              <Search className="mr-2 h-5 w-5" />
              SEARCH
            </Button>
          </form>
        </TabsContent>

        <TabsContent value="roadlights" className="mt-0">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="relative">
                <Label className="text-xs text-muted-foreground mb-1 block">Event Location</Label>
                <MapPin className="absolute left-3 top-8 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Enter Location" className="pl-10" required />
              </div>
              <div className="relative">
                <Label className="text-xs text-muted-foreground mb-1 block">Event Date</Label>
                <Calendar className="absolute left-3 top-8 h-5 w-5 text-muted-foreground" />
                <Input type="date" className="pl-10" required />
              </div>
              <div className="relative">
                <Label className="text-xs text-muted-foreground mb-1 block">Decoration Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding Decoration</SelectItem>
                    <SelectItem value="function">Function Lighting</SelectItem>
                    <SelectItem value="pathway">Pathway Lights</SelectItem>
                    <SelectItem value="custom">Custom Setup</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button type="submit" className="w-full md:w-auto px-12 bg-primary hover:bg-primary/90" size="lg">
              <Search className="mr-2 h-5 w-5" />
              SEARCH
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};
