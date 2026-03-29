import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { StyleId } from "../styles/styleList";
import { DEFAULT_STYLE } from "../styles/styleList";

interface StyleContextType {
  currentStyle: StyleId;
  setStyle: (style: StyleId) => void;
}

const StyleContext = createContext<StyleContextType | undefined>(undefined);

const STORAGE_KEY = "ui-styles-current";

interface StyleProviderProps {
  children: ReactNode;
}

export function StyleProvider({ children }: StyleProviderProps) {
  const [currentStyle, setCurrentStyle] = useState<StyleId>(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem(STORAGE_KEY);
    return (saved as StyleId) || DEFAULT_STYLE;
  });

  // Update body class when style changes
  useEffect(() => {
    // Remove all style classes
    document.body.className = document.body.className
      .split(" ")
      .filter((cls) => !cls.startsWith("style-"))
      .join(" ");

    // Add new style class
    document.body.classList.add(`style-${currentStyle}`);

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, currentStyle);
  }, [currentStyle]);

  const setStyle = (style: StyleId) => {
    setCurrentStyle(style);
  };

  return (
    <StyleContext.Provider value={{ currentStyle, setStyle }}>
      {children}
    </StyleContext.Provider>
  );
}

export { StyleContext };
