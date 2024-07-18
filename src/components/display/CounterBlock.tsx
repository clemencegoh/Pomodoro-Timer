import {TestID} from "@/utils/testConstants";
import {Box, Flex, Text} from "@chakra-ui/react";
import React from "react";

export type TCounterBlockProps = {
    icon?: React.ReactNode;
    label: string;
    counter: string | number;
};

export default function CounterBlock({
    label,
    counter,
    icon,
}: TCounterBlockProps) {
    return (
        <Box>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Text
                    textStyle={"h2"}
                    color="lavenderMist"
                    data-testid={TestID.DISPLAY_BLOCK_COUNTER}
                >
                    {counter}
                </Text>
                {icon}
            </Flex>
            <Flex>
                <Text
                    textStyle={"p"}
                    color="lavenderMist"
                    data-testid={TestID.DISPLAY_BLOCK_LABEL}
                >
                    {label}
                </Text>
            </Flex>
        </Box>
    );
}
