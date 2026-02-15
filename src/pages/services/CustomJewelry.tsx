import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
    ],
    title: "Bespoke Ring Designs",
    description: "Create your dream ring with our custom design services. From engagement rings to statement pieces, we bring your unique vision to life with precision craftsmanship."
  },
  {
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400",
    ],
    title: "Personalized Necklaces",
    description: "Design a one-of-a-kind necklace that tells your story. Whether it's a name pendant, birthstone piece, or custom motif, we create jewelry that's uniquely yours."
  },
  {
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400",
      "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=400",
    ],
    title: "Custom Bracelets & Bangles",
    description: "From delicate tennis bracelets to bold cuff designs, our custom bracelet service allows you to create pieces that perfectly match your style and preferences."
  },
  {
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800",
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400",
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400",
    ],
    title: "Unique Earring Creations",
    description: "Express your individuality with custom-designed earrings. From elegant studs to dramatic chandeliers, we craft earrings that complement your personal style."
  },
];

const CustomJewelry = () => {
  return (
    <PageTransition>
    <div className="min-h-screen bg-white">

      <Header />

      <main className="container mx-auto px-4 py-20">
        <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:text-secondary mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Back to Services
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold text-primary text-center mb-16">
          Custom Jewelry
        </h1>

        <div className="flex flex-col gap-16 md:gap-24">
          {sections.map((section, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
            >
              <div className="w-full md:w-1/2">
                <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
                  <div className="col-span-2 aspect-video overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={section.images[0]}
                      alt={section.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl shadow-xl">
                    <img
                      src={section.images[1]}
                      alt={`${section.title} detail 1`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl shadow-xl">
                    <img
                      src={section.images[2]}
                      alt={`${section.title} detail 2`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  {section.title}
                </h2>
                <p className="text-primary/70 text-lg leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default CustomJewelry;