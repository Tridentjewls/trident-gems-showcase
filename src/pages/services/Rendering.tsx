import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800",
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800",
  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
  "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800",
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
  "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800",
  "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800",
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

        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-center mb-12">
          Rendering
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="aspect-square overflow-hidden rounded-xl group">
              <img
                src={img}
                alt={`Rendering ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Rendering;
