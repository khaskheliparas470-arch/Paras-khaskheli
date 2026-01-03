
import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <div className="p-8">
      <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl p-10 text-white mb-10 text-center">
        <h2 className="text-3xl font-black mb-4">View Full Portfolio</h2>
        <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
          Explore the full range of SEO audits, technical documentations, and growth case studies by visiting the primary portfolio site.
        </p>
        <a 
          href="https://sites.google.com/view/paraspak/home" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:bg-slate-50 transition-colors shadow-lg"
        >
          Open Portfolio
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img 
          src="https://picsum.photos/seed/portfolio/800/600" 
          className="rounded-2xl shadow-xl border border-slate-200"
          alt="Portfolio Preview"
        />
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-800">What's Inside?</h3>
          <ul className="space-y-4">
            {[
              "Case Studies of 300% Organic Growth",
              "Technical SEO Audit Templates",
              "UI/UX Design for SaaS SEO Tools",
              "Content Marketing Frameworks"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-600">
                <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                  <svg className="w-3 h-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
