import tridentLogo from "@/assets/trident-logo.png";

const Header = () => {
  return (
    <header className="gradient-header py-6 px-8 flex justify-center items-center relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="https://cdn.pixabay.com/video/2023/09/25/181573-868349613_large.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-90"></div>
      <div className="relative animate-fade-in">
        <img 
          src={tridentLogo} 
          alt="TRIDENT Jewellery Designer Logo" 
          className="h-24 md:h-32 w-auto object-contain"
        />
      </div>
    </header>
  );
};

export default Header;
