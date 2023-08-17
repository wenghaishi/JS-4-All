"use client";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex min-h-screen bg-black flex-col items-center justify-center p-24"
    >
      <div className="z-30 flex flex-col items-center justify-center lg:mt-10 sm:p-20 rounded-xl">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
          <h1 className="z-30 px-6 text-transparent text-5xl sm:text-7xl md:text-8xl bg-clip-text bg-gradient-to-r from-indigo-800 to-red-700 lg:text-9xl font-black mb-10">
            JS-4-all
          </h1>
        </motion.div>
        {/* <h2 className="mb-10 font-black  text-2xl mx-7 md:mx-1 md:text-2xl lg:text-3xl text-center">
          Learn javascript anytime, anywhere! If you are a...
        </h2> */}

        <h1 className="sm:text-lg md:text-xl text-center lg:text-3xl  text-xs font-black flex flex-col px-4 sm:px-6 tracking-wide items-center py-2 md:px-10 md:py-6 text-white bg-gradient-to-r from-indigo-800 to-red-700 rounded-2xl">
          <span className="md:mb-4 sm:mb-1">Learn javascript anytime & anywhere, if you are a: </span>
          <Typewriter
            options={{
              strings: [" Student", " Aspiring developer", " hobbyist"],
              autoStart: true,
              loop: true,
              skipAddStyles: true,
              typeSpeed: 50,
              deleteSpeed: 30,
            }}
          />
        </h1>
        {/* <div className="flex flex-row gap-4 text-center justify-center align-middle">
          <h2 className="font-black px-4 sm:px-6 flex items-center py-2 md:px-10 md:py-6 rounded-2xl text-white bg-indigo-900">
            Student
          </h2>
          <h2 className="font-black px-4 sm:px-6 flex items-center py-2 md:px-10 md:py-6 text-white bg-indigo-900 rounded-2xl">
            Aspiring developer
          </h2>
          <h2 className="font-black px-4 sm:px-6 flex items-center py-2 md:px-10 md:py-6 text-white bg-indigo-900 rounded-2xl">
            Hobbyist
          </h2>
        </div> */}
      </div>
    </div>
  );
}
export default Hero;
