import {colors} from "@/lib/themes/darkTheme";
import {TestID} from "@/utils/testConstants";
import {Box, Circle, CircularProgress, Text} from "@chakra-ui/react";
import {useCallback, useEffect, useRef, useState} from "react";

export type TTimerProps = {
    onTimerEnd?: () => void;
    bottomDisplay?: string;
    timerColor?: string;
    initialMinutes?: number;
    initialSeconds?: number;
};

export default function Timer({
    onTimerEnd,
    bottomDisplay = "unknown",
    timerColor,
    initialMinutes = 1,
    initialSeconds = 0,
}: Readonly<TTimerProps>) {
    const [minutes, setMinutes] = useState<number>(initialMinutes);
    const [seconds, setSeconds] = useState<number>(initialSeconds);

    const intervalRef = useRef<NodeJS.Timeout>();

    const changeTimer = useCallback(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                onTimerEnd?.();
                return clearInterval(intervalRef.current);
            }
            setMinutes(minutes - 1);
            setSeconds(59);
            return;
        }
        setSeconds(seconds - 1);
    }, [minutes, seconds]);

    useEffect(() => {
        intervalRef.current = setInterval(changeTimer, 1000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [changeTimer]);

    const minutesForDisplay = minutes < 10 ? `0${minutes}` : minutes.toString();
    const secondsForDisplay = seconds < 10 ? `0${seconds}` : seconds.toString();
    const maxTime = initialMinutes * 60 + initialSeconds;
    const currentTime = minutes * 60 + seconds;

    return (
        <Circle
            mx={"auto"}
            // @ts-expect-error: for some reason this works but ts isn't happy
            w={["300px", "410px"]}
            h={["300px", "410px"]}
            mt={["48px", "109px", "45px"]}
            // jest REALLY doesn't like bgGradient
            // bgGradient={"linear-gradient(315deg, #2E325A 0%, #0E112A 100%)"}
            boxShadow={
                "50px 50px 100px 0px #121530, -50px -50px 100px 0px #272C5A"
            }
        >
            <Circle
                // @ts-expect-error: for some reason this works but ts isn't happy
                w={["267.805px", "366px"]}
                h={["267.805px", "366px"]}
                bg={"darkBlueBlack"}
            >
                <CircularProgress
                    color={timerColor ?? colors.pastelRed}
                    // @ts-expect-error: for some reason this works but ts isn't happy
                    size={["283.475px", "373px"]}
                    value={currentTime}
                    min={0}
                    max={maxTime}
                    thickness={3.5}
                    trackColor="darkBlueBlack"
                    capIsRound
                />
                <Box pos="absolute">
                    <Text
                        textStyle="h1"
                        color="lavenderMist"
                        position="relative"
                        textAlign="center"
                        data-testid={TestID.TIMER_TIME_DISPLAY}
                    >
                        {minutesForDisplay}:{secondsForDisplay}
                    </Text>
                    <Text
                        textStyle="h3"
                        color="lavenderMist"
                        position="relative"
                        textAlign="center"
                        ml={0.5}
                        data-testid={TestID.TIMER_BOTTOM_DISPLAY}
                    >
                        {bottomDisplay}
                    </Text>
                </Box>
            </Circle>
        </Circle>
    );
}
