import tridentLogo from "@/assets/trident-logo.png";

const Header = () => {
  return (
    <header className="py-3 px-8 flex justify-end items-center relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/bg-trident.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-secondary/60 to-primary/60"></div>
      <div className="relative animate-fade-in">
        <img 
          src={tridentLogo} 
          alt="TRIDENT Jewellery Designer Logo" 
          className="h-16 md:h-20 w-auto object-contain"
        />
      </div>
    </header>
  );
};

export default Header;
