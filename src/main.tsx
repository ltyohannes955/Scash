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
  "#E6E7F4",
  "#CDCFE9",
  "#9BA0D3",
  "#686FBC",
  "#3540A5",
  "#040F6A", // Your main color
  "#030C55",
  "#020940",
  "#01062B",
  "#010416"
];

const theme = createTheme({
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
