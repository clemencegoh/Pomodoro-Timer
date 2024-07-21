import {Flex, Heading, IconButton} from "@chakra-ui/react";
import {SettingsIcon} from "../icons";
import {TestID} from "@/utils/testConstants";
import {useState} from "react";
import SettingsModal from "../modals/SettingsModal";

export type THeaderProps = {
    color?: string;
};

export default function AppHeader({color = "#A9AEBE"}: Readonly<THeaderProps>) {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <Flex
            textAlign="center"
            pt={["32px", "80px", "48px"]}
            justifyContent={"center"}
            gap={3}
        >
            <Heading
                fontFamily="Kumbh_Sans"
                textColor={color}
                fontSize={32}
                data-testId={TestID.HEADER_TITLE}
            >
                Pomodoro Timer
            </Heading>
            <IconButton
                aria-label="settings"
                data-testId={TestID.SETTINGS_BUTTON}
                bg={"transparent"}
                onClick={() => {
                    setOpen(true);
                }}
            >
                <SettingsIcon />
            </IconButton>
            <SettingsModal
                isOpen={open}
                onClose={() => {
                    setOpen(false);
                }}
            />
        </Flex>
    );
}
