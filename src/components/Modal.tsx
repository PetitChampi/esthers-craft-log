import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { CraftItem } from '@/components/PictureGrid';

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
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrevious, onNext]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="relative w-full h-full max-w-4xl max-h-full p-4 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-white">
            <span className="text-sm opacity-75">
              {currentIndex + 1} of {totalItems}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-neutral-300 transition-colors p-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main content */}
        <div className="flex-1 flex items-center justify-center">
          {/* Previous button */}
          <button
            onClick={onPrevious}
            className="text-white hover:text-neutral-300 transition-colors p-4 mr-4"
            disabled={totalItems <= 1}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image container */}
          <div className="flex-1 flex flex-col items-center max-w-2xl">
            <div className="w-full aspect-square max-h-[70vh] mb-4">
              <ImageWithFallback
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            
            {/* Item details */}
            <div className="text-center text-white max-w-md">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-neutral-300 mb-3">{item.description}</p>
              <span className="inline-block px-3 py-1 bg-primary-800 text-white rounded-full text-sm font-medium capitalize">
                {item.category}
              </span>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={onNext}
            className="text-white hover:text-neutral-300 transition-colors p-4 ml-4"
            disabled={totalItems <= 1}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
