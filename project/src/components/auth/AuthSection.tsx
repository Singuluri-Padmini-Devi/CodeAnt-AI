import React from 'react';
import { Github, Key } from 'lucide-react';
import { AuthButton } from '../buttons/AuthButton';
import { CodeAntLogo } from '../CodeAntLogo';
import { DeploymentToggle } from './DeploymentToggle';

export const AuthSection: React.FC = () => {
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CodeAntLogo />
          </div>
          <h1 className="text-2xl font-bold mb-2">Welcome to CodeAnt AI</h1>
          <DeploymentToggle />
        </div>

        <div className="space-y-4">
          <AuthButton icon={Github} label="Sign in with Github" />
          <AuthButton icon={Github} label="Sign in with GitLab" />
          <AuthButton icon={Key} label="Sign in with SSO" />
        </div>

        <p className="text-center text-sm text-gray-600 mt-8">
          By signing up you agree to the{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};