import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Phone, MapPin, Mail } from "lucide-react";
import tridentLogo from "@/assets/trident-logo.png";

const Footer = () => {
  const services = [
    "CAD Designing",
    "Photo Rendering",
    "Video Rendering",
    "Hip Hop Work",
    "Face Work",
  ];

  const usefulLinks = [
    { label: "Terms and Conditions", path: "/terms" },
    { label: "FAQs", path: "/faqs" },
  ];

  const socialLinks = [
    { icon: Instagram, url: "https://www.instagram.com/trident_jewelles?igsh=MTQ5ZG81MmV1aWtoMg==", label: "Instagram" },
    { icon: Facebook, url: "#", label: "Facebook" },
    { icon: Linkedin, url: "#", label: "LinkedIn" },
    { icon: Mail, url: "mailto:contact@tridentjewellery.com", label: "Email" },
  ];

  return (
    <footer className="relative overflow-hidden bg-background border-t border-border/20">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/bg-trident.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-secondary/80 to-primary/80"></div>
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Company Info */}
          <div className="space-y-6">
            <img 
              src={tridentLogo} 
              alt="Trident Logo" 
              className="h-16 w-auto"
            />
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-primary-foreground" />
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-primary-foreground/90">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Mobile</p>
                  <p className="text-sm">+91 878-0532068</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm">F118, ABC apartment, ABC Circle,<br />Sudama chowk, Surat, Gujarat, 394101</p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Services */}
          <div>
            <h3 className="text-xl font-bold text-primary-foreground mb-6 tracking-wider">
              SERVICES
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Useful Links */}
          <div>
            <h3 className="text-xl font-bold text-primary-foreground mb-6 tracking-wider">
              USEFUL LINKS
            </h3>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © 2025 Trident Jewellery Design and Rendering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
