import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import OptimizedImage from "@/components/OptimizedImage";
import jewelryRing1 from "@/assets/jewelry-ring-1.jpg";
import jewelryNecklace1 from "@/assets/jewelry-necklace-1.jpg";
import jewelryBracelet1 from "@/assets/jewelry-bracelet-1.jpg";
import jewelryEarrings1 from "@/assets/jewelry-earrings-1.jpg";
import jewelryTiara1 from "@/assets/jewelry-tiara-1.jpg";
import jewelry1 from "@/assets/jewelry-1.jpg";
import jewelry2 from "@/assets/jewelry-2.jpg";
import jewelry3 from "@/assets/jewelry-3.jpg";
import jewelryRing from "@/assets/jewelry-ring.png";

const OurCreations = () => {
  const column1 = [
    { img: jewelryRing1, alt: "Diamond Engagement Ring", height: "h-72" },
    { img: jewelryTiara1, alt: "Pearl Diamond Tiara", height: "h-96" },
    { img: jewelryRing, alt: "Statement Ring", height: "h-64" },
  ];
  const column2 = [
    { img: jewelryNecklace1, alt: "Emerald Gold Necklace", height: "h-96" },
    { img: jewelry1, alt: "Luxury Gold Set", height: "h-72" },
    { img: jewelryEarrings1, alt: "Chandelier Earrings", height: "h-80" },
  ];
  const column3 = [
    { img: jewelryBracelet1, alt: "Sapphire Diamond Bracelet", height: "h-80" },
    { img: jewelry2, alt: "Elegant Diamond Piece", height: "h-96" },
    { img: jewelryNecklace1, alt: "Pendant Necklace", height: "h-64" },
  ];
  const column4 = [
    { img: jewelryEarrings1, alt: "Ruby Drop Earrings", height: "h-64" },
    { img: jewelry3, alt: "Royal Collection", height: "h-80" },
    { img: jewelryRing1, alt: "Wedding Band Collection", height: "h-96" },
  ];
  const columns = [column1, column2, column3, column4];

  return (
    <PageTransition>
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 relative">
        <section className="relative overflow-hidden min-h-screen">
          <div className="relative z-10 container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-4">Craftsmanship</p>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-wider mb-6">
                Our Creations
              </h1>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
              </div>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-lg">
                Explore our exquisite collection of handcrafted jewelry designs, each piece telling its own unique story of elegance and craftsmanship.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {columns.map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-4">
                  {column.map((item, index) => (
                    <div
                      key={index}
                      className={`relative group overflow-hidden rounded-2xl ${item.height} border border-border hover:border-primary/40 transition-all duration-300`}
                      onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 30px hsl(20 42% 58% / 0.15)')}
                      onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                    >
                      <OptimizedImage
                        src={item.img} alt={item.alt}
                        priority={colIndex < 2 && index === 0}
                        className="transition-transform duration-500 group-hover:scale-110"
                        containerClassName="h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-foreground font-medium text-sm tracking-wide">{item.alt}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </PageTransition>
  );
};

export default OurCreations;
