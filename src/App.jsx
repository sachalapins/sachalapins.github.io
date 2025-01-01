import React, { useState } from 'react';
import HomePage from './components/pages/HomePage';
import ResearchPage from './components/pages/ResearchPage';
import PublicationsPage from './components/pages/PublicationsPage';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'research':
        return <ResearchPage />;
      case 'publications':
        return <PublicationsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;