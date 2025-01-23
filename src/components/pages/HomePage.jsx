import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { newsItems } from '../../data/news';
import profilePhoto from '../../data/headshot_orange.jpg';

const NewsCard = ({ date, title, content }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <span className="text-sm text-gray-500">{date}</span>
    <h3 className="font-medium text-gray-900 mt-1">{title}</h3>
    <p className="text-gray-600">{content}</p>
  </div>
);

const ResearchHighlight = ({ title, description, link, setCurrentPage }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <h3 className="font-medium text-gray-900">{title}</h3>
    <p className="text-gray-600 my-4">{description}</p>
    <button
      onClick={() => {
        setCurrentPage('research');
        setTimeout(() => {
          const element = document.querySelector(link);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100); // Delay to ensure the page has fully rendered
      }}
      className="inline-flex items-center text-blue-600 hover:text-blue-800"
    >
      Learn More <ArrowRight className="ml-1 h-4 w-4" />
    </button>
  </div>
);

const HomePage = ({ setCurrentPage }) => {
  const [visibleNewsCount, setVisibleNewsCount] = useState(3);
  const showMoreNews = () => {
    setVisibleNewsCount(prevCount => prevCount + 10);
  };
  const visibleNewsItems = newsItems.slice(0, visibleNewsCount);
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gray-50 pt-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Column */}
            <div className="text-center md:text-left md:col-span-2">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Sacha Lapins
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
            {/* Right Column (Headshot) */}
            <div className="flex justify-center">
              <img
                src={profilePhoto}
                alt="Dr. Sacha Lapins"
                className="w-48 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Current Research Highlights */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Research Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ResearchHighlight
              title="DAS-N2N"
              description="Machine learning Distributed Acoustic Sensing (DAS) signal denoising without clean data."
              link="#das"
              setCurrentPage={setCurrentPage}
            />
            <ResearchHighlight
              title="Scale-Invariant Deep Learning Models"
              description="Developing scale-invariant deep learning models to detect and classify diverse volcano-seismic signals."
              link="#deep-learning"
              setCurrentPage={setCurrentPage}
            />
            <ResearchHighlight
              title="Costa Rica Volcanic Arc"
              description="Developing next-generation monitoring techniques using hybrid seismic arrays."
              link="#hybrid-arrays"
              setCurrentPage={setCurrentPage}
            />
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => {
                setCurrentPage('research');
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100); // Ensure page transition is complete before scrolling
              }}
              className="text-blue-600 hover:text-blue-800 text-lg font-medium inline-flex items-center"
            >
              Explore All Research <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Recent News Section */}
      <div className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent News</h2>
          <div className="space-y-6">
            {visibleNewsItems.map((item, index) => (
              <NewsCard 
                key={index}
                date={item.date}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
          {visibleNewsCount < newsItems.length && (
            <div className="text-center mt-8">
              <button
                onClick={showMoreNews}
                className="text-blue-600 hover:text-blue-800 text-lg font-medium inline-flex items-center"
              >
                Show Next 10 Items <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
