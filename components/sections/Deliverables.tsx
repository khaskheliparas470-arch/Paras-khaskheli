
import React from 'react';

const Deliverables: React.FC = () => {
  const items = [
    {
      type: "Written Document",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      content: "30-page Comprehensive Strategy Guide including competitor analysis and technical specs."
    },
    {
      type: "Presentation",
      icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
      content: "Client-facing pitch deck (12-15 slides) highlighting ROI and implementation roadmap."
    },
    {
      type: "Infographics",
      icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
      content: "Visual data flow showing how AI enhances search ranking signals."
    },
    {
      type: "Flow Chart",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
      content: "Step-by-step logic flow for automated content distribution."
    }
  ];

  return (
    <div className="p-8">
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="p-6 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors group">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{item.type}</h3>
            <p className="text-slate-500 leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-slate-900 rounded-3xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full -mr-20 -mt-20" />
        <h3 className="text-white text-xl font-bold mb-8 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-sm">FC</span>
          Implementation Flowchart
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
          <div className="px-4 py-2 border border-white/20 rounded-lg text-sm bg-white/5">Audit Start</div>
          <svg className="w-6 h-6 text-indigo-400 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          <div className="px-4 py-2 border border-white/20 rounded-lg text-sm bg-white/5">Issue Detection</div>
          <svg className="w-6 h-6 text-indigo-400 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          <div className="px-4 py-2 border border-white/20 rounded-lg text-sm bg-white/5">AI Optimization</div>
          <svg className="w-6 h-6 text-indigo-400 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          <div className="px-4 py-2 border border-indigo-500/50 bg-indigo-500/20 rounded-lg text-sm font-bold">Ranking Up</div>
        </div>
      </div>
    </div>
  );
};

export default Deliverables;
