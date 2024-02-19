import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4E1D",
  primary: "#FCFC03",
  primaryBright: "#FCFC03",
  primaryDark: "#FCFC03",
  secondary: "#FCFDC7",
  success: "#03D8F3",
  warning: "#98DD28",
};

export const brandColors = {
  binance: "#F0B90B",
  blast: "#FCFDC7"
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#000000",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  invertedContrast: "#11140C",
  // input: "#eeeaf4",
  input: "#646464",
  inputSecondary: "#d7caec",
  tertiary: "#646464",
  text: "#FCFC03",
  textDisabled: "#BDC2C4",
  textSubtle: "#FCFDC7",
  borderColor: "#03D8F3",
  card: "#11140C",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #75835D 0%, #C3D4A5 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#11140C",
  background: "#000000",
  backgroundDisabled: "#3c3742",
  contrast: "#11140C",
  dropdown: "#1E1D20",
  invertedContrast: "#191326",
  // input: "#483f5a",
  input: "#2d2d2d",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#2d2d2d",
  text: "#FCFC03",
  textDisabled: "#666171",
  textSubtle: "#FCFDC7",
  borderColor: "#03D8F3",
  card: "#11140C",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #11140C 0%, #75835D 100%)",
  },
};
