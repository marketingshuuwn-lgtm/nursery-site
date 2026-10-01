import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "light" | "outlineLight";
type ButtonSize = "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-colors duration-200";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-forest-700 text-white hover:bg-forest-800",
  outline:
    "border border-forest-300 bg-transparent text-forest-800 hover:border-forest-400 hover:bg-forest-50",
  light: "bg-white text-forest-900 hover:bg-cream-100",
  outlineLight: "border border-white/40 bg-transparent text-white hover:bg-white/10",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  external?: boolean;
  className?: string;
  onClick?: () => void;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  return (
    <a
      href={href}
      onClick={onClick}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
