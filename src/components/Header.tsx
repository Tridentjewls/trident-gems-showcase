import tridentLogo from "@/assets/trident-logo.png";
const Header = () => {
  return <header className="py-6 px-8 flex justify-center items-center relative overflow-hidden border-b border-border/20">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/bg-trident.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-secondary/70 to-primary/70"></div>
      
      <div className="relative flex items-center gap-6 animate-fade-in">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
          <div className="relative bg-background/10 backdrop-blur-sm rounded-full p-3 border-border/30 border-2 border-none">
            <img src={tridentLogo} alt="TRIDENT Jewellery Designer Logo" className="h-12 md:h-16 w-auto object-contain drop-shadow-2xl" />
          </div>
        </div>
        
      </div>
    </header>;
};
export default Header;