import PageHeader from "../components/PageHeader";
import img2 from "../assets/img/p5.jpg";
import img3 from "../assets/img/p11.png";
import img4 from "../assets/img/p10.jpg";
import img5 from "../assets/img/p9.jpg";
import { motion } from "motion/react";
import { LeftToRightVariant } from "../utils/MotionVariants";

const serviceContent = [
  {
    title: "Roofing Customization",
    imgSrc: img5,
    desc: "Enhance your comfort with our custom aluminum roofing solutions featuring thermal insulation. Durable, energy-efficient, and stylish—designed to keep your space cooler while adding a modern touch to your property",
  },
  {
    title: "Door Customization",
    imgSrc: img3,
    desc: "Transform your space with our custom metal and aluminum door solutions. Designed to fit your style, durable, and tailored for perfection—bringing elegance, strength, and functionality to every entrance.",
  },
  {
    title: "Balcony Railing Customization",
    imgSrc: img4,
    desc: "Upgrade your home with our custom aluminum, metal, and glass balcony railing solutions. Combining modern elegance with durability, our designs ensure safety, style, and a personalized touch that enhances any property.",
  },
  {
    title: "Fencing Customization",
    imgSrc: img2,
    desc: "Secure your property with our custom aluminum, metal, and glass fencing solutions. Designed for durability and style, our fences offer superior protection, modern aesthetics, and a personalized touch to suit your needs.",
  },
];

function OurServicesPage() {
  return (
    <div className="w-full my-20 flex justify-center">
      <div className="max-w-[80rem] mx-5 lg:mx-10">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          transition={{ duration: 1, ease: "easeInOut" }}
          variants={LeftToRightVariant}
        >
          <PageHeader title="Our Services" />
          <p className="mt-4">
            We provide high-quality metal, glass, and aluminium solutions
            tailored to your needs! Check out below our provided services
          </p>
        </motion.div>

        {serviceContent.map((item, index) => (
          <motion.div
            key={item.title}
            className={
              "mt-10 flex flex-col items-center gap-8 shadow-xl bg-zinc-800 px-5 py-10 lg:p-10 rounded-xl " +
              (index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse")
            }
            initial="offscreen"
            whileInView="onscreen"
            transition={{ duration: 1, ease: "easeInOut" }}
            variants={LeftToRightVariant}
          >
            <div className="overflow-hidden rounded-lg shadow-xl">
              <motion.img
                src={item.imgSrc}
                alt={item.title}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                loading="lazy"
                className="w-[80rem] h-[25rem] lg:h-[30rem] object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="flex flex-col gap-8 text-white">
              <h1 className="font-bold text-3xl border-l-8 pl-2 border-orange-600">
                {item.title}
              </h1>
              <p className="text-lg">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default OurServicesPage;
