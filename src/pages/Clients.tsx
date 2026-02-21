import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

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
    { name: "Amrapali", logo: "https://images.seeklogo.com/logo-png/4/1/amrapali-jewels-logo-png_seeklogo-49127.png" },
    { name: "Swarovski", logo: "https://images.seeklogo.com/logo-png/46/1/swarovski-logo-png_seeklogo-464792.png" },
    { name: "De Beers", logo: "https://images.seeklogo.com/logo-png/14/1/de-beers-logo-png_seeklogo-148281.png" },
    { name: "Cartier", logo: "https://images.seeklogo.com/logo-png/11/1/cartier-logo-png_seeklogo-111363.png" },
    { name: "Tiffany & Co", logo: "https://images.seeklogo.com/logo-png/52/1/tiffany-co-logo-png_seeklogo-527133.png" },
    { name: "Bulgari", logo: "https://images.seeklogo.com/logo-png/9/1/bulgari-logo-png_seeklogo-92453.png" },
    { name: "Chopard", logo: "https://images.seeklogo.com/logo-png/11/1/chopard-logo-png_seeklogo-115846.png" },
    { name: "Pandora", logo: "https://images.seeklogo.com/logo-png/35/1/pandora-logo-png_seeklogo-352508.png" },
  ];

  const testimonials = [
    { name: "Rajesh Kumar", role: "Jewelry Store Owner", review: "The CAD designs provided were incredibly detailed and precise. The team delivered our custom engagement ring designs on time, and the quality exceeded our expectations.", rating: 5 },
    { name: "Priya Sharma", role: "Independent Designer", review: "Working with this team has been a game-changer for my business. Their advanced CAD technology and creative approach helped me bring my unique designs to life.", rating: 5 },
    { name: "Mohammed Ali", role: "Jewelry Manufacturer", review: "Excellent transparency throughout the process. We could review every step from sketch to final STL file. Their 100% file guarantee shows their commitment to quality.", rating: 5 },
    { name: "Sarah Johnson", role: "Boutique Owner, USA", review: "Trident delivered stunning 3D renders that helped us showcase designs to clients before production. Absolutely professional and reliable partner.", rating: 5 },
    { name: "David Chen", role: "Wholesale Distributor", review: "Their turnaround time is impressive. We've worked with many CAD studios but Trident consistently delivers the highest quality files on schedule.", rating: 5 },
    { name: "Anita Patel", role: "Custom Jewelry Designer", review: "The attention to detail in every CAD file is remarkable. Stone settings, prong placements — everything is production-ready. Highly recommended!", rating: 5 },
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

        <div className="relative z-10 py-20">
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

          {/* Logo Marquee - Auto scrolling */}
          <div className="w-full overflow-hidden mb-20">
            <div className="flex animate-scroll-horizontal-slow">
              {[...Array(3)].map((_, loopIndex) => (
                <div key={loopIndex} className="flex shrink-0">
                  {clients.map((client) => (
                    <div key={`${loopIndex}-${client.name}`} className="flex-shrink-0 mx-6 md:mx-8">
                      <div className="bg-card border border-border rounded-xl p-4 md:p-6 w-32 md:w-40 h-24 md:h-28 flex flex-col items-center justify-center transition-all duration-300 hover:border-primary/40 hover:scale-105"
                        onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 30px hsl(20 42% 58% / 0.12)')}
                        onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                      >
                        <img
                          src={client.logo}
                          alt={`${client.name} logo`}
                          className="h-8 md:h-10 w-auto max-w-full opacity-50 hover:opacity-90 transition-opacity duration-300 invert"
                          loading="lazy"
                        />
                        <span className="text-[10px] md:text-xs font-medium text-muted-foreground text-center mt-2 tracking-wide truncate w-full">
                          {client.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section - 6 in horizontal row */}
          <div className="container mx-auto px-4 py-20">
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

            {/* Horizontal scrolling row on mobile, grid on desktop */}
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-3 lg:grid-cols-6 md:overflow-x-visible md:pb-0">
              {testimonials.map((review, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border transition-all duration-300 hover:border-primary/40 hover:scale-[1.02] relative overflow-hidden group flex-shrink-0 w-72 md:w-auto"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 fill-primary" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-xs mb-4 italic line-clamp-4">
                    "{review.review}"
                  </p>
                  <div className="border-t border-border pt-3">
                    <h4 className="font-bold text-foreground text-xs tracking-wide">{review.name}</h4>
                    <p className="text-primary text-[10px] mt-1 tracking-wide">{review.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default Clients;
