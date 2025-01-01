export const newsItems = [
  {
    date: "January 2024",
    title: "EPSRC Grant Success",
    content: "Research Co-investigator on newly funded EPSRC project 'DarkSeis' (£764,434) investigating seismic imaging of the urban subsurface using dark fibre."
  },
  {
    date: "January 2024",
    title: "New Paper: DAS-N2N Published",
    content: "Paper on weakly-supervised machine learning approach for DAS signal denoising published in Geophysical Journal International."
  },
  {
    date: "August 2023",
    title: "Royal Society International Exchange Grant",
    content: "Awarded £12,000 for research collaboration with UCR-RSN on characterising volcanic and geothermal processes at Rincón de la Vieja using novel instrumentation."
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
    date: "October 2022",
    title: "Leverhulme Early Career Fellowship",
    content: "Started 3-year Leverhulme Early Career Fellowship (£118,000) at University of Bristol focusing on real-time volcano-seismic monitoring."
  },
  {
    date: "July 2021",
    title: "Transfer Learning Paper Published",
    content: "Paper on automating volcanic seismic phase arrival picking using transfer learning published in JGR: Solid Earth."
  }
];

// Optional function to get latest N news items
export const getLatestNews = (n = 3) => {
  return newsItems.slice(0, n);
};