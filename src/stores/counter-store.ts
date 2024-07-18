import {create} from "zustand";
import {persist} from "zustand/middleware";

const STORAGE_KEY = "POMODORO/COUNTER";

interface CounterState {
    workCounter: number;
    restCounter: number;
    longRestCounter: number;
}

const initialState: CounterState = {
  workCounter: 0,
  restCounter: 0,
  longRestCounter: 0,
}

interface CounterActions {
  setWorkCounter: (value: number) => void;

  setRestCounter: (value: number) => void;

  setLongRestCounter: (value: number) => void;

  resetAllCounters: () => void;
}

export const useCounterStore = create<CounterState & CounterActions>()(
    persist(
        (set) => ({
            ...initialState,
            setWorkCounter: (value) => set((state) => ({...state, workCounter: value})),
            setRestCounter: (value) => set((state) => ({...state, restCounter: value})),
            setLongRestCounter: (value) => set((state) => ({...state, longRestCounter: value})),
            resetAllCounters: () => set(() => ({workCounter: 0, restCounter: 0, longRestCounter: 0}))
        }),
        {
            name: STORAGE_KEY,
        }
    )
);