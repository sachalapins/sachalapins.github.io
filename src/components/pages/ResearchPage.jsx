import React from 'react';
import { ExternalLink } from 'lucide-react';

const ResearchPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Reuse same navigation component */}
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Research</h1>
        
        <div className="space-y-16">
          {/* Research Theme 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Deep Learning for Volcano Seismology</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <p className="text-gray-600 mb-6">
                Developing novel deep learning approaches for detecting and characterizing volcanic earthquakes. 
                Key innovations include transfer learning techniques for limited training data scenarios and scale-invariant 
                models for diverse volcanic signals.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Publications:</h3>
              <ul className="space-y-4">
                <li className="border-l-4 border-blue-500 pl-4">
                  <p className="text-gray-900 font-medium">A Little Data Goes a Long Way: Automating Seismic Phase Arrival Picking at Nabro Volcano with Transfer Learning</p>
                  <p className="text-gray-600 text-sm">Journal of Geophysical Research: Solid Earth (2021)</p>
                  <a href="https://doi.org/10.1029/2021JB021910" className="text-blue-600 hover:text-blue-800 inline-flex items-center text-sm mt-1">
                    View Publication <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Research Theme 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Distributed Acoustic Sensing (DAS)</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <p className="text-gray-600 mb-6">
                Pioneering new approaches for processing and denoising DAS data, with applications in volcano 
                monitoring, carbon capture and storage, and urban subsurface imaging.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Publications:</h3>
              <ul className="space-y-4">
                <li className="border-l-4 border-blue-500 pl-4">
                  <p className="text-gray-900 font-medium">DAS-N2N: Machine learning Distributed Acoustic Sensing (DAS) signal denoising without clean data</p>
                  <p className="text-gray-600 text-sm">Geophysical Journal International (2024)</p>
                  <a href="https://doi.org/10.1093/gji/ggad460" className="text-blue-600 hover:text-blue-800 inline-flex items-center text-sm mt-1">
                    View Publication <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Research Theme 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hybrid Seismic Arrays</h2>
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
              </ul>
            </div>
          </section>
        </div>

        {/* Research Impact Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Research Impact</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Volcanic Hazard Mitigation</h3>
                <p className="text-gray-600">Improving early warning systems through enhanced seismic monitoring capabilities</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Clean Energy</h3>
                <p className="text-gray-600">Supporting geothermal energy development through better subsurface imaging</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Critical Resources</h3>
                <p className="text-gray-600">Identifying sustainable sources of critical metals in geothermal systems</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Reuse same footer component */}
    </div>
  );
};

export default ResearchPage;