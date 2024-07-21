import {useTimerStore} from "@/stores/timer-store";
import {TestID} from "@/utils/testConstants";
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
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
    Switch,
} from "@chakra-ui/react";
import {useEffect} from "react";
import {useForm} from "react-hook-form";

type SettingsForm = {
    workTime: number;
    restTime: number;
    longRestTime: number;
    enableSound: boolean;
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
        withSound,
        setWithSound,
    } = useTimerStore();

    const {register, getValues, watch, setValue} = useForm<SettingsForm>({
        defaultValues: {
            workTime: workTimer,
            restTime: restTimer,
            longRestTime: longRestTimer,
            enableSound: withSound,
        },
    });

    useEffect(() => {
        setValue("workTime", workTimer);
        setValue("restTime", restTimer);
        setValue("longRestTime", longRestTimer);
        setValue("enableSound", withSound);
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
                                <InputLeftAddon pr={"3.2rem"}>
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
                                <InputLeftAddon pr={"3.5rem"}>
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
                            <FormControl display="flex" alignItems="center">
                                <FormLabel htmlFor="sound-alerts" mb="0">
                                    Enable sound?
                                </FormLabel>
                                <Switch
                                    id="sound-alerts"
                                    {...register("enableSound")}
                                />
                            </FormControl>
                        </Flex>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        onClick={() => {
                            setWorkTimer(getValues().workTime);
                            setRestTimer(getValues().restTime);
                            setLongRestTimer(getValues().longRestTime);
                            setWithSound(getValues().enableSound);
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
