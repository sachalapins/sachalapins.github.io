import React from 'react';
import { ExternalLink } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-semibold">Dr. Sacha Lapins</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="border-b-2 border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Home
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Research
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Publications
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Dr. Sacha Lapins
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  Leverhulme Early Career Fellow, University of Bristol
                </p>
                <p className="text-gray-600 mb-6">
                  My research focuses on developing novel machine learning and signal processing methods for volcano seismology, with particular emphasis on enhancing earthquake detection capabilities and understanding volcanic processes through the analysis of seismic data.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://scholar.google.com/citations?user=QDmoPEQAAAAJ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    Google Scholar <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Current Research Highlights</h2>
                <ul className="space-y-4">
                  <li>
                    <h3 className="font-medium text-gray-900">DAS-N2N</h3>
                    <p className="text-gray-600">Machine learning Distributed Acoustic Sensing (DAS) signal denoising without clean data</p>
                  </li>
                  <li>
                    <h3 className="font-medium text-gray-900">Transfer Learning for Volcano Seismology</h3>
                    <p className="text-gray-600">Automating seismic phase arrival picking at volcanoes using limited training data</p>
                  </li>
                  <li>
                    <h3 className="font-medium text-gray-900">Costa Rica Volcanic Arc</h3>
                    <p className="text-gray-600">Developing next-generation monitoring techniques using hybrid seismic arrays</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Recent News Section */}
        <div className="bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent News</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <span className="text-sm text-gray-500">January 2024</span>
                <h3 className="font-medium text-gray-900 mt-1">New Paper: DAS-N2N</h3>
                <p className="text-gray-600">Published in Geophysical Journal International: Machine learning approach for DAS signal denoising without clean training data.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <span className="text-sm text-gray-500">January 2024</span>
                <h3 className="font-medium text-gray-900 mt-1">EPSRC Grant Success</h3>
                <p className="text-gray-600">Awarded EPSRC grant for DarkSeis project on seismic imaging of urban subsurface using dark fibre.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-500">
            <p>Dr. Sacha Lapins</p>
            <p>School of Earth Sciences, University of Bristol</p>
            <p>Email: sacha.lapins@bristol.ac.uk</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;