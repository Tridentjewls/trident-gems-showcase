import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const Pricing = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!name.trim() || !mobile.trim() || !email.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // Mobile validation (basic)
    if (mobile.length < 10) {
      toast({
        title: "Error",
        description: "Please enter a valid mobile number",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Create WhatsApp message
    const message = `Hello! I'm interested in your jewelry CAD design services.%0A%0A*Name:* ${encodeURIComponent(name.trim())}%0A*Mobile:* ${encodeURIComponent(mobile.trim())}%0A*Email:* ${encodeURIComponent(email.trim())}%0A%0APlease share the pricing details.`;
    
    const whatsappUrl = `https://wa.me/918780532068?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Success!",
      description: "Redirecting to WhatsApp...",
    });

    // Reset form
    setName("");
    setMobile("");
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/bg-trident.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-secondary/40 to-primary/40"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-20 px-4">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-center">
            Pricing
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-12 text-center max-w-2xl">
            For pricing details, drop your information below and we will connect with you soon!
          </p>

          {/* Contact Form Box */}
          <div className="w-full max-w-md bg-background/95 backdrop-blur-sm rounded-2xl p-8 shadow-luxury border border-border/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-background border-border/50 focus:border-primary"
                  maxLength={100}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile" className="text-foreground font-medium">
                  Mobile No
                </Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="bg-background border-border/50 focus:border-primary"
                  maxLength={15}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background border-border/50 focus:border-primary"
                  maxLength={255}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? "Sending..." : "Send Details"}
              </Button>
            </form>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
