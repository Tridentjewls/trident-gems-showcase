import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Clients = () => {
  const clients = [
    { name: "Tanishq", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Tanishq_Logo.svg/1200px-Tanishq_Logo.svg.png" },
    { name: "Kalyan Jewellers", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Kalyan_Jewellers_Logo.svg/1200px-Kalyan_Jewellers_Logo.svg.png" },
    { name: "Malabar Gold", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Malabar_Gold_%26_Diamonds_logo.svg/1200px-Malabar_Gold_%26_Diamonds_logo.svg.png" },
    { name: "PC Jeweller", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/PC_Jeweller_logo.svg/1200px-PC_Jeweller_logo.svg.png" },
    { name: "Senco Gold", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Senco_Gold_%26_Diamonds_Logo.png/250px-Senco_Gold_%26_Diamonds_Logo.png" },
    { name: "Joyalukkas", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Joyalukkas_logo.svg/1200px-Joyalukkas_logo.svg.png" },
  ];

  // Duplicate for seamless loop
  const duplicatedClients = [...clients, ...clients];

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
          <div className="max-w-4xl mx-auto text-center">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Our Clients
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-16">
              Trusted by leading jewelry brands worldwide
            </p>

            {/* Scrolling Logos Container */}
            <div className="relative h-[500px] overflow-hidden rounded-2xl bg-background/20 backdrop-blur-sm border border-border/20">
              <div className="absolute inset-0 flex flex-col animate-scroll-vertical">
                {duplicatedClients.map((client, index) => (
                  <div
                    key={`${client.name}-${index}`}
                    className="flex-shrink-0 h-[120px] flex items-center justify-center px-8 py-4"
                  >
                    <div className="bg-white/95 rounded-xl px-12 py-6 shadow-luxury hover:scale-105 transition-transform duration-300 w-full max-w-md">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="h-12 md:h-16 w-auto mx-auto object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `<span class="text-xl md:text-2xl font-bold text-primary">${client.name}</span>`;
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Clients;
