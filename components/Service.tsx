import React from "react";
import Image from "next/image";

import CardService from "./molecules/CardService";
import { dataHome } from "@/data/dataHome";
import tailor from "@/public/img/tailored.png";
import Button from "./ui/Button";
import { Separator } from "./ui/Separator";

const Priority = () => {
  return (
    <section id="priority" className="container px-4 sm:px-6 mx-auto">
      <div className="mt-custom">
        <h1 className="font-the-signature text-secondary-text text-[54px] lg:text-[85px] text-center -mb-7">
          Beyond Premium
        </h1>
        <h2 className="font-unbounded text-xl md:text-3xl font-bold text-center uppercase text-secondary-text">
          Elevate your experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 mt-4 md:mt-custom">
          {dataHome.services.map((service) => (
            <CardService
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        <div className="flex flex-col flex-wrap md:flex-row md:my-custom mt-14 items-center justify-center md:justify-center md:gap-6">
          <div className="tailored-wrap h-44 md:h-80">
            <Image
              src={tailor}
              alt="Zamrood"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="tailored-description md:w-min">
            <h3 className="font-unbounded text-secondary-text font-bold text-2xl px-6 text-center md:text-3xl md:text-start md:px-0 md:w-max">
              Discover Tailored Experiences
            </h3>
            <p className="font-normal text-center md:text-start md:my-2 md:w-11/12">
              Create your own journey, personalized to suit your preferences and
              interests, ensuring a once-in-a-lifetime adventure awaits.
            </p>
            <Button className="w-full mt-4 md:w-max">
              Customize Your Trip
            </Button>
          </div>
        </div>
        <Separator.color alt="Zamrood" className="my-14 md:mt-0" />
      </div>
    </section>
  );
};

export default Priority;
