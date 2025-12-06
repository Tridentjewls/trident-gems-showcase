import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
    title: "Precision CAD Modeling",
    description: "Our CAD designing service brings your jewelry concepts to life with precise 3D modeling. We use industry-leading software to create detailed designs that capture every intricate detail of your vision."
  },
  {
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800",
    title: "Custom Design Solutions",
    description: "From rings to necklaces, we specialize in creating custom CAD designs tailored to your specific requirements. Our expert designers work closely with you to ensure every piece reflects your unique style."
  },
  {
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800",
    title: "Industry-Standard Quality",
    description: "We deliver CAD files that are ready for manufacturing, ensuring seamless transition from design to production. Our designs meet the highest industry standards for quality and accuracy."
  },
];

const CadDesigning = () => {
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
          CAD Designing
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

export default CadDesigning;
