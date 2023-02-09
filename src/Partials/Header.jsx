import React from "react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";

import logo from "../assets/images/logo/logocccul.png";
import white_logo from "../assets/images/logo/white_logo.png";

function Header({ scroll }) {
  const [mobileMenu, setMobileMenu] = useState(false);

  const location = useLocation();

  return (
    <>
      <section
        className={`sticky top-0 z-20 w-full bg-transparent transition-all duration-300 ${
          scroll ? "mb-[394px] lg:mb-96" : "mb-[394px] lg:mb-80"
        }`}
      >
        <div
          className={`hidden h-12 bg-background text-onBackground   ${
            scroll ? "'lg:hidden'" : "lg:block"
          }`}
        >
          <div className="container mx-auto h-full px-4">
            <div className="flex justify-between h-full items-center">
              <ul className="flex gap-4  text-sm font-bold">
                <li>
                  <NavLink
                    to="office-bearers"
                    className={`block border-b-2 border-transparent hover:scale-110 ${
                      location.pathname.includes("office-bearers")
                        ? "border-primary"
                        : ""
                    } `}
                  >
                    Office Bearers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="board-of-directors"
                    className={`block border-b-2 border-transparent hover:scale-110 ${
                      location.pathname.includes("board-of-directors")
                        ? "border-primary"
                        : ""
                    } `}
                  >
                    Board of Directors
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="credit-committee"
                    className={`block border-b-2 border-transparent hover:scale-110 ${
                      location.pathname.includes("credit-committee")
                        ? "border-primary"
                        : ""
                    } `}
                  >
                    Credit Committee
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="supervisory-committee"
                    className={`block border-b-2 border-transparent hover:scale-110 ${
                      location.pathname.includes("supervisory-committee")
                        ? "border-primary"
                        : ""
                    } `}
                  >
                    Supervisory Committee
                  </NavLink>
                </li>
              </ul>
              <ul className="flex gap-2 items-center">
                <li className="h-8 w-8 group rounded-full bg-surface shadow-lg hover:scale-125 hover:text-primary flex items-center justify-center duration-300 transition-all">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/dhakacredit"
                    rel="noreferrer noopener"
                  >
                    <FaFacebookF className="fill-primary group-hover:fill-error" />
                  </a>
                </li>
                <li className="h-8 w-8 group rounded-full bg-surface shadow-lg hover:scale-125 hover:text-primary flex items-center justify-center duration-300 transition-all">
                  <a
                    className=""
                    href="tel:+8809678771270"
                    data-url="tel:+8809678771270"
                  >
                    <BsFillPhoneVibrateFill className="text-xl fill-primary group-hover:fill-error" />
                  </a>
                </li>
                <li className="h-8 w-8 group rounded-full bg-surface shadow-lg hover:scale-125 hover:text-primary flex items-center justify-center duration-300 transition-all">
                  <a className="" href="mailto: info@cccul.com">
                    <MdAttachEmail className="text-xl fill-primary group-hover:fill-error" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container mx-auto  items-center justify-between p-3">
          <nav className="px-2 border-gray-200">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
              <NavLink to="/" className="flex">
                {scroll ? (
                  <img
                    className="mr-3 h-10 md:h-12 lg:h-16"
                    src={logo}
                    alt="header logo"
                  />
                ) : (
                  <img
                    className="mr-3 h-10 md:h-12 lg:h-16"
                    src={logo}
                    alt="header logo"
                  />
                )}
                <span
                  // className="self-center text-xl font-semibold antialiased"
                  className={`self-center text-xl font-semibold antialiased${
                    scroll ? "lg:text-2xl " : "lg:text-2xl text-onSurface"
                  }`}
                >
                  Dhaka Credit
                </span>
              </NavLink>
              <button
                data-collapse-toggle="navbar-multi-level"
                type="button"
                className="inline-flex items-center p-2 m-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-multi-level"
                onClick={() => {
                  if (mobileMenu) {
                    setMobileMenu(false);
                  } else {
                    setMobileMenu(true);
                  }
                }}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                className={`w-full md:block md:w-auto ${
                  mobileMenu ? "bg-surface inset-0 h-screen absolute" : "hidden"
                }`}
                id="navbar-multi-level"
              >
                <div className="flex justify-between">
                  <div className="flex pt-3  md:hidden ">
                    <img className="pl-3 h-10  " src={logo} alt="header logo" />
                    <span
                      className="self-center text-xl -mt-3 ml-3  font-semibold antialiased lg:text-2xl text-primary"
                      // className={`self-center text-xl font-semibold antialiased${
                      //   scroll ? 'lg:text-2xl ' : 'lg:text-2xl text-white'
                      // }`}
                    >
                      Dhaka Credit
                    </span>
                  </div>
                  <div className="">
                    <button
                      data-collapse-toggle="navbar-multi-level"
                      type="button"
                      className="  p-2 m-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                      aria-controls="navbar-multi-level"
                      onClick={() => {
                        setMobileMenu(false);
                      }}
                    >
                      <span className="sr-only">Open main menu</span>
                      <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <ul
                  className={`mt-4 flex flex-col gap-2 p-4 md:mt-0 md:flex-row md:items-center md:border-0 md:text-sm md:font-bold lg:gap-6 ${
                    scroll ? "text-onSurface" : "lg:text-black text-onSurface "
                  }`}
                >
                  <li>
                    <NavLink
                      to="/"
                      className={`block border-b-2 border-transparent py-2 pr-4 pl-3 hover:scale-110 md:p-0 ${
                        location.pathname === "/"
                          ? scroll
                            ? "border-primary"
                            : "border-onPrimary"
                          : ""
                      } ${
                        scroll
                          ? "hover:border-primary"
                          : "hover:border-onPrimary"
                      }`}
                      onClick={() => {
                        setMobileMenu(false);
                      }}
                    >
                      Home
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/services"
                      className={`block border-b-2 border-transparent py-2 pr-4 pl-3 hover:scale-110 md:p-0 ${
                        location.pathname.includes("services")
                          ? scroll
                            ? "border-primary"
                            : "border-onPrimary"
                          : ""
                      } ${
                        scroll
                          ? "hover:border-primary"
                          : "hover:border-onPrimary"
                      }`}
                      onClick={() => {
                        setMobileMenu(false);
                      }}
                    >
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="projects"
                      className={`block border-b-2 border-transparent py-2 pr-4 pl-3 hover:scale-110 md:p-0 ${
                        location.pathname.includes("projects")
                          ? scroll
                            ? "border-primary"
                            : "border-onPrimary"
                          : ""
                      } ${
                        scroll
                          ? "hover:border-primary"
                          : "hover:border-onPrimary"
                      }`}
                      onClick={() => {
                        setMobileMenu(false);
                      }}
                    >
                      Projects
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="loan-products"
                      className={`block border-b-2 border-transparent py-2 pr-4 pl-3 hover:scale-110 md:p-0 ${
                        location.pathname.includes("loan-products")
                          ? scroll
                            ? "border-primary"
                            : "border-onPrimary"
                          : ""
                      } ${
                        scroll
                          ? "hover:border-primary"
                          : "hover:border-onPrimary"
                      }`}
                      onClick={() => {
                        setMobileMenu(false);
                      }}
                    >
                      Loans
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="deposit-products"
                      className={`block border-b-2 border-transparent py-2 pr-4 pl-3 hover:scale-110 md:p-0 ${
                        location.pathname.includes("deposit-products")
                          ? scroll
                            ? "border-primary"
                            : "border-onPrimary"
                          : ""
                      } ${
                        scroll
                          ? "hover:border-primary"
                          : "hover:border-onPrimary"
                      }`}
                      onClick={() => {
                        setMobileMenu(false);
                      }}
                    >
                      Deposits
                    </NavLink>
                  </li>

                  <li className="group relative inline-block">
                    <NavLink
                      to="job-circulars"
                      className={`block border-b-2 border-transparent py-2 pr-4 pl-3 hover:scale-110 md:p-0 ${
                        location.pathname.includes("job-circulars")
                          ? scroll
                            ? "border-primary"
                            : "border-onPrimary"
                          : ""
                      } ${
                        scroll
                          ? "hover:border-primary"
                          : "hover:border-onPrimary"
                      }`}
                      onClick={() => {
                        setMobileMenu(false);
                      }}
                    >
                      Career
                    </NavLink>
                  </li>
                  <li className="group relative inline-block">
                    <NavLink
                      to="about"
                      state="About"
                      className={`block border-b-2 border-transparent py-2 pr-4 pl-3 hover:scale-110 md:p-0 ${
                        location.pathname.includes("about")
                          ? scroll
                            ? "border-primary"
                            : "border-onPrimary"
                          : ""
                      } ${
                        scroll
                          ? "hover:border-primary"
                          : "hover:border-onPrimary"
                      }`}
                      onClick={() => {
                        setMobileMenu(false);
                      }}
                    >
                      About
                    </NavLink>
                  </li>

                  <li className="group relative inline-block">
                    <NavLink
                      to="notice"
                      state="Notice"
                      className={`block border-b-2 border-transparent py-2 pr-4 pl-3 hover:scale-110 md:p-0 ${
                        location.pathname.includes("Notice")
                          ? scroll
                            ? "border-primary"
                            : "border-onPrimary"
                          : ""
                      } ${
                        scroll
                          ? "hover:border-primary"
                          : "hover:border-onPrimary"
                      }`}
                      onClick={() => {
                        setMobileMenu(false);
                      }}
                    >
                      Notice
                    </NavLink>
                  </li>
                  <li className="group relative inline-block">
                    <NavLink
                      to="faq"
                      className={`block border-b-2 border-transparent py-2 pr-4 pl-3 hover:scale-110 md:p-0 ${
                        location.pathname.includes("faq")
                          ? scroll
                            ? "border-primary"
                            : "border-onPrimary"
                          : ""
                      } ${
                        scroll
                          ? "hover:border-primary"
                          : "hover:border-onPrimary"
                      }`}
                      onClick={() => {
                        setMobileMenu(false);
                      }}
                    >
                      FAQs
                    </NavLink>
                  </li>
                  <li className="group relative inline-block">
                    <NavLink
                      to="contact"
                      className={`block border-b-2 border-transparent py-2 pr-4 pl-3 hover:scale-110 md:p-0 ${
                        location.pathname.includes("contact")
                          ? scroll
                            ? "border-primary"
                            : "border-onPrimary"
                          : ""
                      } ${
                        scroll
                          ? "hover:border-primary"
                          : "hover:border-onPrimary"
                      }`}
                      onClick={() => {
                        setMobileMenu(false);
                      }}
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="transition duration-150 ease-out hover:scale-110 hover:ease-in">
                    <div>
                      <button>Mamber Login</button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Header;
