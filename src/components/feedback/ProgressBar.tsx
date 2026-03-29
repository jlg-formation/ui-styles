type ProgressBarVariant = "default" | "success" | "warning" | "error";
type ProgressBarSize = "sm" | "md" | "lg";

interface ProgressBarProps {
  value: number;
  max?: number;
  variant?: ProgressBarVariant;
  size?: ProgressBarSize;
  showLabel?: boolean;
  label?: string;
  className?: string;
  animated?: boolean;
}

export function ProgressBar({
  value,
  max = 100,
  variant = "default",
  size = "md",
  showLabel = false,
  label,
  className = "",
  animated = false
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const classes = [
    "progress",
    `progress--${variant}`,
    `progress--${size}`,
    animated && "progress--animated",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {(showLabel || label) && (
        <div className="progress__header">
          {label && <span className="progress__label">{label}</span>}
          {showLabel && (
            <span className="progress__value">{Math.round(percentage)}%</span>
          )}
        </div>
      )}
      <div
        className="progress__track"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div className="progress__bar" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}
