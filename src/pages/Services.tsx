import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import OptimizedImage from "@/components/OptimizedImage";
import { Link } from "react-router-dom";

const services = [
  { name: "CAD Designing", path: "/services/cad-designing", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80&auto=format" },
  { name: "Rendering", path: "/services/rendering", image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&q=80&auto=format" },
  { name: "Hiphop Work", path: "/services/hiphop-work", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80&auto=format" },
  { name: "Face Work", path: "/services/face-work", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80&auto=format" },
  { name: "Manual Designing", path: "/services/manual-designing", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80&auto=format" },
  { name: "Manufacturing", path: "/services/manufacturing", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80&auto=format" },
  { name: "File Selling", path: "/services/file-selling", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80&auto=format" },
  { name: "Custom Jewelry", path: "/services/custom-jewelry", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80&auto=format" },
];

const Services = () => {
  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-20 min-h-[80vh] flex flex-col items-center justify-center">
        
        <div className="text-center mb-12">
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-4">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-6">
            Our Services
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
          </div>
          <p className="text-muted-foreground text-center max-w-2xl">
            Explore our wide range of jewelry design services
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl">
          {services.map((service, index) => (
            <Link
              key={service.name}
              to={service.path}
              className="group relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:scale-105"
              style={{ transition: 'all 0.3s ease' }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 30px hsl(20 42% 58% / 0.15)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
            >
              <OptimizedImage
                src={service.image}
                alt={service.name}
                priority={index < 4}
                aspectRatio="square"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="p-4 text-center relative z-10">
                <span className="text-foreground font-semibold text-sm md:text-base group-hover:text-primary transition-colors tracking-wide">
                  {service.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
    </PageTransition>
  );
};

export default Services;
