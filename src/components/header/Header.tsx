import {Box, Heading} from "@chakra-ui/react";

export type THeaderProps = {
    color?: string;
};

export default function AppHeader({color = "#A9AEBE"}: Readonly<THeaderProps>) {
    return (
        <Box textAlign="center" pt={["32px", "80px", "48px"]}>
            <Heading fontFamily="Kumbh_Sans" textColor={color} fontSize={32}>
                Pomodoro Timer
            </Heading>
        </Box>
    );
}
