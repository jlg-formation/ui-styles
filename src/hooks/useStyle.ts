import { useStyleContext } from "./useStyleContext";
import { UI_STYLES } from "../styles/styleList";
import type { StyleId } from "../styles/styleList";

export function useStyle() {
  const { currentStyle, setStyle } = useStyleContext();

  const currentStyleInfo = UI_STYLES.find((s) => s.id === currentStyle);

  const changeStyle = (styleId: StyleId) => {
    setStyle(styleId);
  };

  const nextStyle = () => {
    const currentIndex = UI_STYLES.findIndex((s) => s.id === currentStyle);
    const nextIndex = (currentIndex + 1) % UI_STYLES.length;
    setStyle(UI_STYLES[nextIndex].id);
  };

  const previousStyle = () => {
    const currentIndex = UI_STYLES.findIndex((s) => s.id === currentStyle);
    const prevIndex = (currentIndex - 1 + UI_STYLES.length) % UI_STYLES.length;
    setStyle(UI_STYLES[prevIndex].id);
  };

  return {
    currentStyle,
    currentStyleInfo,
    styles: UI_STYLES,
    changeStyle,
    nextStyle,
    previousStyle
  };
}
