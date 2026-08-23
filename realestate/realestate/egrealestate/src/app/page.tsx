"use client";

import { useState } from "react";
import { RequirementForm } from "@/components/RequirementForm";
import { RequirementSummary } from "@/components/RequirementSummary";
import { LayoutCard } from "@/components/LayoutCard";
import { BlueprintRenderer } from "@/components/BlueprintRenderer";
import { generateSampleLayouts } from "@/lib/generateSampleLayouts";
import { Requirements, FloorPlan } from "@/lib/layoutTypes";

export default function Home() {
  const [requirements, setRequirements] = useState<Requirements | null>(null);
  const [layouts, setLayouts] = useState<FloorPlan[]>([]);
  const [activeLayout, setActiveLayout] = useState<FloorPlan | null>(null);

  const handleFormSubmit = (reqs: Requirements) => {
    setRequirements(reqs);
    const generatedLayouts = generateSampleLayouts(reqs);
    setLayouts(generatedLayouts);
    setActiveLayout(generatedLayouts[0]);
    
    // Scroll to results
    setTimeout(() => {
      window.scrollTo({ top: document.getElementById('results-section')?.offsetTop, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-black text-blue-700 tracking-tight">PlanBrief AI</h1>
            <p className="text-sm text-gray-500 font-medium hidden sm:block">Turn property requirements into visual floor-plan concepts.</p>
          </div>
          <div className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1.5 rounded-md font-bold border border-yellow-200">
            Phase 1 MVP
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-4">
            <RequirementForm onSubmit={handleFormSubmit} />
          </div>

          {/* Right Column: Results & Blueprint */}
          <div className="lg:col-span-8" id="results-section">
            {!requirements ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-white rounded-xl border border-dashed border-gray-300">
                <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-700 mb-2">No Requirements Yet</h3>
                <p className="text-gray-500 max-w-sm">Fill out the form on the left to generate initial floor plan concepts for your property.</p>
              </div>
            ) : (
              <div>
                <RequirementSummary reqs={requirements} />
                
                {activeLayout && (
                  <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4 text-slate-800">Blueprint Viewer</h2>
                    <BlueprintRenderer layout={activeLayout} />
                  </div>
                )}

                <h2 className="text-xl font-bold mb-4 text-slate-800">Generated Concept Layouts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {layouts.map(layout => (
                    <LayoutCard 
                      key={layout.id} 
                      layout={layout} 
                      onView={setActiveLayout} 
                      isActive={activeLayout?.id === layout.id} 
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
