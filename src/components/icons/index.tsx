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

export const TomatoIcon = ({...props}: IconProps) => (
    <Icon
        width="800px"
        height="800px"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        preserveAspectRatio="xMidYMid meet"
        {...props}
    >
        <path
            fill="#FF473E"
            d="M501.039 343.664c-28.601 118.577-161.232 188.305-296.24 155.741S-16.47 344.316 12.131 225.739S173.363 37.434 308.371 69.998S529.64 225.086 501.039 343.664z"
        />
        <path
            fill="#2BA52E"
            d="M361.189 121.157a5.39 5.39 0 0 1-3.562-.439l-.749-.373s-.533-.265-1.471-.804c-.916-.553-2.334-1.315-3.992-2.383c-.418-.265-.87-.536-1.317-.838l-.694-.452l-.713-.365c-.98-.484-1.962-1.037-3.023-1.587c-1.093-.539-2.04-1.186-3.294-1.746c-1.219-.575-2.426-1.212-3.693-1.834c-.648-.291-1.224-.686-1.901-.947l-2.009-.837c-.682-.272-1.333-.581-1.999-.879l-.998-.452c-.334-.149-.703-.244-1.053-.368c-1.425-.461-2.784-1.008-4.175-1.513a214.504 214.504 0 0 1-4.309-1.249l-1.063-.32c-.372-.08-.754-.145-1.12-.235l-2.208-.505c-.741-.159-1.439-.369-2.201-.493l-2.287-.39l-2.256-.411l-.561-.104l-.6-.056l-1.182-.154l-2.345-.319c-.783-.102-1.524-.251-2.373-.269c-.815-.083-1.628-.154-2.432-.253c-.797-.13-1.598-.222-2.38-.391c-1.608-.27-3.299-.477-4.898-.91c-.816-.168-1.597-.465-2.416-.665c-.834-.231-1.672-.415-2.497-.69c-1.661-.48-3.283-1.131-4.924-1.74c-1.681-.595-3.349-1.164-4.994-1.777c-1.645-.615-3.256-1.25-4.903-1.731a427.41 427.41 0 0 1-6.596-2.112a67.4 67.4 0 0 1-1.652 1.876c-.968.981-1.628 2.024-2.457 2.95c-.785.939-1.494 1.827-2.219 2.635a65.357 65.357 0 0 1-1.771 2.249a52.771 52.771 0 0 1-1.353 1.631a115.169 115.169 0 0 1-1.498 3.625a151.783 151.783 0 0 1-2.856 6.159c-.258.548-.546 1.087-.824 1.636a57.032 57.032 0 0 1-.857 1.688a180.287 180.287 0 0 1-5.916 10.505a204.664 204.664 0 0 1-9.231 14.012c-1.618 2.229-3.24 4.383-4.882 6.405a142.912 142.912 0 0 1-4.766 5.69c-3.086 3.503-5.943 6.372-8.076 8.346c-1.044.995-1.984 1.74-2.564 2.263c-.292.264-.551.445-.711.578l-.244.182l-.787.586c-4.625 3.446-11.168 2.49-14.613-2.135a10.637 10.637 0 0 1-1.642-3.285l-.372-1.261c-.196-.793-.573-1.979-.882-3.438a76.857 76.857 0 0 1-1.003-5.239a94.067 94.067 0 0 1-.817-6.686c-.21-2.43-.362-5.05-.39-7.792c-.066-2.754.008-5.625.184-8.581c.178-2.954.484-5.986.901-9.05c.418-3.066.97-6.16 1.646-9.238c.676-3.082 1.459-6.148 2.409-9.146c.356-1.131.728-2.252 1.121-3.364c-1.113.191-2.23.384-3.354.574c-3.645.692-7.34 1.483-11.068 2.32c-3.733.858-7.48 1.83-11.237 2.8c-3.733 1.054-7.482 2.079-11.174 3.161c-3.662 1.133-7.339 2.178-10.838 3.339c-3.547 1.09-6.925 2.257-10.2 3.303l-9.108 3.105a91.417 91.417 0 0 1-3.983 1.387c-1.271.413-2.305.807-3.397 1.133c-1.049.344-2.013.625-2.937 1.021c-.889.365-1.676.649-2.318.878c-1.278.461-2.007.668-2.007.668a6.63 6.63 0 0 1-8.428-6.844s.054-.756.242-2.101c.092-.674.21-1.503.384-2.448c.099-.482.133-.972.315-1.555l.539-1.809c.371-1.279.878-2.734 1.43-4.2a79.814 79.814 0 0 1 1.933-4.679a102.357 102.357 0 0 1 2.63-5.094a103.063 103.063 0 0 1 3.371-5.382c2.535-3.607 5.537-7.392 9.13-10.977c3.545-3.658 7.695-7.079 12.249-10.311a94.746 94.746 0 0 1 15.035-8.487c5.427-2.37 11.176-4.335 17.114-5.736c5.963-1.318 12.08-2.132 18.174-2.302c4.266-.08 8.5.134 12.633.646a35.964 35.964 0 0 0-2.483-3.966c-.546-.801-1.224-1.63-1.865-2.516c-.745-.838-1.446-1.702-2.257-2.613c-1.56-1.782-3.349-3.607-5.102-5.431l-5.333-5.364a417.717 417.717 0 0 1-4.876-4.985c-1.474-1.567-2.755-2.952-3.826-4.211c-1.168-1.206-2.042-2.324-2.656-3.012c-.307-.344-.53-.659-.685-.852l-.233-.3l-.497-.641a5.94 5.94 0 0 1 3.111-9.365s.457-.126 1.302-.32c.84-.175 2.091-.502 3.646-.777c1.619-.24 3.652-.589 5.919-.773l3.638-.326c1.292-.089 2.633-.084 4.059-.125c1.422-.028 2.922.013 4.486.028c1.565.03 3.18.208 4.867.326c3.371.386 6.986.901 10.815 1.932c3.82.979 7.88 2.353 12.001 4.421c4.14 2.009 8.325 4.704 12.307 8.058c.986.854 1.972 1.725 2.95 2.616c.943.931 1.882 1.881 2.813 2.848c.903.986 1.798 1.994 2.684 3.016c.891 1.021 1.677 2.095 2.506 3.164c1.912 2.598 3.629 5.293 5.079 8.014c1.308-1.298 2.662-2.563 4.11-3.716c2.393-2.08 5.01-3.823 7.657-5.563a162.14 162.14 0 0 1 4.089-2.342c1.368-.794 2.794-1.38 4.201-2.06c5.664-2.55 11.53-4.412 17.309-5.416c5.776-1.043 11.472-1.453 16.869-1.174c5.402.237 10.524.995 15.228 2.226c4.711 1.164 9.005 2.811 12.813 4.592c3.805 1.844 7.127 3.803 9.907 5.875c1.385 1.036 2.67 1.957 3.788 3.004c1.129 1.003 2.125 1.865 3.075 2.852a44.854 44.854 0 0 1 2.379 2.52c.538.724.98 1.377 1.337 1.91c.363.519.621.964.802 1.246l.272.435a6.519 6.519 0 0 1-4.226 9.843l-.503.103c-.329.063-.83.183-1.456.278c-.632.109-1.41.238-2.307.348c-.811.217-1.7.434-2.653.662c-.92.248-2.06.482-3.239.753c-.595.145-1.194.266-1.816.395l-1.932.457c-2.621.6-5.499 1.32-8.491 2.053c-3.005.786-6.135 1.563-9.316 2.484c-1.588.427-3.185.887-4.782 1.365l.62.322c2.293 1.111 4.513 2.596 6.688 3.995l3.214 2.104c1.042.743 2.043 1.591 3.041 2.375l2.933 2.377c.479.397.96.778 1.424 1.182l1.341 1.286c1.753 1.73 3.51 3.331 5.053 5.072a358.73 358.73 0 0 1 4.254 5.262c.331.43.683.833.983 1.274l.883 1.316c.578.872 1.153 1.715 1.679 2.574l1.552 2.499c.515.805.894 1.67 1.326 2.47c.826 1.628 1.625 3.151 2.322 4.629c.359.72.668 1.482.958 2.227l.844 2.139c.53 1.379 1.039 2.637 1.444 3.827l.304.865l.207.789l.375 1.466c.49 1.847.802 3.347 1.047 4.348l.341 1.558a5.423 5.423 0 0 1-4.138 6.448z"
        />
        <path
            fill="#F88"
            d="M436.213 277.861c-12.422 0-23.878-8.112-27.568-20.633c-9.414-31.943-26.264-58.173-47.444-73.857c-12.762-9.45-15.447-27.457-5.996-40.219c9.45-12.763 27.457-15.447 40.219-5.997c31.169 23.081 55.455 59.95 68.384 103.816c4.489 15.232-4.22 31.22-19.452 35.709a28.762 28.762 0 0 1-8.143 1.181z"
        />
    </Icon>
);

export const WorkIcon = ({...props}) => (
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
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
    </Icon>
);

export const RestIcon = ({...props}) => (
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
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
        />
    </Icon>
);

export const LongRestIcon = ({...props}) => (
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
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M10.5 8.25h3l-3 4.5h3"
        />
    </Icon>
);
