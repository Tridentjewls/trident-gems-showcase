import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JewelryCarousel from "@/components/JewelryCarousel";
import VideoBackground from "@/components/VideoBackground";
import jewelryRing from "@/assets/jewelry-ring.png";

const Index = () => {
  const [visibleBoxes, setVisibleBoxes] = useState<boolean[]>([false, false, false]);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = boxRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleBoxes(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && boxRefs.current[index]) {
          observer.disconnect();
        }
      });
    };
  }, []);

  return <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 relative">
        <VideoBackground />
        
        <section className="relative z-10 bg-white py-16">
          <JewelryCarousel />
        </section>

        {/* Three Boxes Section with Video Background */}
        <section className="relative overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/bg-trident.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-secondary/40 to-primary/40"></div>
          
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="max-w-6xl mx-auto space-y-16">
              
              {/* Box 1: Role of CAD */}
              <div
                ref={el => boxRefs.current[0] = el}
                className={`bg-background/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-luxury border border-border/20 transition-all duration-1000 ${
                  visibleBoxes[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 gradient-primary bg-clip-text text-transparent">
                  Role of CAD in Jewelry Industry
                </h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p className="text-lg">
                    Computer-Aided Design (CAD) has revolutionized the jewelry industry by transforming traditional craftsmanship into a perfect blend of art and technology.
                  </p>
                  <ul className="space-y-3 list-disc list-inside ml-4">
                    <li className="text-base">
                      <strong className="text-foreground">Precision Design:</strong> CAD enables designers to create intricate patterns and complex geometries with mathematical accuracy that would be impossible to achieve by hand.
                    </li>
                    <li className="text-base">
                      <strong className="text-foreground">Rapid Prototyping:</strong> Designers can quickly iterate multiple design variations, allowing clients to visualize and approve pieces before production begins.
                    </li>
                    <li className="text-base">
                      <strong className="text-foreground">Cost Efficiency:</strong> Virtual modeling reduces material waste and allows for accurate cost estimation before manufacturing.
                    </li>
                    <li className="text-base">
                      <strong className="text-foreground">Customization:</strong> CAD makes personalized jewelry more accessible, enabling unique pieces tailored to individual preferences.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Box 2: Why CAD is Essential */}
              <div
                ref={el => boxRefs.current[1] = el}
                className={`bg-background/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-luxury border border-border/20 transition-all duration-1000 delay-200 ${
                  visibleBoxes[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 gradient-primary bg-clip-text text-transparent">
                  Why CAD is Essential in Jewelry
                </h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p className="text-lg">
                    In today's competitive jewelry market, CAD technology is no longer optional—it's essential for staying relevant and competitive.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-foreground">Technical Advantages</h3>
                      <ul className="space-y-2 list-disc list-inside">
                        <li>Perfect symmetry and proportion</li>
                        <li>Accurate stone setting calculations</li>
                        <li>3D printing compatibility</li>
                        <li>Digital archives of all designs</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-foreground">Business Benefits</h3>
                      <ul className="space-y-2 list-disc list-inside">
                        <li>Faster time-to-market</li>
                        <li>Enhanced client communication</li>
                        <li>Reduced production errors</li>
                        <li>Global collaboration capability</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-lg mt-6">
                    CAD empowers jewelers to push creative boundaries while maintaining the highest standards of craftsmanship and precision.
                  </p>
                </div>
              </div>

              {/* Box 3: Rotating Jewelry Video */}
              <div
                ref={el => boxRefs.current[2] = el}
                className={`bg-background/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-luxury border border-border/20 transition-all duration-1000 delay-400 ${
                  visibleBoxes[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center gradient-primary bg-clip-text text-transparent">
                  Experience CAD Excellence
                </h2>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/bg-trident.mp4" type="video/mp4" />
                  </video>
                </div>
                <p className="text-center text-foreground/70 mt-6 text-lg">
                  Watch how CAD technology brings intricate jewelry designs to life with stunning precision and detail.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Index;