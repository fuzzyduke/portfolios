import { FloorPlan } from "../lib/layoutTypes";
import { ScoreBadge } from "./ScoreBadge";
import { Check, X, FileJson, Copy } from "lucide-react";
import { copyToClipboard, downloadJson } from "../lib/exportUtils";

interface LayoutCardProps {
  layout: FloorPlan;
  onView: (layout: FloorPlan) => void;
  isActive: boolean;
}

export function LayoutCard({ layout, onView, isActive }: LayoutCardProps) {
  return (
    <div className={`p-5 rounded-xl border-2 transition-all ${isActive ? 'border-blue-500 shadow-md bg-blue-50/30' : 'border-gray-200 hover:border-blue-300'}`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg text-gray-900">{layout.name}</h3>
        <div className="flex space-x-2">
          <button onClick={() => copyToClipboard(layout)} title="Copy JSON" className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
            <Copy size={16} />
          </button>
          <button onClick={() => downloadJson(layout)} title="Download JSON" className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
            <FileJson size={16} />
          </button>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-4">{layout.description}</p>
      
      <div className="mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">Best Suited For</span>
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full font-medium">
          {layout.bestFor}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">Pros</span>
          <ul className="space-y-1">
            {layout.pros.map((pro, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start">
                <Check size={14} className="text-green-500 mr-1.5 mt-0.5 shrink-0" />
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">Limitations</span>
          <ul className="space-y-1">
            {layout.limitations.map((limit, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start">
                <X size={14} className="text-red-500 mr-1.5 mt-0.5 shrink-0" />
                <span>{limit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-6 bg-gray-50 rounded-lg p-3">
        <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">Scores</span>
        <ScoreBadge label="Space Utilization" score={layout.scores.spaceUtilization} />
        <ScoreBadge label="Privacy" score={layout.scores.privacy} />
        <ScoreBadge label="Rental Potential" score={layout.scores.rentalPotential} />
        <ScoreBadge label="Family Comfort" score={layout.scores.familyComfort} />
        <ScoreBadge label="Simplicity" score={layout.scores.constructionSimplicity} />
      </div>

      <button
        onClick={() => onView(layout)}
        className={`w-full py-2.5 rounded-lg font-medium transition-colors ${
          isActive 
            ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-700' 
            : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50'
        }`}
      >
        {isActive ? 'Currently Viewing' : 'View Blueprint'}
      </button>
    </div>
  );
}
