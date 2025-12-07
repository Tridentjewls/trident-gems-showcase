import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JewelryCarousel from "@/components/JewelryCarousel";
import AnimatedCounter from "@/components/AnimatedCounter";
import jewelryRing from "@/assets/jewelry-ring.png";
import jewelryRing1 from "@/assets/jewelry-ring-1.jpg";
import jewelryNecklace1 from "@/assets/jewelry-necklace-1.jpg";
import jewelryBracelet1 from "@/assets/jewelry-bracelet-1.jpg";
import jewelryEarrings1 from "@/assets/jewelry-earrings-1.jpg";
import jewelryTiara1 from "@/assets/jewelry-tiara-1.jpg";
import stepSketch from "@/assets/step-sketch.jpg";
import stepCad from "@/assets/step-cad.jpg";
import stepRendering from "@/assets/step-rendering.jpg";
import stepStl from "@/assets/step-stl.jpg";
const Index = () => {
  const [visibleBoxes, setVisibleBoxes] = useState<boolean[]>([false, false, false]);
  const [visibleImages, setVisibleImages] = useState<boolean[]>([false, false, false, false, false]);
  const [visibleWorkflowBoxes, setVisibleWorkflowBoxes] = useState<boolean[]>([false, false, false, false]);
  const [visibleWhyUsBoxes, setVisibleWhyUsBoxes] = useState<boolean[]>([false, false, false, false, false, false]);
  const [visibleReviews, setVisibleReviews] = useState<boolean[]>([false, false, false]);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const workflowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const whyUsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reviewRefs = useRef<(HTMLDivElement | null)[]>([]);
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
    const workflowObservers = workflowRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisibleWorkflowBoxes(prev => {
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
    const whyUsObservers = whyUsRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisibleWhyUsBoxes(prev => {
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
    const reviewObservers = reviewRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisibleReviews(prev => {
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
      workflowObservers.forEach((observer, index) => {
        if (observer && workflowRefs.current[index]) {
          observer.disconnect();
        }
      });
      whyUsObservers.forEach((observer, index) => {
        if (observer && whyUsRefs.current[index]) {
          observer.disconnect();
        }
      });
      reviewObservers.forEach((observer, index) => {
        if (observer && reviewRefs.current[index]) {
          observer.disconnect();
        }
      });
    };
  }, []);
  return <div className="min-h-screen flex flex-col relative">
      {/* Unified Video Background for Entire Page */}
      <video autoPlay loop muted playsInline className="fixed inset-0 w-full h-full object-cover -z-10">
        <source src="/videos/bg-trident.mp4" type="video/mp4" />
      </video>
      
      <Header />
      
      <main className="flex-1 relative">
        
        <section className="relative z-10 bg-white">
          <JewelryCarousel />
        </section>

        {/* Three Boxes Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
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
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-secondary/40 to-primary/40"></div>
          
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
              {[{
              img: jewelryRing1,
              alt: "Diamond Engagement Ring"
            }, {
              img: jewelryNecklace1,
              alt: "Emerald Gold Necklace"
            }, {
              img: jewelryBracelet1,
              alt: "Sapphire Diamond Bracelet"
            }, {
              img: jewelryEarrings1,
              alt: "Ruby Drop Earrings"
            }, {
              img: jewelryTiara1,
              alt: "Pearl Diamond Tiara"
            }].map((item, index) => <div key={index} ref={el => imageRefs.current[index] = el} className="snap-center flex-shrink-0">
                  <div className={`transition-all duration-1000 ease-out ${visibleImages[index] ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-sm'}`} style={{
                transitionDelay: `${index * 150}ms`
              }}>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl blur-xl opacity-30 group-hover:opacity-70 transition-opacity duration-500"></div>
                      <div className="relative rounded-2xl overflow-hidden shadow-luxury border border-border/20 bg-background/95 backdrop-blur-sm p-6">
                        <img src={item.img} alt={item.alt} className="w-[70vw] h-[70vh] object-cover group-hover:scale-105 transition-transform duration-700 ease-out rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        {/* How We Work Together Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-secondary/40 to-primary/40"></div>
          
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-background drop-shadow-2xl tracking-wider mb-4">
                How We Will Work Together
              </h2>
              <div className="w-32 h-1 bg-background/80 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[{
              title: "1. Manual Sketch or Reference Image",
              description: "Share your vision through hand-drawn sketches or reference images. This initial step helps us understand your design concept and preferences.",
              img: stepSketch
            }, {
              title: "2. CAD Design",
              description: "Our expert designers transform your concept into precise 3D CAD models, ensuring every detail is captured with mathematical accuracy.",
              img: stepCad
            }, {
              title: "3. Rendering for Confirmation",
              description: "Review photorealistic renders of your design. We'll refine and adjust until you're completely satisfied with every aspect.",
              img: stepRendering
            }, {
              title: "4. Final STL File Delivery",
              description: "Receive production-ready STL files optimized for 3D printing or manufacturing, ready to bring your jewelry design to life.",
              img: stepStl
            }].map((step, index) => <div key={index} ref={el => workflowRefs.current[index] = el} className={`bg-background/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-luxury border border-border/20 transition-all duration-1000 ${visibleWorkflowBoxes[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{
              transitionDelay: `${index * 200}ms`
            }}>
                  <div className="relative h-64 overflow-hidden">
                    <img src={step.img} alt={step.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-foreground/80 leading-relaxed text-sm">{step.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-secondary/40 to-primary/40"></div>
          
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-background drop-shadow-2xl tracking-wider mb-4">
                Why Work With Us?
              </h2>
              <div className="w-32 h-1 bg-background/80 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {[{
              number: "01",
              title: "Experience & Creativity",
              description: "We combine experience and innovation to create jewelry designs that are unique and attractive. Every design shows perfection, elegance, and originality."
            }, {
              number: "02",
              title: "Client-Focused Approach",
              description: "Your satisfaction is our top priority. We carefully listen to your needs and provide personalized solutions tailored just for you."
            }, {
              number: "03",
              title: "Advanced Technology",
              description: "From CAD modeling to realistic rendering, we use the latest technology at every step to ensure accuracy and perfection in every detail."
            }, {
              number: "04",
              title: "Transparency & Trust",
              description: "No hidden surprises with us. You can see your design through sketches, CAD, and renders before final production begins."
            }, {
              number: "05",
              title: "Quality & Timely Delivery",
              description: "We always focus on high-quality output and deliver your projects on time so you can move forward with complete confidence."
            }, {
              number: "06",
              title: "100% File Guarantee",
              description: "We have complete confidence in our work. If there's any problem in the CAD/STL file due to us, we will refund your payment – no questions asked. This is our promise of trust, responsibility, and safety."
            }].map((item, index) => <div key={index} ref={el => whyUsRefs.current[index] = el} className={`group bg-background/95 backdrop-blur-sm rounded-xl p-6 shadow-luxury border border-border/20 transition-all duration-1000 hover:scale-105 ${visibleWhyUsBoxes[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{
              transitionDelay: `${index * 150}ms`
            }}>
                  <div className="relative mb-4">
                    <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors duration-300">
                      {item.number}
                    </div>
                    <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Stats Counter Strip */}
        <section className="relative overflow-hidden py-16 bg-white">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-primary-foreground"></div>
          <div className="absolute inset-0 bg-background/10 backdrop-blur-sm"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-background text-center mb-10 tracking-wider">
              We Deliver Excellence Worldwide
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-background drop-shadow-lg">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <p className="text-background/80 mt-2 text-sm md:text-base">Happy Clients</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-background drop-shadow-lg">
                  <AnimatedCounter end={2000} suffix="+" />
                </div>
                <p className="text-background/80 mt-2 text-sm md:text-base">Designs Delivered</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-background drop-shadow-lg">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <p className="text-background/80 mt-2 text-sm md:text-base">Countries Served</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-background drop-shadow-lg">
                  <AnimatedCounter end={8} suffix="+" />
                </div>
                <p className="text-background/80 mt-2 text-sm md:text-base">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Reviews Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-secondary/40 to-primary/40"></div>
          
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-background drop-shadow-2xl tracking-wider mb-4">
                What Our Clients Say
              </h2>
              <div className="w-32 h-1 bg-background/80 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[{
              name: "Rajesh Kumar",
              role: "Jewelry Store Owner",
              review: "The CAD designs provided were incredibly detailed and precise. The team delivered our custom engagement ring designs on time, and the quality exceeded our expectations. Highly professional service!",
              rating: 5
            }, {
              name: "Priya Sharma",
              role: "Independent Designer",
              review: "Working with this team has been a game-changer for my business. Their advanced CAD technology and creative approach helped me bring my unique designs to life. The rendering quality is exceptional!",
              rating: 5
            }, {
              name: "Mohammed Ali",
              role: "Jewelry Manufacturer",
              review: "Excellent transparency throughout the process. We could review every step from sketch to final STL file. Their 100% file guarantee shows their confidence and commitment to quality. Truly trustworthy partners!",
              rating: 5
            }].map((review, index) => <div key={index} ref={el => reviewRefs.current[index] = el} className={`bg-background/95 backdrop-blur-sm rounded-xl p-8 shadow-luxury border border-border/20 transition-all duration-1000 hover:scale-105 ${visibleReviews[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{
              transitionDelay: `${index * 200}ms`
            }}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => <svg key={i} className="w-5 h-5 fill-primary" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>)}
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-sm mb-6 italic">
                    "{review.review}"
                  </p>
                  <div className="border-t border-border/20 pt-4">
                    <h4 className="font-bold text-foreground text-base">{review.name}</h4>
                    <p className="text-foreground/60 text-xs mt-1">{review.role}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </section>
      </main>

      {/* Professional Footer - End of Page */}
      <Footer />
    </div>;
};
export default Index;