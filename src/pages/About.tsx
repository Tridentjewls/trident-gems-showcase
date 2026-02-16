import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import tridentLogo from "@/assets/trident-logo.png";
import tridentLogoAlt from "@/assets/trident-logo-alt.png";
import founderPhoto from "@/assets/founder-photo.png";

const About = () => {
  const [visibleBoxes, setVisibleBoxes] = useState<boolean[]>([false, false]);
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

  return (
    <PageTransition>
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 relative overflow-hidden">
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            
            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 text-foreground">
              About <span className="text-primary">Us</span>
            </h1>

            <div className="flex justify-center">
              
              {/* Single Box: Founder & Company */}
              <div
                ref={el => boxRefs.current[0] = el}
                className={`bg-background rounded-2xl p-8 md:p-12 shadow-lg border border-border transition-all duration-1000 max-w-4xl w-full text-center ${
                  visibleBoxes[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  {/* Founder Section */}
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/30 mb-2">
                    <img 
                      src={founderPhoto} 
                      alt="Pritesh Prajapati - Founder" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Pritesh Prajapati
                  </h2>
                  <p className="text-primary font-medium">Founder & Lead Designer</p>
                  
                  <div className="w-16 h-0.5 bg-primary/40 my-4"></div>
                  
                  {/* Company Section */}
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/30 bg-foreground flex items-center justify-center mb-2">
                    <img 
                      src={tridentLogoAlt} 
                      alt="Trident Jewellery Logo" 
                      className="w-3/4 h-3/4 object-contain"
                    />
                  </div>
                  <p className="text-lg font-semibold text-foreground">Trident Jewellery</p>
                  <p className="text-muted-foreground leading-relaxed max-w-xl mt-2">
                    Trident Jewellery is a premier jewelry CAD design studio based in Surat, Gujarat – the diamond capital of the world. We specialize in transforming creative ideas into stunning, production-ready jewelry designs using advanced CAD technology, 3D modeling, and photorealistic rendering.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default About;
