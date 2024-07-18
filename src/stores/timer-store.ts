import {create} from "zustand";
import {persist} from "zustand/middleware";

const STORAGE_KEY = "POMODORO/TIMER";

interface TimerState {
  workTimer: number;
  restTimer: number;
  longRestTimer: number;
}

const initialState: TimerState = {
  workTimer: 25,
  restTimer: 5,
  longRestTimer: 15,
}

interface TimerActions {
  setWorkTimer: (lengthOfTimer: number) => void;
  setRestTimer: (lengthOfTimer: number) => void;
  setLongRestTimer: (lengthOfTimer: number) => void;
}

export const useTimerStore = create<TimerState & TimerActions>()(
    persist(
        (set) => ({
            ...initialState,
            setWorkTimer: (value) => set((state) => ({...state, workTimer: value})),
            setRestTimer: (value) => set((state) => ({...state, restTimer: value})),
            setLongRestTimer: (value) => set((state) => ({...state, longRestTimer: value})),
        }),
        {
            name: STORAGE_KEY,
        }
    )
);