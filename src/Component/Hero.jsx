import React from "react";
import Header from "../Component/Header.jsx";
import Logo from "../../public/Icons/Logo-2.svg";
import Logo2 from "../../public/Icons/UNIVERSITY OF WARITH AL-ANBIYAA LOGO FINAL copy 1.svg";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Hero = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [clickedCardImageSrc, setClickedCardImageSrc] = useState("");
    const [clickedCardTitle, setClickedCardTitle] = useState("");
    const handleCardClick = (imageSrc, title) => {
      setClickedCardImageSrc(imageSrc);
      setClickedCardTitle(title); 
    };

    return(
        <div className="h-full relative">
        <div className="h-full w-full relative">
          <div className="h-full w-full bg-[#15313F] opacity-40 absolute z-10 pointer-events-none"></div>
          <Swiper
            className="h-full relative my-swiper"
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="flex">
              <img
                className="h-full w-full object-cover align-middle"
                src="https://static.stacker.com/s3fs-public/styles/sar_screen_maximum_large/s3/WomenCollegeEHYR_2.png"
                alt="Slide 1"
              />
              </div>
             
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full object-cover "
                src="https://www.parcelpending.com/wp-content/uploads/2021/03/How-to-Attract-College-Students-Online-900x600.jpg"
                alt="Slide 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full object-cover"
                src="https://www.brainbalancecenters.com/hubfs/Help-for-Struggling-College-Students.jpeg"
                alt="Slide 3"
              />
            </SwiperSlide>
          </Swiper>
          <div className="lg:h-[100%] h-[60%] w-[70%] md:w-[40%]  absolute lg:top-20 lg:right-20 top-[9rem] right-10 z-20  lg:flex lg:flex-col lg:items-end  ">
            <div className="h-[40%] flex justify-end pl-9 items-start lg:w-[65%] lg:justify-end">
              <div className="h-[40%] w-[90%] flex justify-end items-end ">
                <img src={Logo} alt="" className="lg:h-[6rem] h-[5rem]" />
                <img src={Logo2} alt="" className="lg:h-[8rem] h-[6rem]" />
              </div>
            </div>
            <div className="h-[60%] flex flex-col items-end gap-4 justify-center lg:items-end lg:gap-0 lg:justify-around">
              <p className="lg:text-3xl text-xl  text-white font-thin text-right border-b-2 border-[#FFA300] pb-4">
                مركز وارث للريادة والابتكار والتطوير
              </p>
              <p className="lg:text-5xl text-3xl text-right font-bold text-white">
                اطلق <span className="text-[#FFA300]">قدراتك</span> <br />{" "}
                <span className="text-[#FFA300]">وابتكر</span> مستقبلك
              </p>
              <button className="bg-white text-xl px-6 py-4 rounded font-bold">
                انضم الان
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Hero