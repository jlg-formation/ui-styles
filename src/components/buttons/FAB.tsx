import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type FABSize = "sm" | "md" | "lg";
type FABPosition = "bottom-right" | "bottom-left" | "bottom-center";

interface FABProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  size?: FABSize;
  position?: FABPosition;
  label?: string;
  extended?: boolean;
  "aria-label": string;
}

export const FAB = forwardRef<HTMLButtonElement, FABProps>(
  (
    {
      icon,
      size = "md",
      position = "bottom-right",
      label,
      extended = false,
      className = "",
      ...props
    },
    ref
  ) => {
    const classes = [
      "fab",
      `fab--${size}`,
      `fab--${position}`,
      extended && "fab--extended",
      className
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button ref={ref} className={classes} {...props}>
        <span className="fab__icon">{icon}</span>
        {extended && label && <span className="fab__label">{label}</span>}
      </button>
    );
  }
);

FAB.displayName = "FAB";
