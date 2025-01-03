import img2 from "../assets/img/p4_800.webp";
import CounterSection from "../components/home/CounterSection";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  LeftToRightVariant,
  RightToLeftVariant,
} from "../utils/MotionVariants";
import ServiceSection from "../components/home/ServiceSection";

const subHeaderContent = [
  { title: "Years Of Experience", value: 25 },
  { title: "Total Projects", value: 95 },
  { title: "Numbers Of Customer", value: 486 },
];

function HomePage() {
  return (
    <div className="w-full">
      {/* hero section */}
      <div className="md:px-16 bg-zinc-800 overflow-hidden">
        <div className="relative flex justify-center md:justify-end mx-auto items-center lg:max-w-[80rem]">
          {/* font */}
          <motion.div
            className="absolute left-0 z-20 px-8"
            initial="offscreen"
            whileInView="onscreen"
            transition={{ duration: 1, ease: "easeInOut" }}
            variants={LeftToRightVariant}
          >
            <div className="absolute -top-2 left-2 size-20 bg-orange-600 opacity-15 rounded-lg"></div>
            <motion.div
              className="absolute top-0 left-0 size-20 bg-orange-600 opacity-15 rounded-lg"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white max-w-[60rem]">
              Redefining Modern Spaces with Exceptional Craftsmanship
            </h1>
            <div className="bg-slate-700 px-5 py-6 mt-8 opacity-80 rounded-lg italic w-fit shadow-lg max-w-[40rem]">
              <h2 className="text-white font-medium text-sm md:text-base">
                <i className="bx bxs-quote-left"></i> We Custom-Made Premium
                Solutions tailored to your needs whether its gates, fencing,
                roofing, and many more. <i className="bx bxs-quote-right"></i>
              </h2>
            </div>
            <div className="mt-40 text-white">
              <p>For More Information,</p>
              <Link to="/contact-us" className="text-white underline mt-2">
                Contact Us Now!
              </Link>
            </div>
          </motion.div>

          {/* img */}
          <div className="z-10">
            <motion.div
              className="relative"
              initial="offscreen"
              whileInView="onscreen"
              transition={{ duration: 1, ease: "easeInOut" }}
              variants={RightToLeftVariant}
            >
              <div className="absolute top-8 -left-5 size-24 bg-black opacity-15 rounded-lg"></div>
              <motion.div
                className="absolute top-12 -left-3 size-24 bg-black opacity-15 rounded-lg"
                animate={{ y: [0, -30, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <img
                src={img2}
                alt="hero-img"
                loading="lazy"
                width="500"
                className="max-w-[25rem] lg:min-w-[700px] h-[60rem] object-cover shadow-xl"
              />
              <motion.div
                className="absolute bottom-4 -right-5 size-24 bg-orange-600 opacity-15 rounded-lg"
                animate={{ y: [0, -30, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <div className="absolute bottom-8 -right-3 size-24 bg-orange-600 opacity-15 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* counter section */}
      <div className="text-center md:h-60 my-10 lg:max-w-[80rem] m-auto">
        <div className="md:h-60 grid grid-cols-1 md:grid-cols-3 md:justify-items-center ">
          {subHeaderContent.map((item) => (
            <CounterSection
              key={item.title}
              counterTitle={item.title}
              counterScore={item.value}
            />
          ))}
        </div>
      </div>

      {/* service section */}
      <ServiceSection />
    </div>
  );
}

export default HomePage;
