
import React, { useState } from 'react';
import { generateSEOSuggestions } from '../../services/gemini';

const MockWebsite: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleAudit = async () => {
    if (!url) return;
    setLoading(true);
    try {
      const data = await generateSEOSuggestions(url);
      setResults(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Live SEO Auditor Demo</h2>
        <p className="text-slate-500">Enter a website URL to see the AI agent generate a capstone-level audit.</p>
        
        <div className="mt-6 flex gap-2">
          <input 
            type="text" 
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          />
          <button 
            onClick={handleAudit}
            disabled={loading}
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Analyzing...' : 'Run Audit'}
          </button>
        </div>
      </div>

      {loading && (
        <div className="space-y-6">
          <div className="h-48 bg-slate-100 animate-pulse rounded-xl" />
          <div className="grid grid-cols-2 gap-4">
            <div className="h-32 bg-slate-100 animate-pulse rounded-xl" />
            <div className="h-32 bg-slate-100 animate-pulse rounded-xl" />
          </div>
        </div>
      )}

      {results && !loading && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 text-center">
              <div className="text-4xl font-black text-indigo-600 mb-1">{results.score}/100</div>
              <div className="text-sm font-bold text-indigo-800 uppercase tracking-widest">SEO Health Score</div>
            </div>
            <div className="col-span-2 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-800 mb-2">Target Keywords Identified</h4>
              <div className="flex flex-wrap gap-2">
                {results.keywords.map((kw: string) => (
                  <span key={kw} className="bg-white px-3 py-1 rounded-lg border border-slate-200 text-sm text-slate-600">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                Technical Critical Issues
              </h4>
              <ul className="space-y-3">
                {results.issues.map((issue: string, i: number) => (
                  <li key={i} className="text-sm text-red-700 flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 bg-red-400 rounded-full shrink-0" />
                    {issue}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Strategic Recommendations
              </h4>
              <ul className="space-y-3">
                {results.recommendations.map((rec: string, i: number) => (
                  <li key={i} className="text-sm text-green-700 flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 bg-green-400 rounded-full shrink-0" />
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
            <h4 className="text-xl font-bold mb-4 text-indigo-400">Executive Strategy Preview</h4>
            <p className="text-slate-300 leading-relaxed italic">
              "{results.clientStrategy}"
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MockWebsite;
