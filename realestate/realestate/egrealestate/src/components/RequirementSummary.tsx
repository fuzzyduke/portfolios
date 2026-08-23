import { Requirements } from "../lib/layoutTypes";

export function RequirementSummary({ reqs }: { reqs: Requirements }) {
  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
      <h2 className="text-xl font-bold mb-4 text-slate-800 border-b pb-2">Requirement Summary</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <span className="block text-xs font-bold text-slate-500 uppercase">Project Type</span>
          <span className="text-sm font-medium text-slate-800">{reqs.projectType}</span>
        </div>
        <div>
          <span className="block text-xs font-bold text-slate-500 uppercase">Plot Size</span>
          <span className="text-sm font-medium text-slate-800">{reqs.plotWidth} x {reqs.plotLength} {reqs.unit}</span>
        </div>
        <div>
          <span className="block text-xs font-bold text-slate-500 uppercase">Goal</span>
          <span className="text-sm font-medium text-slate-800">{reqs.primaryGoal}</span>
        </div>
        <div>
          <span className="block text-xs font-bold text-slate-500 uppercase">Rooms</span>
          <span className="text-sm font-medium text-slate-800">{reqs.bedrooms} Bed, {reqs.sharedBathrooms} Bath</span>
        </div>
        <div>
          <span className="block text-xs font-bold text-slate-500 uppercase">Kitchen</span>
          <span className="text-sm font-medium text-slate-800">{reqs.kitchenType}</span>
        </div>
        <div className="col-span-2">
          <span className="block text-xs font-bold text-slate-500 uppercase">Special Spaces</span>
          <span className="text-sm font-medium text-slate-800">
            {reqs.specialSpaces.length > 0 ? reqs.specialSpaces.join(", ") : "None"}
          </span>
        </div>
      </div>
    </div>
  );
}
