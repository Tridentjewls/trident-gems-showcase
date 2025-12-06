import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800",
    title: "Photorealistic Rendering",
    description: "Our rendering service transforms your CAD designs into stunning photorealistic images. Every detail, from metal textures to gemstone brilliance, is captured with precision."
  },
  {
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
    title: "Multiple Angle Views",
    description: "We provide comprehensive renders from multiple angles, giving you a complete view of your jewelry piece before production. This ensures you can make informed decisions about your design."
  },
  {
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800",
    title: "Client Approval Ready",
    description: "Our high-quality renders are perfect for client presentations and approvals. They showcase your designs in the best possible light, helping secure customer confidence."
  },
];

const Rendering = () => {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/bg-trident.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      <Header />

      <main className="container mx-auto px-4 py-20">
        <Link to="/services" className="inline-flex items-center gap-2 text-primary-foreground hover:text-accent mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Back to Services
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground text-center mb-16">
          Rendering
        </h1>

        <div className="flex flex-col gap-16 md:gap-24">
          {sections.map((section, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
            >
              <div className="w-full md:w-1/2">
                <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                  {section.title}
                </h2>
                <p className="text-primary-foreground/80 text-lg leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Rendering;
