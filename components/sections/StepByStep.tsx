
import React from 'react';

const StepByStep: React.FC = () => {
  const steps = [
    {
      title: "Market Analysis & Benchmarking",
      desc: "Identify top 3 competitors and analyze their keyword gaps using the 'Topic Gap' methodology.",
      duration: "Week 1-2"
    },
    {
      title: "Technical Site Audit",
      desc: "Implement automated crawls to detect 404s, missing meta-tags, and LCP issues on Core Web Vitals.",
      duration: "Week 3"
    },
    {
      title: "Semantic Content Mapping",
      desc: "Group content into 'Pillar' and 'Cluster' pages to establish topical authority in specific niches.",
      duration: "Week 4-6"
    },
    {
      title: "AI Integration & Automation",
      desc: "Deploy Gemini-powered meta-description generators and header structure optimizers.",
      duration: "Week 7"
    }
  ];

  return (
    <div className="p-8">
      <div className="space-y-8">
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-6 relative">
            {idx !== steps.length - 1 && (
              <div className="absolute left-[23px] top-12 bottom-[-32px] w-0.5 bg-slate-100" />
            )}
            <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg z-10">
              {idx + 1}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
                <span className="text-xs font-semibold bg-slate-100 text-slate-500 px-2 py-0.5 rounded uppercase tracking-wider">
                  {step.duration}
                </span>
              </div>
              <p className="text-slate-600">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepByStep;
