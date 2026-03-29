type SpinnerSize = "sm" | "md" | "lg";

interface SpinnerProps {
  size?: SpinnerSize;
  className?: string;
  label?: string;
}

export function Spinner({
  size = "md",
  className = "",
  label = "Chargement..."
}: SpinnerProps) {
  const classes = ["spinner", `spinner--${size}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} role="status" aria-label={label}>
      <svg className="spinner__svg" viewBox="0 0 50 50">
        <circle
          className="spinner__circle"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
        />
      </svg>
      <span className="visually-hidden">{label}</span>
    </div>
  );
}
