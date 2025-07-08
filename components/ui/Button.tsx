import React from "react";
import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Variant = "default" | "outline" | "destructive";

type ButtonProps = {
  variant?: Variant;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  variant = "default",
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles = "px-4 py-2 rounded-md transition-colors duration-200";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    destructive: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
