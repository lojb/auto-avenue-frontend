import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import CarsCanvas from "./canvas/Car";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5"></div>
        <div>
          <h1 className={`${styles.heroHeadText} text-black`}>
            Buy or <span className="text-[#e7e250]">Sell</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black`}>
            Unlock Your Perfect Ride: <br className="sm:block hidden" />{" "}
            Connecting Car Buyers and Sellers Effortlessly.
          </p>
          <div className="m-10 ">
            <Link to="/browse">
              <button className="cssbuttons-io-button">
                Let's Explore
                <div className="icon items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    ></path>
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <CarsCanvas />
      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-black flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-amber-300 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
