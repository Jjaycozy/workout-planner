import { useState, useEffect } from 'react';

export interface WorkoutEntry {
  workoutName: string;
  exercises: string;
  duration: string;
}

export interface WeekData {
  [day: string]: WorkoutEntry;
}

export interface AllWorkoutData {
  [weekNumber: number]: WeekData;
}

const STORAGE_KEY = 'workout-planner-data';

export function useWorkoutData() {
  const [workoutData, setWorkoutData] = useState<AllWorkoutData>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(workoutData));
  }, [workoutData]);

  const updateWorkout = (week: number, day: string, entry: Partial<WorkoutEntry>) => {
    setWorkoutData(prev => ({
      ...prev,
      [week]: {
        ...prev[week],
        [day]: {
          workoutName: entry.workoutName ?? prev[week]?.[day]?.workoutName ?? '',
          exercises: entry.exercises ?? prev[week]?.[day]?.exercises ?? '',
          duration: entry.duration ?? prev[week]?.[day]?.duration ?? '',
        }
      }
    }));
  };

  const getWorkout = (week: number, day: string): WorkoutEntry => {
    return workoutData[week]?.[day] || {
      workoutName: '',
      exercises: '',
      duration: ''
    };
  };

  return { updateWorkout, getWorkout };
}
