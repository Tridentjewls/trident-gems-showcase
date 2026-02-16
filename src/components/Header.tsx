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
    <header className="py-5 px-6 flex justify-between items-center bg-white border-b border-border shadow-sm sticky top-0 z-50">
      
      <div className="flex items-center animate-fade-in">
        <Link to="/" className="relative group cursor-pointer">
          <img 
            src={tridentLogo} 
            alt="TRIDENT Jewellery Designer Logo" 
            className="h-12 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block animate-fade-in">
        <ul className="flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className="relative transition-all duration-300 group py-2 block"
              >
                <span className={`relative text-sm font-medium tracking-wider transition-all duration-300 ${
                  isActive(item.path) 
                    ? "text-gold" 
                    : "text-foreground/70 group-hover:text-gold"
                }`}>
                  {item.label}
                </span>
                
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ease-out ${
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
          <button className="text-foreground p-2 hover:text-gold transition-colors">
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] bg-white border-l border-border">
          <nav className="flex flex-col gap-4 mt-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`transition-all duration-300 px-4 py-3 block rounded-lg ${
                  isActive(item.path) 
                    ? "bg-gold/10 text-gold border-l-2 border-gold" 
                    : "text-foreground/70 hover:bg-gold/5 hover:text-gold"
                }`}
              >
                <span className="text-base font-medium tracking-wider">
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
