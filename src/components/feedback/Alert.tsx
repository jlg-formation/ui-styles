import type { ReactNode } from "react";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  InformationCircleIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";

type AlertVariant = "info" | "success" | "warning" | "error";

interface AlertProps {
  children: ReactNode;
  variant?: AlertVariant;
  title?: string;
  onClose?: () => void;
  className?: string;
}

const icons = {
  info: InformationCircleIcon,
  success: CheckCircleIcon,
  warning: ExclamationTriangleIcon,
  error: XCircleIcon
};

export function Alert({
  children,
  variant = "info",
  title,
  onClose,
  className = ""
}: AlertProps) {
  const classes = ["alert", `alert--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  const Icon = icons[variant];

  return (
    <div className={classes} role="alert">
      <Icon className="alert__icon" width={24} height={24} />
      <div className="alert__content">
        {title && <strong className="alert__title">{title}</strong>}
        <p className="alert__message">{children}</p>
      </div>
      {onClose && (
        <button
          className="alert__close"
          onClick={onClose}
          aria-label="Fermer l'alerte"
        >
          <XMarkIcon width={20} height={20} />
        </button>
      )}
    </div>
  );
}
