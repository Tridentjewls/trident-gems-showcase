import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Phone, MapPin, Mail } from "lucide-react";
import tridentLogo from "@/assets/trident-logo.png";

const Footer = () => {
  const services = [
    { label: "CAD Designing", path: "/services/cad-designing" },
    { label: "Rendering", path: "/services/rendering" },
    { label: "Hip Hop Work", path: "/services/hiphop-work" },
    { label: "Face Work", path: "/services/face-work" },
    { label: "Manual Designing", path: "/services/manual-designing" },
    { label: "Manufacturing", path: "/services/manufacturing" },
    { label: "File Selling", path: "/services/file-selling" },
    { label: "Custom Jewelry", path: "/services/custom-jewelry" },
  ];
  const usefulLinks = [
    { label: "Terms and Conditions", path: "/terms" },
    { label: "FAQs", path: "/faqs" },
  ];
  const socialLinks = [
    { icon: Instagram, url: "https://www.instagram.com/trident_jewelles?igsh=MTQ5ZG81MmV1aWtoMg==", label: "Instagram", image: null },
    { icon: Facebook, url: "#", label: "Facebook", image: null },
    { icon: Linkedin, url: "#", label: "LinkedIn", image: null },
    { icon: Mail, url: "mailto:contact@tridentjewellery.com", label: "Email", image: null },
    { icon: null, url: "https://www.fiverr.com", label: "Fiverr", image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/fiverr.svg" },
    { icon: null, url: "https://www.upwork.com", label: "Upwork", image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/upwork.svg" },
    { icon: null, url: "https://x.com", label: "X", image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg" },
    { icon: null, url: "https://www.pinterest.com", label: "Pinterest", image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pinterest.svg" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Company Info */}
          <div className="space-y-6">
            <img src={tridentLogo} alt="Trident Logo" className="h-16 w-auto" />
            
            {/* Social Media Icons */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(social => (
                <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:scale-110" aria-label={social.label}>
                  {social.icon ? <social.icon className="w-5 h-5 text-muted-foreground" /> : <img src={social.image!} alt={social.label} className="w-5 h-5 object-contain opacity-40" />}
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Mobile</p>
                  <p className="text-sm">+91 878-0532068</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Address</p>
                  <p className="text-sm">F118, ABC apartment, ABC Circle,<br />Sudama chowk, Surat, Gujarat, 394101</p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Services */}
          <div className="md:pl-8">
            <h3 className="text-xl font-bold text-foreground mb-6 tracking-wider">
              SERVICES
            </h3>
            <ul className="space-y-3">
              {services.map(service => (
                <li key={service.label}>
                  <Link to={service.path} className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Useful Links */}
          <div className="md:pl-8">
            <h3 className="text-xl font-bold text-foreground mb-6 tracking-wider">
              USEFUL LINKS
            </h3>
            <ul className="space-y-3">
              {usefulLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Trident Jewellery Design and Rendering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
