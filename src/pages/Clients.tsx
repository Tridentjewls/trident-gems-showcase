import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import OptimizedImage from "@/components/OptimizedImage";

const Clients = () => {
  const clients = [
    { name: "Tanishq", logo: "https://images.seeklogo.com/logo-png/52/1/tanishq-logo-png_seeklogo-524065.png" },
    { name: "Kalyan Jewellers", logo: "https://images.seeklogo.com/logo-png/23/1/kalyan-jewellers-logo-png_seeklogo-238783.png" },
    { name: "Malabar Gold", logo: "https://images.seeklogo.com/logo-png/31/1/malabar-gold-diamonds-logo-png_seeklogo-319498.png" },
    { name: "Joyalukkas", logo: "https://images.seeklogo.com/logo-png/33/1/joyalukkas-logo-png_seeklogo-336291.png" },
    { name: "PC Jeweller", logo: "https://images.seeklogo.com/logo-png/35/1/pc-jeweller-logo-png_seeklogo-358977.png" },
    { name: "Senco Gold", logo: "https://images.seeklogo.com/logo-png/43/1/senco-gold-diamonds-logo-png_seeklogo-432177.png" },
    { name: "Titan", logo: "https://images.seeklogo.com/logo-png/52/1/titan-logo-png_seeklogo-527612.png" },
    { name: "CaratLane", logo: "https://images.seeklogo.com/logo-png/48/1/caratlane-logo-png_seeklogo-480389.png" },
    { name: "Tribhovandas Bhimji", logo: "https://images.seeklogo.com/logo-png/52/1/tbz-the-original-logo-png_seeklogo-528976.png" },
    { name: "GRT Jewellers", logo: "https://images.seeklogo.com/logo-png/23/1/grt-jewellers-logo-png_seeklogo-230393.png" },
    { name: "Bhima Jewellers", logo: "https://images.seeklogo.com/logo-png/8/1/bhima-jewellers-logo-png_seeklogo-89878.png" },
    { name: "PNG Jewellers", logo: "https://images.seeklogo.com/logo-png/35/1/png-jewellers-logo-png_seeklogo-353959.png" },
  ];

  return (
    <PageTransition>
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl animate-[float1_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-primary/4 blur-3xl animate-[float2_10s_ease-in-out_infinite]" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-20">

          {/* Page header */}
          <div className="text-center mb-16 px-4">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Trusted Worldwide</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
              Our Clients
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Trusted by leading jewelry brands worldwide
            </p>
          </div>

          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {clients.map((client) => (
                <div key={client.name} className="flex items-center justify-center">
                  <div className="bg-card border border-border rounded-xl p-6 transition-all duration-300 w-full h-28 flex flex-col items-center justify-center group hover:border-primary/40 hover:scale-105"
                    style={{ boxShadow: 'none', transition: 'all 0.3s ease' }}
                    onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 30px hsl(20 42% 58% / 0.12)')}
                    onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                  >
                    <OptimizedImage
                      src={client.logo}
                      alt={`${client.name} logo`}
                      priority
                      className="h-10 w-auto max-w-full opacity-60 group-hover:opacity-90 transition-opacity duration-300 invert"
                      containerClassName="h-10 w-full bg-transparent flex items-center justify-center"
                    />
                    <span className="text-xs font-medium text-muted-foreground text-center mt-2 tracking-wide">
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
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-wider mb-4">
              What Our Clients Say
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Rajesh Kumar", role: "Jewelry Store Owner", review: "The CAD designs provided were incredibly detailed and precise. The team delivered our custom engagement ring designs on time, and the quality exceeded our expectations. Highly professional service!", rating: 5 },
              { name: "Priya Sharma", role: "Independent Designer", review: "Working with this team has been a game-changer for my business. Their advanced CAD technology and creative approach helped me bring my unique designs to life. The rendering quality is exceptional!", rating: 5 },
              { name: "Mohammed Ali", role: "Jewelry Manufacturer", review: "Excellent transparency throughout the process. We could review every step from sketch to final STL file. Their 100% file guarantee shows their confidence and commitment to quality. Truly trustworthy partners!", rating: 5 },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 border border-border transition-all duration-300 hover:border-primary/40 hover:scale-[1.02] relative overflow-hidden group"
              >
                {/* Subtle top glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex gap-1 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-primary" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6 italic">
                  "{review.review}"
                </p>
                <div className="border-t border-border pt-4">
                  <h4 className="font-bold text-foreground text-sm tracking-wide">{review.name}</h4>
                  <p className="text-primary text-xs mt-1 tracking-wide">{review.role}</p>
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
