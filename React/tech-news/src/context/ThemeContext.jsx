import { createContext, useContext, useState, useEffect, useCallback } from "react";

const ThemeContext = createContext();
const STORAGE_KEY = "theme";

const getSystemPreference = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const resolveTheme = (choice) => {
  if (choice === "system") return getSystemPreference();
  return choice;
};

const applyTheme = (resolved) => {
  document.documentElement.setAttribute("data-theme", resolved);
};

const getStoredTheme = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return "system";
};

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(getStoredTheme);

  const [resolvedTheme, setResolvedTheme] = useState(() =>
    resolveTheme(getStoredTheme()),
  );

  const setTheme = useCallback((choice) => {
    localStorage.setItem(STORAGE_KEY, choice);
    const resolved = resolveTheme(choice);
    setThemeState(choice);
    setResolvedTheme(resolved);
    applyTheme(resolved);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  useEffect(() => {
    if (theme !== "system") return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      const resolved = e.matches ? "dark" : "light";
      setResolvedTheme(resolved);
      applyTheme(resolved);
    };

    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
