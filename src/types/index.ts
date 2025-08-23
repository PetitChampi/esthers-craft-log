// View mode types
export type ViewMode = "grid" | "list";

// Category types
export type Category = "all" | "knitting" | "crochet";

// Tab types
export interface TabItem<T extends string = string> {
  id: T;
  label?: string;
  icon?: React.ReactNode;
  content?: React.ReactNode;
}

export type ViewModeTab = TabItem<ViewMode>;
export type CategoryTab = TabItem<Category>;
