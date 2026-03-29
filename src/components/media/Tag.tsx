import type { ReactNode } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

type TagVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "info";
type TagSize = "sm" | "md" | "lg";

interface TagProps {
  children: ReactNode;
  variant?: TagVariant;
  size?: TagSize;
  removable?: boolean;
  onRemove?: () => void;
  icon?: ReactNode;
  className?: string;
}

export function Tag({
  children,
  variant = "default",
  size = "md",
  removable = false,
  onRemove,
  icon,
  className = ""
}: TagProps) {
  const classes = ["tag", `tag--${variant}`, `tag--${size}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes}>
      {icon && <span className="tag__icon">{icon}</span>}
      <span className="tag__text">{children}</span>
      {removable && onRemove && (
        <button
          className="tag__remove"
          onClick={onRemove}
          aria-label="Supprimer le tag"
        >
          <XMarkIcon width={14} height={14} />
        </button>
      )}
    </span>
  );
}
