import React from "react";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen xl:max-h-[800px] relative bg-no-repeat bg-cover"
      style={{ backgroundImage: "url(/hero.jpeg)" }}
    >
      <div className="container px-6 mx-auto max-w-5xl h-full flex items-end">
        <div className="hero-description mb-40">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
