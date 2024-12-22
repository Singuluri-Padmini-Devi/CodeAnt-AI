import React from 'react';
import { Layout } from './Layout';
import { AuthSection } from './auth/AuthSection';
import { StatsSection } from './stats/StatsSection';

export const LoginPage: React.FC = () => {
  return (
    <Layout>
      <div className="flex min-h-screen">
        <StatsSection />
        <AuthSection />
      </div>
    </Layout>
  );
};