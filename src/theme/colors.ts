import { alpha } from "@mui/material";

const withAlphas = (c: {
  lightest: string;
  light: string;
  main: string;
  dark: string;
  darkest: string;
  contrastText: string;
}) => {
  return {
    ...c,
    alpha4: alpha(c.main, 0.04),
    alpha8: alpha(c.main, 0.08),
    alpha12: alpha(c.main, 0.12),
    alpha30: alpha(c.main, 0.3),
    alpha50: alpha(c.main, 0.5),
  };
};

export const neutral = {
  50: "#F8F9FA",
  100: "#F3F4F6",
  200: "#E5E7EB",
  300: "#D2D6DB",
  400: "#9DA4AE",
  500: "#6C737F",
  600: "#4D5761",
  700: "#2F3746",
  800: "#1C2536",
  900: "#111927",
};

export const primary = withAlphas({
  lightest: "#99f6e4",
  light: "#5eead4",
  main: "#2dd4bf",
  dark: "#14b8a6",
  darkest: "#0d9488",
  contrastText: "#fff",
});

export const secondary = withAlphas({
  lightest: "#fde68a",
  light: "#fcd34d",
  main: "#fbbf24",
  dark: "#f59e0b",
  darkest: "#d97706",
  contrastText: "#fff",
});

export const success = withAlphas({
  lightest: "#F0FDF9",
  light: "#3FC79A",
  main: "#10B981",
  dark: "#0B815A",
  darkest: "#134E48",
  contrastText: "#FFFFFF",
});

export const info = withAlphas({
  lightest: "#ECFDFF",
  light: "#CFF9FE",
  main: "#06AED4",
  dark: "#0E7090",
  darkest: "#164C63",
  contrastText: "#FFFFFF",
});

export const warning = withAlphas({
  lightest: "#FFFAEB",
  light: "#FEF0C7",
  main: "#F79009",
  dark: "#B54708",
  darkest: "#7A2E0E",
  contrastText: "#FFFFFF",
});

export const error = withAlphas({
  lightest: "#FEF3F2",
  light: "#FEE4E2",
  main: "#F04438",
  dark: "#B42318",
  darkest: "#7A271A",
  contrastText: "#FFFFFF",
});