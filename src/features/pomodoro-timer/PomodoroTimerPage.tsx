import Timer from "@/components/display/Timer";
import AppHeader from "@/components/header/Header";
import {useTimerStore} from "@/stores/timer-store";
import {Button, Container, Text} from "@chakra-ui/react";
import {useState} from "react";
import _ from "lodash";

export enum POMODORO_STATES {
    WORK = "WORK",
    REST = "REST",
    LONG_BREAK = "LONG_BREAK",
}

export default function PomodoroTimerPage() {
    const [currentState, setCurrentState] = useState<POMODORO_STATES>(
        POMODORO_STATES.WORK
    );

    const {workTimer, restTimer, longRestTimer} = useTimerStore();

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

    return (
        <Container>
            <AppHeader />
            <Timer
                initialMinutes={getTimer()}
                bottomDisplay={_.startCase(_.camelCase(currentState))}
            />
        </Container>
    );
}
