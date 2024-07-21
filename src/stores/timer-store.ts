import {create} from "zustand";
import {persist} from "zustand/middleware";

const STORAGE_KEY = "POMODORO/TIMER";

interface TimerState {
  workTimer: number;
  restTimer: number;
  longRestTimer: number;
  withSound: boolean;
}

const initialState: TimerState = {
  workTimer: 25,
  restTimer: 5,
  longRestTimer: 15,
  withSound: true,
}

interface TimerActions {
  setWorkTimer: (lengthOfTimer: number) => void;
  setRestTimer: (lengthOfTimer: number) => void;
  setLongRestTimer: (lengthOfTimer: number) => void;
  setWithSound: (value: boolean) => void;
}

export const useTimerStore = create<TimerState & TimerActions>()(
    persist(
        (set) => ({
            ...initialState,
            setWorkTimer: (value) => set((state) => ({...state, workTimer: value})),
            setRestTimer: (value) => set((state) => ({...state, restTimer: value})),
            setLongRestTimer: (value) => set((state) => ({...state, longRestTimer: value})),
            setWithSound: (value) => set((state) => ({...state, withSound: value}))
        }),
        {
            name: STORAGE_KEY,
        }
    )
);