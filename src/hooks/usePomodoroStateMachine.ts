import { useCounterStore } from "@/stores/counter-store";
import { useTimerStore } from "@/stores/timer-store";
import { useState } from "react";
import useSound from 'use-sound';

import bellsSFX from '@/assets/bells.wav';

export enum POMODORO_STATES {
  WORK = "WORK",
  REST = "REST",
  LONG_BREAK = "LONG_BREAK",
}

export const POM_BREAK_CYCLES = 4;

/**
 * Rules:
 * - 1 Work + 1 rest makes a pom
 * - Every 4 Poms, take 1 long break
 */
export function usePomodoroStateMachine(){
  const [play] = useSound(bellsSFX);
  const {workTimer, restTimer, longRestTimer} = useTimerStore();
  const {
      workCounter,
      restCounter,
      longRestCounter,
      setWorkCounter,
      setRestCounter,
      setLongRestCounter,
      resetAllCounters,
  } = useCounterStore();

  const [currentState, setCurrentState] = useState<POMODORO_STATES>(
      POMODORO_STATES.WORK
  );

  const toggleCurrentState = () => {
    play();
      switch (currentState){
          case POMODORO_STATES.WORK:
            setWorkCounter(workCounter + 1);
            setCurrentState(POMODORO_STATES.REST);
            break;
          case POMODORO_STATES.REST:
            const pomsSoFar = restCounter + 1;
            setRestCounter(restCounter + 1);
            if (pomsSoFar % POM_BREAK_CYCLES === 0) {
              setCurrentState(POMODORO_STATES.LONG_BREAK);
              break;
            }
            setCurrentState(POMODORO_STATES.WORK);
            break;
          case POMODORO_STATES.LONG_BREAK:
            setLongRestCounter(longRestCounter + 1);
            setCurrentState(POMODORO_STATES.WORK);
            break;
      }
  };

  const getTimer = () => {
      switch (currentState) {
          case POMODORO_STATES.WORK:
              return workTimer;
          case POMODORO_STATES.REST:
              return restTimer;
          case POMODORO_STATES.LONG_BREAK:
          default:
              return longRestTimer;
      }
  };

  return {
    getTimer,
    toggleCurrentState,
    currentState,
    resetAllCounters,
  }
}