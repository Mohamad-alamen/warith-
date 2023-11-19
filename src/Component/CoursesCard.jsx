import { FiClock } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
function CourseCard({ imageUrl, rating, category, title, date, duration }) {
  return (
    <Link to='/Subpage'>
        <div>
      <div
        style={{
          borderRadius: "16px 16px 0 0 ",
        }}
        className="h-80 bg-black w-80"
      >
        <img
          style={{
            borderRadius: "16px 16px 0 0 ",
          }}
          src={imageUrl}
          alt=""
          className="h-[60%]"
        />
        <div
          style={{
            borderRadius: " 0 0 16px 16px",
          }}
          className="h-[60%] bg-white flex flex-col items-center"
        >
          <div className="h-[20%] w-[95%] flex justify-between items-center">
            <div className="w-[16%] flex justify-between items-center ">
            <FaStar size={18}
                style={{
                  color: "#FFA300",
                }}
              />
              <p className="font-bold">{rating}</p>
            </div>
            <p className="text-[#FFA300] pr-2">{category}</p>
          </div>
          <div className="h-[50%] w-[95%]">
            <div className="h-[60%] flex items-center justify-end">
              <p className="font-bold text-lg text-[#15313F] pr-2">{title}</p>
            </div>
            <div className="h-[40%] flex justify-end">
              <div className="w-[40%] h-full flex justify-around items-center">
                <p className="font-bold text-[#15313F]">{date}</p>
                <SlCalender size={20}/>
              </div>
              <div className="w-[40%] h-full flex items-center justify-around">
                <p className="font-bold text-[#15313F]">{duration}</p>
                <FiClock size={20}/>
              </div>
            </div>
          </div>
          <div className="h-[40%] w-[95%] pl-2 flex justify-start items-center">
            <button className="bg-[#15313F] text-white font-semibold px-4 py-2 rounded-md">
              انضمام
            </button>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default CourseCard;