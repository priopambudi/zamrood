import { cn } from "@/lib/utils";
import Image from "next/image";

import colorseparator from "@/public/img/separator.png";
import whiteseparator from "@/public/img/whiteseparator.png";

interface separatorPorps {
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export const Separator = {
  color: ({ alt, width, height, className }: separatorPorps) => (
    <Image
      src={colorseparator}
      alt={alt}
      width={width}
      height={height}
      className={cn("w-full", className)}
    />
  ),
  white: ({ alt, width, height, className }: separatorPorps) => (
    <Image
      src={colorseparator}
      alt={alt}
      width={width}
      height={height}
      className={cn("w-full", className)}
    />
  ),
};
