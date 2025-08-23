import React from 'react';
import { cn } from './ui/utils';

interface TabItem {
  id: string;
  label?: string;
  icon?: React.ReactNode;
  content?: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  variant?: 'text' | 'icon';
  className?: string;
  centered?: boolean;
}

export default function Tabs({ 
  tabs, 
  activeTab, 
  onTabChange, 
  variant = 'text',
  className,
  centered = false
}: TabsProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className={cn(
        "flex gap-1 p-1 bg-neutral-200 rounded-lg w-fit",
        centered && "mx-auto"
      )}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "px-4 py-2 rounded-md transition-all duration-200 font-medium",
              "hover:bg-white/50",
              activeTab === tab.id
                ? "bg-primary-800 text-white shadow-sm"
                : "text-neutral-700 hover:text-neutral-900"
            )}
          >
            {variant === 'icon' ? (
              <div className="flex items-center justify-center">
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