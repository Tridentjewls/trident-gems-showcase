import { useEffect, useState } from "react";
import jewelry1 from "@/assets/jewelry-1.jpg";
import jewelry2 from "@/assets/jewelry-2.jpg";
import jewelry3 from "@/assets/jewelry-3.jpg";

const JewelryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([false, false, false]);
  const images = [jewelry1, jewelry2, jewelry3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    images.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImagesLoaded(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
    });
  }, []);

  return (
    <div className="w-full h-[92vh] overflow-hidden relative">
      {!imagesLoaded[0] && (
        <div className="absolute inset-0 skeleton-shimmer" />
      )}
      
      <div
        className="flex h-full transition-transform duration-700 ease-in-out will-change-transform"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-full">
            <img
              src={image}
              alt={`Luxury jewelry piece ${index + 1}`}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                imagesLoaded[index] ? "opacity-100" : "opacity-0"
              }`}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding={index === 0 ? "sync" : "async"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JewelryCarousel;
