import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Banner() {
  const [urlArray, setUrlArray] = useState([]);
  const [title, setTitle] = useState({
    heading: "",
    subheading: "",
    bannerImage: "",
  });
  const location = useLocation();
  const urlArrays = location.pathname.split("/");
  console.log(urlArrays);
  // console.log(urlArrays[1]);
  useEffect(() => {
    if (urlArrays[1] === "services") {
      setTitle({
        heading: "Our Services",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
        // bannerImage: service,
      });
    } else if (urlArrays[1] === "") {
      setTitle({
        heading: "The Christian Co-operative Credit Union Ltd., Dhaka",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
      });
    } else if (urlArrays[1] === "projects") {
      setTitle({
        heading: "Our Project",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
      });
    } else if (urlArrays[1] === "loan-products") {
      setTitle({
        heading: "Our Loan Product",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
      });
    } else if (urlArrays[1] === "deposit-products") {
      setTitle({
        heading: "Our Deposits",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
      });
    } else if (urlArrays[1] === "job-circulars") {
      setTitle({
        heading: "The Christian Co-operative Credit Union Ltd., Dhaka",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
      });
    } else if (urlArrays[1] === "about") {
      setTitle({
        heading: "About Us.",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
        // bannerImage: about,
      });
    } else if (urlArrays[1] === "contact") {
      setTitle({
        heading: "Contact Us.",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
        // bannerImage: contact,
      });
    } else if (urlArrays[1] === "Office-Bearers") {
      setTitle({
        heading: "Office Bearers",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
        // bannerImage: office_bearers,
      });
    } else if (urlArrays[1] === "Board-of-Directors") {
      setTitle({
        heading: "Board of Directors",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
        // bannerImage: board_members,
      });
    } else if (urlArrays[1] === "Credit-Committee") {
      setTitle({
        heading: "Credit Committee",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
        // bannerImage: credit_committee,
      });
    } else if (urlArrays[1] === "Supervisory-Committee") {
      setTitle({
        heading: "Supervisory Committee",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
        // bannerImage: supervisory_committee,
      });
    } else if (urlArrays[1] === "Notice") {
      setTitle({
        heading: "Important Notices",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
        // bannerImage: notice,
      });
    } else if (urlArrays[1] === "faq") {
      setTitle({
        heading: "Frequently Asked Questions",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
        // bannerImage: faqs,
      });
    } else if (urlArrays[1] === "accounts") {
      setTitle({
        heading: "Accounts",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
        // bannerImage: faqs,
      });
    } else if (urlArrays[1] === "account_loans") {
      setTitle({
        heading: "Loans",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
        // bannerImage: faqs,
      });
    } else {
      setTitle({
        heading: "The Christian Co-operative Credit Union Ltd., Dhaka",
        subheading:
          "Employment Creation is Our Goal; Self-Reliant Community is Our Dream.",
      });
    }
    setUrlArray(urlArrays);
  }, [location.pathname]);

  // const setUrlArray =
  return (
    <div>
      <section class="absolute right-0 top-0 w-full text-onPrimary">
        <div class="relative h-96">
          <div
            // style={{ backgroundImage: `url(${title.bannerImage})` }}
            class="h-full  bg-cover bg-center bg-no-repeat"
          >
            <div class="absolute inset-0 h-full w-full overflow-hidden bg-gray-900 bg-opacity-80 bg-fixed">
              <div class="flex h-full w-full flex-row items-end justify-center">
                <div class="mb-24 w-full px-6 text-center lg:w-1/2">
                  <h2 class="mb-2 animate-backInLeft text-4xl font-bold leading-tight tracking-tight">
                    {title.heading}
                  </h2>
                  <p class="hover:typing-demo inline-block animate-backInRight text-sm">
                    {" "}
                    {title.subheading}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="container mx-auto animate-fadeInRight">
            <div class="relative">
              <div class="absolute left-0 -bottom-5">
                <div class="ml-4 flex">
                  <NavLink
                    to=""
                    class="rounded-l-md bg-primaryVariant px-6 py-2 font-semibold"
                  ></NavLink>
                  <NavLink to="" class="rounded-r-md bg-primary px-6 py-2">
                    {/* {{ bannerTitle }} */}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
