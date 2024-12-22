import React from 'react';

export const IssuesCard: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="text-lg font-semibold">Issues Fixed</div>
        <div className="text-sm text-blue-600">↑ 14% This week</div>
      </div>
      <div className="text-3xl font-bold">500K+</div>
    </div>
  );
};