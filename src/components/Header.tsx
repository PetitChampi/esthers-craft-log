import { Grid3X3, List } from "lucide-react";
import Tabs from "@/components/Tabs";
import { ViewMode, Category, ViewModeTab, CategoryTab } from "@/types";
import "@/styles/Header.css";

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
    { id: "all", label: "All" },
    { id: "knitting", label: "Knitting" },
    { id: "crochet", label: "Crochet" }
  ];

  const viewTabs: ViewModeTab[] = [
    { id: "grid", icon: <Grid3X3 className="icon-size" /> },
    { id: "list", icon: <List className="icon-size" /> }
  ];

  return (
    <div className="header-container">
      <div className="header-content">
        {/* Category tabs - centered on desktop */}
        <div className="category-section">
          <Tabs
            tabs={categoryTabs}
            activeTab={activeCategory}
            onTabChange={onCategoryChange}
            variant="text"
            centered={false} // Will be centered by parent on desktop
          />
        </div>
        
        {/* View mode toggle - only visible on mobile */}
        <div className="view-section">
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
