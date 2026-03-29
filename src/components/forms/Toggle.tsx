import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";

interface ToggleProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: string;
  description?: string;
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ label, description, id, className = "", ...props }, ref) => {
    const inputId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={`toggle ${className}`}>
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          id={inputId}
          className="toggle__input"
          {...props}
        />
        <label htmlFor={inputId} className="toggle__label">
          <span className="toggle__track">
            <span className="toggle__thumb" />
          </span>
          <span className="toggle__content">
            <span className="toggle__text">{label}</span>
            {description && (
              <span className="toggle__description">{description}</span>
            )}
          </span>
        </label>
      </div>
    );
  }
);

Toggle.displayName = "Toggle";
