import { useEffect } from "react";
import type { ReactNode } from "react";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  InformationCircleIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";

type ToastVariant = "info" | "success" | "warning" | "error";

interface ToastProps {
  children: ReactNode;
  variant?: ToastVariant;
  onClose?: () => void;
  duration?: number;
  className?: string;
}

const icons = {
  info: InformationCircleIcon,
  success: CheckCircleIcon,
  warning: ExclamationTriangleIcon,
  error: XCircleIcon
};

export function Toast({
  children,
  variant = "info",
  onClose,
  duration = 5000,
  className = ""
}: ToastProps) {
  const classes = ["toast", `toast--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  const Icon = icons[variant];

  useEffect(() => {
    if (duration > 0 && onClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <div className={classes} role="status" aria-live="polite">
      <Icon className="toast__icon" width={20} height={20} />
      <p className="toast__message">{children}</p>
      {onClose && (
        <button
          className="toast__close"
          onClick={onClose}
          aria-label="Fermer la notification"
        >
          <XMarkIcon width={18} height={18} />
        </button>
      )}
    </div>
  );
}

// Toast Container for positioning multiple toasts
interface ToastContainerProps {
  children: ReactNode;
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top-center"
    | "bottom-center";
}

export function ToastContainer({
  children,
  position = "top-right"
}: ToastContainerProps) {
  return (
    <div className={`toast-container toast-container--${position}`}>
      {children}
    </div>
  );
}
