import {Icon} from "@chakra-ui/react";

interface IconProps {
    width?: string;
    height?: string;
    color?: string;
    "data-testid"?: string;
}

export const PlayIcon = ({width, height, ...props}: IconProps) => (
    <Icon
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        w={width}
        h={height}
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
        />
    </Icon>
);

export const PauseIcon = ({width, height, ...props}: IconProps) => (
    <Icon
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        w={width}
        h={height}
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
    </Icon>
);
