"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}
interface ThemeContextProps {
  theme?: string;
  toggle?: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    
    return value || "dark";
  }
  return "dark"; 
};

export const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>(() => getFromLocalStorage());

  const toggle = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
