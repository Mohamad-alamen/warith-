import { IconWorld, IconMail, IconBrandLinkedin } from "@tabler/icons-react";

function InstructorCard() {
  return (
    <div>
      <div
        style={{
          height: "12rem",
          width: "30rem",
          boxShadow: "0 2px 9px rgba(0, 0, 0, 0.7)",
          padding: '0.1rem'
        }}
        className="flex flex-row-reverse items-center gap-2"
      >
        <img
          className="h-[95%] w-[30%] object-cover rounded"
          src="https://media.istockphoto.com/id/1288039261/photo/portrait-of-a-smiling-middle-aged-man-of-indian-origin.jpg?s=612x612&w=0&k=20&c=hksg2MpAsM6pQSR-TASLnfFE4-sDPcYHyE6-edycJDI="
          alt=""
        />
        <div className="h-[90%] w-[60%] md:w-[70%]">
          <div className="h-[50%] flex flex-col items-end justify-center gap-2">
            <p className="text-xl font-semibold">احمد علي كاظم</p>
            <p className="text-sm text-[#8C8C8C] font-semibold">مهندس برمجيات</p>
          </div>
          <div className="h-[50%] flex flex-col gap-3">
            <p className="text-sm text-[#737373] text-right">
              انضم الينا في رحلة الاكتشاف والتعلم والابتكار، كن جزءا من مجتمع
              يحتفي بالتطوير، ويتقبل التحديات، ويحول الافكار الى مشاريع ذات
              تأثير.
            </p>
            <div className="h-[20%] flex gap-2 text-[#213469] pl-5 pb-5">
                <IconWorld className="hover:cursor-pointer"/>
                <IconMail className="hover:cursor-pointer"/>
                <IconBrandLinkedin className="hover:cursor-pointer"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorCard;
