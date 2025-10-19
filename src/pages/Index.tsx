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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})` }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            India's No.1 Online
            <br />
            <span className="text-accent">Transport Booking</span> Site
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fade-in">
            Book cabs, transport, DJ services, and more with just a few clicks
          </p>

          <div className="mt-8">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Bhada24?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-card animate-scale-in"
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

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Popular Services</h2>
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
      <section className="py-16 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Ride?</h2>
          <p className="text-lg mb-8 text-white/90">
            Join thousands of satisfied customers who trust Bhada24 for their transportation needs
          </p>
          <Button size="lg" variant="secondary" className="text-lg">
            Get Started Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
