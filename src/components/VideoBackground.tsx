import { useState, useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const VideoBackground = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Defer video loading until after initial page render
  useEffect(() => {
    // Use requestIdleCallback if available, otherwise setTimeout
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(() => {
        setShouldLoadVideo(true);
      });
    } else {
      const timer = setTimeout(() => {
        setShouldLoadVideo(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      {/* Static poster image - loads instantly */}
      <img
        src={heroBg}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          isVideoLoaded ? "opacity-0" : "opacity-100"
        }`}
        loading="eager"
        fetchPriority="high"
      />

      {/* Video - deferred loading */}
      {shouldLoadVideo && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onCanPlayThrough={handleVideoLoaded}
          onLoadedData={handleVideoLoaded}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source 
            src="https://cdn.pixabay.com/video/2023/09/25/181573-868349613_large.mp4" 
            type="video/mp4" 
          />
        </video>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/50" />
    </div>
  );
};

export default VideoBackground;
