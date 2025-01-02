import GoogleMap from "../components/contact_us/GoogleMap";
import ContactForm from "../components/contact_us/ContactForm";
import ContactInfo from "../components/contact_us/ContactInfo";
import PageHeader from "../components/PageHeader";
import { motion } from "motion/react";
import { LeftToRightVariant } from "../utils/MotionVariants";

function ContactUsPage() {
  return (
    <div className="w-full flex_center flex-col mt-20">
      {/* form */}
      <motion.div
        className="content_wrapper"
        initial="offscreen"
        whileInView="onscreen"
        transition={{ duration: 1, ease: "easeInOut" }}
        variants={LeftToRightVariant}
      >
        <PageHeader title="Contact Us" />

        <p className="mt-4">
          Contact us for high-quality metal, glass, and aluminium solutions
          tailored to your needs!
        </p>

        {/* TODO: Integrate Email API */}
        <ContactForm />
      </motion.div>

      {/* contact info */}
      <ContactInfo />

      {/* google map */}
      <GoogleMap />
    </div>
  );
}

export default ContactUsPage;
