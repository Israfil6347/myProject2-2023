import logo from "../assets/images/logo/logocccul.png";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="mt-auto bg-surface text-center text-onSurface">
      <div className="container mx-auto flex flex-col items-center justify-center p-3 py-10">
        <NavLink
          to="#"
          className="mb-4 flex flex-col items-center justify-center"
        >
          <img className="h-16" src={logo} alt="header logo" />
          <h6 className="block text-2xl font-semibold">Dhaka Credit</h6>
          <p className="text-xl">{process.env.REACT_APP_COMPANY_NAME}</p>
          <p className="text-sm">
            Rev. Fr. Charles J. Young Bhaban, 173/1/A, East Tejturi Bazar,
            Tejgaon, Dhaka-1215.
          </p>
        </NavLink>
        <div className="mb-5">
          <ul className="flex gap-2">
            <li className="h-8 w-8 rounded-full  shadow-lg hover:scale-125 hover:text-primary">
              <a className="h-full w-full" href="">
                <FaFacebookF className="mt-3 ml-2 text-center fill-primary group-hover:fill-error" />
              </a>
            </li>
            <li className="h-8 w-8 rounded-full bg-surface shadow-lg hover:scale-125 hover:text-primary">
              <a
                className="h-full w-full text-center"
                href=""
                data-url=""
              >
                <BsFillPhoneVibrateFill className="mt-3 ml-2  text-center leading-3 fill-primary group-hover:fill-error" />
                
              </a>
            </li>
            <li className="h-8 w-8 rounded-full bg-surface shadow-lg hover:scale-125 hover:text-primary">
              <a
                className="h-full w-full text-center"
                href=""
              >
                <MdAttachEmail className="mt-3 ml-2  text-center leading-3 fill-primary group-hover:fill-error" />
               
              </a>
            </li>
          </ul>
        </div>

        <p className="text-sm">
          © 2022 {process.env.REACT_APP_COMPANY_NAME}. All Rights Reserved.
        </p>
        <p className="text-sm">Powered by Dhaka Credit ICT Squad.</p>
      </div>
    </footer>
  );
}

export default Footer;