import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JewelryCarousel from "@/components/JewelryCarousel";
import VideoBackground from "@/components/VideoBackground";
import jewelryRing from "@/assets/jewelry-ring.png";
import jewelryRing1 from "@/assets/jewelry-ring-1.jpg";
import jewelryNecklace1 from "@/assets/jewelry-necklace-1.jpg";
import jewelryBracelet1 from "@/assets/jewelry-bracelet-1.jpg";
import jewelryEarrings1 from "@/assets/jewelry-earrings-1.jpg";
import jewelryTiara1 from "@/assets/jewelry-tiara-1.jpg";
const Index = () => {
  const [visibleBoxes, setVisibleBoxes] = useState<boolean[]>([false, false, false]);
  const [visibleImages, setVisibleImages] = useState<boolean[]>([false, false, false, false, false]);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const observers = boxRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisibleBoxes(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }
      }, {
        threshold: 0.2
      });
      observer.observe(ref);
      return observer;
    });
    
    const imageObservers = imageRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisibleImages(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }
      }, {
        threshold: 0.2
      });
      observer.observe(ref);
      return observer;
    });
    
    return () => {
      observers.forEach((observer, index) => {
        if (observer && boxRefs.current[index]) {
          observer.disconnect();
        }
      });
      imageObservers.forEach((observer, index) => {
        if (observer && imageRefs.current[index]) {
          observer.disconnect();
        }
      });
    };
  }, []);
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 relative">
        <VideoBackground />
        
        <section className="relative z-10 bg-white">
          <JewelryCarousel />
        </section>

        {/* Footer - Fixed to first page */}
        <div className="relative z-20">
          <Footer />
        </div>

        {/* Three Boxes Section with Video Background */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/bg-trident.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-secondary/40 to-primary/40"></div>
          
          <div className="relative z-10 container mx-auto px-4 py-12">
            <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">
              
              {/* Top Row: Two Boxes */}
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {/* Box 1: Role of CAD */}
                <div ref={el => boxRefs.current[0] = el} className={`bg-background/95 backdrop-blur-sm rounded-xl p-6 shadow-luxury border border-border/20 transition-all duration-1000 ${visibleBoxes[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                  
                  <div className="space-y-3 text-foreground/80 leading-relaxed text-sm">
                    <p>
                      CAD revolutionizes jewelry design by blending traditional craftsmanship with cutting-edge technology.
                    </p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>
                        <strong className="text-foreground">Precision:</strong> Create intricate patterns with mathematical accuracy
                      </li>
                      <li>
                        <strong className="text-foreground">Prototyping:</strong> Quickly iterate design variations
                      </li>
                      <li>
                        <strong className="text-foreground">Efficiency:</strong> Reduce material waste and costs
                      </li>
                      <li>
                        <strong className="text-foreground">Custom:</strong> Personalized pieces tailored to preferences
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Box 2: Why CAD is Essential */}
                <div ref={el => boxRefs.current[1] = el} className={`bg-background/95 backdrop-blur-sm rounded-xl p-6 shadow-luxury border border-border/20 transition-all duration-1000 delay-300 ${visibleBoxes[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                  
                  <div className="space-y-3 text-foreground/80 leading-relaxed text-sm">
                    <p>
                      CAD technology is essential for staying competitive in modern jewelry markets.
                    </p>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <h3 className="text-base font-semibold text-foreground">Technical</h3>
                        <ul className="space-y-1 list-disc list-inside text-xs">
                          <li>Perfect symmetry</li>
                          <li>Stone calculations</li>
                          <li>3D printing ready</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-base font-semibold text-foreground">Business</h3>
                        <ul className="space-y-1 list-disc list-inside text-xs">
                          <li>Faster delivery</li>
                          <li>Better communication</li>
                          <li>Reduced errors</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Video Box */}
              <div ref={el => boxRefs.current[2] = el} className={`bg-background/95 backdrop-blur-sm rounded-xl p-6 shadow-luxury border border-border/20 transition-all duration-1000 delay-600 ${visibleBoxes[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} max-w-3xl mx-auto`}>
                
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg bg-black/30">
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
                  </video>
                </div>
                
              </div>

            </div>
          </div>
        </section>

        {/* Jewelry Gallery Section with Horizontal Scroll */}
        <section className="relative overflow-hidden min-h-screen flex flex-col">
          <video autoPlay loop muted playsInline className="fixed inset-0 w-full h-full object-cover -z-10">
            <source src="/videos/bg-trident.mp4" type="video/mp4" />
          </video>
          <div className="fixed inset-0 bg-gradient-to-b from-primary/40 via-secondary/40 to-primary/40 -z-10"></div>
          
          {/* Compact Header */}
          <div className="py-12 flex items-center justify-center">
            <div className="text-center space-y-2">
              <h2 className="text-4xl md:text-6xl font-bold text-background drop-shadow-2xl tracking-wider">
                Exotic Collection
              </h2>
              <div className="w-24 h-1 bg-background/80 mx-auto rounded-full"></div>
            </div>
          </div>
          
          {/* Horizontal Scroll Container */}
          <div className="flex-1 flex items-center overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory scrollbar-hide pb-12">
            <div className="flex gap-8 px-8 min-w-min">
              {[
                { img: jewelryRing1, alt: "Diamond Engagement Ring" },
                { img: jewelryNecklace1, alt: "Emerald Gold Necklace" },
                { img: jewelryBracelet1, alt: "Sapphire Diamond Bracelet" },
                { img: jewelryEarrings1, alt: "Ruby Drop Earrings" },
                { img: jewelryTiara1, alt: "Pearl Diamond Tiara" }
              ].map((item, index) => (
                <div
                  key={index}
                  ref={el => imageRefs.current[index] = el}
                  className="snap-center flex-shrink-0"
                >
                  <div 
                    className={`transition-all duration-1000 ease-out ${
                      visibleImages[index] 
                        ? 'opacity-100 scale-100 blur-0' 
                        : 'opacity-0 scale-95 blur-sm'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl blur-xl opacity-30 group-hover:opacity-70 transition-opacity duration-500"></div>
                      <div className="relative rounded-2xl overflow-hidden shadow-luxury border border-border/20 bg-background/95 backdrop-blur-sm p-6">
                        <img 
                          src={item.img} 
                          alt={item.alt}
                          className="w-[70vw] h-[70vh] object-cover group-hover:scale-105 transition-transform duration-700 ease-out rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>;
};
export default Index;