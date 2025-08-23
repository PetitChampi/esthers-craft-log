import React from "react";
import "@/styles/Layout.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout-container">
      <header className="layout-header">
        <div className="layout-header-content">
          <h1 className="layout-title">
            Esther's craft log
          </h1>
        </div>
      </header>
      
      <main className="layout-main">
        <div className="layout-main-content">
          {children}
        </div>
      </main>
      
      <footer className="layout-footer">
        <div className="layout-footer-content">
          <p className="layout-footer-text">
            Crafts & web design by{" "}
            <span className="layout-footer-highlight">
              Esther Haddon
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}
