
import React from 'react';
import Navbar from './Navbar';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  footer?: React.ReactNode;
}

const PageLayout = ({ 
  children, 
  className = "", 
  containerClassName = "container mx-auto p-4",
  footer
}: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className={`flex-1 ${className}`}>
        <div className={containerClassName}>
          {children}
        </div>
      </div>
      {footer && (
        <div className="mt-auto">
          {footer}
        </div>
      )}
    </div>
  );
};

export default PageLayout;
