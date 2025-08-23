import { Grid3X3, List } from 'lucide-react';
import Tabs from '@/components/Tabs';
import { ViewMode, Category, ViewModeTab, CategoryTab } from '@/types';

interface HeaderProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export default function Header({ 
  activeCategory, 
  onCategoryChange, 
  viewMode, 
  onViewModeChange 
}: HeaderProps) {
  const categoryTabs: CategoryTab[] = [
    { id: 'all', label: 'All' },
    { id: 'knitting', label: 'Knitting' },
    { id: 'crochet', label: 'Crochet' }
  ];

  const viewTabs: ViewModeTab[] = [
    { id: 'grid', icon: <Grid3X3 className="w-5 h-5" /> },
    { id: 'list', icon: <List className="w-5 h-5" /> }
  ];

  return (
    <div className="space-y-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4">
        {/* Category tabs - centered on desktop */}
        <div className="md:flex-1 md:flex md:justify-center">
          <Tabs
            tabs={categoryTabs}
            activeTab={activeCategory}
            onTabChange={onCategoryChange}
            variant="text"
            centered={false} // Will be centered by parent on desktop
          />
        </div>
        
        {/* View mode toggle - only visible on mobile */}
        <div className="md:hidden">
          <Tabs
            tabs={viewTabs}
            activeTab={viewMode}
            onTabChange={onViewModeChange}
            variant="icon"
          />
        </div>
      </div>
    </div>
  );
}
