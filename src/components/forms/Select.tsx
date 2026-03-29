import { forwardRef, useId } from "react";
import type { SelectHTMLAttributes } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "children"
> {
  label?: string;
  error?: string;
  hint?: string;
  options: SelectOption[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { label, error, hint, options, placeholder, id, className = "", ...props },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <div
        className={`form-field ${error ? "form-field--error" : ""} ${className}`}
      >
        {label && (
          <label htmlFor={inputId} className="form-field__label">
            {label}
          </label>
        )}
        <div className="form-field__select-wrapper">
          <select
            ref={ref}
            id={inputId}
            className="form-field__select"
            aria-invalid={!!error}
            aria-describedby={
              error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
            }
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDownIcon
            className="form-field__select-icon"
            width={20}
            height={20}
          />
        </div>
        {hint && !error && (
          <span id={`${inputId}-hint`} className="form-field__hint">
            {hint}
          </span>
        )}
        {error && (
          <span
            id={`${inputId}-error`}
            className="form-field__error"
            role="alert"
          >
            {error}
          </span>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
