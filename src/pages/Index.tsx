import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JewelryCarousel from "@/components/JewelryCarousel";
import VideoBackground from "@/components/VideoBackground";
import jewelryRing from "@/assets/jewelry-ring.png";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 relative">
        <VideoBackground />
        
        <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl shadow-luxury p-8 md:p-12 animate-fade-in">
              <div className="flex justify-center mb-8">
                <img
                  src={jewelryRing}
                  alt="Exquisite TRIDENT jewelry piece featuring blue sapphires and diamonds"
                  className="w-full max-w-2xl h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Timeless Elegance
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Discover extraordinary pieces crafted with precision and passion. 
                  Each design tells a unique story of luxury and sophistication.
                </p>
              </div>
            </div>
          </div>
        </div>

      </main>

      <section className="relative bg-white">
        <JewelryCarousel />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
