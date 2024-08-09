import Image from "next/image";
import React from "react";

import Button from "@/components/ui/Button";

import hero from "@/public/img/hero.jpeg";
import Container from "./ui/Container";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex place-items-center h-screen sm:h-[756px] lg:h-[810px]"
    >
      <Image
        src={hero}
        alt="Zamrood by Pandooin"
        fetchPriority="high"
        fill
        className="absolute h-full w-full z-0 object-cover"
      />
      <Container className="hero-description absolute inset-x-0 py-52 w-full max-w-7xl mx-auto text-center lg:text-left">
        <h2 className="font-unbounded text-primary-text font-bold text-2xl md:text-5xl text-center md:text-left">
          Beyond Expectation
        </h2>
        <p className="text-primary-text text-base md:text-xl text-center md:text-left max-w-max md:max-w-[35rem] mt-2">
          Experience the finest that Indonesia has to offer with our curated
          selection of premium trips, ensuring comfort every step of the way
        </p>
        <div className="mt-3 mx-auto md:mx-0 w-max">
          <Button type="outline">Take me there</Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
