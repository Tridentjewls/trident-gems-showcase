import tridentLogo from "@/assets/trident-logo.png";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { label: "HOME", range: "(1-8)", path: "/" },
    { label: "ABOUT US", range: "(9)", path: "/about" },
    { label: "SERVICES", range: "(13-20)", path: "/services" },
    { label: "OUR CLIENT", range: "(10)", path: "/clients" },
    { label: "PRICING", range: "(11-12)", path: "/pricing" },
  ];

  return (
    <header className="py-5 px-6 flex justify-between items-center relative overflow-hidden border-b border-border/10">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40">
        <source src="/videos/bg-trident.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-accent/50 to-primary/60"></div>
      
      <div className="relative flex items-center animate-fade-in">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-3 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-all duration-700 animate-pulse"></div>
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
                className="relative text-primary-foreground transition-all duration-300 group px-3 py-2 block"
              >
                <span className="absolute inset-0 border-2 border-transparent group-hover:border-accent rounded-lg transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(var(--accent),0.5)]"></span>
                <span className="relative text-sm font-medium tracking-wider group-hover:text-accent transition-colors duration-300">
                  {item.label}
                </span>
                <span className="relative text-xs ml-1 text-primary-foreground/70 group-hover:text-accent/70 transition-colors duration-300">
                  {item.range}
                </span>
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
                className="relative text-foreground transition-all duration-300 group px-4 py-3 block rounded-lg hover:bg-primary/10"
              >
                <span className="text-base font-medium tracking-wider group-hover:text-accent transition-colors duration-300">
                  {item.label}
                </span>
                <span className="text-xs ml-2 text-muted-foreground group-hover:text-accent/70 transition-colors duration-300">
                  {item.range}
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