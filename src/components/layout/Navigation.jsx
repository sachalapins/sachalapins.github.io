import React, { useState } from 'react';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'research', label: 'Research' },
    { id: 'publications', label: 'Publications' }
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title and Desktop Navigation */}
          <div className="flex items-center space-x-6">
            <div className="flex-shrink-0">
              <span className="text-xl font-semibold">Dr. Sacha Lapins</span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden sm:flex space-x-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`${
                    currentPage === item.id
                      ? 'border-b-2 border-blue-500 text-gray-900'
                      : 'text-gray-500 hover:text-gray-900 hover:border-gray-300'
                  } inline-flex items-center px-1 pt-1 text-sm font-medium`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="space-y-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`${
                    currentPage === item.id
                      ? 'text-blue-500'
                      : 'text-gray-500 hover:text-gray-900'
                  } block px-4 py-2 text-sm font-medium w-full text-left`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
