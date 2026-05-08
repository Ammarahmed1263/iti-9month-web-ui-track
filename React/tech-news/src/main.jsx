import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

import { AuthProvider } from "./context/AuthContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <Toaster
            toastOptions={{
              duration: 5000,
              style: {
                background: "var(--bg-secondary)",
                color: "var(--text-heading)",
                border: "1px solid var(--border)",
                fontFamily: "var(--font-body)",
                padding: "12px 16px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              },
              success: {
                iconTheme: {
                  primary: "var(--accent)",
                  secondary: "var(--bg-main)",
                },
              },
              error: {
                iconTheme: {
                  primary: "#ef4444",
                  secondary: "var(--bg-main)",
                },
              },
            }}
          />
          <App />
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  </StrictMode>,
);
