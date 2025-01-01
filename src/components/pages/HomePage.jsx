import React from 'react';
import { ExternalLink } from 'lucide-react';
import { newsItems } from '../../data/news';

const NewsCard = ({ date, title, content }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <span className="text-sm text-gray-500">{date}</span>
    <h3 className="font-medium text-gray-900 mt-1">{title}</h3>
    <p className="text-gray-600">{content}</p>
  </div>
);

const HomePage = () => {
  return (
    <div>
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
                Developing novel machine learning and signal processing methods for volcano seismology, 
                with particular emphasis on enhancing earthquake detection capabilities and understanding 
                volcanic processes through the analysis of seismic data.
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
                  <h3 className="font-medium text-gray-900">Scale-Invariant Deep Learning Models</h3>
                  <p className="text-gray-600">Developing scale-invariant deep learning models to detect and classify diverse volcano-seismic signals</p>
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
            {newsItems.map((item, index) => (
              <NewsCard 
                key={index}
                date={item.date}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;