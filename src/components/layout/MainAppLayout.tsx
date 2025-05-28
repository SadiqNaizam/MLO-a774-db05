import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode; // MANDATORY: Always accept children
  className?: string;
  title?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({
  children,
  className,
  title = "Login Form UI", // Default title from Project Info
}) => {
  useEffect(() => {
    // Ensure this only runs on the client-side for environments like Next.js
    // For standard Vite/CRA React apps, this check is good practice but not strictly necessary.
    if (typeof window !== 'undefined') {
      document.title = title;
    }
  }, [title]);

  return (
    <main
      className={cn(
        'flex items-center justify-center h-screen bg-background',
        // This class definition directly implements the 'overall.definition' from Layout Requirements:
        // "flex items-center justify-center h-screen bg-background"
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
