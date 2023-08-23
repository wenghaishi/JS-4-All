"use client";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <section
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex min-h-screen bg-black flex-col items-center justify-center p-24"
    >
      <div className="z-0 flex flex-col items-center justify-center lg:mt-10 sm:p-20 rounded-xl">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
          <h1 className="z-0 px-6 text-transparent cursor-pointer text-5xl whitespace-nowrap sm:text-7xl md:text-8xl bg-clip-text bg-gradient-to-r from-indigo-800 to-red-500 lg:text-9xl font-black mb-10">
            JS-4-all
          </h1>
        </motion.div>

        <h1 className="sm:text-base md:text-xl text-center lg:text-3xl  text-xs font-black flex flex-col px-4 sm:px-6 tracking-wide items-center py-2 md:px-10 md:py-6 text-white bg-gradient-to-r from-indigo-800 to-red-500 rounded-2xl">
          <span className="md:mb-4 sm:mb-1">Learn javascript anytime & anywhere, if you are a... </span>
          <Typewriter
            options={{
              strings: [" Student", " Aspiring developer", " hobbyist"],
              autoStart: true,
              loop: true,
              skipAddStyles: true,
              typeSpeed: 40,
              deleteSpeed: 30,
            }}
          />
        </h1>
      </div>
    </section>
  );
}
export default Hero;
