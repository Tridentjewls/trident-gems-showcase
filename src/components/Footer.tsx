import { Link } from "react-router-dom";

const Footer = () => {
  const navItems = [
    { label: "HOME", range: "(1-8)", path: "/" },
    { label: "ABOUT US", range: "(9)", path: "/about" },
    { label: "SERVICES", range: "(13-20)", path: "/services" },
    { label: "OUR CLIENT", range: "(10)", path: "/clients" },
    { label: "PRICING", range: "(11-12)", path: "/pricing" },
  ];

  return (
    <footer className="py-8 px-4 relative overflow-hidden">
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
      <nav className="relative container mx-auto">
        <ul className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className="relative text-primary-foreground transition-all duration-300 group px-4 py-2 block"
              >
                <span className="absolute inset-0 border-2 border-transparent group-hover:border-accent rounded-lg transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(var(--accent),0.5)]"></span>
                <span className="relative text-sm md:text-base font-medium tracking-wider group-hover:text-accent transition-colors duration-300">
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
    </footer>
  );
};

export default Footer;
