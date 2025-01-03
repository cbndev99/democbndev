import PageHeader from "../components/PageHeader";
import { Eye, Goal } from "lucide-react";
import img1 from "../assets/img/p13.webp";
import { motion } from "motion/react";
import { TopToDownVariant, LeftToRightVariant } from "../utils/MotionVariants";

const visionMission = [
  {
    title: "Our Vision",
    icon: <Eye size={35} />,
    msg: "To be the most customer-centric company, offering products and services that bring convenience and joy to everyday life.",
  },
  {
    title: "Our Mission",
    icon: <Goal size={35} />,
    msg: "To offer a diverse range of high-quality products at competitive prices, ensuring an exceptional shopping experience for every customer.",
  },
];

const aboutUsMsg =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";

function AboutUsPage() {
  return (
    <div className="w-full ">
      <div className="relative lg:max-w-[80rem] m-auto flex">
        <motion.div
          className="absolute bg-white px-10 py-12 opacity-90 shadow-xl mx-5 lg:mx-10 left-0 max-h-[55rem] overflow-auto self-center rounded-xl"
          initial="offscreen"
          whileInView="onscreen"
          transition={{ duration: 1, ease: "easeInOut" }}
          variants={LeftToRightVariant}
        >
          <PageHeader title="Our Story" />
          <p className="text-pretty mt-8 leading-loose text-sm sm:text-lg">
            {aboutUsMsg}
          </p>
        </motion.div>
        <div>
          <img
            src={img1}
            alt="about-us-photo"
            loading="lazy"
            className="h-[60rem] object-cover "
          />
        </div>
      </div>

      <div className="bg-white px-8 py-16  w-full flex justify-center">
        <div className="max-w-[75rem] pb-10">
          <h1 className="text-center font-bold text-2xl">
            Our Vision & Mission
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-[3rem] md:gap-[5rem]">
            {visionMission.map((item) => (
              <motion.div
                key={item.title}
                className="flex justify-start items-center gap-8 mt-10"
                initial="offscreen"
                whileInView="onscreen"
                transition={{ duration: 1, ease: "easeInOut" }}
                variants={TopToDownVariant}
              >
                <div className="bg-slate-100 p-3 flex items-center justify-center rounded-lg shadow-md">
                  {item.icon}
                </div>
                <div>
                  <h2 className="font-bold text-lg text-orange-500">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-pretty leading-relaxed">{item.msg}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
