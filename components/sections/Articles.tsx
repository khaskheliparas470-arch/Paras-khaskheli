
import React from 'react';

const Articles: React.FC = () => {
  const articles = [
    {
      title: "The Death of Keyword Stuffing: AI-Powered Intent",
      excerpt: "Why search engines now prioritize topical depth over exact-match phrases in the age of LLMs.",
      readTime: "8 min read",
      category: "Strategy"
    },
    {
      title: "Technical SEO Checklist for 2025",
      excerpt: "A deep dive into server-side rendering benefits and JSON-LD structured data for rich snippets.",
      readTime: "12 min read",
      category: "Technical"
    },
    {
      title: "Link Building in the E-E-A-T Era",
      excerpt: "Building brand authority through digital PR and high-quality citations instead of backlink farms.",
      readTime: "6 min read",
      category: "Growth"
    }
  ];

  return (
    <div className="p-8">
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="h-48 bg-slate-100 rounded-t-xl mb-4 overflow-hidden relative">
              <img 
                src={`https://picsum.photos/seed/${idx + 10}/400/300`} 
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase text-indigo-600">
                  {article.category}
                </span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors mb-2">
              {article.title}
            </h3>
            <p className="text-sm text-slate-500 line-clamp-2 mb-4">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {article.readTime}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
