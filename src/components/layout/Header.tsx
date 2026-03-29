import { Bars3Icon } from "@heroicons/react/24/outline";
import { useStyle } from "../../hooks/useStyle";

interface HeaderProps {
  onMenuToggle: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  const { currentStyleInfo } = useStyle();

  return (
    <header className="header">
      <div className="header__logo">
        <button
          className="mobile-menu-toggle"
          onClick={onMenuToggle}
          aria-label="Ouvrir le menu"
        >
          <Bars3Icon width={24} height={24} />
        </button>
        <h1 className="header__title">UI Styles Showcase</h1>
      </div>

      {currentStyleInfo && (
        <span className="header__current-style">{currentStyleInfo.name}</span>
      )}
    </header>
  );
}
