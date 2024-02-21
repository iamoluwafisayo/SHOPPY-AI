import { blue, grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: blue[600],
    },
    mainColor: "#0b0f19",
    accent: {
      greenish: "#99d1a6",
      purplish: "#a288ec",
      orangish: "#ffa071",
    },
    sidebar: {
      background: "#111827",
      hoverBg: "#172032",
      hoverMobile: "#3f4554",
      textColor: "#949ca9",
    },
    status: {
      red: "#fc424a",
      orange: "#fea73e",
      green: "#22c38f",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
    text: {
      primary: "#5f6470",
      secondary: grey[700],
      black: "#000",
      white: "#fff",
    },
    divider: "rgba(129, 139, 156, 0.1)",
    chatBox: "#dfe5f1",

    // Customized colors
    grey: {
      light: "#f2f2f2",
      lightHover: "#ebebeb",
      lightActive: "#d6d6d6",
      normal: "#7b7b7b",
      normalHover: "#6f6f6f",
      normalActive: "#626262",
      dark: "#5c5c5c",
      darkHover: "#4a4a4a",
      darkActive: "#373737",
      darker: "#2b2b2b",
    },
    blue: {
      light: "#e8ebf8",
      lightHover: "#dce1f5",
      lightActive: "#b6c2ea",
      normal: "#153aba",
      normalHover: "#1334a7",
      normalActive: "#112e95",
      dark: "#102c8c",
      darkHover: "#0d2370",
      darkActive: "#091a54",
      darker: "#071441",
    },
    red: {
      light: "#fae6e6",
      lightHover: "#f7d9d9",
      lightActive: "#efb0b0",
      normal: "#cb0000",
      normalHover: "#b70000",
      normalActive: "#a20000",
      dark: "#980000",
      darkHover: "#7a0000",
      darkActive: "#5b0000",
      darker: "#470000",
    },
  },
});
