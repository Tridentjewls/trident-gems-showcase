import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import jewelryRing1 from "@/assets/jewelry-ring-1.jpg";
import jewelryNecklace1 from "@/assets/jewelry-necklace-1.jpg";
import jewelryBracelet1 from "@/assets/jewelry-bracelet-1.jpg";
import jewelryEarrings1 from "@/assets/jewelry-earrings-1.jpg";
import jewelryTiara1 from "@/assets/jewelry-tiara-1.jpg";
import jewelry1 from "@/assets/jewelry-1.jpg";
import jewelry2 from "@/assets/jewelry-2.jpg";
import jewelry3 from "@/assets/jewelry-3.jpg";
import jewelryRing from "@/assets/jewelry-ring.png";

// Pool of images to cycle through for 63 items
const imagePool = [
  jewelryRing1, jewelryNecklace1, jewelryBracelet1, jewelryEarrings1,
  jewelryTiara1, jewelry1, jewelry2, jewelry3, jewelryRing,
];

const categories = ["All", "Rings", "Necklaces", "Bracelets", "Earrings", "Tiaras", "Collections"];

const allItems = Array.from({ length: 63 }, (_, i) => {
  const catIndex = i % (categories.length - 1);
  const heights = ["h-56", "h-64", "h-72", "h-80", "h-96"];
  return {
    id: i,
    img: imagePool[i % imagePool.length],
    alt: `Jewelry Design ${i + 1}`,
    category: categories[catIndex + 1],
    height: heights[i % heights.length],
    // Some items have video on hover
    hasVideo: i % 7 === 0,
  };
});

const OurCreations = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? allItems : allItems.filter(item => item.category === activeCategory);

  // Distribute into 4 columns for masonry
  const columns: typeof allItems[] = [[], [], [], []];
  filtered.forEach((item, i) => {
    columns[i % 4].push(item);
  });

  return (
    <PageTransition>
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 relative">
        <section className="relative overflow-hidden min-h-screen">
          <div className="relative z-10 container mx-auto px-4 py-16">
            <div className="text-center mb-8">
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
                Explore our exquisite collection of {filtered.length} handcrafted jewelry designs.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase border transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Pinterest Masonry Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {columns.map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-3 md:gap-4">
                  {column.map((item) => (
                    <CreationCard key={item.id} item={item} />
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

interface CreationItem {
  id: number;
  img: string;
  alt: string;
  category: string;
  height: string;
  hasVideo: boolean;
}

const CreationCard = ({ item }: { item: CreationItem }) => {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setHovered(true);
    if (item.hasVideo && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (item.hasVideo && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={`relative group overflow-hidden rounded-2xl ${item.height} border border-border hover:border-primary/40 transition-all duration-300 cursor-pointer`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ boxShadow: hovered ? '0 0 30px hsl(20 42% 58% / 0.15)' : 'none' }}
    >
      <img
        src={item.img}
        alt={item.alt}
        className={`w-full h-full object-cover transition-all duration-500 ${
          hovered ? "scale-110 brightness-110" : "scale-100"
        }`}
        loading="lazy"
      />

      {/* Video overlay on hover for select items */}
      {item.hasVideo && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/videos/bg-trident.mp4" type="video/mp4" />
        </video>
      )}

      {/* Hover overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent transition-opacity duration-300 pointer-events-none ${
        hovered ? "opacity-100" : "opacity-0"
      }`}>
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-foreground font-medium text-xs tracking-wide">{item.alt}</p>
          <p className="text-primary text-[10px] tracking-wider uppercase mt-1">{item.category}</p>
        </div>
      </div>
    </div>
  );
};

export default OurCreations;
