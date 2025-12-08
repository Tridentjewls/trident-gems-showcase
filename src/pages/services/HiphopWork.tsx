import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
    title: "Bold Chain Designs",
    description: "We specialize in creating bold, statement chain designs that define hip-hop jewelry. From Cuban links to rope chains, our designs capture the essence of urban luxury."
  },
  {
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800",
    title: "Custom Pendants",
    description: "Our custom pendant designs bring your vision to life. Whether it's a name piece, logo, or unique symbol, we create eye-catching pendants that make a statement."
  },
  {
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800",
    title: "Iced Out Pieces",
    description: "We excel in designing iced-out jewelry with intricate stone settings. Our CAD expertise ensures every diamond and gemstone placement is precise and stunning."
  },
  {
    image: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=800",
    title: "Grillz & Custom Teeth",
    description: "From classic gold grillz to fully iced diamond sets, we design custom dental jewelry that perfectly fits your style and personality."
  },
];

const HiphopWork = () => {
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
          Hiphop Work
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

export default HiphopWork;