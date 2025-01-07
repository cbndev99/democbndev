import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import { Facebook } from "lucide-react";
import { motion } from "motion/react";
import {
  LeftToRightVariant,
  RightToLeftVariant,
} from "../../utils/MotionVariants";

function ContactInfo() {
  function redirectToFB() {
    window.open("https://www.facebook.com/react/");
  }

  return (
    <div className="bg-white w-full mt-32 flex flex-col sm:flex-row justify-between md:justify-center items-center gap-8 md:gap-48 lg:gap-72 py-8 px-6">
      <motion.div
        className="flex flex-row items-center gap-3"
        initial="offscreen"
        whileInView="onscreen"
        transition={{ duration: 1, ease: "easeInOut" }}
        variants={LeftToRightVariant}
      >
        <MapPinIcon aria-hidden="true" className="size-5" />
        <div>
          <h1 className="font-bold text-xl">CBNDEV Sdn Bhd</h1>
          <p className="text-base mt-2">
            No 2, Jalan Dev, <br></br>
            Taman Dev, <br></br>
            54000 Petaling Jaya, <br></br>
            Selangor, Malaysia
          </p>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col gap-5 mt-5 sm:mt-0"
        initial="offscreen"
        whileInView="onscreen"
        transition={{ duration: 1, ease: "easeInOut" }}
        variants={LeftToRightVariant}
      >
        <div className="flex items-center justify-start gap-3">
          <PhoneIcon aria-hidden="true" className="size-5" />
          <p>+6011-11224444</p>
        </div>

        <div className="flex items-center justify-start gap-3">
          <EnvelopeIcon aria-hidden="true" className="size-5" />
          <p>demodev@gmail.com</p>
        </div>

        <div className="flex items-center justify-start gap-3">
          <ClockIcon aria-hidden="true" className="size-5" />
          <p>
            Mon - Sat <br></br>
            9:00 AM - 6:00 PM
          </p>
        </div>

        <button
          id="fb_btn"
          onClick={() => redirectToFB()}
          className="flex items-center justify-start gap-3 btn shadow-md"
        >
          <Facebook className="size-6" />
          <p>Follow Us Now!</p>
        </button>
      </motion.div>
    </div>
  );
}

export default ContactInfo;

const leftVariant = {
  offscreen: { opacity: 0, y: -50 },
  onscreen: { opacity: 1, y: 1 },
};

const RightVariant = {
  offscreen: { opacity: 0, y: -50 },
  onscreen: { opacity: 1, y: 1 },
};
