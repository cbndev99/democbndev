import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { TopToDownVariant } from "../../utils/MotionVariants";
import img2 from "../../assets/img/p5.jpg";
import img3 from "../../assets/img/p11.png";
import img4 from "../../assets/img/p10.jpg";
import img5 from "../../assets/img/p9.jpg";

const serviceContent = [
  {
    title: "Roofing Customization",
    imgSrc: img5,
  },
  {
    title: "Door Customization",
    imgSrc: img3,
  },
  {
    title: "Balcony Railing Customization",
    imgSrc: img4,
  },
  {
    title: "Fencing Customization",
    imgSrc: img2,
  },
];

function ServiceSection() {
  return (
    <div className="bg-white px-10 py-20 flex justify-center">
      <div className="max-w-[80rem] text-center">
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-self-center gap-20 mt-20">
          {serviceContent.map((item) => (
            <motion.div
              key={item.title}
              initial="offscreen"
              whileInView="onscreen"
              transition={{ duration: 1, ease: "easeInOut" }}
              variants={TopToDownVariant}
            >
              <div className="overflow-hidden rounded-lg shadow-xl">
                <motion.img
                  src={item.imgSrc}
                  alt={item.title}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  loading="lazy"
                  className="object-cover h-[30rem] w-[40rem] rounded-lg overflow-hidden"
                />
              </div>

              <h1 className="mt-5 text-xl">{item.title}</h1>
            </motion.div>
          ))}
        </div>
        <div className="mt-20">
          <Link to="/our-services" className="btn w-40 mx-auto">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
