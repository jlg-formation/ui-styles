import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      isLoading = false,
      fullWidth = false,
      className = "",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const classes = [
      "btn",
      `btn--${variant}`,
      `btn--${size}`,
      fullWidth && "btn--full-width",
      isLoading && "btn--loading",
      className
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <span className="btn__spinner" aria-hidden="true" />}
        {!isLoading && leftIcon && (
          <span className="btn__icon btn__icon--left">{leftIcon}</span>
        )}
        <span className="btn__text">{children}</span>
        {!isLoading && rightIcon && (
          <span className="btn__icon btn__icon--right">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
