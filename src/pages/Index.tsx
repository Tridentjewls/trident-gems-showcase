import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JewelryCarousel from "@/components/JewelryCarousel";
import VideoBackground from "@/components/VideoBackground";
import jewelryRing from "@/assets/jewelry-ring.png";
const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 relative">
        <VideoBackground />
        
        <section className="relative z-10 bg-white py-16">
          <JewelryCarousel />
        </section>
      </main>

      <Footer />
    </div>;
};
export default Index;