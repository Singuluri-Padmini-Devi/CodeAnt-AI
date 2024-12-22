import React, { useState } from 'react';
import { Layout } from './Layout';
import { CodeAntLogo } from './CodeAntLogo';
import { Search, RefreshCw, Plus, Settings, HelpCircle, LogOut } from 'lucide-react';

export const RepositoryPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const repositories = [
    { name: 'design-system', language: 'React', size: '7320 KB', visibility: 'Public', updatedAt: '1 day ago' },
    { name: 'codeant-ci-app', language: 'Javascript', size: '5871 KB', visibility: 'Private', updatedAt: '2 days ago' },
    { name: 'analytics-dashboard', language: 'Python', size: '4521 KB', visibility: 'Private', updatedAt: '5 days ago' },
    { name: 'mobile-app', language: 'Swift', size: '3096 KB', visibility: 'Public', updatedAt: '3 days ago' },
    { name: 'e-commerce-platform', language: 'Java', size: '6210 KB', visibility: 'Private', updatedAt: '6 days ago' },
  ];

  return (
    <Layout>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className={`fixed lg:static inset-0 z-40 w-64 bg-white border-r transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out`}>
          <div className="p-4 border-b">
            <CodeAntLogo />
          </div>
          
          <nav className="p-4 space-y-2">
            <button className="w-full flex items-center gap-2 px-3 py-2 text-blue-600 bg-blue-50 rounded-md">
              <div className="w-5 h-5 flex-shrink-0" />
              Repositories
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <div className="w-5 h-5 flex-shrink-0" />
              AI Code Review
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <div className="w-5 h-5 flex-shrink-0" />
              Cloud Security
            </button>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
            <div className="space-y-2">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <Settings className="w-5 h-5" />
                Settings
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <HelpCircle className="w-5 h-5" />
                Support
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          <header className="bg-white border-b p-4">
            <div className="flex items-center justify-between">
              <button
                className="lg:hidden"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="flex-1 px-4">
                <div className="max-w-lg">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search Repositories"
                      className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-auto p-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-semibold">Repositories</h1>
                  <p className="text-sm text-gray-600">33 total repositories</p>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    <RefreshCw className="w-5 h-5" />
                    Refresh All
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    <Plus className="w-5 h-5" />
                    Add Repository
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow">
                {repositories.map((repo, index) => (
                  <div
                    key={repo.name}
                    className={`flex items-center justify-between p-4 ${
                      index !== repositories.length - 1 ? 'border-b' : ''
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-medium">{repo.name}</h3>
                        <span className={`px-2 py-1 text-xs rounded ${
                          repo.visibility === 'Public' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {repo.visibility}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                        <span>{repo.language}</span>
                        <span>{repo.size}</span>
                        <span>Updated {repo.updatedAt}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
};