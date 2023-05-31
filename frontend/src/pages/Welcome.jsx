import React, { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Feedback from "../components/Feedback";
import { background } from "../assets";

const Welcome = () => {
  return (
    <>
      <div className="relative z-0 bg-white">
        <div
          className="bg-cover bg-center bg-no-repeat min-h-screen"
          style={{ backgroundImage: `url(${background})` }}
        >
          <Hero />
        </div>
        <About />

        <Contact />
        <Feedback />
      </div>
    </>
  );
};

export default Welcome;
