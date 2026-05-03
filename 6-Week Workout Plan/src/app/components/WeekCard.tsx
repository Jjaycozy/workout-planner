interface WeekCardProps {
  weekNumber: number;
}

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export function WeekCard({ weekNumber }: WeekCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-purple-100">
      <h2 className="mb-4 text-purple-700">Week {weekNumber}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {days.map((day) => (
          <div
            key={day}
            className="border-2 border-pink-200 rounded-lg p-4 hover:border-purple-400 transition-colors bg-gradient-to-br from-white to-purple-50"
          >
            <h3 className="mb-3 text-purple-600">{day}</h3>
            <div className="space-y-2">
              <textarea
                placeholder="Add your exercises here..."
                className="w-full h-32 p-3 border border-pink-100 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white"
              />
              <input
                type="text"
                placeholder="Duration (e.g., 45 min)"
                className="w-full p-2 border border-pink-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
