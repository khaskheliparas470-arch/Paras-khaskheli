
import React from 'react';

const ProjectOverview: React.FC = () => {
  const keywords = ["Semantic SEO", "Core Web Vitals", "AI Content Strategy", "Topic Clusters", "Backlink Authority"];
  
  return (
    <div className="p-8">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Project Description</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            The <strong>RankFlow SEO Suite</strong> is an integrated capstone project designed to bridge the gap between technical data analysis and content execution. 
            It leverages Gemini AI to audit websites in real-time, providing actionable insights that prioritize user experience and search intent over legacy keyword stuffing.
          </p>
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-700">Primary Goal</h3>
            <p className="text-slate-600">
              To build a production-ready SEO framework that improves organic visibility by at least 40% over 6 months through technical stabilization and semantic topic modeling.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-4">Core Focus Keywords</h3>
          <div className="flex flex-wrap gap-2">
            {keywords.map(kw => (
              <span key={kw} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium border border-indigo-200">
                #{kw}
              </span>
            ))}
          </div>
          <div className="mt-8 space-y-4">
            <h3 className="font-bold text-slate-800">Key Technology Stack</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Google Search Console API Integration
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Gemini 3.0 Real-time Auditing
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> React 18 & Tailwind Architecture
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
