import React, { useState } from 'react';
import { IconArrowLeftBar } from '@tabler/icons-react';

function NewsCard({ imageSrc, title, onClick }) {
  const [clicked, setClicked] = useState(false);

  const handleCardClick = () => {
    setClicked(true);
    onClick(imageSrc, title);
    console.log(clicked)
  };

  return (
    <div onClick={handleCardClick}>
      <div
        className="flex items-center flex-row-reverse lg:w-[70%]"
        style={{
          height: '10rem',
          width: '80%',
          backgroundColor: 'white',
          boxShadow: '0 2px 9px rgba(0, 0, 0, 0.7)',
          cursor: 'pointer', // Add cursor pointer to indicate clickability
        }}
      >
        <img className="h-full w-[40%]" src={imageSrc} alt="" />
        <div className="h-[90%] w-[60%] flex flex-col justify-center gap-2 p-4 ">
          <p className="font-semibold text-sm text-right lg:text-lg">{title}</p>
          <div className="flex items-center gap-1 w-fit hover:cursor-pointer">
            <IconArrowLeftBar />
            <p className="font-bold text-[#213469]">اقرا المزيد</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;