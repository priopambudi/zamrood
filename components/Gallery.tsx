import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Separator } from "./ui/Separator";

const galleries = [
  "https://www.zamrood.com/_next/image?url=%2Fimages%2Ffootages%2Ffootage-1.webp&w=1920&q=75",
  "https://www.zamrood.com/_next/image?url=%2Fimages%2Ffootages%2Ffootage-2.jpg&w=1920&q=75",
  "https://www.zamrood.com/_next/image?url=%2Fimages%2Ffootages%2Ffootage-3.webp&w=1920&q=75",
  "https://www.zamrood.com/_next/image?url=%2Fimages%2Ffootages%2Ffootage-1.webp&w=1920&q=75",
  "https://www.zamrood.com/_next/image?url=%2Fimages%2Ffootages%2Ffootage-2.jpg&w=1920&q=75",
  "https://www.zamrood.com/_next/image?url=%2Fimages%2Ffootages%2Ffootage-3.webp&w=1920&q=75",
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-14 bg-gold">
      <div className="container px-4 sm:px-6 mx-auto">
        <h1 className="font-the-signature text-[52px] lg:text-[72px] text-secondary-text">
          Luxury Footages
        </h1>
        <div className="grid grid-cols-3 gap-6">
          {galleries.map((img: string, indx) => (
            <React.Fragment key={indx}>
              {indx === 3 && (
                <Separator.white alt="Zamrood" className="col-span-full" />
              )}
              <div className="aspect-square cursor-pointer" key={img}>
                <Image
                  src={img}
                  alt="Zamrood"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
