import { forwardRef, useId } from "react";
import type { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    { label, error, hint, id, className = "", type = "text", ...props },
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
        <input
          ref={ref}
          type={type}
          id={inputId}
          className="form-field__input"
          aria-invalid={!!error}
          aria-describedby={
            error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
          }
          {...props}
        />
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

TextInput.displayName = "TextInput";
