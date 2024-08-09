import React from "react";

import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={cn("container px-4 sm:px-6 mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
