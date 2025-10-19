import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchBar } from "@/components/SearchBar";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Shield, DollarSign, Clock, Star } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const services = [
    {
      title: "Cabs & Taxis",
      description: "Book safe, reliable cabs for local, outstation, and event travel.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&h=300&fit=crop",
      link: "/vehicles?type=cabs",
    },
    {
      title: "Transport & Trucks",
      description: "Book trucks, mini-trucks, and more for your goods and wedding logistics.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500&h=300&fit=crop",
      link: "/vehicles?type=transport",
    },
    {
      title: "DJ & Sound",
      description: "Hire professional DJs and sound systems for your events and parties.",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500&h=300&fit=crop",
      link: "/vehicles?type=dj",
    },
    {
      title: "Roadlights",
      description: "Decorative roadlights and lighting solutions for weddings and functions.",
      image: "https://images.unsplash.com/photo-1519167758481-83f29da8c19f?w=500&h=300&fit=crop",
      link: "/vehicles?type=roadlights",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Verified drivers and sanitized vehicles for your safety.",
    },
    {
      icon: DollarSign,
      title: "Best Prices",
      description: "Transparent fares with no hidden charges.",
    },
    {
      icon: Clock,
      title: "24x7 Support",
      description: "We are here for you anytime, anywhere.",
    },
    {
      icon: Star,
      title: "Top Rated",
      description: "Trusted by thousands of satisfied customers.",
    },
  ];

  const popularDestinations = [
    {
      name: "Delhi to Agra",
      price: "₹2,499",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=250&fit=crop",
    },
    {
      name: "Mumbai to Pune",
      price: "₹1,999",
      image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=400&h=250&fit=crop",
    },
    {
      name: "Bangalore to Mysore",
      price: "₹1,799",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=250&fit=crop",
    },
    {
      name: "Kolkata to Darjeeling",
      price: "₹3,299",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&h=250&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[500px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJWMzRoLTJ6bTAgNHYyaDJ2LTJoLTJ6bTAtOHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 animate-fade-in">
                Compare Transport Deals from <span className="text-accent">100s of Sites</span>
              </h1>
              <p className="text-white/80 text-lg">Book Cabs, Transport, DJ & Sound, and More</p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-1 animate-scale-in">
              <SearchBar />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Bhada24?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card hover:shadow-lg transition-all duration-300 animate-scale-in border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Popular Routes</h2>
          <p className="text-center text-muted-foreground mb-12">
            Discover our most booked routes at the best prices
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((destination, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">{destination.name}</h3>
                  <p className="text-sm opacity-90">Starting from</p>
                  <p className="text-xl font-bold text-accent">{destination.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-center text-muted-foreground mb-12">
            Choose from our wide range of services for all your transportation needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Book Your Ride?</h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Bhada24 for their transportation needs
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto">
            Get Started Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
