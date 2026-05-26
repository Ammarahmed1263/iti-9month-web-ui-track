import "@fontsource/lora/400.css";
import "@fontsource/lora/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { extendTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./index.css";
import App from "./App.jsx";

const theme = extendTheme({
  colorSchemes: {
    light: true,
  },
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',

    h1: { fontFamily: '"Lora", serif', fontWeight: 700 },
    h2: { fontFamily: '"Lora", serif', fontWeight: 700 },
    h3: { fontFamily: '"Lora", serif', fontWeight: 700 },
    h4: { fontFamily: '"Lora", serif', fontWeight: 700 },
    h5: { fontFamily: '"Lora", serif', fontWeight: 700 },
    h6: { fontFamily: '"Lora", serif', fontWeight: 700 },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
