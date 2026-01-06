import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Link } from "react-router-dom";
const services = [
  {
    name: "CAD Designing",
    path: "/services/cad-designing",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400"
  },
  {
    name: "Rendering",
    path: "/services/rendering",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400"
  },
  {
    name: "Hiphop Work",
    path: "/services/hiphop-work",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400"
  },
  {
    name: "Face Work",
    path: "/services/face-work",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400"
  },
  {
    name: "Manual Designing",
    path: "/services/manual-designing",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400"
  },
  {
    name: "Manufacturing",
    path: "/services/manufacturing",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400"
  },
  {
    name: "File Selling",
    path: "/services/file-selling",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400"
  }
];

const Services = () => {
  return (
    <PageTransition>
    <div className="min-h-screen relative">
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/bg-trident.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      <Header />

      <main className="container mx-auto px-4 py-20 min-h-[80vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-center mb-4">
          Our Services
        </h1>
        <p className="text-primary-foreground/80 text-center mb-12 max-w-2xl">
          Explore our wide range of jewelry design
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl">
          {services.map((service) => (
            <Link
              key={service.name}
              to={service.path}
              className="group relative bg-background/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl overflow-hidden transition-all duration-300 hover:bg-background/20 hover:border-primary-foreground/40 hover:scale-105 hover:shadow-xl"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 text-center">
                <span className="text-primary-foreground font-semibold text-sm md:text-base group-hover:text-accent transition-colors">
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