import React from 'react';
import { ExternalLink } from 'lucide-react';

const PublicationLink = ({ title, authors, journal, year, doi, github }) => (
  <li className="border-l-4 border-blue-500 pl-4">
    <p className="text-gray-900 font-medium">{title}</p>
    <p className="text-gray-600 text-sm">{authors}</p>
    <p className="text-gray-600 text-sm">{journal} ({year})</p>
    {doi && (
      <a 
        href={`https://doi.org/${doi}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 inline-flex items-center text-sm mt-1"
      >
        View Publication <ExternalLink className="ml-1 h-4 w-4" />
      </a>
    )}
    {github && (
      <a 
        href={github} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 inline-flex items-center text-sm mt-1"
      >
        View GitHub Repository <ExternalLink className="ml-1 h-4 w-4" />
      </a>
    )}
  </li>
);

const ResearchPage = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Research</h1>
      
      <div className="space-y-16">
        {/* Research Theme 1 */}
        <section id="deep-learning">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Deep Learning for Volcano Seismology</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-gray-600 mb-6">
              Developing novel deep learning approaches for detecting and characterising volcanic earthquakes. 
              Key innovations include transfer learning techniques for limited training data scenarios and scale-invariant 
              models for diverse volcanic signals.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Publications:</h3>
            <ul className="space-y-4">
              <PublicationLink 
                title="A Little Data Goes a Long Way: Automating Seismic Phase Arrival Picking at Nabro Volcano with Transfer Learning"
                authors="Lapins, S., Goitom, B., Kendall, J-M., Werner, M.J., Cashman, K.V., Hammond, J.O.S."
                journal="Journal of Geophysical Research: Solid Earth"
                year="2021"
                doi="10.1029/2021JB021910"
                github="https://github.com/sachalapins/U-GPD"
              />
            </ul>
          </div>
        </section>

        {/* Research Theme 2 */}
        <section id="das">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Distributed Acoustic Sensing (DAS)</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-gray-600 mb-6">
              Pioneering new deep learning approaches for processing and denoising DAS data, with applications in volcano 
              monitoring, carbon capture and storage, and urban subsurface imaging.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Publications:</h3>
            <ul className="space-y-4">
              <PublicationLink 
                title="DAS-N2N: Machine learning Distributed Acoustic Sensing (DAS) signal denoising without clean data"
                authors="Lapins, S., Butcher, A., Kendall, J-M., Hudson, T.S., Stork, A.L., Werner, M.J., Gunning, J., Brisbourne, A.M."
                journal="Geophysical Journal International"
                year="2024"
                doi="10.1093/gji/ggad460"
                github="https://github.com/sachalapins/DAS-N2N-torch"
              />
            </ul>
          </div>
        </section>

        {/* Research Theme 3 */}
        <section id="hybrid-arrays">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Hybrid DAS, Nodal and Broadband Volcanic Seismic Arrays</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-gray-600 mb-6">
              Developing and optimizing strategies for integrating DAS, nodal arrays, and traditional seismic networks
              to enhance volcano monitoring capabilities. Current focus on the Costa Rican volcanic arc as a natural laboratory.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Current Projects:</h3>
            <ul className="space-y-4">
              <li className="border-l-4 border-blue-500 pl-4">
                <p className="text-gray-900 font-medium">DarkSeis: Seismic Imaging of the Urban Subsurface Using Dark Fibre</p>
                <p className="text-gray-600 text-sm">EPSRC Project (2024-2026)</p>
              </li>
              <li className="border-l-4 border-blue-500 pl-4">
                <p className="text-gray-900 font-medium">Characterising volcanic and geothermal processes at Rincón de la Vieja</p>
                <p className="text-gray-600 text-sm">Royal Society International Exchange Project (2023-2025)</p>
              </li>
              <li className="border-l-4 border-blue-500 pl-4">
                <p className="text-gray-900 font-medium">Towards real-time volcano-seismic monitoring and tracking of magmatic processes</p>
                <p className="text-gray-600 text-sm">Leverhulme Trust Early Career Fellowship (2022-2025)</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ResearchPage;