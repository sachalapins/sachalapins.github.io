import React from 'react';
import { ExternalLink } from 'lucide-react';

const PublicationCard = ({ title, authors, journal, year, doi, status = 'published' }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
    <h3 className="text-lg font-medium text-gray-900">{title}</h3>
    <p className="text-gray-600 mt-2">{authors}</p>
    <p className="text-gray-500 mt-1">
      {journal} ({year})
      {status !== 'published' && (
        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
          {status}
        </span>
      )}
    </p>
    {doi && (
      <a 
        href={`https://doi.org/${doi}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-2 text-sm"
      >
        DOI: {doi} <ExternalLink className="ml-1 h-4 w-4" />
      </a>
    )}
  </div>
);

const PublicationsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation would be here */}
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
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

        {/* 2024 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2024</h2>
          
          <PublicationCard
            title="DAS-N2N: machine learning Distributed Acoustic Sensing (DAS) signal denoising without clean data"
            authors="Lapins, S., Butcher, A., Kendall, J-M., Hudson, T.S., Stork, A.L., Werner, M.J., Gunning, J., Brisbourne, A.M."
            journal="Geophysical Journal International, 236(2)"
            year="2024"
            doi="10.1093/gji/ggad460"
          />

          <PublicationCard
            title="What caused the June 2024 seismic swarm near Lake Arenal, Costa Rica?"
            authors="Lapins, S., Araya Rodriguez, M.C."
            journal="Seismica"
            year="2024"
            status="under review"
          />

          <PublicationCard
            title="Using multi-station, multi-event spectral ratios to estimate geometrical spreading, Q attenuation and site corrections on local and regional seismic arrays"
            authors="Lapins, S."
            journal="Seismological Research Letters"
            year="2024"
            status="under review"
          />

          <PublicationCard
            title="Identifying fluids, faults and fractures: Insights from a deep-learning-derived seismic catalogue at Nabro volcano"
            authors="Lapins, S., Kendall, J-M., Cashman, K.V., Goitom, B., Werner, M.J., Hammond, J.O.S., Ogubazghi, G."
            journal="Journal of Volcanology and Geothermal Research"
            year="2024"
            status="under review"
          />
        </section>

        {/* 2023 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2023</h2>
          
          <PublicationCard
            title="Seismic tomography of Nabro caldera, Eritrea: insights into the magmatic and hydrothermal systems of a recently erupted volcano"
            authors="Gauntlett, M., Hudson, T.S., Kendall, J-M., Rawlinson, N., Blundy, J.D., Lapins, S., et al."
            journal="Journal of Geophysical Research: Solid Earth, 128(5)"
            year="2023"
            doi="10.1029/2022JB025742"
          />

          <PublicationCard
            title="Hydrothermal fluids and where to find them: Using seismic attenuation and anisotropy to map fluids beneath Uturuncu volcano, Bolivia"
            authors="Hudson, T.S., Kendall, J-M., Blundy, J.D., Pritchard, M.E., MacQueen, P., Wei, S.S., Gottsmann, J.H., Lapins, S."
            journal="Geophysical Research Letters, 50(5)"
            year="2023"
            doi="10.1029/2022GL100974"
          />
        </section>

        {/* 2021 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2021</h2>
          
          <PublicationCard
            title="A Little Data Goes a Long Way: Automating Seismic Phase Arrival Picking at Nabro Volcano with Transfer Learning"
            authors="Lapins, S., Goitom, B., Kendall, J-M., Werner, M.J., Cashman, K.V., Hammond, J.O.S."
            journal="Journal of Geophysical Research: Solid Earth, 126(7)"
            year="2021"
            doi="10.1029/2021JB021910"
          />
        </section>

        {/* 2020 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2020</h2>
          
          <PublicationCard
            title="Application of Machine Learning to Microseismic Event Detection in Distributed Acoustic Sensing (DAS) Data"
            authors="Stork, A., Baird, A., Horne, S., Naldrett, G., Lapins, S., Kendall, J-M., Wookey, J., Verdon, J., Clarke, A., Williams, A."
            journal="Geophysics, 85(5)"
            year="2020"
            doi="10.1190/geo2019-0774.1"
          />

          <PublicationCard
            title="Lower-Crustal Seismicity on the Eastern Border Faults of the Main Ethiopian Rift"
            authors="Lapins, S., Kendall, J-M., Ayele, A., Wilks, M., Nowacki, A., Cashman, K.V."
            journal="Journal of Geophysical Research: Solid Earth, 125(8)"
            year="2020"
            doi="10.1029/2020JB020030"
          />

          <PublicationCard
            title="An examination of the continuous wavelet transform for volcano-seismic spectral analysis"
            authors="Lapins, S., Roman, D.C., Rougier, J., De Angelis, S., Cashman, K.V., Kendall, J-M."
            journal="Journal of Volcanology and Geothermal Research, 389"
            year="2020"
            doi="10.1016/j.jvolgeores.2019.106728"
          />
        </section>
      </main>

      {/* Footer would be here */}
    </div>
  );
};

export default PublicationsPage;