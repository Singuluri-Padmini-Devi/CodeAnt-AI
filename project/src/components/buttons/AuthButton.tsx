import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AuthButtonProps {
  icon: LucideIcon;
  label: string;
}

export const AuthButton: React.FC<AuthButtonProps> = ({ icon: Icon, label }) => {
  return (
    <button className="w-full flex items-center justify-center gap-2 p-3 border rounded-md hover:bg-gray-50">
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );
};