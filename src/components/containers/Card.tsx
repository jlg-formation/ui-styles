import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  bordered?: boolean;
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function Card({
  children,
  className = "",
  hoverable = false,
  bordered = true
}: CardProps) {
  const classes = [
    "card",
    hoverable && "card--hoverable",
    bordered && "card--bordered",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return <article className={classes}>{children}</article>;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return <header className={`card__header ${className}`}>{children}</header>;
}

export function CardBody({ children, className = "" }: CardBodyProps) {
  return <div className={`card__body ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return <footer className={`card__footer ${className}`}>{children}</footer>;
}

export function CardImage({ src, alt, className = "" }: CardImageProps) {
  return (
    <div className={`card__image ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
}
