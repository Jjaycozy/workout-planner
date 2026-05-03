import { DayCard } from './DayCard';
import { WorkoutEntry } from '../hooks/useWorkoutData';

interface WeekViewProps {
  weekNumber: number;
  updateWorkout: (week: number, day: string, entry: Partial<WorkoutEntry>) => void;
  getWorkout: (week: number, day: string) => WorkoutEntry;
}

const daysOfWeek = [
  { day: 'MON', date: 12 },
  { day: 'TUE', date: 13 },
  { day: 'WED', date: 14 },
  { day: 'THU', date: 15 },
  { day: 'FRI', date: 16 },
  { day: 'SAT', date: 17 },
  { day: 'SUN', date: 18 }
];

export function WeekView({ weekNumber, updateWorkout, getWorkout }: WeekViewProps) {
  return (
    <div>
      <div className="mb-6">
        <div className="flex items-baseline gap-3 mb-2">
          <h1>Week {weekNumber}</h1>
          <span className="text-pink-600 uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>
            Current Active Phase
          </span>
        </div>
        <p className="text-gray-600">
          Add your personalized workout plan. Focus on compound lifts and progressive overload. Track your sets, reps, and weights for optimal progress.
        </p>
      </div>

      <div className="grid grid-cols-7 gap-3 mb-8">
        {daysOfWeek.map((day, index) => (
          <DayCard
            key={day.day}
            day={day.day}
            date={day.date}
            isPrimary={index === 2}
            isRest={index === 6}
            weekNumber={weekNumber}
            updateWorkout={updateWorkout}
            getWorkout={getWorkout}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3>Weekly Focus</h3>
          </div>
          <textarea
            placeholder="Define your weekly focus and goals..."
            className="w-full h-32 p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
          />
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-6 text-white">
          <h3 className="mb-2">Coach's Note</h3>
          <p className="text-purple-100 mb-4" style={{ fontSize: '0.875rem' }}>
            Remember to track your progress and adjust weights accordingly. Listen to your body and prioritize proper form over heavy weights.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-500 rounded-full"></div>
            <div>
              <p>Marcus Thomas</p>
              <p className="text-purple-200" style={{ fontSize: '0.75rem' }}>Strength Coach</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
