import { Link, useLocation } from "react-router";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import PropTypes from "prop-types";

const base_url = "/";

const navigation = [
  { name: "HOME", href: base_url },
  { name: "OUR SERVICES", href: `${base_url}our-services` },
  { name: "ABOUT US", href: `${base_url}about-us` },
  { name: "CONTACT US", href: `${base_url}contact-us` },
];

function Nav({ logo }) {
  const [toggleSideNav, setToggleSideNav] = useState(false);

  const location = useLocation();
  const urlPath = location.pathname;

  return (
    <nav className="h-full m-auto px-5 lg:max-w-[80rem]">
      <div className="flex justify-between items-center h-full">
        <Link to={base_url}>
          {logo}
          <span className="sr-only">logo</span>
        </Link>
        <div className="hidden md:flex gap-10 font-medium text-sm">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`hover:text-orange-500 ${
                urlPath == item.href ? "text-orange-500" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex md:hidden">
          <button
            role="button"
            id="more_btn"
            onClick={() => setToggleSideNav(true)}
          >
            <Bars3Icon aria-hidden="true" className="icon" />
          </button>
        </div>

        {/* overlay background */}
        {toggleSideNav ? (
          <div
            role="dialog"
            className="absolute right-0 top-0 bg-black w-full h-screen opacity-30 z-10"
            onClick={() => setToggleSideNav(false)}
          ></div>
        ) : (
          ""
        )}

        <div
          aria-modal="true"
          role="dialog"
          className={`absolute right-0 top-0 bg-white h-screen w-full md:w-[30rem] shadow-lg z-20 p-10 transitionGrp ${
            toggleSideNav ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-12">
            {logo}
            <XMarkIcon
              aria-hidden="true"
              className="icon"
              onClick={() => setToggleSideNav(false)}
            />
          </div>
          <div className="flex flex-col gap-5 h-full overflow-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`hover:text-orange-500 hover:bg-gray-50 py-3 pr-3 pl-3 rounded-lg font-semibold`}
                onClick={() => setToggleSideNav(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

Nav.propTypes = {
  logo: PropTypes.element.isRequired,
};

export default Nav;
