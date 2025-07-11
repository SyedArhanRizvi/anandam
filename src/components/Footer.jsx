import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
//   FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-[60px] py-[60px]">
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            <div className="flex-1">
              <div className="logo w-[180px] mb-5">
                <img
                  src={logo}
                  alt="Shubhanandam Logo"
                  className="w-full h-auto"
                />
              </div>

              <div>
                <h6 className="text-white mb-4 text-lg font-semibold">
                  Follow Us
                </h6>

                <ul className="flex gap-3">
                  <li className="bg-white text-black w-11 h-11 flex justify-center items-center rounded-full hover:scale-110 hover:rotate-6 transition-transform">
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>

       

                  <li className="bg-white text-black w-11 h-11 flex justify-center items-center rounded-full hover:scale-110 hover:rotate-6 transition-transform">
                    <a href="#">
                      <FaLinkedinIn />
                    </a>
                  </li>

                  <li className="bg-white text-black w-11 h-11 flex justify-center items-center rounded-full hover:scale-110 hover:rotate-6 transition-transform">
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex-1 text-[#DABF70]">
              <h6 className="text-xl font-medium mb-4">Useful Links</h6>

              <ul className="flex flex-col gap-2">
                <li className="hover:text-[#f5e7bbd7] transition">
                  <Link to="/">Home</Link>
                </li>

                <li className="hover:text-[#f5e7bbd7] transition">
                  <Link to="/about">About Us</Link>
                </li>

                <li className="hover:text-[#f5e7bbd7] transition">
                  <Link to="/projects">Projects</Link>
                </li>

                <li className="hover:text-[#f5e7bbd7] transition">
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>

            <div className="flex-1 text-[#DABF70]">
              <h6 className="text-xl font-medium mb-4">Contact Us</h6>

              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3 hover:text-[#f5e7bbd7] transition">
                  <FaPhoneAlt className="mt-1" /> <span>0120-350 0832</span>
                </li>

                <li className="flex items-start gap-3 hover:text-[#f5e7bbd7] transition">
                  <FaMapMarkerAlt className="mt-1" />

                  <span>Near Sector 9, Ansal Town, Modipuram, Meerut</span>
                </li>

                <li className="flex items-start gap-3 hover:text-[#f5e7bbd7] transition">
                  <FaEnvelope className="mt-1" />{" "}
                  <span>support@shubhanandam.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#621110] text-center py-4 text-sm italic text-[rgba(218,192,112,0.4)]">
        © Shubh Anandam Pvt Ltd 2025. | All Rights Reserved | Developed by
        ritzmediaworld.com
      </div>
    </>
  );
};

export default Footer;
