import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Button from "../ui/Button";

interface CradProps {
  image?: string | StaticImageData;
  images?: string[];
  days: number;
  title: string;
  organizer: string;
  description?: string;
  price: string;
  discprice?: string;
  direction?: "left" | "right";
}

export const CardDestination = {
  list: ({
    image = "",
    days,
    title,
    organizer,
    description,
    price,
    discprice,
    direction,
  }: CradProps) => (
    <div id="cardlist" className="md:py-custom">
      <div
        className={cn(
          "flex items-start justify-between md:h-[400px] md:flex-row",
          direction === "right" ? "flex-col-reverse" : "flex-col"
        )}
      >
        {direction === "left" && (
          <div className="img-wrap w-full h-64 md:h-full md:w-1/2">
            <Image
              src={image}
              alt={title}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div
          className={cn(
            "card-description w-full md:w-1/2 h-full flex flex-col justify-between",
            direction === "left" ? "md:pl-6" : "md:pr-6"
          )}
        >
          <div className="mt-4 md:mt-0">
            <p className="uppercase text-secondary-text text-base">
              {days} days {days - 1} nights
            </p>
            <h3 className="font-bold text-base md:text-4xl text-tertiary-text font-unbounded w-10/12 md:my-2 line-clamp-2">
              {title}
            </h3>
            <p className="font-bold text-secondary-text text-xs md:text-base">
              Organized by {organizer}
            </p>
            <p className="text-secondary-text mt-2 md:w-9/12 line-clamp-6 text-xs md:text-base">
              {description}
            </p>
          </div>
          <div className="flex justify-between items-end mt-6 md:mt-0">
            <div>
              <p className="font-bold text-secondary-text text-xs md:text-base">
                Start from
              </p>
              <p className="font-bold text-muted-text -my-2 line-through hidden md:block">
                IDR {discprice}
              </p>
              <p className="font-semibold text-lg md:text-3xl text-tertiary-text">
                IDR {price}
              </p>
            </div>
            <Button
              type="outline"
              className="text-secondary-text border-2 border-secondary-text font-bold p-4"
            >
              See Details
            </Button>
          </div>
        </div>
        {direction === "right" && (
          <div className="img-wrap w-full  h-64 md:h-full md:w-1/2">
            <Image
              src={image}
              alt={title}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  ),

  scroll: ({ image = "", days, title, organizer, price }: CradProps) => (
    <div id="cardscroll" className="space-y-6 cursor-pointer max-w-64">
      <div className="img-wrap size-64">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="title-wrap">
        <p className="text-sm text-secondary-text uppercase">
          {days} Days {days - 1} Nights
        </p>
        <h3 className="font-bold font-unbounded text-base line-clamp-2 text-tertiary-text">
          {title}
        </h3>
        <p className="text-sm text-secondary-text uppercase">
          Organized by {organizer}
        </p>
      </div>
      <div className="price-wrap">
        <p className="text-xs text-secondary-text">Start from</p>
        <p className="text-secondary-text font-bold text-base">IDR {price}</p>
      </div>
      <Button
        type="outline"
        className="text-secondary-text border-2 border-secondary-text font-bold p-4"
      >
        See Details
      </Button>
    </div>
  ),
};
