import { useState } from 'react';
import { WeekNavigation } from './components/WeekNavigation';
import { WeekView } from './components/WeekView';
import { RightSidebar } from './components/RightSidebar';
import { useWorkoutData } from './hooks/useWorkoutData';

export default function App() {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const { updateWorkout, getWorkout } = useWorkoutData();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <WeekNavigation selectedWeek={selectedWeek} onSelectWeek={setSelectedWeek} />

      <main className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto p-6">
          <WeekView
            weekNumber={selectedWeek}
            updateWorkout={updateWorkout}
            getWorkout={getWorkout}
          />
        </div>
      </main>

      <RightSidebar />
    </div>
  );
}