import Timer from "@/components/display/Timer";
import AppHeader from "@/components/header/Header";
import {Container, Flex, Box} from "@chakra-ui/react";
import _ from "lodash";
import {
    POMODORO_STATES,
    usePomodoroStateMachine,
} from "@/hooks/usePomodoroStateMachine";
import {colors} from "@/lib/themes/darkTheme";

export default function PomodoroTimerPage() {
    const {getTimer, currentState, toggleCurrentState} =
        usePomodoroStateMachine();

    const getTimerColor = () => {
        switch (currentState) {
            case POMODORO_STATES.WORK:
                return colors.pastelRed;
            case POMODORO_STATES.REST:
                return colors.green;
            case POMODORO_STATES.LONG_BREAK:
                return colors.calmingBlue;
        }
    };

    return (
        <Container>
            <AppHeader />
            <Timer
                initialMinutes={0}
                initialSeconds={3}
                bottomDisplay={_.startCase(_.camelCase(currentState))}
                onTimerEnd={toggleCurrentState}
                timerColor={getTimerColor()}
            />
            <Flex>
                <Flex></Flex>
            </Flex>
        </Container>
    );
}
