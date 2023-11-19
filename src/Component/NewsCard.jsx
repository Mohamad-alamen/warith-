import React, { useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";

function NewsCard({ imageSrc, title, onClick }) {
  const [clicked, setClicked] = useState(false);

  const handleCardClick = () => {
    setClicked(true);
    onClick(imageSrc, title);
    console.log(clicked);
  };

  return (
    <div onClick={handleCardClick}>
      <div
        className="flex items-center  flex-row-reverse lg:h-[10rem] h-[10rem] w-[100%] lg:w-[40rem]"
        style={{
          backgroundColor:'white',
          // boxShadow: '0 2px 9px rgba(0, 0, 0, 0.7)',
          cursor: 'pointer',
        }}
      >
        <img className="w-[40%] h-[100%]" src={imageSrc} alt="" />
        <div className="h-[90%] w-[60%] flex flex-col justify-center gap-2 p-4 ">
          <p className="font-semibold text-sm text-right lg:text-lg">{title}</p>
          <div className="flex items-center gap-1 w-fit hover:cursor-pointer">
            <FaArrowLeftLong  size={18}/>
            <p className="lg:font-semibold   text-[#213469]">اقرا المزيد</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;