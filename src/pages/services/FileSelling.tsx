import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400",
    ],
    title: "Ready-to-Use CAD Files",
    description: "Access our library of pre-designed CAD files ready for immediate use. Our collection features popular jewelry designs optimized for manufacturing."
  },
  {
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
    ],
    title: "Affordable Solutions",
    description: "Our file selling service offers cost-effective alternatives to custom design. Get professional-quality CAD files at a fraction of the custom design cost."
  },
  {
    images: [
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
    ],
    title: "Instant Download",
    description: "Purchase and download files instantly. Our streamlined process ensures you get the files you need without delay, ready for your manufacturing process."
  },
  {
    images: [
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800",
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400",
      "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=400",
    ],
    title: "Extensive Library",
    description: "Browse our extensive collection of jewelry CAD files spanning rings, necklaces, bracelets, earrings, and more. New designs added regularly to keep your offerings fresh."
  },
];

const FileSelling = () => {
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

      <main className="container mx-auto px-4 py-20">
        <Link to="/services" className="inline-flex items-center gap-2 text-primary-foreground hover:text-accent mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Back to Services
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground text-center mb-16">
          File Selling
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
    </PageTransition>
  );
};

export default FileSelling;