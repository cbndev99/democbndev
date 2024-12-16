import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { Facebook } from "lucide-react";
import PropTypes from "prop-types";

const currentYear = new Date().getFullYear();

function Footer({ logo }) {
  function redirectToFB() {
    window.open("https://www.facebook.com/react/");
  }

  return (
    <div className="lg:w-[80rem] px-5">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2  justify-items-start mt-16 leading-relaxed text-sm">
        <div className="flex flex-col gap-5 items-center text-center md:items-start md:text-start">
          {logo}
          <p>CBNDEV Sdn Bhd (DEMO1234-D)</p>
          <p>
            Crafting superior doors, gates, roofing, and fencing, <br></br>
            we specialize in high-quality metal and aluminium solutions
            <br></br> tailored to your needs.
          </p>
        </div>

        <div className="md:justify-self-center">
          <h1 className="text-lg text-orange-400 font-bold">Contacts</h1>
          <div className="flex items-center gap-3 mt-5">
            <PhoneIcon aria-hidden="true" className="size-4" />
            <p>+6011-11223333</p>
          </div>
          <div className="flex items-center gap-3 mt-3 ">
            <MapPinIcon aria-hidden="true" className="size-4" />
            <div>
              <p>
                No 2, Jalan Dev, <br></br>
                Taman Dev, <br></br>
                54000 Petaling Jaya, <br></br>
                Selangor, Malaysia
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <EnvelopeIcon aria-hidden="true" className="size-4" />
            <p>demodev@gmail.com</p>
          </div>
          <div className="mt-10 flex items-center gap-3">
            <button
              className="border rounded-md p-1 size-7 flex justify-center items-center hover:text-orange-400 hover:border-orange-400"
              onClick={() => redirectToFB()}
            >
              <Facebook size={16} />
            </button>
            Follow Us Now!
          </div>
        </div>
      </div>

      <div className="text-xs mt-20 border-t py-3 ">
        © {currentYear} CBNDEV. All rights reserved.
      </div>
    </div>
  );
}

Footer.propTypes = {
  logo: PropTypes.element.isRequired,
};

export default Footer;
