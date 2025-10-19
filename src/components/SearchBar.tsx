import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Calendar, Clock, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const navigate = useNavigate();
  const [serviceType, setServiceType] = useState("cabs");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/vehicles");
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-card rounded-xl shadow-xl p-6 animate-slide-up">
      <Tabs value={serviceType} onValueChange={setServiceType} className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="cabs">Cabs</TabsTrigger>
          <TabsTrigger value="transport">Transport</TabsTrigger>
          <TabsTrigger value="dj">DJ & Sound</TabsTrigger>
          <TabsTrigger value="roadlights">Roadlights</TabsTrigger>
        </TabsList>

        <TabsContent value={serviceType}>
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pickup" className="text-sm font-medium">
                  Pickup Location
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="pickup"
                    placeholder="Enter pickup location"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="drop" className="text-sm font-medium">
                  Drop Location
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="drop"
                    placeholder="Enter drop location"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="text-sm font-medium">
                  Pickup Date
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="date"
                    type="date"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time" className="text-sm font-medium">
                  Pickup Time
                </Label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="time"
                    type="time"
                    className="pl-10"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex items-end space-x-4">
              <div className="flex-1 space-y-2">
                <Label htmlFor="duration" className="text-sm font-medium">
                  Travel Duration
                </Label>
                <Select defaultValue="1day">
                  <SelectTrigger id="duration">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3hours">3 Hours</SelectItem>
                    <SelectItem value="6hours">6 Hours</SelectItem>
                    <SelectItem value="12hours">12 Hours</SelectItem>
                    <SelectItem value="1day">1 Day</SelectItem>
                    <SelectItem value="2days">2 Days</SelectItem>
                    <SelectItem value="3days">3 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" size="lg" className="px-8">
                <Search className="mr-2 h-4 w-4" />
                Search {serviceType === "cabs" ? "Vehicles" : serviceType}
              </Button>
            </div>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};
