
import React from 'react';
import Navbar from './Navbar';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

const PageLayout = ({ children, className = "", containerClassName = "container mx-auto p-4" }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className={`flex-1 ${className}`}>
        <div className={containerClassName}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
