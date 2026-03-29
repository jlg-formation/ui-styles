import { forwardRef, useState, useId } from "react";
import type { InputHTMLAttributes } from "react";

interface RangeSliderProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: string;
  showValue?: boolean;
  min?: number;
  max?: number;
  step?: number;
}

export const RangeSlider = forwardRef<HTMLInputElement, RangeSliderProps>(
  (
    {
      label,
      showValue = true,
      min = 0,
      max = 100,
      step = 1,
      value,
      defaultValue,
      id,
      className = "",
      onChange,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    // Controlled: use value prop directly; Uncontrolled: use internal state
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue ?? min);
    const currentValue = isControlled ? value : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(Number(e.target.value));
      }
      onChange?.(e);
    };

    const percentage = ((Number(currentValue) - min) / (max - min)) * 100;

    return (
      <div className={`range-slider ${className}`}>
        {(label || showValue) && (
          <div className="range-slider__header">
            {label && (
              <label htmlFor={inputId} className="range-slider__label">
                {label}
              </label>
            )}
            {showValue && (
              <span className="range-slider__value">{currentValue}</span>
            )}
          </div>
        )}
        <div className="range-slider__track-container">
          <input
            ref={ref}
            type="range"
            id={inputId}
            className="range-slider__input"
            min={min}
            max={max}
            step={step}
            value={currentValue}
            onChange={handleChange}
            style={
              { "--range-progress": `${percentage}%` } as React.CSSProperties
            }
            {...props}
          />
        </div>
      </div>
    );
  }
);

RangeSlider.displayName = "RangeSlider";
