import React from 'react';
import { CodeAntLogo } from './CodeAntLogo';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
};