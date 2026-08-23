import { FloorPlan, Room } from "../lib/layoutTypes";

const getRoomColor = (type: Room["type"]) => {
  switch (type) {
    case "bedroom": return "fill-blue-100 stroke-blue-400";
    case "bathroom": return "fill-cyan-100 stroke-cyan-400";
    case "kitchen": return "fill-orange-100 stroke-orange-400";
    case "living": return "fill-amber-100 stroke-amber-400";
    case "play": return "fill-purple-100 stroke-purple-400";
    case "office": return "fill-indigo-100 stroke-indigo-400";
    case "corridor": return "fill-gray-100 stroke-gray-400";
    default: return "fill-green-100 stroke-green-400";
  }
};

export function BlueprintRenderer({ layout }: { layout: FloorPlan }) {
  const { width, height, unit } = layout.plot;

  return (
    <div className="w-full bg-slate-50 p-4 rounded-xl border border-slate-200">
      <div className="mb-4 text-center text-sm text-slate-500 font-medium">
        Disclaimer: Concept layout only. Not suitable for construction without professional review.
      </div>
      
      <div className="relative w-full aspect-square md:aspect-video flex justify-center items-center">
        <svg
          viewBox={`-2 -2 ${width + 4} ${height + 4}`}
          className="w-full h-full drop-shadow-md"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <pattern id="grid" width="2" height="2" patternUnits="userSpaceOnUse">
              <path d="M 2 0 L 0 0 0 2" fill="none" stroke="#e2e8f0" strokeWidth="0.1" />
            </pattern>
          </defs>
          
          <rect x="0" y="0" width={width} height={height} fill="url(#grid)" stroke="#94a3b8" strokeWidth="0.5" />
          
          {layout.rooms.map((room) => (
            <g key={room.id}>
              <rect
                x={room.x}
                y={room.y}
                width={room.width}
                height={room.height}
                className={`${getRoomColor(room.type)} stroke-[0.3] hover:opacity-90 transition-opacity`}
              />
              <text
                x={room.x + room.width / 2}
                y={room.y + room.height / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-[1.5px] font-semibold fill-slate-700 select-none pointer-events-none"
              >
                {room.name}
              </text>
              <text
                x={room.x + room.width / 2}
                y={room.y + room.height / 2 + 2}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-[1.2px] fill-slate-500 select-none pointer-events-none"
              >
                {room.width.toFixed(1)} x {room.height.toFixed(1)} {unit}
              </text>
            </g>
          ))}

          {layout.doors?.map((door) => (
            <rect
              key={door.id}
              x={door.x}
              y={door.y}
              width={door.orientation === "horizontal" ? door.width : 0.6}
              height={door.orientation === "vertical" ? door.width : 0.6}
              className="fill-white stroke-slate-600 stroke-[0.2]"
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
