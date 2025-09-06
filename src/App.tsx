import { useState, useMemo } from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import PictureGrid from '@/components/PictureGrid';
import Modal from '@/components/Modal';
import { ViewMode, Category, CraftItem } from '@/types';
import { craftItems } from '@/data/craftItems';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [selectedItem, setSelectedItem] = useState<CraftItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') {
      return craftItems;
    }
    return craftItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  const handleItemClick = (item: CraftItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedItem(null);
    }, 200); // Match CSS transition
  };

  const getCurrentItemIndex = () => {
    if (!selectedItem) return 0;
    return filteredItems.findIndex(item => item.id === selectedItem.id);
  };

  const handlePrevious = () => {
    const currentIndex = getCurrentItemIndex();
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1]);
    } else {
      setSelectedItem(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleNext = () => {
    const currentIndex = getCurrentItemIndex();
    if (currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1]);
    } else {
      setSelectedItem(filteredItems[0]);
    }
  };

  return (
    <Layout>
      <Header
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      
      <PictureGrid
        items={filteredItems}
        viewMode={viewMode}
        onItemClick={handleItemClick}
      />
      
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        item={selectedItem}
        onPrevious={handlePrevious}
        onNext={handleNext}
        currentIndex={getCurrentItemIndex()}
        totalItems={filteredItems.length}
      />
    </Layout>
  );
}
