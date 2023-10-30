import React, { useEffect } from "react";
import Header from "../Component/Header.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

function Home() {
  useEffect(() => {
    // Additional initialization code or event handlers can be added here if needed
  }, []);

  return (
    <div className="h-screen">
      <Header />
      <div className="h-[90vh] w-full relative">
        <Swiper
          slidesPerView={1}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          style={{ height: '90vh' }} // Set the height to 90% of the viewport height
        >
          <SwiperSlide>
            <img
              className="h-full w-full object-cover"
              src="https://static.stacker.com/s3fs-public/styles/sar_screen_maximum_large/s3/WomenCollegeEHYR_2.png"
              alt="Slide 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full w-full object-cover"
              src="https://www.parcelpending.com/wp-content/uploads/2021/03/How-to-Attract-College-Students-Online-900x600.jpg"
              alt="Slide 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full w-full object-cover"
              src="URL_HERE" // Replace "URL_HERE" with the actual URL for Slide 3's image
              alt="Slide 3"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Home;