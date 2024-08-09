"use client";
import React, { useEffect, useState } from "react";

import { Icons } from "./ui/Icons";
import { CardDestination } from "./molecules/CardDestination";
import { destinationData } from "@/interfaces/GeneralTypes";

const Destination = () => {
  const [destinations, setDestinations] = useState<destinationData[] | []>([]);
  useEffect(() => {
    const fetchData = () => {
      fetch("/api/zamrood/itinerary?highlight=true")
        .then((res) => res.json())
        .then((data) => {
          setDestinations(data.data);
        });
    };

    fetchData();
  }, []);

  return (
    <section id="destination" className="container px-4 sm:px-6 mx-auto">
      <div className="bread flex flex-col md:flex-row md:items-center gap-2 md:gap-6 pb-6 md:pt-6">
        <h2 className="font-unbounded text-xl md:text-3xl font-bold text-secondary-text">
          Destinations
        </h2>
        <div className="chevron-wrapper flex items-center gap-4">
          <Icons.chevron className="size-10 md:size-11" />
          <p className="text-base text-secondary-text uppercase font-bold md:font-normal">
            Explore more
          </p>
        </div>
      </div>
      <div className="card-list-wrapper space-y-8 md:space-y-0">
        {destinations.map((data: destinationData, indx: number) => (
          <CardDestination.list
            key={data.itinerary_id}
            image={data.related_galleries[0].src}
            days={data.itinerary_day}
            title={data.itinerary_name}
            description={data.itinerary_short_description}
            organizer={data.partner_name}
            price={data.related_variant.itinerary_variant_pub_price}
            discprice={data.related_variant.itinerary_variant_disc_price}
            direction={indx % 2 ? "right" : "left"}
          />
        ))}
      </div>
      <div className="card-scroll mt-custom py-6 flex overflow-x-scroll gap-6">
        {destinations.map((data: destinationData, indx: number) => (
          <CardDestination.scroll
            key={data.itinerary_id}
            image={data.related_galleries[0].src}
            days={data.itinerary_day}
            title={data.itinerary_name}
            description={data.itinerary_short_description}
            organizer={data.partner_name}
            price={data.related_variant.itinerary_variant_pub_price}
            discprice={data.related_variant.itinerary_variant_disc_price}
            direction={indx % 2 ? "right" : "left"}
          />
        ))}
      </div>
      <div className="flex w-full justify-center md:justify-end">
        <div className="flex gap-4 items-center md:mx-0 my-14 cursor-pointer justify-end">
          <Icons.chevron />
          <p className="font-bold uppercase text-secondary-text">
            Explore more
          </p>
        </div>
      </div>
    </section>
  );
};

export default Destination;
