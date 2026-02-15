import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import OptimizedImage from "@/components/OptimizedImage";
import { Link } from "react-router-dom";

const services = [
  {
    name: "CAD Designing",
    path: "/services/cad-designing",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80&auto=format"
  },
  {
    name: "Rendering",
    path: "/services/rendering",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&q=80&auto=format"
  },
  {
    name: "Hiphop Work",
    path: "/services/hiphop-work",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80&auto=format"
  },
  {
    name: "Face Work",
    path: "/services/face-work",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80&auto=format"
  },
  {
    name: "Manual Designing",
    path: "/services/manual-designing",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80&auto=format"
  },
  {
    name: "Manufacturing",
    path: "/services/manufacturing",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80&auto=format"
  },
  {
    name: "File Selling",
    path: "/services/file-selling",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80&auto=format"
  },
  {
    name: "Custom Jewelry",
    path: "/services/custom-jewelry",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80&auto=format"
  }
];

const Services = () => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  return (
    <PageTransition>
    <div className="min-h-screen bg-white">

      <Header />

      <main className="container mx-auto px-4 py-20 min-h-[80vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">
          Our Services
        </h1>
        <p className="text-primary/70 text-center mb-12 max-w-2xl">
          Explore our wide range of jewelry design
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl">
          {services.map((service, index) => (
            <Link
              key={service.name}
              to={service.path}
              className="group relative bg-white border border-primary/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/30 hover:scale-105 hover:shadow-xl"
            >
              <OptimizedImage
                src={service.image}
                alt={service.name}
                priority={index < 4}
                aspectRatio="square"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-4 text-center">
                <span className="text-primary font-semibold text-sm md:text-base group-hover:text-secondary transition-colors">
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
