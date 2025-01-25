import Logo from "./assets/logo.png";
import {  useNavigate } from "react-router-dom";

import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/hubsearch");
  };

  return (
    <div id="contact" className="bg-black p-10 mt-16">
      <div className="flex justify-between flex-col md:flex-row items-start w-full ">
        <div className="flex flex-col gap-4 my-8">
          <div className="overflow-hidden max-w-[180px] ">
            <img src={Logo} className="object-cover w-full" alt="logo" />
          </div>
          <h2 className="text-slate-200 font-extrabold text-2xl"  onClick={handleButtonClick}>Search Hub</h2>
          <p className="text-slate-200"><b>Office Address:</b> 218, Osuntokun Avenue, Ibadan, Nigeria</p>
         
        </div>
        <div className="grid w-full md:w-[65%] grid-cols-2 xxm:grid-cols-3 ">
          <div className="">
            <h2 className="font-bold text-md lg:text-xl text-white">
              Quicklinks{" "}
            </h2>
            <div className="flex flex-col text-white py-4 gap-2">
              <Link
                to="aboutus"
                smooth={true}
                duration={500}
                className="test-sm "
              >
                About Us
              </Link>

              <NavLink to="/why" className="text-sm">
                Why us
              </NavLink>
              <Link to="faq" smooth={true} duration={500} className="test-sm ">
                FAQ's
              </Link>
            </div>
          </div>
          <div className="">
            <h2 className="font-bold text-md lg:text-xl text-white">Company</h2>
            <div className="flex flex-col text-white py-4 gap-2">
              <span className="text-sm">Privacy Policy</span>
              <span className="text-sm">Terms and Conditions</span>
              <span className="text-sm">Contact Us</span>
            </div>
          </div>
          <div className="">
            <h2 className="font-bold text-md lg:text-xl text-white">
              Contact Us
            </h2>
            <div className="flex flex-col text-white py-4 gap-2">
              <span className="text-sm">Support@garbagelite.com</span>
              <span className="text-sm">218, Osuntokun Avenue, Ibadan, Nigeria.</span>
              <div className="flex gap-4  *:text-white ">
                <FaInstagram className="text-xl cursor-pointer hover:text-green-400" />
                <CiFacebook className="text-xl cursor-pointer hover:text-green-400" />
                <FaXTwitter className="text-xl cursor-pointer hover:text-green-400" />
                <CiLinkedin className="text-xl cursor-pointer hover:text-green-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-white font-bold text-sm mt-16 mb-2">
        2024 | GarbageLitee
      </div>
    </div>
  );
}
