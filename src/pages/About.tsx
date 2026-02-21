import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import tridentLogoAlt from "@/assets/trident-logo-alt.png";
import founderPhoto from "@/assets/founder-photo.png";

const About = () => {
  const [visible, setVisible] = useState(false);
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!boxRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(boxRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <PageTransition>
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">

            {/* Page Title */}
            <div className="text-center mb-16">
              <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium mb-4">Our Story</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-foreground mb-6">
                About <span className="text-primary">Us</span>
              </h1>
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
              </div>
            </div>

            {/* Company Info */}
            <div className="flex justify-center">
              <div
                ref={boxRef}
                className={`bg-card rounded-2xl p-8 md:p-12 border border-border transition-all duration-1000 max-w-4xl w-full text-center hover:border-primary/40 relative overflow-hidden ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                <div className="flex flex-col items-center gap-2">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/40 bg-muted flex items-center justify-center mb-2" style={{ boxShadow: '0 0 30px hsl(20 42% 58% / 0.15)' }}>
                    <img src={tridentLogoAlt} alt="Trident Jewellery Logo" className="w-3/4 h-3/4 object-contain" />
                  </div>
                  <p className="text-lg font-semibold text-foreground tracking-wide">Trident Jewellery</p>
                  <p className="text-muted-foreground leading-relaxed max-w-xl mt-2">
                    Trident Jewellery is a premier jewelry CAD design studio based in Surat, Gujarat – the diamond capital of the world. We specialize in transforming creative ideas into stunning, production-ready jewelry designs using advanced CAD technology, 3D modeling, and photorealistic rendering.
                  </p>
                </div>
              </div>
            </div>

            {/* About the Founder */}
            <div className="flex justify-center mt-12">
              <div className="bg-card rounded-2xl p-8 md:p-12 border border-border max-w-4xl w-full hover:border-primary/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-primary/40 flex-shrink-0" style={{ boxShadow: '0 0 30px hsl(20 42% 58% / 0.15)' }}>
                    <img src={founderPhoto} alt="Founder of Trident Jewellery" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-primary text-xs tracking-[0.3em] uppercase font-medium mb-2">About the Founder</p>
                    <h3 className="text-2xl font-bold text-foreground mb-1">Jaydeep Sojitra</h3>
                    <p className="text-primary text-sm mb-4">Founder & Lead Designer</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      With over 8 years of experience in jewelry CAD design, Jaydeep Sojitra founded Trident Jewellery Design with a passion for merging traditional craftsmanship with cutting-edge technology. His vision is to deliver world-class, production-ready jewelry designs that exceed client expectations and push the boundaries of creativity in the jewelry industry.
                    </p>
                  </div>
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
