import heroBg from "@/assets/hero-bg.jpg";

const VideoBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-shimmer"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/50" />
    </div>
  );
};

export default VideoBackground;
