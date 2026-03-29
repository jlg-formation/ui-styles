import { forwardRef, useId } from "react";
import type { InputHTMLAttributes } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";

interface DatePickerProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: string;
  error?: string;
  hint?: string;
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  ({ label, error, hint, id, className = "", ...props }, ref) => {
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
        <div className="form-field__input-wrapper">
          <CalendarIcon className="form-field__icon" width={20} height={20} />
          <input
            ref={ref}
            type="date"
            id={inputId}
            className="form-field__input form-field__input--with-icon form-field__input--date"
            aria-invalid={!!error}
            aria-describedby={
              error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
            }
            {...props}
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

DatePicker.displayName = "DatePicker";
