import React from 'react';
import { ExternalLink } from 'lucide-react';
import { newsItems } from '../../data/news';
import profilePhoto from '../../data/headshot.jpg'; // Importing the headshot

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
            {/* Left Column */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Dr. Sacha Lapins
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Leverhulme Early Career Fellow, University of Bristol
              </p>
              <p className="text-gray-600 mb-6">
                Developing novel machine learning and signal processing methods for volcano seismology, 
                with particular focus on enhancing earthquake detection capabilities and understanding 
                volcanic processes through the analysis of seismic data.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a 
                  href="https://scholar.google.com/citations?user=QDmoPEQAAAAJ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Google Scholar <ExternalLink className="ml-1 h-4 w-4" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sacha-lapins-a8b0a723b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  LinkedIn <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            {/* Right Column */}
            <div className="flex justify-center">
              <img
                src={profilePhoto}
                alt="Dr. Sacha Lapins"
                className="w-48 h-48 rounded-full shadow-lg"
              />
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
