interface ThumbnailProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  aspectRatio?: "1:1" | "4:3" | "16:9";
  rounded?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Thumbnail({
  src,
  alt,
  size = "md",
  aspectRatio = "1:1",
  rounded = false,
  className = "",
  onClick
}: ThumbnailProps) {
  const classes = [
    "thumbnail",
    `thumbnail--${size}`,
    `thumbnail--${aspectRatio.replace(":", "-")}`,
    rounded && "thumbnail--rounded",
    onClick && "thumbnail--clickable",
    className
  ]
    .filter(Boolean)
    .join(" ");

  const Component = onClick ? "button" : "div";

  return (
    <Component
      className={classes}
      onClick={onClick}
      {...(onClick ? { type: "button" } : {})}
    >
      <img src={src} alt={alt} className="thumbnail__image" />
    </Component>
  );
}
