import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Shield, Users, Award, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "All our vehicles are regularly sanitized and verified for your safety.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "24x7 support and dedicated team to assist you at every step.",
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "Premium vehicles and professional drivers for the best experience.",
    },
    {
      icon: Target,
      title: "Best Prices",
      description: "Transparent pricing with no hidden charges, guaranteed.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-hero-gradient text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">About Bhada24</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in">
              India's most trusted online transport booking platform
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Bhada24 was founded with a simple mission: to make transportation accessible, affordable, and reliable for everyone in India. We started as a small team with a big vision, and today we're proud to serve thousands of customers across the country.
              </p>
              <p className="text-muted-foreground mb-4">
                From local cab rides to interstate transport, from wedding events to business logistics, we've expanded our services to meet every transportation need. Our commitment to quality, safety, and customer satisfaction has made us India's No.1 choice for online transport booking.
              </p>
              <p className="text-muted-foreground">
                We believe in leveraging technology to create seamless booking experiences while maintaining the personal touch that makes every journey special. Join us on this journey as we continue to revolutionize the transport industry in India.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-6 text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-primary mb-2">50,000+</p>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">5,000+</p>
                <p className="text-muted-foreground">Vehicles</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">100+</p>
                <p className="text-muted-foreground">Cities Covered</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">4.8/5</p>
                <p className="text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
