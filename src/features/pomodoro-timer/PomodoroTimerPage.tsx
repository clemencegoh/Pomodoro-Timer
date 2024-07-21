import Timer from "@/components/display/Timer";
import AppHeader from "@/components/header/Header";
import {Container, Flex} from "@chakra-ui/react";
import _ from "lodash";
import {
    POM_BREAK_CYCLES,
    POMODORO_STATES,
    usePomodoroStateMachine,
} from "@/hooks/usePomodoroStateMachine";
import {colors} from "@/lib/themes/darkTheme";
import {RestIcon, TomatoIcon, WorkIcon} from "@/components/icons";
import {useCounterStore} from "@/stores/counter-store";
import CounterBlock from "@/components/display/CounterBlock";

export default function PomodoroTimerPage() {
    const {getTimer, currentState, toggleCurrentState} =
        usePomodoroStateMachine();
    const {workCounter, restCounter} = useCounterStore();

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
                initialMinutes={getTimer()}
                initialSeconds={0}
                bottomDisplay={_.startCase(_.camelCase(currentState))}
                onTimerEnd={toggleCurrentState}
                timerColor={getTimerColor()}
            />
            <Flex gap={9} justifyContent={"center"} marginTop={"3rem"}>
                <CounterBlock
                    icon={<TomatoIcon width="8" height="8" />}
                    counter={`${
                        restCounter % POM_BREAK_CYCLES
                    }/${POM_BREAK_CYCLES}`}
                    label={"Tomato Parts"}
                />

                <CounterBlock
                    icon={<WorkIcon width="8" height="8" />}
                    counter={workCounter}
                    label={"Work Counter"}
                />
                <CounterBlock
                    icon={<RestIcon width="8" height="8" />}
                    counter={restCounter}
                    label={"Rest Counter"}
                />
            </Flex>
        </Container>
    );
}
