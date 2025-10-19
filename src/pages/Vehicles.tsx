import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VehicleCard } from "@/components/VehicleCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Search, Filter, X } from "lucide-react";
import { useState } from "react";

const Vehicles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([1000, 5000]);

  const vehicles = [
    {
      id: "1",
      name: "Maruti Swift Dzire",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&h=300&fit=crop",
      type: "Sedan",
      seats: 4,
      fuel: "Petrol",
      transmission: "Manual",
      price: 2500,
      rating: 4.5,
    },
    {
      id: "2",
      name: "Toyota Innova Crysta",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=500&h=300&fit=crop",
      type: "SUV",
      seats: 7,
      fuel: "Diesel",
      transmission: "Auto",
      price: 4500,
      rating: 4.8,
    },
    {
      id: "3",
      name: "Honda City",
      image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=500&h=300&fit=crop",
      type: "Sedan",
      seats: 5,
      fuel: "Petrol",
      transmission: "Manual",
      price: 2800,
      rating: 4.6,
    },
    {
      id: "4",
      name: "Hyundai Creta",
      image: "https://images.unsplash.com/photo-1597404294360-feeaa5ab4d6b?w=500&h=300&fit=crop",
      type: "SUV",
      seats: 5,
      fuel: "Diesel",
      transmission: "Auto",
      price: 3500,
      rating: 4.7,
    },
    {
      id: "5",
      name: "Tata Ace",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500&h=300&fit=crop",
      type: "Mini Truck",
      seats: 2,
      fuel: "Diesel",
      transmission: "Manual",
      price: 1500,
      rating: 4.3,
    },
    {
      id: "6",
      name: "Mahindra Bolero",
      image: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=500&h=300&fit=crop",
      type: "SUV",
      seats: 7,
      fuel: "Diesel",
      transmission: "Manual",
      price: 3200,
      rating: 4.4,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-hero-gradient text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Browse Vehicles</h1>
            <p className="text-lg text-white/90">
              Find the perfect vehicle for your journey
            </p>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Sidebar - Filters */}
              <aside className="lg:w-80 flex-shrink-0">
                {/* Mobile Filter Toggle */}
                <div className="lg:hidden mb-4">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                  >
                    <Filter className="mr-2 h-4 w-4" />
                    {isMobileFilterOpen ? "Hide Filters" : "Show Filters"}
                  </Button>
                </div>

                {/* Filters Card */}
                <Card
                  className={`p-6 sticky top-24 ${
                    isMobileFilterOpen ? "block" : "hidden lg:block"
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">Filters</h2>
                    <Button variant="ghost" size="sm">
                      Clear All
                    </Button>
                  </div>

                  {/* Search */}
                  <div className="mb-6">
                    <Label className="mb-2">Search</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search vehicles..."
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="mb-6">
                    <Label className="mb-3">Price Range (per day)</Label>
                    <Slider
                      min={1000}
                      max={10000}
                      step={500}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mb-3"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>₹{priceRange[0]}</span>
                      <span>₹{priceRange[1]}</span>
                    </div>
                  </div>

                  {/* Vehicle Type */}
                  <div className="mb-6">
                    <Label className="mb-3">Vehicle Type</Label>
                    <div className="space-y-3">
                      {["Sedan", "SUV", "Hatchback", "Mini Truck", "Truck"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox id={type} />
                          <label htmlFor={type} className="text-sm cursor-pointer">
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Fuel Type */}
                  <div className="mb-6">
                    <Label className="mb-3">Fuel Type</Label>
                    <div className="space-y-3">
                      {["Petrol", "Diesel", "Electric", "CNG"].map((fuel) => (
                        <div key={fuel} className="flex items-center space-x-2">
                          <Checkbox id={fuel} />
                          <label htmlFor={fuel} className="text-sm cursor-pointer">
                            {fuel}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Transmission */}
                  <div className="mb-6">
                    <Label className="mb-3">Transmission</Label>
                    <div className="space-y-3">
                      {["Manual", "Automatic"].map((trans) => (
                        <div key={trans} className="flex items-center space-x-2">
                          <Checkbox id={trans} />
                          <label htmlFor={trans} className="text-sm cursor-pointer">
                            {trans}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Seating Capacity */}
                  <div className="mb-6">
                    <Label className="mb-3">Seating Capacity</Label>
                    <div className="space-y-3">
                      {["2-4 Seats", "5-6 Seats", "7+ Seats"].map((seats) => (
                        <div key={seats} className="flex items-center space-x-2">
                          <Checkbox id={seats} />
                          <label htmlFor={seats} className="text-sm cursor-pointer">
                            {seats}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rating */}
                  <div>
                    <Label className="mb-3">Minimum Rating</Label>
                    <div className="space-y-3">
                      {["4.5+", "4.0+", "3.5+", "3.0+"].map((rating) => (
                        <div key={rating} className="flex items-center space-x-2">
                          <Checkbox id={rating} />
                          <label htmlFor={rating} className="text-sm cursor-pointer">
                            {rating} ⭐
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </aside>

              {/* Right Content - Vehicle List */}
              <div className="flex-1">
                {/* Sort Bar */}
                <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                  <p className="text-muted-foreground">
                    Showing <span className="font-semibold">{vehicles.length}</span> vehicles
                  </p>
                  <Select defaultValue="popular">
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Vehicle Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {vehicles.map((vehicle) => (
                    <VehicleCard key={vehicle.id} {...vehicle} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex justify-center">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="default" size="sm">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Vehicles;
