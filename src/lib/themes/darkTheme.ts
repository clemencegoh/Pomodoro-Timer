import { extendTheme } from '@chakra-ui/react'

const fonts =  {
  heading: `'Open Sans', sans-serif`,
  body: `'Raleway', sans-serif`,
};

const styles = {
  global: {
    body: {
      bg: "darkByzantineBlue",
    },
    h1: {
      color: "lavenderMist",
    },
    h2: {
      color: "lavenderMist",
    },
    h3: {
      color: "lavenderMist",
    },
    h4: {
      color: "lavenderMist",
    },
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const textStyles = {
  h1: {
    // you can also use responsive styles
    fontSize: ["80px", "100px"],
    fontWeight: "bold",
    letterSpacing: ["-4px", "-5px"],
  },
  h2: {
    fontSize: ["20px", "28px"],
    fontWeight: "bold",
  },
  h3: {
    fontSize: ["14px", "16px"],
    fontWeight: "bold",
    letterSpacing: ["13.125px", "15px"],
  },
  h4: {
    fontSize: ["11px", "13px"],
    fontWeight: "bold",
    letterSpacing: ["4.231px", "5px"],
  },
  body1: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  body2: {
    fontSize: "12px",
    fontWeight: "bold",
  },
};

export const colors = {
  pastelRed: "#F87070",
  electricBlue: "#70F3F8",
  heliotrope: "#D881F8",
  darkBlueBlack: "#161932",
  lavenderMist: "#D7E0FF",
  ghostWhite: "#EFF1FA",
  darkByzantineBlue: "#1E213F",
};

const darkTheme = extendTheme({
  styles,
  fonts,
  config,
  textStyles,
  colors,
});

export default darkTheme;