import type { ButtonHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";

type IconButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type IconButtonSize = "sm" | "md" | "lg";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  "aria-label": string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, variant = "ghost", size = "md", className = "", ...props }, ref) => {
    const classes = [
      "icon-btn",
      `icon-btn--${variant}`,
      `icon-btn--${size}`,
      className
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button ref={ref} className={classes} {...props}>
        {icon}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
