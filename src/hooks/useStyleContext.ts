import { useContext } from "react";
import { StyleContext } from "../context/StyleContext";

export function useStyleContext() {
  const context = useContext(StyleContext);
  if (context === undefined) {
    throw new Error("useStyleContext must be used within a StyleProvider");
  }
  return context;
}
