import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JewelryCarousel from "@/components/JewelryCarousel";
import VideoBackground from "@/components/VideoBackground";
import jewelryRing from "@/assets/jewelry-ring.png";
const Index = () => {
  return <div className="h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 relative overflow-auto">
        <VideoBackground />
        
        <div className="relative z-10 container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            
          </div>
        </div>

        <section className="relative bg-white">
          <JewelryCarousel />
        </section>
      </main>

      <Footer />
    </div>;
};
export default Index;