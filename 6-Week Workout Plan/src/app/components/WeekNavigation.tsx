interface WeekNavigationProps {
  selectedWeek: number;
  onSelectWeek: (week: number) => void;
}

export function WeekNavigation({ selectedWeek, onSelectWeek }: WeekNavigationProps) {
  const weeks = [1, 2, 3, 4, 5, 6];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
      <div className="mb-8">
        <h1 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
          PeakFlow
        </h1>
        <div className="flex gap-4 mt-4">
          <button className="text-purple-600 border-b-2 border-purple-600 pb-1">
            Current Phase
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            History
          </button>
        </div>
      </div>

      <div className="space-y-2 flex-1">
        <p className="uppercase tracking-wider mb-4" style={{ fontSize: '0.75rem', color: '#9333ea' }}>
          6-Week Program
        </p>
        {weeks.map((week) => (
          <button
            key={week}
            onClick={() => onSelectWeek(week)}
            className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
              selectedWeek === week
                ? 'bg-purple-600 text-white'
                : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
              selectedWeek === week
                ? 'border-white bg-white/20'
                : 'border-gray-300'
            }`}>
              {week < selectedWeek && (
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <span>Week {week}</span>
          </button>
        ))}
      </div>

      <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors mt-6">
        Start Workout
      </button>
    </aside>
  );
}
