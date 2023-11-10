import { IconClock, IconCalendar, IconStar } from "@tabler/icons-react";
function WorkshopCard({rating,category,title,date,duration}) {
  return (
    <div
    className="flex flex-col justify-items-center"
      style={{
        height: "18rem",
        width: '28rem',
        borderRadius: "9rem",
      }}
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
            <IconStar
              style={{
                color: "#FFA300",
                height: "1.2rem",
              }}
            />
            <p className="font-bold">{rating}</p>
          </div>
          <p className="text-[#FFA300] pr-2"> {category}</p>
        </div>
        <div className="h-[30%] w-[95%]  flex flex-col gap-4">
          <div className="h-[60%] flex items-center justify-end">
            <p className="font-bold text-lg text-[#15313F] pr-2">
                 {title}   
            </p>
          </div>
          <div className="h-[60%] flex justify-end items-center gap-10">
          <button className="bg-[#15313F] text-white font-semibold px-5 py-2 rounded-md">
              انضمام
            </button>
            <div className="w-[30%] h-full flex justify-around items-center">
                
              <p
                style={{
                  fontSize: "14px",
                }}
                className="font-bold text-[#15313F] font"
              >
              {date}
              </p>
              <IconCalendar />
            </div>
            <div className="w-[30%]  h-full flex items-center justify-around">
              <p
                style={{
                  fontSize: "14px",
                }}
                className="font-bold text-[#15313F]"
              >
                {duration} 
              </p>
              <IconClock />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkshopCard;
