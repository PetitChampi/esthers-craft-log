import { useEffect, useState } from "react";
import "@/styles/ImageLoader.css";

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  thumbnailSrc?: string;
  fallbackSrc?: string;
  onLoad?: () => void;
  priority?: boolean;
}

export function ImageLoader({
  src,
  alt,
  className = "",
  thumbnailSrc,
  fallbackSrc,
  onLoad,
  priority = false
}: ImageLoaderProps) {
  const [activeSrc, setActiveSrc] = useState(src);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setActiveSrc(src);
  }, [src]);

  useEffect(() => {
    // Reset states when src changes
    setImageLoaded(false);
    setThumbnailLoaded(false);
    setError(false);

    // Preload full image
    const img = new Image();
    img.src = activeSrc;

    if (priority) {
      img.loading = "eager";
    }

    img.onload = () => {
      setImageLoaded(true);
      onLoad?.();
    };

    img.onerror = () => {
      if (fallbackSrc && activeSrc !== fallbackSrc) {
        setActiveSrc(fallbackSrc);
      } else {
        setError(true);
      }
    };

    // Preload thumbnail if provided
    if (thumbnailSrc) {
      const thumb = new Image();
      thumb.src = thumbnailSrc;
      thumb.onload = () => setThumbnailLoaded(true);
    }

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [activeSrc, thumbnailSrc, onLoad, priority, fallbackSrc]);

  if (error) {
    return (
      <div className={`image-loader-error ${className}`}>
        <div className="error-placeholder">
          <svg width="88" height="88" xmlns="http://www.w3.org/2000/svg" stroke="#000" strokeLinejoin="round" opacity=".3" fill="none" strokeWidth="3.7">
            <rect x="16" y="16" width="56" height="56" rx="6"/>
            <path d="m16 58 16-18 32 32"/>
            <circle cx="53" cy="35" r="7"/>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className={`image-loader-container ${className}`}>
      {/* Thumbnail preview with blur */}
      {thumbnailSrc && !imageLoaded && (
        <img
          src={thumbnailSrc}
          alt={alt}
          className={`image-loader-thumbnail ${thumbnailLoaded ? "loaded" : ""}`}
        />
      )}
      
      {/* Full resolution image */}
      <img
        src={activeSrc}
        alt={alt}
        className={`image-loader-full ${imageLoaded ? "loaded" : ""}`}
      />
      
      {/* Loading shimmer overlay */}
      {!imageLoaded && (
        <div className="image-loader-shimmer" />
      )}
    </div>
  );
}
