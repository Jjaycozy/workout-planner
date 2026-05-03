import { WorkoutEntry } from '../hooks/useWorkoutData';

interface DayCardProps {
  day: string;
  date: number;
  isPrimary?: boolean;
  isRest?: boolean;
  weekNumber: number;
  updateWorkout: (week: number, day: string, entry: Partial<WorkoutEntry>) => void;
  getWorkout: (week: number, day: string) => WorkoutEntry;
}

export function DayCard({ day, date, isPrimary = false, isRest = false, weekNumber, updateWorkout, getWorkout }: DayCardProps) {
  const workout = getWorkout(weekNumber, day);

  if (isPrimary) {
    return (
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-4 text-white border-2 border-purple-600 min-h-[240px] flex flex-col">
        <div className="mb-3">
          <p className="text-purple-200 mb-1" style={{ fontSize: '0.75rem' }}>{day}</p>
          <p className="opacity-90">{date}</p>
        </div>

        <div className="flex-1 mb-3">
          <input
            type="text"
            placeholder="Workout Name"
            value={workout.workoutName}
            onChange={(e) => updateWorkout(weekNumber, day, { workoutName: e.target.value })}
            className="w-full bg-white/20 border border-white/30 rounded px-2 py-1 mb-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <textarea
            placeholder="Add exercises..."
            value={workout.exercises}
            onChange={(e) => updateWorkout(weekNumber, day, { exercises: e.target.value })}
            className="w-full h-20 bg-white/20 border border-white/30 rounded px-2 py-1 text-white placeholder-white/60 resize-none focus:outline-none focus:ring-2 focus:ring-white/50"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Duration"
            value={workout.duration}
            onChange={(e) => updateWorkout(weekNumber, day, { duration: e.target.value })}
            className="w-full bg-white/20 border border-white/30 rounded px-2 py-1 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
        </div>
      </div>
    );
  }

  if (isRest) {
    return (
      <div className="bg-white rounded-lg border-2 border-pink-200 p-4 min-h-[240px] flex flex-col items-center justify-center">
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-gray-400 mb-1" style={{ fontSize: '0.75rem' }}>{day}</p>
        <p className="text-gray-600 mb-3">{date}</p>
        <p className="text-purple-600">Rest Day</p>
        <textarea
          placeholder="Recovery notes..."
          value={workout.exercises}
          onChange={(e) => updateWorkout(weekNumber, day, { exercises: e.target.value })}
          className="w-full h-16 mt-3 p-2 border border-gray-200 rounded text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
        />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border-2 border-gray-200 p-4 hover:border-purple-300 transition-colors min-h-[240px] flex flex-col">
      <div className="mb-3">
        <p className="text-gray-500 mb-1" style={{ fontSize: '0.75rem' }}>{day}</p>
        <p className="text-gray-700">{date}</p>
      </div>

      <div className="flex-1 mb-3">
        <input
          type="text"
          placeholder="Workout Name"
          value={workout.workoutName}
          onChange={(e) => updateWorkout(weekNumber, day, { workoutName: e.target.value })}
          className="w-full border border-gray-200 rounded px-2 py-1 mb-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
        />
        <textarea
          placeholder="Add exercises..."
          value={workout.exercises}
          onChange={(e) => updateWorkout(weekNumber, day, { exercises: e.target.value })}
          className="w-full h-20 border border-gray-200 rounded px-2 py-1 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Duration"
          value={workout.duration}
          onChange={(e) => updateWorkout(weekNumber, day, { duration: e.target.value })}
          className="w-full border border-gray-200 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
        />
      </div>
    </div>
  );
}
