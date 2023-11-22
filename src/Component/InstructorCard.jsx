import { IconWorld, IconMail, IconBrandLinkedin } from "@tabler/icons-react";
import { FaLinkedin } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import { IoMdMail } from "react-icons/io";

function InstructorCard() {
  return (
    <div>
      <div
        style={{
          height: "13rem",
          width: "25rem",
          // boxShadow: "0 2px 9px rgba(0, 0, 0, 0.7)",
        }}
        className="flex  lg:flex-row gap-10 flex-col lg:items-center items-end"
      >
        <div className="h-[90%] w-[80%] md:w-[70%] md:flex md:flex-col  items-center lg:items-end pr-2 ">
          <div className="h-[50%] flex flex-col items-end justify-center gap-2">
            <p className="text-xl font-semibold">احمد علي كاظم</p>
            <p className="text-sm text-[#8C8C8C] font-semibold">
              مهندس برمجيات
            </p>
          </div>
          <div className="h-[50%] flex flex-col">
            <p className="text-sm text-[#737373] text-right md:text-center lg:text-right">
              انضم الينا في رحلة الاكتشاف والتعلم والابتكار، كن جزءا من مجتمع
              يحتفي بالتطوير، ويتقبل التحديات، ويحول الافكار الى مشاريع ذات
              تأثير. انضم الينا في رحلة الاكتشاف والتعلم والابتكار، كن جزءا من
              مجتمع
            </p>
            <div className="h-[20%] flex gap-3 text-[#213469] pl-5 md:flex md:justify-center lg:justify-start ">
              <TiWorld size={24}/>
              <IoMdMail size={24}/>
              <FaLinkedin size={24}/>
            </div>
          </div>
        </div>
        <img
          className="h-[200%] w-[100%] md:w-[80%] lg:h-[90%] lg:w-[33%] object-cover rounded"
          src="https://media.istockphoto.com/id/1288039261/photo/portrait-of-a-smiling-middle-aged-man-of-indian-origin.jpg?s=612x612&w=0&k=20&c=hksg2MpAsM6pQSR-TASLnfFE4-sDPcYHyE6-edycJDI="
          alt=""
        />
      </div>
    </div>
  );
}

export default InstructorCard;
