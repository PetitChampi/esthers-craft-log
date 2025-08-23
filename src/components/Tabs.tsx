import { cn } from "@/components/ui/utils";
import { TabItem } from "@/types";
import "@/styles/Tabs.css";

interface TabsProps<T extends string = string> {
  tabs: TabItem<T>[];
  activeTab: T;
  onTabChange: (tabId: T) => void;
  variant?: "text" | "icon";
  className?: string;
  centered?: boolean;
}

export default function Tabs<T extends string = string>({ 
  tabs, 
  activeTab, 
  onTabChange, 
  variant = "text",
  className,
  centered = false
}: TabsProps<T>) {
  return (
    <div className={cn("tabs-container", className)}>
      <div className={cn(
        "tabs-wrapper",
        centered && "centered"
      )}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "tab-button",
              activeTab === tab.id ? "active" : "inactive"
            )}
          >
            {variant === "icon" ? (
              <div className="tab-icon">
                {tab.icon}
              </div>
            ) : (
              tab.label
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
