import {colors} from "@/lib/themes/darkTheme";
import {TestID} from "@/utils/testConstants";
import {
    Box,
    Circle,
    CircularProgress,
    IconButton,
    Text,
} from "@chakra-ui/react";
import {keyframes} from "@emotion/react";
import {useCallback, useEffect, useRef, useState} from "react";
import {PauseIcon, PlayIcon, ResetIcon} from "../icons";

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
    const [isRunning, setIsRunning] = useState<boolean>(true);
    const toggleTimer = () => {
        setIsRunning(!isRunning);
    };
    const resetTimer = () => {
        setIsRunning(true);
        setMinutes(initialMinutes);
        setSeconds(initialSeconds);
    };

    useEffect(() => {
        setMinutes(initialMinutes);
        setSeconds(initialSeconds);
    }, [initialMinutes, initialSeconds]);

    const intervalRef = useRef<NodeJS.Timeout>();

    const changeTimer = useCallback(() => {
        if (!isRunning) return; // paused
        if (seconds === 0) {
            if (minutes === 0) {
                onTimerEnd?.();
                return;
            }
            setMinutes(minutes - 1);
            setSeconds(59);
            return;
        }
        setSeconds(seconds - 1);
    }, [minutes, seconds, isRunning]);

    useEffect(() => {
        intervalRef.current = setInterval(changeTimer, 1000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [changeTimer]);

    const pulse = keyframes`
    0% {
      opacity: 100%;
    }
    50% {
      opacity: 10%;
    }
    100% {
      opacity: 100%;
    }
  `;

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
                    animation={isRunning ? "" : `${pulse} 2s infinite ease`}
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
                        _hover={{
                            cursor: "pointer",
                        }}
                        onClick={toggleTimer}
                        data-testid={TestID.TIMER_TIME_DISPLAY}
                    >
                        {minutesForDisplay}:{secondsForDisplay}
                    </Text>
                    <Text
                        textStyle="h3"
                        color="lavenderMist"
                        position="relative"
                        textAlign="center"
                        ml={1.5}
                        data-testid={TestID.TIMER_BOTTOM_DISPLAY}
                    >
                        {bottomDisplay}
                    </Text>
                    <Box
                        display="flex"
                        position="relative"
                        justifyContent={"center"}
                        mt={1}
                        gap={2}
                    >
                        <IconButton
                            aria-label="pause-play-button"
                            bg={"transparent"}
                            onClick={toggleTimer}
                            data-testid={TestID.TIMER_PLAY_PAUSE_BUTTON}
                        >
                            {isRunning ? (
                                <PauseIcon
                                    width="10"
                                    height="10"
                                    data-testid={TestID.TIMER_PAUSE_ICON}
                                />
                            ) : (
                                <PlayIcon
                                    width="10"
                                    height="10"
                                    data-testid={TestID.TIMER_PLAY_ICON}
                                />
                            )}
                        </IconButton>
                        <IconButton
                            aria-label="pause-play-button"
                            bg={"transparent"}
                            onClick={resetTimer}
                            data-testid={TestID.TIMER_PLAY_PAUSE_BUTTON}
                        >
                            <ResetIcon
                                width="8"
                                height="8"
                                data-testid={TestID.TIMER_RESET_ICON}
                            />
                        </IconButton>
                    </Box>
                </Box>
            </Circle>
        </Circle>
    );
}
