
import React, { useState } from 'react';
import { SectionType } from './types';
import Sidebar from './components/Sidebar';
import ProjectOverview from './components/sections/ProjectOverview';
import StepByStep from './components/sections/StepByStep';
import Articles from './components/sections/Articles';
import MockWebsite from './components/sections/MockWebsite';
import Portfolio from './components/sections/Portfolio';
import Deliverables from './components/sections/Deliverables';
import Rubric from './components/sections/Rubric';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType>(SectionType.OVERVIEW);

  const renderSection = () => {
    switch (activeSection) {
      case SectionType.OVERVIEW: return <ProjectOverview />;
      case SectionType.INSTRUCTIONS: return <StepByStep />;
      case SectionType.ARTICLES: return <Articles />;
      case SectionType.MOCK: return <MockWebsite />;
      case SectionType.PORTFOLIO: return <Portfolio />;
      case SectionType.DELIVERABLES: return <Deliverables />;
      case SectionType.RUBRIC: return <Rubric />;
      default: return <ProjectOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto p-4 md:p-10">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 capitalize">
              {activeSection.replace('-', ' ')}
            </h1>
            <p className="text-slate-500 mt-2">Capstone Project: AI-Driven SEO Growth Engine</p>
          </header>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 min-h-[70vh]">
            {renderSection()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
