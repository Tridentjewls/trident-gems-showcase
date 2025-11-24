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
    <footer className="gradient-header py-8 px-4 relative overflow-hidden">
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
      <nav className="relative container mx-auto">
        <ul className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className="text-primary-foreground hover:text-accent transition-colors duration-300 group"
              >
                <span className="text-sm md:text-base font-medium tracking-wider">
                  {item.label}
                </span>
                <span className="text-xs ml-1 text-primary-foreground/70 group-hover:text-accent/70">
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
