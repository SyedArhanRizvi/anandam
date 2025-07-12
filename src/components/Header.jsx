import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPhoneCall, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/images/logoele.png";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reSizeNav = () => setIsMobile(window.innerWidth <= 768);
    reSizeNav();
    window.addEventListener("resize", reSizeNav);
    return () => window.removeEventListener("resize", reSizeNav);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed w-full bg-black z-50 transition-transform duration-300 ease-in-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4">
          <div className="logo w-[60px] sm:w-[70px] lg:w-[80px]">
            <img src={logo} alt="logo" className="w-full h-auto" />
          </div>

          {!isMobile ? (
            <div className="flex items-center gap-6">
              <ul className="flex gap-6 items-center">
                <Link to="/home" className="text-white hover:text-[#852438] transition">
                  Home
                </Link>
                <Link to="/about" className="text-white hover:text-[#852438] transition">
                  About Us
                </Link>
                <Link to="/projects" className="text-white hover:text-[#852438] transition">
                  Our Projects
                </Link>
                <Link to="/contact" className="text-white hover:text-[#852438] transition">
                  Contact
                </Link>
              </ul>
              <button className="bg-[#852438] text-white px-5 py-2 rounded-full hover:bg-[#DABF70] hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <FiPhoneCall /> Call Now
                </div>
              </button>
            </div>
          ) : (
            <button className="text-white text-2xl" onClick={toggleMenu}>
              <FiMenu />
            </button>
          )}
        </nav>
      </header>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[300px] bg-black text-white z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6 flex justify-between items-center border-b border-gray-700">
          <img src={logo} alt="Logo" className="w-[60px]" />
          <button onClick={toggleMenu} className="text-white text-2xl">
            <FiX />
          </button>
        </div>
        <ul className="flex flex-col gap-6 p-6 text-lg">
          <Link to="/home" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About Us
          </Link>
          <Link to="/projects" onClick={toggleMenu}>
            Our Projects
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </ul>
        <div className="px-6 mt-6">
          <button className="w-full bg-[#852438] text-white py-2 rounded-full hover:bg-[#DABF70] transition-all duration-300">
            <div className="flex justify-center items-center gap-2">
              <FiPhoneCall /> Call Now
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
