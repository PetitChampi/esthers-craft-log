import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { CraftItem } from "@/components/PictureGrid";
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
  currentIndex,
  totalItems
}: ModalProps) {
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
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Header */}
        <div className="modal-header">
          <div className="modal-counter">
            <span className="modal-counter-text">
              {currentIndex + 1} of {totalItems}
            </span>
          </div>
          <button
            onClick={onClose}
            className="modal-close-button"
          >
            <X className="modal-close-icon" />
          </button>
        </div>

        {/* Main content */}
        <div className="modal-content">
          {/* Previous button */}
          <button
            onClick={onPrevious}
            className="modal-nav-button previous"
            disabled={totalItems <= 1}
          >
            <ChevronLeft className="modal-nav-icon" />
          </button>

          {/* Image container */}
          <div className="modal-image-container">
            <div className="modal-image-wrapper">
              <ImageWithFallback
                src={item.imageUrl}
                alt={item.title}
                className="modal-image"
              />
            </div>
            
            {/* Item details */}
            <div className="modal-details">
              <h2 className="modal-title">{item.title}</h2>
              <p className="modal-description">{item.description}</p>
              <span className="modal-category">
                {item.category}
              </span>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={onNext}
            className="modal-nav-button next"
            disabled={totalItems <= 1}
          >
            <ChevronRight className="modal-nav-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
