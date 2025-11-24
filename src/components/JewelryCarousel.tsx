import jewelry1 from "@/assets/jewelry-1.jpg";
import jewelry2 from "@/assets/jewelry-2.jpg";
import jewelry3 from "@/assets/jewelry-3.jpg";

const JewelryCarousel = () => {
  const images = [jewelry1, jewelry2, jewelry3];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <img
              src={image}
              alt={`Luxury jewelry piece ${index + 1}`}
              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JewelryCarousel;
