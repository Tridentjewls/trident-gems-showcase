import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import OptimizedImage from "@/components/OptimizedImage";

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
    { 
      name: "Titan", 
      logo: "https://images.seeklogo.com/logo-png/52/1/titan-logo-png_seeklogo-527612.png"
    },
    { 
      name: "CaratLane", 
      logo: "https://images.seeklogo.com/logo-png/48/1/caratlane-logo-png_seeklogo-480389.png"
    },
    { 
      name: "Tribhovandas Bhimji", 
      logo: "https://images.seeklogo.com/logo-png/52/1/tbz-the-original-logo-png_seeklogo-528976.png"
    },
    { 
      name: "GRT Jewellers", 
      logo: "https://images.seeklogo.com/logo-png/23/1/grt-jewellers-logo-png_seeklogo-230393.png"
    },
    { 
      name: "Bhima Jewellers", 
      logo: "https://images.seeklogo.com/logo-png/8/1/bhima-jewellers-logo-png_seeklogo-89878.png"
    },
    { 
      name: "PNG Jewellers", 
      logo: "https://images.seeklogo.com/logo-png/35/1/png-jewellers-logo-png_seeklogo-353959.png"
    },
  ];

  return (
    <PageTransition>
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#71e6b8] via-[#5ac9a0] to-[#3aab88]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(160,60%,75%/0.5),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(160,50%,35%/0.3),transparent_60%)]"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-20">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary text-center px-4">
            Our Clients
          </h1>
          <p className="text-lg md:text-xl text-primary/60 mb-16 text-center px-4">
            Trusted by leading jewelry brands worldwide
          </p>

          {/* Client Logos Grid */}
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center justify-center"
                >
                  <div className="bg-white border border-primary/10 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 w-full h-28 flex flex-col items-center justify-center">
                    <OptimizedImage
                      src={client.logo}
                      alt={`${client.name} logo`}
                      priority
                      className="h-12 w-auto max-w-full"
                      containerClassName="h-12 w-full bg-transparent flex items-center justify-center"
                    />
                    <span className="text-xs font-medium text-primary/60 text-center mt-1">
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
            <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-wider mb-4">
              What Our Clients Say
            </h2>
            <div className="w-32 h-1 bg-primary/30 mx-auto rounded-full"></div>
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
                className="bg-white rounded-xl p-8 shadow-md border border-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-primary" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-primary/70 leading-relaxed text-sm mb-6 italic">
                  "{review.review}"
                </p>
                <div className="border-t border-primary/10 pt-4">
                  <h4 className="font-bold text-primary text-base">{review.name}</h4>
                  <p className="text-primary/50 text-xs mt-1">{review.role}</p>
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
