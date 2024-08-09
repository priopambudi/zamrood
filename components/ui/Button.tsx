import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps {
  children: React.ReactNode | string;
  className?: string;
  type?: "fill" | "outline";
}

const Button = ({ children, className, type = "fill" }: ButtonProps) => {
  let baseClass = "py-3 px-5 rounded-full text-base font-bold cursor-pointer";

  if (type === "fill") {
    baseClass =
      "text-primary-text bg-secondary-text py-3 px-5 rounded-full text-base font-bold";
  } else {
    baseClass =
      "text-primary-text py-3 px-5 border rounded-full text-base font-bold";
  }

  return <button className={cn(baseClass, className)}>{children}</button>;
};

export default Button;
