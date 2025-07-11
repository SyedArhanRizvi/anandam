import React from "react";
import Accordion from "../components/Accordion";
import chairImage from "../assets/images/chair.png";
import PSlide from "../components/PSlide";
import Gmap from "../components/Gmap";

import "swiper/css";

const Home = () => {
  return (
    <>
      <div className="heroImage">
        <div className="container mx-auto px-4 sm:px-6 lg:px-[65px]">
          <div className="w-full">
            <h1 className="text-[40px] sm:text-[52px] lg:text-[68px] font-bold leading-[120%] pb-5 pr-0 lg:pr-[60%]">
              Live the Anandam Life
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl uppercase pb-5 leading-[150%] pr-0 lg:pr-[65%]">
              2 & 3 BHK Luxury Builder Floors in Modipuram, Meerut
            </p>
            <div className="bg-[linear-gradient(90deg,_rgba(133,36,56,1)_0%,_rgba(31,8,13,1)_100%)] py-4 px-3 text-lg sm:text-xl lg:text-[30px] font-medium text-[#DABF70] flex flex-wrap gap-2 sm:gap-[13px] w-full lg:w-[60%]">
              <span>Freehold</span>|<span>RERA Registered</span>|<span>Bank Loan Approved</span>
            </div>
          </div>
        </div>
      </div>

      <section className="whyChoose">
        <div className="container mx-auto px-4 sm:px-6 lg:px-[65px] py-20">
          <div className="w-full max-w-[1058px] pb-8">
            <h2 className="primary-color text-2xl sm:text-3xl lg:text-[36px] font-semibold uppercase mb-4">
              Why Choose Anandam Floors?
            </h2>
            <p className="text-base sm:text-lg lg:text-[24px] text-[rgb(0_0_0_/_60%)]">
              Experience the joy of <span className="font-semibold">elevated living</span> with
              Shubhanandam Group’s flagship project — a thoughtfully planned
              community offering luxury, privacy, and comfort at an unmatched value.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 w-full">
            <div className="w-full lg:w-[70%]">
              <Accordion />
            </div>
            <div className="w-full lg:w-[30%]">
              <img src={chairImage} alt="chairImage" data-aos="zoom-in" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="aboutSec">
        <div className="container mx-auto px-4 sm:px-6 lg:px-[65px] py-20">
          <div className="w-full max-w-4xl m-auto">
            <p className="text-lg sm:text-xl uppercase">About</p>
            <h3 className="text-2xl sm:text-3xl lg:text-[36px] text-[#DABF70] font-semibold uppercase mb-3">
              Shubhanandam Group
            </h3>
            <p className="leading-[32px] sm:leading-[36px] lg:leading-[40px] text-base sm:text-lg lg:text-[20px]">
              A real estate brand committed to <span className="font-semibold">affordable luxury, quality craftsmanship</span>, and <span className="font-semibold">timely delivery</span>,
              Shubhanandam Group is redefining residential living in Tier-2 cities. Backed by a strong leadership team and a mission to deliver over <span className="font-semibold">100,000 homes by 2025</span>, the group is trusted by hundreds of homeowners across Meerut.
            </p>
          </div>
        </div>
      </section>

      <section className="project">
        <div className="container mx-auto px-4 sm:px-6 lg:px-[65px] py-20">
          <div className="w-full max-w-4xl text-center m-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-[36px] primaryColor font-semibold uppercase mb-5">
              Projects
            </h3>
            <p className="text-lg sm:text-xl lg:text-[27px] text-black uppercase">
              Explore spacious layouts with smart design, natural ventilation,
              and modern interiors.
            </p>
          </div>
          <PSlide />
        </div>
      </section>

      <section className="enquireSec py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-[65px]">
          <div className="w-full max-w-3xl text-center m-auto">
            <h4 className="text-white text-xl sm:text-2xl lg:text-[36px] font-semibold mb-5 capitalize">
              Your dream home awaits! Fill the form and let us take care of the rest.
            </h4>
          </div>
          <div className="bg-white w-full max-w-2xl px-5 py-8 mx-auto rounded-[30px]">
            <h6 className="text-xl sm:text-2xl lg:text-[28px] font-medium text-[#DABF70] pb-8 text-center uppercase">
              Enquire Now
            </h6>
            <form>
              <div>
                <div className="flex flex-col sm:flex-row px-2 mb-4 gap-4">
                  <input type="text" placeholder="Name" className="w-full border-1 border-[#6c6969a8] px-4 py-2 rounded text-black" />
                  <input type="email" placeholder="Email" className="w-full border-1 border-[#6c6969a8] px-4 py-2 rounded text-black" />
                </div>
                <div className="flex flex-col sm:flex-row px-2 mb-4 gap-4">
                  <input type="tel" placeholder="Phone" className="w-full border-1 border-[#6c6969a8] px-4 py-2 rounded text-black" />
                  <input type="text" placeholder="Preferred Time" className="w-full border-1 border-[#6c6969a8] px-4 py-2 rounded text-black" />
                </div>
                <div className="w-full px-2 mb-4">
                  <textarea rows="4" placeholder="Message" className="w-full border-1 border-[#6c6969a8] px-4 py-2 rounded text-black" />
                </div>
                <div className="text-center">
                  <button className="bg-[#852438] text-white px-6 py-3 rounded-full hover:bg-[#DABF70] hover:shadow-xl transition-all">
                    Book a Site Visit Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="map-wrap">
        <div className="container mx-auto px-4 sm:px-6 lg:pl-[65px]">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2 py-20">
              <h6 className="text-2xl sm:text-3xl lg:text-[36px] text-[#852438] font-semibold uppercase mb-3">
                Location Advantage
              </h6>
              <p className="text-lg sm:text-xl lg:text-[26px] uppercase mb-10">
                Modipuram, Meerut – The New Urban Hub
              </p>
              <ul className="space-y-4">
                <li className="li-style"><i className="ri-roadster-line"></i> NH-58 & Delhi–Dehradun Expressway Access</li>
                <li className="li-style"><i className="ri-roadster-line"></i> Proposed Meerut Metro Station nearby</li>
                <li className="li-style"><i className="ri-roadster-line"></i> 15 minutes to City Centre</li>
                <li className="li-style"><i className="ri-roadster-line"></i> Seamless Delhi-NCR Connectivity</li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <Gmap />
            </div>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="container mx-auto px-4 sm:px-6 lg:px-[60px] py-20">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            {["100% Transparency", "Trusted Developer", "Ready-to-Move Options"].map((text, idx) => (
              <div key={idx} className="w-full sm:w-1/3">
                <div className="box bg-white rounded-[20px] p-5 text-center shadow-md">
                  <i className="ri-lock-2-line text-[36px] sm:text-[48px] lg:text-[56px]"></i>
                  <h6 className="text-lg sm:text-xl lg:text-[24px] font-medium mt-2">{text}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;