import {useTimerStore} from "@/stores/timer-store";
import {TestID} from "@/utils/testConstants";
import {
    Button,
    Flex,
    Input,
    InputGroup,
    InputLeftAddon,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import {useEffect} from "react";
import {useForm} from "react-hook-form";

type SettingsForm = {
    workTime: number;
    restTime: number;
    longRestTime: number;
};

export type TSettingsModalProps = {
    isOpen?: boolean;
    onClose?: () => void;
};

export default function SettingsModal({
    isOpen = false,
    onClose = () => {},
}: Readonly<TSettingsModalProps>) {
    const {
        workTimer,
        setWorkTimer,
        restTimer,
        setRestTimer,
        longRestTimer,
        setLongRestTimer,
    } = useTimerStore();

    const {register, getValues, watch, setValue} = useForm<SettingsForm>({
        defaultValues: {
            workTime: workTimer,
            restTime: restTimer,
            longRestTime: longRestTimer,
        },
    });

    useEffect(() => {
        setValue("workTime", workTimer);
        setValue("restTime", restTimer);
        setValue("longRestTime", longRestTimer);
    }, [isOpen]);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent data-testid={TestID.SETTINGS_MODAL}>
                <ModalHeader>Pomodoro settings</ModalHeader>
                <ModalCloseButton mt={1.5} />

                <ModalBody>
                    <form onSubmit={() => {}}>
                        <Flex gap={3} pb={3} flexDirection={"column"}>
                            <InputGroup>
                                <InputLeftAddon>
                                    Work time (minutes)
                                </InputLeftAddon>
                                <Input
                                    data-testid={
                                        TestID.SETTINGS_MODAL_WORK_TIMER
                                    }
                                    type="number"
                                    placeholder={workTimer.toString()}
                                    data-value={watch("workTime")}
                                    {...register("workTime")}
                                />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftAddon>
                                    Rest time (minutes)
                                </InputLeftAddon>
                                <Input
                                    data-testid={
                                        TestID.SETTINGS_MODAL_REST_TIMER
                                    }
                                    type="number"
                                    placeholder={restTimer.toString()}
                                    {...register("restTime")}
                                />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftAddon>
                                    Long Rest time (minutes)
                                </InputLeftAddon>
                                <Input
                                    data-testid={
                                        TestID.SETTINGS_MODAL_LONG_REST_TIMER
                                    }
                                    type="number"
                                    placeholder={longRestTimer.toString()}
                                    {...register("longRestTime")}
                                />
                            </InputGroup>
                        </Flex>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        onClick={() => {
                            setWorkTimer(getValues().workTime);
                            setRestTimer(getValues().restTime);
                            setLongRestTimer(getValues().longRestTime);
                        }}
                        colorScheme="blue"
                    >
                        Confirm Changes
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
