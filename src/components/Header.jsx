import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPhoneCall, FiMenu } from "react-icons/fi";
import logo from "../assets/images/logoele.png";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function reSizeNav() {
      setIsMobile(window.innerWidth <= 768);
    }
    reSizeNav();
    window.addEventListener("resize", reSizeNav);
    return () => window.removeEventListener("resize", reSizeNav);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
        setVisible(false); // Scrolling down — hide
      } else {
        setVisible(true); // Scrolling up — show
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed w-full bg-black z-50 transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4">
        <div className="logo w-[60px] sm:w-[70px] lg:w-[80px]">
          <img src={logo} alt="logo" className="w-full h-auto" />{" "}
        </div>

        {!isMobile ? (
          <div className="flex items-center gap-6">
            <ul className="flex gap-6 items-center">
              <Link
                to="/home"
                className="text-white hover:text-[#852438] transition"
              >
                Home
              </Link>

              <Link
                to="/"
                className="text-white hover:text-[#852438] transition"
              >
                About Us
              </Link>

              <Link
                to="/"
                className="text-white hover:text-[#852438] transition"
              >
                Our Projects
              </Link>

              <Link
                to="/"
                className="text-white hover:text-[#852438] transition"
              >
                Contact
              </Link>
            </ul>

            <button className="bg-[#852438] text-white px-5 py-2 rounded-full hover:bg-[#DABF70] hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-2">
              Call Now
              </div>
            </button>
          </div>
        ) : (
          <button className="text-white text-2xl">
            <FiMenu />
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
