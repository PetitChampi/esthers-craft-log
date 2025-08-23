import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-100">
      <header className="py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-neutral-800 text-center font-semibold">
            Esther's craft log
          </h1>
        </div>
      </header>
      
      <main className="flex-1 px-4">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
      
      <footer className="py-6 px-4 mt-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-neutral-600">
            Crafts & web design by{' '}
            <span className="text-primary-800 font-medium">
              Esther Haddon
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}