import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import { Facebook } from "lucide-react";

function ContactUsPage() {
  function redirectToFB() {
    window.open("https://www.facebook.com/react/");
  }
  return (
    <div className="w-full flex_center flex-col mt-20">
      {/* form */}
      <div className="md:w-[40rem] px-10 md:px-0">
        <h1 className="font-semibold text-4xl">Get In Touch</h1>
        <p className="mt-4">
          Contact us for high-quality metal, glass, and aluminium solutions
          tailored to your needs!
        </p>

        {/* TODO: Integrate Email API */}
        <form action="" className="mt-20">
          <div className="flex flex-col justify-center gap-5">
            <div>
              <label htmlFor="Name" className="input_label">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="Name"
                id="Name"
                className="input_box"
                required
              />
            </div>
            <div>
              <label htmlFor="Email" className="input_label">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="Email"
                id="Email"
                className="input_box"
                required
              />
            </div>
            <div>
              <label htmlFor="Contact" className="input_label">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="Contact"
                id="Contact"
                className="input_box"
                placeholder="01122334444"
                required
              />
            </div>
            <div>
              <label htmlFor="Message" className="input_label">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                type="text"
                rows={4}
                name="Message"
                id="Message"
                className="input_box"
                required
              />
            </div>

            <button type="submit" className="btn mt-10">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* contact info */}
      <div className="bg-white w-full mt-32 flex flex-col sm:flex-row justify-between md:justify-center items-center gap-8 md:gap-48 lg:gap-72 py-8 px-6">
        <div className="flex flex-row items-center gap-5">
          <MapPinIcon aria-hidden="true" className="size-7" />
          <div>
            <h1 className="font-bold text-xl">CBNDEV Sdn Bhd</h1>
            <p className="text-base mt-2">
              No 2, Jalan Dev, <br></br>
              Taman Dev, <br></br>
              54000 Petaling Jaya, <br></br>
              Selangor, Malaysia
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-5 sm:mt-0">
          <div className="flex items-center justify-start gap-3">
            <PhoneIcon className="size-5" />
            <p>+6011-11224444</p>
          </div>

          <div className="flex items-center justify-start gap-3">
            <EnvelopeIcon className="size-5" />
            <p>demodev@gmail.com</p>
          </div>

          <div className="flex items-center justify-start gap-3">
            <ClockIcon className="size-5" />
            <p>
              Mon - Sat <br></br>
              9:00 AM - 6:00 PM
            </p>
          </div>

          <button
            onClick={() => redirectToFB()}
            className="flex items-center justify-start gap-3 btn"
          >
            <Facebook className="size-6" />
            <p>Follow Us Now!</p>
          </button>
        </div>
      </div>

      {/* google map */}
      <div className="w-full h-96 mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9135553110664!2d101.67482701204005!3d3.11756815332982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc498eb19ab83d%3A0x564d5053f56991fb!2sMid%20Valley%20Megamall!5e0!3m2!1sen!2smy!4v1734405660984!5m2!1sen!2smy"
          className="w-full h-96"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUsPage;
