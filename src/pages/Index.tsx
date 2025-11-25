import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JewelryCarousel from "@/components/JewelryCarousel";
import VideoBackground from "@/components/VideoBackground";
import jewelryRing from "@/assets/jewelry-ring.png";
const Index = () => {
  return <div className="h-screen flex flex-col overflow-hidden">
      <Header />
      
      <main className="flex-1 relative overflow-hidden">
        <VideoBackground />
        
        <section className="absolute inset-0 z-10 bg-white">
          <JewelryCarousel />
        </section>
      </main>

      <Footer />
    </div>;
};
export default Index;