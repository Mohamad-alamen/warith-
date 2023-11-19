import Header from "../Component/Header";
import MainBackground from "../Component/MainBackground.jsx";
import Footer from "../Component/Footer.jsx"
import InstructorCard from "../Component/InstructorCard.jsx";
import dottedWindow from "../../public/Icons/dottedWindow.svg";
import supporterLogo1 from "../../public/Icons/supporterLogo.svg";
import supporterLogo2 from "../../public/Icons/supporterLogo2.svg";
import supporterLogo3 from "../../public/Icons/supporterLogo3.svg";
import supporterLogo4 from "../../public/Icons/supporterLogo4.svg";

import { FaBuilding } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { PiMonitorPlayFill } from "react-icons/pi";
import { MdRemoveRedEye } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { FaFlag } from "react-icons/fa6";
import yellowLine from "../../public/Icons/yellowLine.svg";
import yellowArrow from "../../public/Icons/yellowArrow.svg";

function AboutUs() {
  return (
    <div className="overflow-hidden">
      <Header />
      <MainBackground FirstWord="من" SecondWord="نحن" />
      <div className="h-screen flex flex-col gap-2 lg:flex-row lg:flex-row-reverse mt-10">
        <div className="h-full w-[100%] gap-2 lg:w-[50%] flex items-center justify-center">
          <div className="h-[95%] w-[95%] flex flex-col gap-4 p-4">
            <div className="h-[10%] flex justify-end items-center">
              <p className="text-[#FFA300] font-semibold text-lg">
                Warith Elevate
              </p>
            </div>
            <div className="h-[15%] flex flex-col flex-col-reverse justify-end items-end gap-1">
              <p className="text-lg lg:text-3xl">للريادة والابتكار والتطوير</p>
              <p className="text-lg lg:text-3xl font-bold font-[#213469]">
                مركز وارث{" "}
              </p>
            </div>
            <div className="h-[75%] flex items-center">
              <p className="text-[#666666] text-sm lg:text-xl  lg:leading-8 text-right t">
                مرحبا بكم في مركز وارث للريادة والابتكار والتطوير Warith Elevate
                نؤمن بقوة الافكار ونقدم بيئة تعاونية يطمح لها رواد الاعمال
                والمبتكرين ونزود الافراد <br /> بالمعرفة والمهارات والموارد التي
                يحتاجون اليها لتحويل افكارهم الى مشاريع ناجحة ، نقدم نهجا شاملا
                للتطوير من خلال ورش عمل وبرامج التدريب والارشاد. مرحبا بكم في
                مركز وارث للريادة والابتكار والتطوير <br /> Warith Elevate نؤمن
                بقوة الافكار ونقدم بيئة تعاونية يطمح لها رواد الاعمال والمبتكرين
                ونزود الافراد بالمعرفة والمهارات والموارد التي يحتاجون اليها
                لتحويل افكارهم الى مشاريع ناجحة ، نقدم نهجا شاملا للتطوير من
                خلال ورش عمل وبرامج التدريب والارشاد. مرحبا بكم في مركز وارث
                <br />
                للريادة والابتكار والتطوير Warith Elevate نؤمن بقوة الافكار
                ونقدم بيئة تعاونية يطمح لها رواد الاعمال والمبتكرين ونزود
                الافراد بالمعرفة والمهارات والموارد التي يحتاجون اليها لتحويل
                افكارهم الى مشاريع ناجحة ، نقدم نهجا شاملا للتطوير من خلال ورش
                عمل وبرامج التدريب والارشاد.
              </p>
            </div>
          </div>
        </div>
        <div className="h-full w-[100%] lg:w-[50%] flex justify-center items-center">
          <div className="h-full w-[95%] relative">
            <div className="h-[70%] w-full  flex justify-around items-center flex-row-reverse">
              <img
                className="h-[90%] w-[60%] object-cover"
                src="https://uowa.edu.iq/filestorage/file_16365287160.jpg"
                alt=""
              />
              <img
                className="h-12 w-14 lg:h-40 md:hidden lg:flex lg:w-40 opacity-60"
                src={dottedWindow}
                alt=""
              />
            </div>
            <img
              className="h-[50%] w-[60%] object-cover absolute bottom-0"
              src="https://uowa.edu.iq/filestorage/file_16365287160.jpg"
              alt=""
            />
            <img
              className="h-12 w-14 lg:h-40 lg:w-40 md:hidden lg:flex absolute right-10 bottom-10"
              src={dottedWindow}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="h-screen mt-10 flex flex-col flex-col-reverse gap-8 lg:flex-row">
        <div className="h-full w-[100%]  lg:w-[50%] flex items-center justify-center lg:justify-end">
          <div className="h-[100%] md:h-[80%] w-[80%] flex flex-col  items-end justify-center gap-2">
            <div className="w-[80%] h-[20%] flex flex-col items-end justify-center gap-1 lg:gap-6">
              <div className="flex gap-2">
                <p className="text-xl font-bold">رؤيتنا</p>
                <MdRemoveRedEye size={36} className="text-white p-1 bg-[#FFA300]" />
              </div>
              <p className="text-[#8C8C8C]">تعزيز القدرات لخلق الفرص</p>
            </div>
            <div className="w-[80%] h-[20%] flex flex-col items-end justify-center gap-1 lg:gap-6">
              <div className="flex gap-2">
                <p className="text-xl font-bold">رسالتنا</p>

                <TbTargetArrow size={36} className="text-white p-1 bg-[#FFA300]" />
              </div>
              <p className="text-[#8C8C8C]">
                التمكين المهني لطلبة وخريجي الجامعة ليأخذوا دورهم الحقيقي في
                المجتمع
              </p>
            </div>
            <div className="w-[80%] h-[32%] flex flex-col items-end justify-center gap-1 lg:gap-6">
              <div className="flex gap-2">
                <p className="text-xl font-bold">مهمتنا</p>

                <FaFlag size={36} className="text-white p-1 bg-[#FFA300]" />
              </div>
              <ul className="flex flex-col gap-1 list-disc">
                <li className="flex items-center gap-3 flex-row-reverse">
                  <div className="h-2 w-2 rounded-full bg-[#8C8C8C] mr-2"></div>
                  <span className="text-[#8C8C8C] text-right">
                    بناء القدرات وتعزيز التدريب وتحفيز التعلم الذاتي لضمان
                    التحسين المستمر
                  </span>
                </li>
                <li className="flex items-center gap-3 flex-row-reverse hidden">
                  <div className="h-2 w-2 rounded-full bg-[#8C8C8C] mr-2"></div>
                  <span className="text-[#8C8C8C] text-right">
                    تعزيز الاخلاقيات والممارسات المهنية بما ينسجم مع منظومة
                    الاخلاقية
                  </span>
                </li>
                <li className="flex items-center gap-3 flex-row-reverse">
                  <div className="h-2 w-2 rounded-full bg-[#8C8C8C] mr-2"></div>
                  <span className="text-[#8C8C8C] text-right">
                    التفكير الريادي في الاعمال لتحويل الافكار الى مشاريع نافعة
                    في المجتمع
                  </span>
                </li>
                <li className="flex items-center gap-3 flex-row-reverse">
                  <div className="h-2 w-2 rounded-full bg-[#8C8C8C] mr-2"></div>
                  <span className="text-[#8C8C8C] text-right">
                    تحقيق الاثر الاقتصادي والاجتماعي
                  </span>
                </li>
                <li className="flex items-center gap-3 flex-row-reverse">
                  <div className="h-2 w-2 rounded-full bg-[#8C8C8C] mr-2"></div>
                  <span className="text-[#8C8C8C] text-right">
                    تعزيز المجتمع المستدام
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-full w-[100%] lg:w-[50%] flex items-center justify-center lg:justify-start">
          <img
            className="h-[80%] w-[60%] object-cover"
            src="https://uowa.edu.iq/filestorage/file_16700031080.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="h-screen mt-0 lg:mt-[20rem] flex flex-col lg:flex-row overflow-hidden relative">
        <div
          style={{
            backgroundImage: `url(${yellowArrow})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          className="w-[8rem] h-20 lg:h-[12rem] lg:w-[14rem] absolute top-[3.5rem] right-[9rem] lg:left-[18rem] lg:top-[8rem]"
        ></div>
        <div
          style={{
            backgroundImage: `url(${yellowLine})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          className=" absolute h-[9rem] w-[5rem]  lg:h-[12rem] lg:w-[12rem] top-[18rem] left-[1rem] lg:top-[28rem] lg:left-[18rem]"
        ></div>
        <div className="h-full w-[100%] flex flex-col justify-around  lg:w-[50%] ">
          <div className="h-[30%] flex  flex-col items-end justify-around  pr-2">
            <p className="text-[#213469] text-sm   lg:text-lg font-bold hover:cursor-pointer">
              سجل الان
            </p>
            <p className="text-[#15313F] text- flex  flex-row-reverse gap-2 lg:text-4xl font-bold">
              انضم الى مجتمع <p>Warith Elevate</p>
            </p>
            <p className="text-[#737373] text-right text-sm lg:text-lg  w-[90%]">
              انضم الينا في رحلة الاكتشاف والتعلم والابتكار، كن جزءا من مجتمع
              يحتفي بالتطوير، ويتقبل التحديات، ويحول الافكار الى مشاريع ذات
              تأثير.
            </p>
          </div>
          <div className="h-[40%] flex flex-col justify-between">
            <div className="h-[33%] flex justify-end items-center gap-5 p-2">
              <p className="font-bold text-lg">توفير حاضنات اعمال</p>
              <div className="bg-[#5FAEC4] rounded-full p-2">
                <FaBuilding size={30} className=" text-white" />
              </div>
            </div>
            <div className="h-[33%] flex justify-end items-center gap-5 p-2">
              <p className="font-bold text-lg"> شبكات التواصل الفعال</p>
              <div className="bg-[#5FAEC4] rounded-full p-2">
              <FaNetworkWired size={30} className=" text-white" />
              </div>
            </div>
            <div className="h-[33%] flex justify-end items-center gap-5 p-2">
              <p className="font-bold text-lg">
                {" "}
                ورش العمل والدورات التدريبية{" "}
              </p>
              <div className="bg-[#5FAEC4] rounded-full p-2">
              <PiMonitorPlayFill size={30} className=" text-white" />
              </div>
            </div>
          </div>
          <div className="h-[15%] flex items-center justify-end p-2">
            <button className="border px-8 py-3 lg:px-12 lg:py-4 text-lg font-semibold  border-2 bg-[#15313F] text-white rounded-xl ">
              {" "}
              Warith Elevate انضم الان الى
            </button>
          </div>
        </div>
        <div className="h-full w-[100%] lg:w-[50%] flex items-center justify-end relative">
          <div className="h-[60%] w-[60%] lg:h-[70%] lg:w-[70%]  bg-[#FFA300] rounded-2xl mr-12"></div>
          <img
            style={{
              transform: "rotate(-20deg)",
              right: "7rem",
              bottom: "6rem",
            }}
            className="h-[60%] w-[60%] lg:h-[70%] lg:w-[70%] rounded-2xl absolute object-cover"
            src="https://www.enrgtech.co.uk/blog/wp-content/uploads/2023/07/woman-working-her-workshop-creative-invention-jpg.webp"
            alt=""
          />
        </div>
      </div>
      <div className="h-[60vh]  w-full  flex justify-center items-center">
        <div className="w-[60rem] h-[18rem] bg-white">
          <div className="h-[30%]  flex justify-center items-center">
            <p className="text-[#15313F] font-semibold text-3xl border-b-2 pb-3 border-[#FFA300]">
              المؤوسسات الداعمة
            </p>
          </div>
          <div className="w-[100%] h-[70%] flex items-center justify-around flex-row-reverse">
            <img src={supporterLogo1} alt="" className="h-[80%] w-[50%] lg:w-[20%]" />
            <img src={supporterLogo2} alt="" className="h-[80%] w-[20%] hidden lg:flex" />
            <img src={supporterLogo3} alt="" className="h-[80%] w-[50%] lg:w-[20%]"/>
            <img src={supporterLogo4} alt="" className="h-[80%] w-[20%] hidden lg:flex" />
          </div>
        </div>
      </div>
      <div className="h-screen flex items-center justify-center">
        <div className="w-full h-80">
          <div className="h-[30%] bg-white w-full flex justify-center items-center">
            <p className="text-[#15313F] text-xl md:text-3xl font-semibold">
              Warith Elevate تعرف على مدربين
            </p>
          </div>
          <div className="h-[100%] w-[100%] bg-white flex justify-end lg:justify-around items-center">
            <div className="hidden  lg:flex">
              <InstructorCard />
            </div>
            <div className="hidden lg:flex">
              <InstructorCard />
            </div>
            <div>
              <InstructorCard />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default AboutUs;
