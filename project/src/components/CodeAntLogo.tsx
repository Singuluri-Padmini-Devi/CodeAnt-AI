import React from 'react';
import { Bug } from 'lucide-react';

export const CodeAntLogo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <Bug className="w-6 h-6" />
      <span className="font-semibold text-xl">CodeAnt AI</span>
    </div>
  );
};