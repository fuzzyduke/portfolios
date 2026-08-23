export function ScoreBadge({ label, score }: { label: string; score: number }) {
  return (
    <div className="flex items-center justify-between text-sm py-1 border-b border-gray-100 last:border-0">
      <span className="text-gray-600">{label}</span>
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <div
            key={star}
            className={`w-3 h-3 rounded-full ${star <= score ? "bg-blue-600" : "bg-gray-200"}`}
          />
        ))}
      </div>
    </div>
  );
}
