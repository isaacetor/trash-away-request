
import React from 'react';
import Navbar from './Navbar';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout = ({ children, className = "" }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className={`flex-1 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
