import { useStyle } from "../../hooks/useStyle";
import { UI_STYLES } from "../../styles/styleList";

interface StyleSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function StyleSidebar({ isOpen = true, onClose }: StyleSidebarProps) {
  const { currentStyle, changeStyle } = useStyle();

  const handleStyleClick = (styleId: string) => {
    changeStyle(styleId as typeof currentStyle);
    onClose?.();
  };

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`sidebar-overlay ${isOpen ? "sidebar-overlay--visible" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        <div className="sidebar__header">
          <h2 className="sidebar__title">Styles UI</h2>
          <p className="sidebar__subtitle">20 styles à explorer</p>
        </div>

        <nav className="sidebar__nav">
          <ul
            className="sidebar__list"
            role="listbox"
            aria-label="Sélectionner un style"
          >
            {UI_STYLES.map((style) => (
              <li key={style.id} className="sidebar__item">
                <button
                  className={`sidebar__button ${currentStyle === style.id ? "sidebar__button--active" : ""}`}
                  onClick={() => handleStyleClick(style.id)}
                  role="option"
                  aria-selected={currentStyle === style.id}
                >
                  {style.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
