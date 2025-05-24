import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@mantine/core/styles.css";
import {
  createTheme,
  MantineColorsTuple,
  MantineProvider,
} from "@mantine/core";

const primary: MantineColorsTuple = [
  "#ebfcf1",
  "#d7f9e3",
  "#aff3c7",
  "#86edab",
  "#5ee78f",
  "#38e07b", // Your main color
  "#2db462",
  "#228849",
  "#175c31",
  "#0c3018"
];

const theme = createTheme({
  fontFamily: "Spline Sans, sans-serif",
  colors: {
    primary,
  },
  primaryColor: "primary",
  primaryShade: { light: 5, dark: 5 },
});

createRoot(document.getElementById("root")!).render(
  <MantineProvider
    theme={theme}
    defaultColorScheme="light"
  >
    <StrictMode>
      <App />
    </StrictMode>
  </MantineProvider>
);
