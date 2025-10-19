import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const RatingsSection = () => {
  const ratings = [
    {
      id: "1",
      vehicle: "Maruti Swift Dzire",
      date: "2024-10-15",
      rating: 5,
      review: "Excellent service! The driver was very professional and the car was clean.",
    },
    {
      id: "2",
      vehicle: "Toyota Innova Crysta",
      date: "2024-09-28",
      rating: 4,
      review: "Good experience overall. The vehicle was comfortable and well-maintained.",
    },
  ];

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">My Ratings & Reviews</h2>

      <div className="space-y-4">
        {ratings.map((item) => (
          <Card key={item.id} className="p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold">{item.vehicle}</h3>
                <p className="text-sm text-muted-foreground">{item.date}</p>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < item.rating ? "text-yellow-500 fill-yellow-500" : "text-muted"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm">{item.review}</p>
          </Card>
        ))}
      </div>
    </Card>
  );
};
