import React from 'react';

interface StatsCardProps {
  value: string;
  label: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ value, label }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};