
import React from 'react';

const Rubric: React.FC = () => {
  const criteria = [
    {
      category: "Technical Implementation",
      excellent: "Flawless Core Web Vitals and zero crawl errors.",
      good: "Minor errors present but fixed by Week 4.",
      weight: "35%"
    },
    {
      category: "Content Strategy",
      excellent: "High topical authority with 5+ content clusters.",
      good: "At least 3 clusters with valid interlinking.",
      weight: "25%"
    },
    {
      category: "AI Integration",
      excellent: "Novel use of Gemini for real-time meta optimization.",
      good: "Static AI prompts for initial draft generation.",
      weight: "20%"
    },
    {
      category: "Client Presentation",
      excellent: "Stunning visual deck with clear ROI metrics.",
      good: "Functional deck covering all key deliverables.",
      weight: "20%"
    }
  ];

  return (
    <div className="p-8">
      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50">
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200">Criterion</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200">Mastery (A)</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200">Outcome-Driven (B)</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200 text-right">Weight</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {criteria.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-6 font-bold text-slate-800">{item.category}</td>
                <td className="px-6 py-6 text-sm text-slate-600 leading-relaxed">{item.excellent}</td>
                <td className="px-6 py-6 text-sm text-slate-600 leading-relaxed">{item.good}</td>
                <td className="px-6 py-6 text-sm font-bold text-indigo-600 text-right">{item.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-100 flex gap-4">
        <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center shrink-0">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <div>
          <h4 className="font-bold text-amber-900">Beginner-Friendly Tip</h4>
          <p className="text-sm text-amber-800 leading-relaxed">
            Focus on the "Technical Implementation" first. A fast, error-free site provides the strongest foundation for all other SEO efforts to succeed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rubric;
