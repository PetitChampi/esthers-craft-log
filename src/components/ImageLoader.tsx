import { useEffect, useState } from "react";
import "@/styles/ImageLoader.css";

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  thumbnailSrc?: string;
  onLoad?: () => void;
  priority?: boolean;
}

export function ImageLoader({
  src,
  alt,
  className = "",
  thumbnailSrc,
  onLoad,
  priority = false
}: ImageLoaderProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Reset states when src changes
    setImageLoaded(false);
    setThumbnailLoaded(false);
    setError(false);

    // Preload full image
    const img = new Image();
    img.src = src;
    
    if (priority) {
      img.loading = "eager";
    }

    img.onload = () => {
      setImageLoaded(true);
      onLoad?.();
    };

    img.onerror = () => {
      setError(true);
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
  }, [src, thumbnailSrc, onLoad, priority]);

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
        src={src}
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
