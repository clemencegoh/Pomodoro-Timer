import {create} from "zustand";
import {persist} from "zustand/middleware";

const STORAGE_KEY = "POMODORO/COUNTER";

interface CounterState {
    workCounter: number;
    restCounter: number;
}

const initialState: CounterState = {
  workCounter: 0,
  restCounter: 0
}

interface CounterActions {
  incrementWorkCounter: () => void;
  decrementWorkCounter: () => void;

  incrementRestCounter: () => void;
  decrementRestCounter: () => void;
}

export const useCounterStore = create<CounterState & CounterActions>()(
    persist(
        (set) => ({
            ...initialState,
            incrementWorkCounter: () => set((state) => ({...state, workCounter: state.workCounter + 1})),
            decrementWorkCounter: () => set((state) => ({...state, workCounter: state.workCounter - 1})),
            incrementRestCounter: () => set((state) => ({...state, workCounter: state.restCounter + 1})),
            decrementRestCounter: () => set((state) => ({...state, workCounter: state.restCounter - 1})),
        }),
        {
            name: STORAGE_KEY,
        }
    )
);