import { UserIcon } from "@heroicons/react/24/solid";

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  status?: "online" | "offline" | "busy" | "away";
  className?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function Avatar({
  src,
  alt,
  name,
  size = "md",
  status,
  className = ""
}: AvatarProps) {
  const classes = ["avatar", `avatar--${size}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {src ? (
        <img
          src={src}
          alt={alt || name || "Avatar"}
          className="avatar__image"
        />
      ) : name ? (
        <span className="avatar__initials">{getInitials(name)}</span>
      ) : (
        <UserIcon className="avatar__placeholder" />
      )}
      {status && (
        <span className={`avatar__status avatar__status--${status}`} />
      )}
    </div>
  );
}

// Avatar Group
interface AvatarGroupProps {
  children: React.ReactNode;
  max?: number;
  size?: AvatarSize;
  className?: string;
}

export function AvatarGroup({
  children,
  max,
  size = "md",
  className = ""
}: AvatarGroupProps) {
  const childArray = React.Children.toArray(children);
  const visibleAvatars = max ? childArray.slice(0, max) : childArray;
  const hiddenCount = max ? Math.max(0, childArray.length - max) : 0;

  return (
    <div className={`avatar-group avatar-group--${size} ${className}`}>
      {visibleAvatars}
      {hiddenCount > 0 && (
        <div className="avatar avatar__overflow">+{hiddenCount}</div>
      )}
    </div>
  );
}

import React from "react";
