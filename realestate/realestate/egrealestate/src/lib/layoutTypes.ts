export type FloorPlan = {
  id: string;
  name: string;
  description: string;
  bestFor: string;
  plot: {
    width: number;
    height: number;
    unit: "ft" | "m";
  };
  rooms: Room[];
  doors?: Door[];
  windows?: Window[];
  scores: {
    spaceUtilization: number;
    privacy: number;
    rentalPotential: number;
    familyComfort: number;
    constructionSimplicity: number;
  };
  pros: string[];
  limitations: string[];
  notes: string[];
};

export type Room = {
  id: string;
  name: string;
  type:
    | "bedroom"
    | "bathroom"
    | "kitchen"
    | "living"
    | "play"
    | "office"
    | "storage"
    | "parking"
    | "utility"
    | "corridor"
    | "reception"
    | "balcony";
  x: number;
  y: number;
  width: number;
  height: number;
};

export type Door = {
  id: string;
  roomId?: string;
  x: number;
  y: number;
  width: number;
  orientation: "horizontal" | "vertical";
};

export type Window = {
  id: string;
  roomId?: string;
  x: number;
  y: number;
  width: number;
  orientation: "horizontal" | "vertical";
};

export type Requirements = {
  projectType: string;
  plotWidth: number;
  plotLength: number;
  unit: "ft" | "m";
  floors: number;
  bedrooms: number;
  attachedBathroomsRequired: boolean;
  sharedBathrooms: number;
  kitchenType: string;
  livingAreaRequired: boolean;
  specialSpaces: string[];
  primaryGoal: string;
  notes: string;
};
