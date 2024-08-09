import Articles from "@/components/Articles";
import Destination from "@/components/Destination";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import MiniBanner from "@/components/MiniBanner";
import Service from "@/components/Service";
import React from "react";

const Home = () => {
  return (
    <div id="homepage" className="space-y-10">
      <Hero />
      <Service />
      <Destination />
      <Gallery />
      <MiniBanner />
      <Articles />
    </div>
  );
};

export default Home;
