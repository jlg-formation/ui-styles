import type { TextareaHTMLAttributes } from "react";
import { forwardRef } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, id, className = "", ...props }, ref) => {
    const inputId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div
        className={`form-field ${error ? "form-field--error" : ""} ${className}`}
      >
        {label && (
          <label htmlFor={inputId} className="form-field__label">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className="form-field__textarea"
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

Textarea.displayName = "Textarea";
