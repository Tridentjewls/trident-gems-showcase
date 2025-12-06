import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    name: "CAD Designing",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800",
    ],
  },
  {
    name: "Rendering",
    images: [
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800",
    ],
  },
  {
    name: "Hiphop Work",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800",
    ],
  },
  {
    name: "Face Work",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
    ],
  },
  {
    name: "Manual Designing",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800",
    ],
  },
  {
    name: "Manufacturing",
    images: [
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800",
    ],
  },
  {
    name: "File Selling",
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
    ],
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (service: typeof services[0]) => {
    setSelectedService(service);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedService(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedService) {
      setCurrentImageIndex((prev) => 
        prev === selectedService.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedService) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedService.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Video Background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/bg-trident.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      <Header />

      <main className="container mx-auto px-4 py-20 min-h-[80vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-center mb-4">
          Our Services
        </h1>
        <p className="text-primary-foreground/80 text-center mb-12 max-w-2xl">
          Explore our wide range of jewelry design and manufacturing services
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl">
          {services.map((service) => (
            <button
              key={service.name}
              onClick={() => openGallery(service)}
              className="group relative bg-background/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 md:p-8 text-center transition-all duration-300 hover:bg-background/20 hover:border-primary-foreground/40 hover:scale-105 hover:shadow-xl"
            >
              <span className="text-primary-foreground font-semibold text-sm md:text-base group-hover:text-accent transition-colors">
                {service.name}
              </span>
            </button>
          ))}
        </div>
      </main>

      <Footer />

      {/* Gallery Dialog */}
      <Dialog open={!!selectedService} onOpenChange={closeGallery}>
        <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 bg-background/95 backdrop-blur-lg border-primary/20">
          <div className="relative w-full h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-xl font-bold text-foreground">
                {selectedService?.name}
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeGallery}
                className="text-foreground hover:text-primary"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Main Image */}
            <div className="flex-1 relative flex items-center justify-center p-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevImage}
                className="absolute left-2 z-10 bg-background/50 hover:bg-background/80"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              {selectedService && (
                <img
                  src={selectedService.images[currentImageIndex]}
                  alt={`${selectedService.name} ${currentImageIndex + 1}`}
                  className="max-h-full max-w-full object-contain rounded-lg"
                />
              )}

              <Button
                variant="ghost"
                size="icon"
                onClick={nextImage}
                className="absolute right-2 z-10 bg-background/50 hover:bg-background/80"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>

            {/* Thumbnails */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {selectedService?.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === currentImageIndex
                        ? "border-primary scale-105"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              <p className="text-center text-muted-foreground text-sm mt-2">
                {currentImageIndex + 1} / {selectedService?.images.length}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Services;
