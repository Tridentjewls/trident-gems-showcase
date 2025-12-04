import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, Building2 } from "lucide-react";

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

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Box 1: About Pritesh Prajapati - Founder */}
              <div
                ref={el => boxRefs.current[0] = el}
                className={`bg-background/95 backdrop-blur-sm rounded-2xl p-8 shadow-luxury border border-border/20 transition-all duration-1000 ${
                  visibleBoxes[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Pritesh Prajapati
                    </h2>
                    <p className="text-primary font-medium">Founder & Lead Designer</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    With over a decade of experience in jewelry CAD design, Pritesh Prajapati founded Trident Jewellery with a vision to blend traditional craftsmanship with cutting-edge technology.
                  </p>
                  <p>
                    His passion for precision and creativity has helped countless jewelry brands and designers bring their visions to life. Pritesh believes that every piece of jewelry tells a story, and his mission is to help clients craft those stories with perfection.
                  </p>
                  <p>
                    Specializing in intricate CAD designs, 3D modeling, and photorealistic rendering, Pritesh ensures every project meets the highest standards of quality and artistry.
                  </p>
                </div>
              </div>

              {/* Box 2: About Trident Jewellery Company */}
              <div
                ref={el => boxRefs.current[1] = el}
                className={`bg-background/95 backdrop-blur-sm rounded-2xl p-8 shadow-luxury border border-border/20 transition-all duration-1000 delay-200 ${
                  visibleBoxes[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <Building2 className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Trident Jewellery
                    </h2>
                    <p className="text-primary font-medium">CAD Design Excellence</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    Trident Jewellery is a premier jewelry CAD design studio based in Surat, Gujarat – the diamond capital of the world. We specialize in transforming creative ideas into stunning, production-ready jewelry designs.
                  </p>
                  <p>
                    Our services include custom CAD design, 3D modeling, photorealistic rendering, and STL file preparation for manufacturing. We work with jewelry brands, retailers, and individual designers worldwide.
                  </p>
                  <p>
                    At Trident, we combine advanced technology with artistic expertise to deliver designs that are not only beautiful but also technically precise and ready for production.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
