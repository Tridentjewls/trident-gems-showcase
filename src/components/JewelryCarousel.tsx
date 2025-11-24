import { useEffect, useState } from "react";
import jewelry1 from "@/assets/jewelry-1.jpg";
import jewelry2 from "@/assets/jewelry-2.jpg";
import jewelry3 from "@/assets/jewelry-3.jpg";

const JewelryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [jewelry1, jewelry2, jewelry3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-luxury">
          <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="min-w-full h-full flex items-center justify-center bg-muted/20"
              >
                <img
                  src={image}
                  alt={`Luxury jewelry piece ${index + 1}`}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-accent w-8"
                    : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JewelryCarousel;
