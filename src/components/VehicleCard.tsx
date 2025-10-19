import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Fuel, Settings } from "lucide-react";
import { Link } from "react-router-dom";

interface VehicleCardProps {
  id: string;
  name: string;
  image: string;
  type: string;
  seats: number;
  fuel: string;
  transmission: string;
  price: number;
  rating?: number;
}

export const VehicleCard = ({
  id,
  name,
  image,
  type,
  seats,
  fuel,
  transmission,
  price,
  rating = 4.5,
}: VehicleCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in">
      <div className="relative h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <Badge className="absolute top-2 right-2 bg-accent">{type}</Badge>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-500">★</span>
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{seats}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Fuel className="h-4 w-4" />
            <span>{fuel}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Settings className="h-4 w-4" />
            <span>{transmission}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-primary">₹{price}</p>
            <p className="text-xs text-muted-foreground">per day</p>
          </div>
          <Link to={`/vehicle/${id}`}>
            <Button>Book Now</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};
