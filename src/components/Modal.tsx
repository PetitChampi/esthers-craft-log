import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { CraftItem } from "@/types";
import "@/styles/Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: CraftItem | null;
  onPrevious: () => void;
  onNext: () => void;
  currentIndex: number;
  totalItems: number;
}

export default function Modal({ 
  isOpen, 
  onClose, 
  item, 
  onPrevious, 
  onNext,
  totalItems
}: ModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle modal visibility and animation states
  useEffect(() => {
    if (isOpen && item) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 10);
      return () => clearTimeout(timer);
    } else if (!isOpen && isVisible) {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 200); // Match CSS transition
      return () => clearTimeout(timer);
    }
  }, [isOpen, item, isVisible]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrevious();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrevious, onNext]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isVisible || !item) return null;

  return (
    <div 
      className={`modal-overlay ${isAnimating ? "modal-open" : "modal-closing"}`}
      onClick={handleOverlayClick}
    >
      <div className="modal-container">
        {/* Close button */}
        <button onClick={onClose} className="modal-close-button">
          <X className="modal-close-icon" />
        </button>

        {/* Previous button */}
        <button
          onClick={onPrevious}
          className="modal-nav-button previous"
          disabled={totalItems <= 1}
        >
          <ChevronLeft className="modal-nav-icon" />
        </button>

        {/* Next button */}
        <button
          onClick={onNext}
          className="modal-nav-button next"
          disabled={totalItems <= 1}
        >
          <ChevronRight className="modal-nav-icon" />
        </button>

        <div className="modal-content">
          {/* Image container */}
          <div className="modal-image-container">
            {item.images.map((src, index) => (
              <div className="modal-image-wrapper" key={index}>
                <ImageWithFallback
                  src={src}
                  alt={item.title}
                  className="modal-image"
                />
              </div>
            ))}
          </div>
          {/* Item details */}
          <div className="modal-details">
            <h2 className="modal-title">{item.title}</h2>
            <p className="modal-description">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
