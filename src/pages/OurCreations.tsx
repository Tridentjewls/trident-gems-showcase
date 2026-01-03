import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OurCreations = () => {
  // Pinterest-style masonry images with varying heights
  const creations = [
    { img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400", alt: "Gold Ring", height: "h-64" },
    { img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400", alt: "Gold Necklaces", height: "h-80" },
    { img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400", alt: "Flower Earrings", height: "h-72" },
    { img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400", alt: "Gold Choker", height: "h-96" },
    { img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400", alt: "Kundan Set", height: "h-80" },
    { img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400", alt: "Hand Jewelry", height: "h-72" },
    { img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400", alt: "Diamond Necklace", height: "h-64" },
    { img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400", alt: "Layered Necklace", height: "h-80" },
    { img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400", alt: "Lotus Bracelet", height: "h-72" },
    { img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400", alt: "Gold Charms", height: "h-64" },
    { img: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=400", alt: "Statement Earrings", height: "h-96" },
    { img: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400", alt: "Pearl Bangles", height: "h-80" },
    { img: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400", alt: "Elegant Ring", height: "h-72" },
    { img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400", alt: "Gold Pendant", height: "h-64" },
    { img: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=400", alt: "Diamond Bracelet", height: "h-80" },
    { img: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=400", alt: "Vintage Earrings", height: "h-72" },
    { img: "https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?w=400", alt: "Modern Ring", height: "h-96" },
    { img: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=400", alt: "Pearl Necklace", height: "h-80" },
    { img: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400", alt: "Crystal Set", height: "h-72" },
    { img: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400", alt: "Gold Bangles", height: "h-64" },
  ];

  // Split images into columns for masonry effect
  const columns = [[], [], [], []] as typeof creations[];
  creations.forEach((item, index) => {
    columns[index % 4].push(item);
  });

  return (
    <div className="min-h-screen flex flex-col relative">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/bg-trident.mp4" type="video/mp4" />
      </video>
      
      <Header />
      
      <main className="flex-1 relative">
        <section className="relative overflow-hidden min-h-screen">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-secondary/40 to-primary/40"></div>
          
          <div className="relative z-10 container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-background drop-shadow-2xl tracking-wider mb-4">
                Our Creations
              </h1>
              <div className="w-32 h-1 bg-background/80 mx-auto rounded-full"></div>
              <p className="text-background/90 mt-6 max-w-2xl mx-auto text-lg">
                Explore our exquisite collection of handcrafted jewelry designs, each piece telling its own unique story of elegance and craftsmanship.
              </p>
            </div>

            {/* Pinterest-style Masonry Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {columns.map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-4">
                  {column.map((item, index) => (
                    <div 
                      key={index}
                      className={`relative group overflow-hidden rounded-2xl ${item.height} shadow-luxury`}
                    >
                      <img 
                        src={item.img} 
                        alt={item.alt} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white font-medium text-sm">{item.alt}</p>
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
  );
};

export default OurCreations;
