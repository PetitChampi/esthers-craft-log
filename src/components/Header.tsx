import React from 'react';
import { Grid3X3, List } from 'lucide-react';
import Tabs from './Tabs';

interface HeaderProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

export default function Header({ 
  activeCategory, 
  onCategoryChange, 
  viewMode, 
  onViewModeChange 
}: HeaderProps) {
  const categoryTabs = [
    { id: 'all', label: 'All' },
    { id: 'knitting', label: 'Knitting' },
    { id: 'crochet', label: 'Crochet' }
  ];

  const viewTabs = [
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