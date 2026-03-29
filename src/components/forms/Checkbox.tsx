import { InputHTMLAttributes, forwardRef } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: string;
  description?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, id, className = "", ...props }, ref) => {
    const inputId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={`checkbox ${className}`}>
        <input
          ref={ref}
          type="checkbox"
          id={inputId}
          className="checkbox__input"
          {...props}
        />
        <label htmlFor={inputId} className="checkbox__label">
          <span className="checkbox__box">
            <CheckIcon className="checkbox__icon" width={14} height={14} />
          </span>
          <span className="checkbox__content">
            <span className="checkbox__text">{label}</span>
            {description && (
              <span className="checkbox__description">{description}</span>
            )}
          </span>
        </label>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
