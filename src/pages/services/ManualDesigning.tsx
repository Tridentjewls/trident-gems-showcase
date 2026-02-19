import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400",
    ],
    title: "Hand-Drawn Sketches",
    description: "Our manual designing begins with detailed hand-drawn sketches that capture the essence of your vision. This traditional approach ensures every creative nuance is preserved."
  },
  {
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400",
    ],
    title: "Artistic Expression",
    description: "Manual design allows for unique artistic expression that digital tools alone cannot replicate. Our skilled artists bring creativity and soul to every jewelry concept."
  },
  {
    images: [
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
    ],
    title: "Traditional Craftsmanship",
    description: "We blend traditional craftsmanship with modern techniques. Our manual designs serve as the foundation for creating timeless, one-of-a-kind jewelry pieces."
  },
  {
    images: [
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800",
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400",
      "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=400",
    ],
    title: "Conceptual Development",
    description: "Our designers excel at developing initial concepts into refined sketches. We iterate and refine until the design perfectly matches your creative vision."
  },
];

const ManualDesigning = () => {
  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <Link to="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-10 transition-colors text-sm tracking-wide group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Services
        </Link>
        <div className="text-center mb-16">
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-4">Traditional Craft</p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Manual Designing</h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
          </div>
        </div>
        <div className="flex flex-col gap-16 md:gap-24">
          {sections.map((section, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}>
              <div className="w-full md:w-1/2">
                <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
                  <div className="col-span-2 aspect-video overflow-hidden rounded-2xl border border-border hover:border-primary/40 transition-colors duration-300">
                    <img src={section.images[0]} alt={section.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl border border-border hover:border-primary/40 transition-colors duration-300">
                    <img src={section.images[1]} alt={`${section.title} detail 1`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl border border-border hover:border-primary/40 transition-colors duration-300">
                    <img src={section.images[2]} alt={`${section.title} detail 2`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className="w-8 h-px bg-primary/60 mb-4 mx-auto md:mx-0" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{section.title}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{section.description}</p>
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

export default ManualDesigning;