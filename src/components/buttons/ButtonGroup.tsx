import { ReactNode } from "react";

interface ButtonGroupProps {
  children: ReactNode;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function ButtonGroup({
  children,
  orientation = "horizontal",
  className = ""
}: ButtonGroupProps) {
  const classes = ["btn-group", `btn-group--${orientation}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} role="group">
      {children}
    </div>
  );
}
