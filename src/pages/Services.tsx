import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
const services = [{
  name: "CAD Designing",
  path: "/services/cad-designing"
}, {
  name: "Rendering",
  path: "/services/rendering"
}, {
  name: "Hiphop Work",
  path: "/services/hiphop-work"
}, {
  name: "Face Work",
  path: "/services/face-work"
}, {
  name: "Manual Designing",
  path: "/services/manual-designing"
}, {
  name: "Manufacturing",
  path: "/services/manufacturing"
}, {
  name: "File Selling",
  path: "/services/file-selling"
}];
const Services = () => {
  return <div className="min-h-screen relative">
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
        <p className="text-primary-foreground/80 text-center mb-12 max-w-2xl">Explore our wide range of jewelry design </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl">
          {services.map(service => <Link key={service.name} to={service.path} className="group relative bg-background/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 md:p-8 text-center transition-all duration-300 hover:bg-background/20 hover:border-primary-foreground/40 hover:scale-105 hover:shadow-xl">
              <span className="text-primary-foreground font-semibold text-sm md:text-base group-hover:text-accent transition-colors">
                {service.name}
              </span>
            </Link>)}
        </div>
      </main>

      <Footer />
    </div>;
};
export default Services;