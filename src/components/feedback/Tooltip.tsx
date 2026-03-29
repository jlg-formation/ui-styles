import type { ReactNode } from "react";
import { useState } from "react";

type TooltipPosition = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  children: ReactNode;
  content: string;
  position?: TooltipPosition;
  className?: string;
}

export function Tooltip({
  children,
  content,
  position = "top",
  className = ""
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const classes = ["tooltip-wrapper", className].filter(Boolean).join(" ");

  const tooltipClasses = [
    "tooltip",
    `tooltip--${position}`,
    isVisible && "tooltip--visible"
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      <div className={tooltipClasses} role="tooltip" aria-hidden={!isVisible}>
        {content}
        <span className="tooltip__arrow" />
      </div>
    </div>
  );
}
