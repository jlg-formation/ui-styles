import { InputHTMLAttributes, forwardRef } from "react";

interface RadioButtonProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: string;
  description?: string;
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, description, id, className = "", ...props }, ref) => {
    const inputId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={`radio ${className}`}>
        <input
          ref={ref}
          type="radio"
          id={inputId}
          className="radio__input"
          {...props}
        />
        <label htmlFor={inputId} className="radio__label">
          <span className="radio__circle">
            <span className="radio__dot" />
          </span>
          <span className="radio__content">
            <span className="radio__text">{label}</span>
            {description && (
              <span className="radio__description">{description}</span>
            )}
          </span>
        </label>
      </div>
    );
  }
);

RadioButton.displayName = "RadioButton";
