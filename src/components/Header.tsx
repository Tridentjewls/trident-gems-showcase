import tridentLogo from "@/assets/trident-logo.png";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/about" },
    { label: "SERVICES", path: "/services" },
    { label: "OUR CREATIONS", path: "/our-creations" },
    { label: "OUR CLIENT", path: "/clients" },
    { label: "PRICING", path: "/pricing" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="py-5 px-6 flex justify-between items-center relative overflow-hidden border-b border-border/10">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/bg-trident.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-secondary/80 to-primary/80"></div>
      
      <div className="relative flex items-center animate-fade-in">
        <div className="relative group cursor-pointer">
          <img 
            src={tridentLogo} 
            alt="TRIDENT Jewellery Designer Logo" 
            className="relative h-12 md:h-16 w-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="relative hidden md:block animate-fade-in">
        <ul className="flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className="relative text-primary-foreground transition-all duration-300 group py-2 block"
              >
                {/* Text */}
                <span className={`relative text-sm font-medium tracking-wider transition-all duration-300 ${
                  isActive(item.path) 
                    ? "text-accent" 
                    : "group-hover:text-accent"
                }`}>
                  {item.label}
                </span>
                
                {/* Active/Hover underline */}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ease-out ${
                  isActive(item.path) 
                    ? "w-full" 
                    : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <button className="relative text-primary-foreground p-2 hover:text-accent transition-colors">
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-xl border-l border-border/20">
          <nav className="flex flex-col gap-4 mt-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`relative text-foreground transition-all duration-300 px-4 py-3 block rounded-lg ${
                  isActive(item.path) 
                    ? "bg-primary/10 text-accent border-l-2 border-accent" 
                    : "hover:bg-primary/10"
                }`}
              >
                <span className={`text-base font-medium tracking-wider transition-colors duration-300 ${
                  isActive(item.path) ? "text-accent" : "group-hover:text-accent"
                }`}>
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};
export default Header;