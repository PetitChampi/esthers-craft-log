export type ViewMode = "grid" | "list";

export type Category = "all" | "knitting" | "crochet";

export interface TabItem<T extends string = string> {
  id: T;
  label?: string;
  icon?: React.ReactNode;
  content?: React.ReactNode;
}

export type ViewModeTab = TabItem<ViewMode>;
export type CategoryTab = TabItem<Category>;

export interface CraftItem {
  id: string;
  title: string;
  category: Category;
  description: string;
  images: string[];
}

export interface PictureGridProps {
  items: CraftItem[];
  viewMode: ViewMode;
  onItemClick: (item: CraftItem) => void;
}
