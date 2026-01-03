
import React from 'react';
import { SectionType } from '../types';

interface SidebarProps {
  activeSection: SectionType;
  onSectionChange: (section: SectionType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const items = [
    { id: SectionType.OVERVIEW, label: 'Overview', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
    { id: SectionType.INSTRUCTIONS, label: 'Implementation', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
    { id: SectionType.ARTICLES, label: 'Resources', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
    { id: SectionType.MOCK, label: 'Demo Tool', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { id: SectionType.PORTFOLIO, label: 'Portfolio', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { id: SectionType.DELIVERABLES, label: 'Deliverables', icon: 'M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4' },
    { id: SectionType.RUBRIC, label: 'Rubric', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  ];

  return (
    <aside className="w-64 gradient-bg text-white flex flex-col hidden md:flex">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold">R</div>
          <span className="text-xl font-bold tracking-tight">RankFlow</span>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id as SectionType)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              activeSection === item.id 
                ? 'bg-indigo-600/50 text-white shadow-lg' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
            </svg>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="p-6 border-t border-white/10 text-xs text-slate-400">
        v1.0.0 Stable Build
      </div>
    </aside>
  );
};

export default Sidebar;
