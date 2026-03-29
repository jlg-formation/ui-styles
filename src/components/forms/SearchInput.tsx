import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface SearchInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: string;
  onSearch?: (value: string) => void;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ label, onSearch, className = "", ...props }, ref) => {
    const inputId = `search-input-${Math.random().toString(36).substr(2, 9)}`;

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && onSearch) {
        onSearch(e.currentTarget.value);
      }
    };

    return (
      <div className={`form-field form-field--search ${className}`}>
        {label && (
          <label htmlFor={inputId} className="form-field__label">
            {label}
          </label>
        )}
        <div className="form-field__input-wrapper">
          <MagnifyingGlassIcon
            className="form-field__icon"
            width={20}
            height={20}
          />
          <input
            ref={ref}
            type="search"
            id={inputId}
            className="form-field__input form-field__input--with-icon"
            onKeyDown={handleKeyDown}
            {...props}
          />
        </div>
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
