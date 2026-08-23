import { FloorPlan, Requirements, Room, Door } from "./layoutTypes";

export const generateSampleLayouts = (reqs: Requirements): FloorPlan[] => {
  const { plotWidth, plotLength, unit } = reqs;

  const w = plotWidth;
  const h = plotLength;

  // 1. Balanced Family Layout
  const balancedRooms: Room[] = [
    { id: "r1", name: "Living Area", type: "living", x: 0, y: 0, width: w, height: h * 0.4 },
    { id: "r2", name: "Kitchen & Dining", type: "kitchen", x: 0, y: h * 0.4, width: w * 0.4, height: h * 0.3 },
    { id: "r3", name: "Master Bedroom", type: "bedroom", x: w * 0.4, y: h * 0.4, width: w * 0.6, height: h * 0.3 },
    { id: "r4", name: "Bedroom 2", type: "bedroom", x: w * 0.4, y: h * 0.7, width: w * 0.6, height: h * 0.3 },
    { id: "r5", name: "Bathroom", type: "bathroom", x: 0, y: h * 0.7, width: w * 0.4, height: h * 0.3 },
  ];

  const balancedDoors: Door[] = [
    { id: "d1", roomId: "r1", x: w / 2, y: 0, width: w * 0.1, orientation: "horizontal" }, // Main entrance
    { id: "d2", roomId: "r3", x: w * 0.4, y: h * 0.55, width: h * 0.05, orientation: "vertical" }, // Master bed
    { id: "d3", roomId: "r4", x: w * 0.4, y: h * 0.85, width: h * 0.05, orientation: "vertical" }, // Bed 2
    { id: "d4", roomId: "r5", x: w * 0.2, y: h * 0.7, width: w * 0.08, orientation: "horizontal" }, // Bath
  ];

  const layout1: FloorPlan = {
    id: "layout-1",
    name: "Balanced Family Layout",
    description: "A comfortable layout balancing living space with private areas.",
    bestFor: "Family home or long-term residence.",
    plot: { width: w, height: h, unit },
    rooms: balancedRooms,
    doors: balancedDoors,
    scores: { spaceUtilization: 4, privacy: 5, rentalPotential: 3, familyComfort: 5, constructionSimplicity: 4 },
    pros: ["Large living area", "Clear separation of private and public spaces"],
    limitations: ["Fewer total rooms", "Requires more plumbing spread"],
    notes: ["Concept layout only.", "Plumbing needs verification by professional."],
  };

  // 2. Rental Efficiency Layout
  const rentalRooms: Room[] = [
    { id: "rr1", name: "Shared Kitchen", type: "kitchen", x: w * 0.3, y: 0, width: w * 0.4, height: h * 0.2 },
    { id: "rr2", name: "Shared Bath 1", type: "bathroom", x: 0, y: 0, width: w * 0.3, height: h * 0.2 },
    { id: "rr3", name: "Shared Bath 2", type: "bathroom", x: w * 0.7, y: 0, width: w * 0.3, height: h * 0.2 },
    { id: "rr4", name: "Corridor", type: "corridor", x: w * 0.4, y: h * 0.2, width: w * 0.2, height: h * 0.8 },
    { id: "rr5", name: "Rental Room A", type: "bedroom", x: 0, y: h * 0.2, width: w * 0.4, height: h * 0.4 },
    { id: "rr6", name: "Rental Room B", type: "bedroom", x: w * 0.6, y: h * 0.2, width: w * 0.4, height: h * 0.4 },
    { id: "rr7", name: "Rental Room C", type: "bedroom", x: 0, y: h * 0.6, width: w * 0.4, height: h * 0.4 },
    { id: "rr8", name: "Rental Room D", type: "bedroom", x: w * 0.6, y: h * 0.6, width: w * 0.4, height: h * 0.4 },
  ];

  const layout2: FloorPlan = {
    id: "layout-2",
    name: "Rental Efficiency Layout",
    description: "Maximizes rentable rooms with shared central facilities.",
    bestFor: "Guest house, PG, or rental properties.",
    plot: { width: w, height: h, unit },
    rooms: rentalRooms,
    scores: { spaceUtilization: 5, privacy: 2, rentalPotential: 5, familyComfort: 2, constructionSimplicity: 4 },
    pros: ["Maximum rentable units", "Centralized plumbing", "Efficient corridor usage"],
    limitations: ["Limited privacy", "No common living space"],
    notes: ["Concept layout only.", "Fire safety and egress codes must be checked."],
  };

  // 3. Spacious Lifestyle Layout
  const spaciousRooms: Room[] = [
    { id: "sr1", name: "Grand Living Area", type: "living", x: 0, y: 0, width: w, height: h * 0.5 },
    { id: "sr2", name: "Open Kitchen", type: "kitchen", x: 0, y: h * 0.5, width: w * 0.3, height: h * 0.3 },
    { id: "sr3", name: "Recreation/Play", type: "play", x: w * 0.3, y: h * 0.5, width: w * 0.3, height: h * 0.3 },
    { id: "sr4", name: "Master Suite", type: "bedroom", x: w * 0.6, y: h * 0.5, width: w * 0.4, height: h * 0.5 },
    { id: "sr5", name: "Ensuite Bath", type: "bathroom", x: w * 0.3, y: h * 0.8, width: w * 0.3, height: h * 0.2 },
    { id: "sr6", name: "Powder Room", type: "bathroom", x: 0, y: h * 0.8, width: w * 0.3, height: h * 0.2 },
  ];

  const layout3: FloorPlan = {
    id: "layout-3",
    name: "Spacious Lifestyle Layout",
    description: "An open, luxurious concept with large common areas.",
    bestFor: "Couples, small families wanting luxury, or weekend homes.",
    plot: { width: w, height: h, unit },
    rooms: spaciousRooms,
    scores: { spaceUtilization: 3, privacy: 4, rentalPotential: 2, familyComfort: 5, constructionSimplicity: 3 },
    pros: ["Huge open spaces", "Great for entertaining", "Includes recreation area"],
    limitations: ["Lower room count", "Less efficient for rental yield"],
    notes: ["Concept layout only.", "Structural beams may be needed for large open living space."],
  };

  return [layout1, layout2, layout3];
};
