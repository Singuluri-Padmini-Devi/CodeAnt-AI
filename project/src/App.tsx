import React from 'react';
import { LoginPage } from './components/LoginPage';
import { RepositoryPage } from './components/RepositoryPage';

function App() {
  // For demo purposes, you can toggle between pages
  const showLogin = true;

  return showLogin ? <LoginPage /> : <RepositoryPage />;
}

export default App;