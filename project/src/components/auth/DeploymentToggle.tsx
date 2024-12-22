import React from 'react';

export const DeploymentToggle: React.FC = () => {
  return (
    <div className="flex gap-2 justify-center mb-8">
      <button className="px-6 py-2 rounded-md bg-blue-600 text-white font-medium">
        SAAS
      </button>
      <button className="px-6 py-2 rounded-md bg-gray-100 text-gray-900 font-medium">
        Self Hosted
      </button>
    </div>
  );
};