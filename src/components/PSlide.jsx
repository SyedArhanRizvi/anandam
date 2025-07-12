import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import pImg1 from "../../src/assets/images/floorOne.jpg";
import pImg2 from "../assets/images/floorTwo.jpg";
import pImg3 from "../assets/images/floorThree.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const projectImages = [pImg1, pImg2, pImg3];

const PSlide = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div className="w-full mx-auto my-10 px-4 sm:px-6 lg:px-10">
      <div className="container relative">
        {swiperReady && (
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="mb-[30px]"
          >
            {projectImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-md rounded-tl-[30px] rounded-tr-[30px]">
                  <div className="overflow-hidden rounded-tl-[30px] rounded-tr-[30px] cursor-pointer">
                    <img
                      src={img}
                      alt={`img-${index}`}
                      className="w-full h-[250px] object-cover sm:h-[300px] md:h-[350px] lg:h-[400px] transform transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  <div className="py-5 px-5">
                    <h6 className="text-[#DABF70] text-[22px] font-semibold mb-3">
                      {`Anandam Floor ${index + 1}`}
                    </h6>

                    <p className="text-[rgba(0,0,0,0.6)]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {/* Custom Navigation Arrows */}
        <div className="flex justify-center items-center gap-4 mt-4">
          <button
            ref={prevRef}
            className="w-[50px] h-[50px] border rounded-full flex items-center justify-center hover:bg-[#852438] hover:text-white transition text-xl"
          >
            <FaArrowLeft />
          </button>

          <button
            ref={nextRef}
            className="w-[50px] h-[50px] border rounded-full flex items-center justify-center hover:bg-[#852438] hover:text-white transition text-xl"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PSlide;
