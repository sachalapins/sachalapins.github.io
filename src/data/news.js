export const newsItems = [
  {
    date: "December 2024",
    title: "New Paper: Deep Learning for Downhole Microseismic Detection",
    content: "New paper published in Geophysical Journal International, lead by PhD student Cindy Lim, on how well existing deep learning models detect hydraulic-fracturing induced microseismicity using borehole data."
  },
  {
    date: "January 2024",
    title: "EPSRC Grant Success",
    content: "Research co-investigator on newly funded EPSRC project 'DarkSeis' (£764,434) investigating seismic imaging of the urban subsurface using dark fibre."
  },
  {
    date: "January 2024",
    title: "New Paper: DAS-N2N",
    content: "Paper on weakly-supervised machine learning approach for DAS signal denoising published in Geophysical Journal International."
  },
  {
    date: "August 2023",
    title: "Royal Society International Exchange Grant",
    content: "Awarded £12,000 to initiate research collaboration with UCR-RSN to investigate volcanic and geothermal processes at Rincón de la Vieja volcano."
  },
  {
    date: "August 2023",
    title: "Founded SeisAI Ltd",
    content: "Launched SeisAI Ltd, a consultancy specialising in AI-driven solutions for seismic and DAS applications."
  },
  {
    date: "May 2023",
    title: "Papers Published in Major Journals",
    content: "Two papers published: Seismic tomography of Nabro caldera (JGR:Solid Earth) and mapping hydrothermal fluids at Uturuncu volcano (GRL)."
  },
  {
    date: "March 2023",
    title: "Top Downloaded Article Recognition",
    content: "Paper 'A Little Data Goes a Long Way: Automating Seismic Phase Arrival Picking at Nabro Volcano With Transfer Learning' recognised as a top downloaded article in Journal of Geophysical Research: Solid Earth."
  },
  {
    date: "January 2023",
    title: "Invited Talk: GNS Science",
    content: "Gave talk at GNS Science, Lower Hutt, New Zealand, sharing insights on deep learning advancements for volcano-seismic monitoring."
  },
  {
    date: "October 2022",
    title: "Leverhulme Early Career Fellowship",
    content: "Started 3-year Leverhulme Early Career Fellowship (£118,000) at University of Bristol focusing on deep learning for real-time volcano-seismic monitoring."
  },
  {
    date: "December 2021",
    title: "Dr. Sacha Lapins",
    content: "Awarded PhD with a thesis on detecting and characterising seismicity related to volcanic and magmatic processes using deep learning and wavelet transforms."
  },
  {
    date: "July 2021",
    title: "New Postdoctoral Research Role",
    content: "Started new role as a postdoctoral research associate at University of Bristol, working on deep learning for CCS monitoring with DAS as part of the ACT DigiMon project."
  },
  {
    date: "July 2021",
    title: "Transfer Learning Paper Published",
    content: "Paper on automating volcano-seismic phase arrival picking using transfer learning published in JGR: Solid Earth."
  }
];

// Optional function to get latest N news items
export const getLatestNews = (n = 3) => {
  return newsItems.slice(0, n);
};