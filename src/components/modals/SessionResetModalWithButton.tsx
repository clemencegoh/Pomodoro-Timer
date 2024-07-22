import {useCounterStore} from "@/stores/counter-store";
import {TestID} from "@/utils/testConstants";
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
} from "@chakra-ui/react";
import {useState} from "react";

type Props = {
    reset?: () => void;
};

export default function SessionResetModalWithButton({reset}: Props) {
    const [sessionResetModalOpen, setSessionResetModalOpen] =
        useState<boolean>(false);
    const {resetAllCounters} = useCounterStore();

    return (
        <>
            <Button
                variant={"ghost"}
                onClick={() => {
                    setSessionResetModalOpen(true);
                }}
                colorScheme="blue"
                data-testid={TestID.RESET_BUTTON}
            >
                Reset Session
            </Button>
            <Modal
                isOpen={sessionResetModalOpen}
                onClose={() => {
                    setSessionResetModalOpen(false);
                }}
            >
                <ModalOverlay />
                <ModalContent data-testid={TestID.NOTIFICATION_MODAL}>
                    <ModalHeader>Reset all current counters?</ModalHeader>
                    <ModalCloseButton mt={1.5} />

                    <ModalBody>
                        <Text>Welcome to a brand new day!</Text>
                        <Text>
                            Hope you have an amazing and productive day ahead!
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            onClick={() => {
                                resetAllCounters();
                                reset?.();
                                setSessionResetModalOpen(false);
                            }}
                            colorScheme="blue"
                            data-testid={TestID.CONFIRM_BUTTON}
                        >
                            Confirm Reset
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
