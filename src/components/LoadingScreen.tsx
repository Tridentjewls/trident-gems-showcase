import { useEffect, useState } from "react";
import tridentLogo from "@/assets/trident-logo.png";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let videoLoaded = false;
    let timerComplete = false;

    const tryHide = () => {
      if (videoLoaded && timerComplete) {
        setFadeOut(true);
        setTimeout(() => setIsLoading(false), 500);
      }
    };

    const handleVideoLoaded = () => {
      videoLoaded = true;
      tryHide();
    };

    window.addEventListener("videoLoaded", handleVideoLoaded);
    
    // Minimum 5 second display
    const timer = setTimeout(() => {
      timerComplete = true;
      tryHide();
    }, 5000);

    // Fallback timeout in case video never loads
    const fallback = setTimeout(() => {
      videoLoaded = true;
      tryHide();
    }, 10000);

    return () => {
      window.removeEventListener("videoLoaded", handleVideoLoaded);
      clearTimeout(timer);
      clearTimeout(fallback);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <img
          src={tridentLogo}
          alt="Trident Logo"
          className="w-32 h-32 md:w-40 md:h-40 object-contain animate-pulse"
        />
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
