import tridentLogo from "@/assets/trident-logo.png";

const Header = () => {
  return (
    <header className="py-3 px-6 flex justify-center items-center relative overflow-hidden border-b border-border/10">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40">
        <source src="/videos/bg-trident.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-accent/50 to-primary/60"></div>
      
      <div className="relative flex items-center animate-fade-in">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-3 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-all duration-700 animate-pulse"></div>
          <div className="relative bg-background/5 backdrop-blur-md rounded-full p-2.5 border border-primary/20 group-hover:border-primary/40 transition-all duration-300 shadow-2xl">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
            <img 
              src={tridentLogo} 
              alt="TRIDENT Jewellery Designer Logo" 
              className="relative h-10 md:h-12 w-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;