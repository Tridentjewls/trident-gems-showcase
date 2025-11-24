import { Diamond } from "lucide-react";

const Header = () => {
  return (
    <header className="gradient-header py-6 px-8 flex justify-end items-center relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-90"></div>
      <div className="relative flex items-center gap-3 animate-fade-in">
        <div className="flex flex-col items-end">
          <Diamond className="w-12 h-12 text-primary-foreground mb-1" strokeWidth={1.5} />
        </div>
        <div className="text-right">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground tracking-wider">
            TRIDENT
          </h1>
          <p className="text-xs text-primary-foreground/90 tracking-widest uppercase">
            Jewellery Designer
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
