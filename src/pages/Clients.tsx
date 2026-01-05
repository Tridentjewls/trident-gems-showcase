import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Clients = () => {
  const clients = [
    { 
      name: "Tanishq", 
      logo: "https://images.seeklogo.com/logo-png/52/1/tanishq-logo-png_seeklogo-524065.png"
    },
    { 
      name: "Kalyan Jewellers", 
      logo: "https://images.seeklogo.com/logo-png/23/1/kalyan-jewellers-logo-png_seeklogo-238783.png"
    },
    { 
      name: "Malabar Gold", 
      logo: "https://images.seeklogo.com/logo-png/31/1/malabar-gold-diamonds-logo-png_seeklogo-319498.png"
    },
    { 
      name: "Joyalukkas", 
      logo: "https://images.seeklogo.com/logo-png/33/1/joyalukkas-logo-png_seeklogo-336291.png"
    },
    { 
      name: "PC Jeweller", 
      logo: "https://images.seeklogo.com/logo-png/35/1/pc-jeweller-logo-png_seeklogo-358977.png"
    },
    { 
      name: "Senco Gold", 
      logo: "https://images.seeklogo.com/logo-png/43/1/senco-gold-diamonds-logo-png_seeklogo-432177.png"
    },
  ];

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
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-20">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-center px-4">
            Our Clients
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-16 text-center px-4">
            Trusted by leading jewelry brands worldwide
          </p>

          {/* Client Logos Grid */}
          <div className="w-full max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center justify-center"
                >
                  <div className="bg-white rounded-xl p-6 shadow-luxury hover:scale-105 transition-transform duration-300 w-full h-28 flex flex-col items-center justify-center">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="h-12 w-auto object-contain mb-2"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <span className="text-sm font-semibold text-primary text-center whitespace-nowrap hidden">
                      {client.name}
                    </span>
                    <span className="text-xs font-medium text-primary/70 text-center mt-1">
                      {client.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Client Reviews Section */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl tracking-wider mb-4">
              What Our Clients Say
            </h2>
            <div className="w-32 h-1 bg-white/80 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Rajesh Kumar",
                role: "Jewelry Store Owner",
                review: "The CAD designs provided were incredibly detailed and precise. The team delivered our custom engagement ring designs on time, and the quality exceeded our expectations. Highly professional service!",
                rating: 5
              },
              {
                name: "Priya Sharma",
                role: "Independent Designer",
                review: "Working with this team has been a game-changer for my business. Their advanced CAD technology and creative approach helped me bring my unique designs to life. The rendering quality is exceptional!",
                rating: 5
              },
              {
                name: "Mohammed Ali",
                role: "Jewelry Manufacturer",
                review: "Excellent transparency throughout the process. We could review every step from sketch to final STL file. Their 100% file guarantee shows their confidence and commitment to quality. Truly trustworthy partners!",
                rating: 5
              }
            ].map((review, index) => (
              <div
                key={index}
                className="bg-background/95 backdrop-blur-sm rounded-xl p-8 shadow-luxury border border-border/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-primary" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed text-sm mb-6 italic">
                  "{review.review}"
                </p>
                <div className="border-t border-border/20 pt-4">
                  <h4 className="font-bold text-foreground text-base">{review.name}</h4>
                  <p className="text-foreground/60 text-xs mt-1">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default Clients;
