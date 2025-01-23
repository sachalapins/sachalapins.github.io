import React from 'react';
import { ExternalLink } from 'lucide-react';
import { publications } from '../../data/publications';

const PublicationCard = ({ title, authors, journal, volume, year, doi, github, status = 'published' }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
    <h3 className="text-lg font-medium text-gray-900">{title}</h3>
    <p className="text-gray-600 mt-2">{authors}</p>
    <p className="text-gray-500 mt-1">
      {journal} {volume && `${volume}`} ({year})
      {status !== 'published' && (
        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
          {status}
        </span>
      )}
    </p>
    <div className="flex items-center space-x-4 mt-3">
      {doi && (
        <a 
          href={`https://doi.org/${doi}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center h-8 text-blue-600 hover:text-blue-800 mt-2 text-sm"
        >
          DOI: {doi} <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      )}
      {github && (
          <a 
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200"
          >
            Code <ExternalLink className="ml-1 h-4 w-4" />
          </a>
      )}
    </div>
  </div>
);

const PublicationsPage = () => {
  // Group publications by year
  const publicationsByYear = publications.reduce((acc, pub) => {
    const year = pub.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(pub);
    return acc;
  }, {});

  // Get years in descending order
  const years = Object.keys(publicationsByYear).sort((a, b) => b - a);

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 space-y-4 sm:space-y-0">
        <h1 className="text-4xl font-bold text-gray-900">Publications</h1>
        <a 
          href="https://scholar.google.com/citations?user=QDmoPEQAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          Google Scholar Profile <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </div>

      {years.map(year => (
        <section key={year} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{year}</h2>
          {publicationsByYear[year].map((publication, index) => (
            <PublicationCard
              key={index}
              {...publication}
            />
          ))}
        </section>
      ))}
    </main>

  );
};

export default PublicationsPage;