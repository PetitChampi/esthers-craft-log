import { TabItem } from "@/types";
import "@/styles/Tabs.css";

interface TabsProps<T extends string = string> {
  tabs: TabItem<T>[];
  activeTab: T;
  onTabChange: (tabId: T) => void;
  variant?: "text" | "icon";
  className?: string;
}

export default function Tabs<T extends string = string>({ 
  tabs, 
  activeTab, 
  onTabChange, 
  variant = "text"
}: TabsProps<T>) {
  return (
    <div className="tabs-container">
      <div className="tabs-wrapper">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`tab-button ${activeTab === tab.id ? "active" : "inactive"}` }
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
