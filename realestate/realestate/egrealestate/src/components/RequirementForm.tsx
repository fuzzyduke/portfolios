"use client";

import { useState } from "react";
import { Requirements } from "../lib/layoutTypes";

interface RequirementFormProps {
  onSubmit: (reqs: Requirements) => void;
}

export function RequirementForm({ onSubmit }: RequirementFormProps) {
  const [formData, setFormData] = useState<Requirements>({
    projectType: "Family home",
    plotWidth: 30,
    plotLength: 40,
    unit: "ft",
    floors: 1,
    bedrooms: 2,
    attachedBathroomsRequired: false,
    sharedBathrooms: 1,
    kitchenType: "Private kitchen",
    livingAreaRequired: true,
    specialSpaces: [],
    primaryGoal: "Family comfort",
    notes: "",
  });

  const specialSpaceOptions = [
    "Play area", "Study room", "Office", "Storage", 
    "Table tennis/recreation area", "Parking", "Balcony", "Utility area"
  ];

  const handleCheckboxChange = (space: string) => {
    setFormData(prev => ({
      ...prev,
      specialSpaces: prev.specialSpaces.includes(space)
        ? prev.specialSpaces.filter(s => s !== space)
        : [...prev.specialSpaces, space]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <h2 className="text-xl font-bold mb-6 text-gray-900">Property Requirements</h2>
      
      <div className="space-y-5">
        {/* Project Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
          <select 
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={formData.projectType}
            onChange={e => setFormData({...formData, projectType: e.target.value})}
          >
            <option>Family home</option>
            <option>Guest house</option>
            <option>Rental rooms</option>
            <option>Multi-unit flats</option>
            <option>Studio apartments</option>
            <option>Mixed-use layout</option>
          </select>
        </div>

        {/* Plot Dimensions */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Width</label>
            <input type="number" min="10" required className="w-full p-2 border border-gray-300 rounded-md" value={formData.plotWidth} onChange={e => setFormData({...formData, plotWidth: Number(e.target.value)})} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Length</label>
            <input type="number" min="10" required className="w-full p-2 border border-gray-300 rounded-md" value={formData.plotLength} onChange={e => setFormData({...formData, plotLength: Number(e.target.value)})} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Unit</label>
            <select className="w-full p-2 border border-gray-300 rounded-md" value={formData.unit} onChange={e => setFormData({...formData, unit: e.target.value as "ft" | "m"})}>
              <option value="ft">ft</option>
              <option value="m">m</option>
            </select>
          </div>
        </div>

        {/* Rooms configuration */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
            <input type="number" min="0" className="w-full p-2 border border-gray-300 rounded-md" value={formData.bedrooms} onChange={e => setFormData({...formData, bedrooms: Number(e.target.value)})} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Shared Bathrooms</label>
            <input type="number" min="0" className="w-full p-2 border border-gray-300 rounded-md" value={formData.sharedBathrooms} onChange={e => setFormData({...formData, sharedBathrooms: Number(e.target.value)})} />
          </div>
        </div>

        {/* Toggles and selects */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Kitchen Type</label>
            <select className="w-full p-2 border border-gray-300 rounded-md" value={formData.kitchenType} onChange={e => setFormData({...formData, kitchenType: e.target.value})}>
              <option>Private kitchen</option>
              <option>Shared kitchen</option>
              <option>No kitchen</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Primary Goal</label>
            <select className="w-full p-2 border border-gray-300 rounded-md" value={formData.primaryGoal} onChange={e => setFormData({...formData, primaryGoal: e.target.value})}>
              <option>Family comfort</option>
              <option>Rental income</option>
              <option>Guest accommodation</option>
              <option>Maximum number of rooms</option>
              <option>Spacious luxury layout</option>
              <option>Low-cost construction</option>
            </select>
          </div>
        </div>

        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={formData.attachedBathroomsRequired} onChange={e => setFormData({...formData, attachedBathroomsRequired: e.target.checked})} className="rounded text-blue-600 focus:ring-blue-500" />
            <span className="text-sm text-gray-700">Attached baths required</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={formData.livingAreaRequired} onChange={e => setFormData({...formData, livingAreaRequired: e.target.checked})} className="rounded text-blue-600 focus:ring-blue-500" />
            <span className="text-sm text-gray-700">Living area required</span>
          </label>
        </div>

        {/* Special Spaces */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Special Spaces</label>
          <div className="grid grid-cols-2 gap-2">
            {specialSpaceOptions.map(space => (
              <label key={space} className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  checked={formData.specialSpaces.includes(space)} 
                  onChange={() => handleCheckboxChange(space)} 
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{space}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
          <textarea 
            rows={3} 
            className="w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Any specific instructions..."
            value={formData.notes}
            onChange={e => setFormData({...formData, notes: e.target.value})}
          />
        </div>

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
          Generate Layout Concepts
        </button>
      </div>
    </form>
  );
}
