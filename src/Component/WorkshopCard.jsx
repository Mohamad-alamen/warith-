import { IconClock, IconCalendar } from "@tabler/icons-react";

function WorkshopCard(){
    return(
        <div>
        <div className="h-80 bg-black w-80">
          <img src="https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg" alt=""
          className="h-[60%] bg-blue-900"
           />
          <div className="h-[60%] bg-white flex flex-col items-center">
            <div className="h-[20%] w-[95%] flex justify-between items-center">
              <div className="w-[16%] flex justify-between items-center  rounded-lg ">
                <IconStar
                  style={{
                    color: "FFA300",
                    height: '1.2rem'
                  }}
                />
                <p className="font-bold">4.9</p>
              </div>
              <p className="text-[#FFA300]">التصميم</p>
            </div>
            <div className="h-[50%] w-[95%]">
              <div className="h-[60%] flex items-center justify-end">
                <p className="font-bold text-lg text-[#15313F]">كورس تصميم الهوية البصرية</p>
              </div>
              <div className="h-[40%] flex justify-end">
                <div className="w-[40%] h-full flex justify-around items-center">
                  <p className="font-bold text-[#15313F]">14 - 07 - 2023</p>
                  <IconCalendar />
                </div>
                <div className="w-[40%] h-full flex items-center justify-around">
                  <p className="font-bold text-[#15313F]">22hr 30min</p>
                  <IconClock />
                </div>
              </div>
            </div>
            <div className="h-[40%] w-[95%] flex justify-start items-center">
              <button className="bg-[#15313F] text-white font-semibold px-4 py-2 rounded-md">انضمام</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default WorkshopCard;