import Timer from "@/components/display/Timer";
import AppHeader from "@/components/header/Header";
import {Container, Flex} from "@chakra-ui/react";
import _ from "lodash";
import {
    POM_BREAK_CYCLES,
    POMODORO_STATES,
    usePomodoroStateMachine,
} from "@/hooks/usePomodoroStateMachine";
import {RestIcon, TomatoIcon, WorkIcon} from "@/components/icons";
import {useCounterStore} from "@/stores/counter-store";
import CounterBlock from "@/components/display/CounterBlock";
import SessionResetModalWithButton from "@/components/modals/SessionResetModalWithButton";
import {useState} from "react";

export default function PomodoroTimerPage() {
    const {getTimer, currentState, setCurrentState, toggleCurrentState} =
        usePomodoroStateMachine();
    const [forceReset, setForceReset] = useState<boolean>(false);

    const resetStateMachine = () => {
        setCurrentState(POMODORO_STATES.WORK);
        setForceReset(true);
    };
    const {workCounter, restCounter} = useCounterStore();

    return (
        <Container>
            <AppHeader />

            <Timer
                initialMinutes={getTimer()}
                initialSeconds={0}
                currentState={currentState}
                onTimerEnd={toggleCurrentState}
                reset={forceReset}
                setReset={setForceReset}
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
            <Flex justifyContent={"center"} alignItems={"center"} mt={"2rem"}>
                <SessionResetModalWithButton reset={resetStateMachine} />
            </Flex>
        </Container>
    );
}
