import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServiceCard from "@/components/ServiceCard";
import BookingModal from "@/components/BookingModal";
import TestimonialCard from "@/components/TestimonialCard";
import ProjectGallery from "@/components/ProjectGallery";
import heroImage from "@/assets/hero-services.jpg";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

// Import service images
import plumbingImage from "@/assets/service-plumbing.jpg";
import paintingImage from "@/assets/service-painting.webp";
import waterproofingImage from "@/assets/service-waterproofing.jpg";
import carpentryImage from "@/assets/service-carpentry.webp";
import architecturalImage from "@/assets/service-architectural.jpg";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");

  const services = [
    {
      title: "Plumbing Services",
      icon: "🔧",
      description: "Professional plumbing solutions for homes and businesses with 24/7 emergency support.",
      services: ["Pipe Installation & Repair", "Drain Cleaning", "Water Heater Services", "Emergency Repairs", "Bathroom Fitting"],
      image: plumbingImage
    },
    {
      title: "Painting Services", 
      icon: "🎨",
      description: "Transform your spaces with our expert interior and exterior painting services.",
      services: ["Interior Painting", "Exterior Painting", "Texture Work", "Wall Preparation", "Color Consultation"],
      image: paintingImage
    },
    {
      title: "Waterproofing",
      icon: "🛡️", 
      description: "Protect your property from water damage with our advanced waterproofing solutions.",
      services: ["Roof Waterproofing", "Bathroom Waterproofing", "Basement Sealing", "Terrace Treatment", "Wall Waterproofing"],
      image: waterproofingImage
    },
    {
      title: "Carpentry Work",
      icon: "🪚",
      description: "Custom woodwork and furniture solutions crafted by skilled carpenters.",
      services: ["Custom Furniture", "Kitchen Cabinets", "Wardrobe Design", "Door & Window Frames", "Interior Woodwork"],
      image: carpentryImage
    },
    {
      title: "Architectural Consultancy",
      icon: "📐",
      description: "Professional architectural design and consultation services for your dream projects.",
      services: ["Design Planning", "3D Visualization", "Structural Consultation", "Project Management", "Interior Design"],
      image: architecturalImage
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Sector 17, Chandigarh",
      rating: 5,
      comment: "Excellent plumbing work! They fixed our water heater issue quickly and professionally. Highly recommended for anyone in Chandigarh."
    },
    {
      name: "Priya Sharma",
      location: "Sector 35, Chandigarh", 
      rating: 5,
      comment: "The painting team did an amazing job on our home interior. Very clean work and completed on time. Great value for money."
    },
    {
      name: "Amit Singh",
      location: "Mohali",
      rating: 5,
      comment: "Professional waterproofing service for our terrace. No more water leakage issues. The team was knowledgeable and efficient."
    }
  ];

  const handleBookNow = (serviceName?: string) => {
    setSelectedService(serviceName || "");
    setTimeout(() => {
      setIsBookingOpen(true);
    }, 100);
  };
  const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};


  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/50 z-50 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="font-bold text-2xl relative group">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Kaam<span>karlo.com</span></span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
          </div>
          
          <div className="hidden md:flex space-x-1">
            {[
              { href: '#services', label: 'Services' },
              { href: '#projects', label: 'Projects' },
              { href: '#testimonials', label: 'Testimonials' },
              { href: '#contact', label: 'Contact' }
            ].map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="relative px-4 py-2 text-foreground group overflow-hidden rounded-md"
              >
                <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-200">{item.label}</span>
                <span className="absolute inset-0 h-full w-0 bg-primary group-hover:w-full transition-all duration-300 rounded-md opacity-0 group-hover:opacity-100"></span>
              </a>
            ))}
          </div>
          
          <Button 
            onClick={() => handleBookNow()} 
            className="bg-primary hover:bg-primary/90 relative overflow-hidden group"
          >
            <span className="relative z-10">Book Now</span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Button>
        </div>
      </nav>

      {/* Hero Section - Simplified but Attractive Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Clean Background with Subtle Effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Professional home services"
              className="w-full h-full object-cover filter brightness-75"
            />
          </div>
          
          {/* Simple Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/70 mix-blend-multiply"></div>
          
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 bg-dot-pattern-small bg-[length:20px_20px] opacity-5"></div>
        </div>
        
        {/* Content Container with Clean Design */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {/* Elegant Badge */}
          <div className="mb-8 inline-block">
            <span className="inline-flex items-center px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
              <span className="text-secondary mr-2">★</span>
              <span className="tracking-wider">TRUSTED BY 1000+ CUSTOMERS IN CHANDIGARH</span>
              <span className="text-secondary ml-2">★</span>
            </span>
          </div>
          
          {/* Clean Headline */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              <span className="block mb-2 text-white">The</span>
              <span className="block mb-2 text-white">Client <span className="text-secondary">Company</span></span>
            </h1>
          </div>
          
          {/* Simple Subtitle */}
          <div className="mb-6">
            <p className="text-xl md:text-2xl font-light opacity-90 tracking-wide">
              Professional Home & Commercial Services
            </p>
          </div>
          
          {/* Clean Description */}
          <div className="mb-10">
            <p className="text-lg p-5 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10">
              <span className="relative z-10">We provide top-quality home and commercial services in Chandigarh with a focus on reliability, professionalism, and customer satisfaction. Our team of experts is ready to transform your space.</span>
            </p>
          </div>
          
          {/* Attractive CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleBookNow()} 
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white font-medium px-8 py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-1"
            >
              Book Our Services
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/20 text-primary hover:bg-primary/10 font-medium px-8 py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
              onClick={() => scrollToSection('services')}
            >
              Explore Services
            </Button>
          </div>
          
          {/* Simple Statistics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">1000+</p>
              <p className="text-sm text-white/70">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-sm text-white/70">Expert Team</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">10+</p>
              <p className="text-sm text-white/70">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-sm text-white/70">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Professional Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive home and commercial services across Chandigarh with skilled professionals and quality materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                icon={service.icon}
                description={service.description}
                services={service.services}
                image={service.image}
                onBookNow={() => handleBookNow(service.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <ProjectGallery />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                location={testimonial.location}
                rating={testimonial.rating}
                comment={testimonial.comment}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden bg-accent">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-primary/5 to-transparent opacity-60 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-secondary/5 to-transparent opacity-60 blur-3xl"></div>
        <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
              Ready to get started? Contact us today for a free consultation and quote.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="shadow-card border-0 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-background shadow-sm group-hover:shadow-md transition-all duration-300">
                      <Phone className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Phone</h4>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-background shadow-sm group-hover:shadow-md transition-all duration-300">
                      <Mail className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Email</h4>
                      <p className="text-muted-foreground">info@theclientcompany.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-background shadow-sm group-hover:shadow-md transition-all duration-300">
                      <MapPin className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Location</h4>
                      <p className="text-muted-foreground">Serving all sectors of Chandigarh & Mohali</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-background shadow-sm group-hover:shadow-md transition-all duration-300">
                      <Clock className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Working Hours</h4>
                      <p className="text-muted-foreground">Mon - Sat: 8:00 AM - 7:00 PM</p>
                      <p className="text-muted-foreground">Emergency: 24/7 Available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <Card className="shadow-card border-0 group hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-center relative z-10">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse-slow" />
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Service Areas</h4>
                    <p className="text-muted-foreground">
                      We serve all sectors of Chandigarh, Mohali, and surrounding areas.
                      <br />Google Maps integration available.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50"></div>
        <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-gradient-radial from-primary/5 to-transparent opacity-60 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-radial from-secondary/5 to-transparent opacity-60 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="font-bold text-2xl relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">The Client Company</span>
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
              </div>
              <p className="text-muted-foreground">
                Professional services for all your home and office needs in Chandigarh. Quality work, timely delivery, and customer satisfaction guaranteed.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Linkedin, label: "LinkedIn" }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={index}
                      href="#" 
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-background/80 text-muted-foreground hover:text-primary hover:bg-background hover:shadow-sm transition-all duration-300 group"
                    >
                      <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-bold text-lg relative inline-block">
                Quick Links
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-primary/50 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {[
                  { href: "#", label: "Home" },
                  { href: "#services", label: "Services" },
                  { href: "#projects", label: "Projects" },
                  { href: "#testimonials", label: "Testimonials" },
                  { href: "#contact", label: "Contact" }
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-bold text-lg relative inline-block">
                Services
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-primary/50 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-bold text-lg relative inline-block">
                Contact Info
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-primary/50 rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                {[
                  { icon: MapPin, content: "Sector 17, Chandigarh, India" },
                  { icon: Phone, content: "+91 98765 43210" },
                  { icon: Mail, content: "info@clientcompany.com" },
                  { icon: Clock, content: "Mon-Sat: 9AM - 6PM" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className="flex items-center group">
                      <div className="w-8 h-8 rounded-full bg-background/80 flex items-center justify-center mr-3 group-hover:bg-primary/10 transition-colors duration-300">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {item.content}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} The Client Company. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-sm hover:text-primary transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-primary transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-sm hover:text-primary transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        selectedService={selectedService}
      />
    </div>
  );
};

export default Index;