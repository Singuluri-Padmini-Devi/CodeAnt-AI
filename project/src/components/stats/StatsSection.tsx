import React from 'react';
import { CodeAntLogo } from '../CodeAntLogo';
import { StatsCard } from './StatsCard';
import { IssuesCard } from './IssuesCard';

export const StatsSection: React.FC = () => {
  return (
    <div className="hidden lg:flex w-1/2 bg-gray-50 p-8 relative">
      <div className="max-w-md mx-auto w-full">
        <div className="mb-12">
          <div className="inline-flex items-center bg-white rounded-lg shadow-lg p-4">
            <CodeAntLogo />
            <span className="ml-2">AI to Detect & Autofix Bad Code</span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-8">
          <StatsCard value="30+" label="Language Support" />
          <StatsCard value="10K+" label="Developers" />
          <StatsCard value="100K+" label="Hours Saved" />
        </div>

        <IssuesCard />
      </div>
    </div>
  );
};