import { useState } from "react";

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function BlurImage({ src, alt, className = "" }: BlurImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`bg-slate-200 dark:bg-[#4a4a4a] flex items-center justify-center ${className}`}>
        <span className="text-slate-400 dark:text-slate-500 text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-slate-200 dark:bg-[#4a4a4a] animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
