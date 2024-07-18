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

export const ResetIcon = ({...props}: IconProps) => (
    <Icon
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
        />
    </Icon>
);
