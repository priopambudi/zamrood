import Destination from "@/components/Destination";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import React from "react";

const Home = () => {
  return (
    <div id="homepage" className="space-y-10">
      <Hero />
      <Service />
      <Destination />
    </div>
  );
};

export default Home;
