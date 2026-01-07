import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { User, Building2 } from "lucide-react";
import tridentLogo from "@/assets/trident-logo.png";

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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 relative overflow-hidden">
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
          <div className="max-w-6xl mx-auto">
            
            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 text-white">
              About <span className="text-white">Us</span>
            </h1>

            <div className="flex justify-center">
              
              {/* Single Box: Founder & Company */}
              <div
                ref={el => boxRefs.current[0] = el}
                className={`bg-background/95 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-luxury border border-border/20 transition-all duration-1000 max-w-2xl w-full text-center ${
                  visibleBoxes[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  {/* Founder Section */}
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Pritesh Prajapati
                  </h2>
                  <p className="text-primary font-medium">Founder & Lead Designer</p>
                  
                  <div className="w-16 h-0.5 bg-primary/40 my-4"></div>
                  
                  {/* Company Section */}
                  <img 
                    src={tridentLogo} 
                    alt="Trident Jewellery Logo" 
                    className="w-20 h-20 md:w-24 md:h-24 object-contain mb-2"
                  />
                  <p className="text-lg font-semibold text-foreground">Trident Jewellery</p>
                  <p className="text-foreground/80 leading-relaxed max-w-xl mt-2">
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
