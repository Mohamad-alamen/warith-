import { FiClock } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
function WorkshopCard({ rating, category, title, date, duration }) {
  return (
    <Link to='/Subpage'>
      <div
        className="flex flex-col justify-center items-center h-[22rem] lg:h-[18rem] w-[27rem] leg:w-[28rem]"
      >
        <img
          style={{
            borderRadius: " 16px 16px 0 0",
          }}
          className="h-[70%] w-[90%] object-cover"
          src="https://img.freepik.com/premium-photo/formal-teaching-bearded-man-wear-formal-suit-coach-teacher-formal-style-formal-work-fashion-business-outfit-professional-attire-dress-code-formalwear_474717-16237.jpg"
          alt=""
        />
        <div
          style={{
            borderRadius: " 0 0 16px 16px",
          }}
          className="h-[60%] w-[90%] bg-white flex flex-col items-center gap-6"
        >
          <div className="h-[20%] w-[95%] flex justify-between items-center">
            <div className="w-[12%] flex justify-between items-center">
              <FaStar size={18}
                style={{
                  color: "#FFA300",
                }}
              />
              <p className="font-bold">{rating}</p>
            </div>
            <p className="text-[#FFA300] pr-2"> {category}</p>
          </div>
          <div className="h-[30%] w-[95%]  flex flex-col gap-4">
            <div className="h-[60%] flex items-center justify-end">
              <p className="font-bold text-lg text-[#15313F] pr-2">{title}</p>
            </div>
            <div className="h-[60%] flex justify-end items-center gap-10">
              <button className="bg-[#15313F] text-white font-semibold px-5 py-2 rounded-md">
                انضمام
              </button>
              <div className="w-[30%] h-full flex justify-around items-center">
                <p
                  style={{
                    fontSize: "12px",
                  }}
                  className="font-bold text-[#15313F]"
                >
                  {date}
                </p>
                <SlCalender size={20} />
              </div>
              <div className="w-[30%]  h-full flex items-center justify-around">
                <p
                  style={{
                    fontSize: "12px",
                  }}
                  className="font-bold text-[#15313F]"
                >
                  {duration}
                </p>
                <FiClock size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default WorkshopCard;
