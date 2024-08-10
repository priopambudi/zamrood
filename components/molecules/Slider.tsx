"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface props {
  images?: {
    itinerary_id: string;
    gallery_id: number;
    gallery_alt_text: string;
    gallery_path: string;
    src: string;
    title: string;
  }[];
  imgstring?: string[];
  delay?: number;
}

const Slider = ({ images = [], imgstring = [], delay = 2500 }: props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex ===
          (images.length > 0 ? images?.length : imgstring?.length) - 1
            ? 0
            : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);

  if (imgstring.length > 0) {
    return (
      <div id="slider" className="relative w-full h-full">
        {imgstring.map((img, indx) => (
          <Image
            key={img}
            src={img}
            alt={img}
            width={500}
            height={300}
            className={cn(
              "w-full h-full object-cover absolute transition-all",
              indx === index ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
      </div>
    );
  }

  return (
    <div id="slider" className="relative w-full h-full">
      {images.map((img, indx) => (
        <Image
          key={img.gallery_id}
          src={img.src}
          alt={img.gallery_alt_text}
          width={500}
          height={300}
          className={cn(
            "w-full h-full object-cover absolute transition-all",
            indx === index ? "opacity-100" : "opacity-0"
          )}
        />
      ))}
    </div>
  );
};

export default Slider;
