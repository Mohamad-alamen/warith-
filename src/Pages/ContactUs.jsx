import MainBackground from "../Component/MainBackground.jsx";
import Header from "../Component/Header";
import Footer from "../Component/Footer.jsx"
import { IconMail, IconPhoneCall, IconMapPin } from "@tabler/icons-react";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
function ContactUs() {
  return (
    <div>
      <Header />
      <MainBackground FirstWord="تواصل" SecondWord="معنا" />
      <div className="h-screen relative">
        <img
          className="h-[18rem] lg:h-[24rem] w-[95%] object-cover absolute left-1/2 transform -translate-x-1/2 top-[-4rem]"
          src="https://i.stack.imgur.com/fuqcj.jpg"
          alt=""
        />
        <div className="h-[38rem] lg:h-[20rem] w-[70%] bg-[#15313F] absolute bottom-[6rem] md:bottom-[14rem] left-1/2 transform -translate-x-1/2 flex flex-col items-center lg:flex-row lg:flex-row-reverse lg:justify-around">
          <div className="h-[33%] lg:h-[100%] lg:w-[33%] flex flex-col items-center justify-center gap-4 lg:justify-center lg:gap-6">
            <CiMail size={50} className="text-white"/>
            <div className="flex flex-col items-center">
              <p className="text-white text-xl ">Info@warithelevate.com</p>
              <p className="text-white text-xl">Support@warithelevate.com</p>
            </div>
          </div>
          <div className="h-[0.1rem] w-[60%] bg-white lg:hidden"></div>
          <div className="h-[33%] lg:h-[100%] lg:w-[33%]   flex flex-col items-center justify-center gap-4 lg:justify-center lg:gap-6">
            <BsTelephone size={50} className="text-white" />
            <div className="flex flex-col items-center">
              <p className="text-white text-xl">+9647800800758</p>
            </div>
          </div>
          <div className="h-[0.1rem] w-[60%] bg-white lg:hidden"></div>

          <div className="h-[33%] lg:h-[100%] lg:w-[33%] flex flex-col items-center justify-center gap-4 lg:justify-center lg:gap-6">
            <IoLocationOutline size={50} className="text-white" />
            <div className="flex flex-col items-center">
              <p className="text-white text-xl text-center">
                العراق - كربلاء المقدسة طريق بغداد
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen">
        <div className="h-[15%] flex flex-col justify-evenly items-center lg:mt-4">
          <p className="text-xl font-semibold">اخبرنا بما تفكر برسالة</p>
          <p className="text-center text-[#77838F]">
            يمكنك اخبارنا بما تفكر او المشاكل التي تواجها لكي نتمكن من مساعدتك
            ومعرفة افكارك .
          </p>
        </div>
        <div className="h-[80%] pr-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:flex-row-reverse lg:justify-center">
            <div className="w-ful flex flex-col items-end gap-2">
              <p className="text-lg font-semibold">الاسم الكامل</p>
              <input
                className="placeholder-bold text-right w-[80%] md:w-[60%] lg:w-[20rem] h-[3.4rem] pr-4 outline-none rounded"
                type="text"
                name=""
                id=""
                placeholder="الاسم الكامل"
              />
            </div>
            <div className="w-ful flex flex-col items-end gap-2">
              <p className="text-lg font-semibold">البريد الالكتروني</p>
              <input
                className=" placeholder-bold text-right w-[80%] md:w-[60%] lg:w-[20rem] h-[3.4rem] pr-4 outline-none rounded"
                type="email"
                name=""
                id=""
                placeholder="البريد الالكتروني"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:flex-row-reverse lg:justify-center lg:mt-4">
            <div className="w-ful flex flex-col items-end gap-2">
              <p className="text-lg font-semibold">رقم الهاتف</p>
              <input
                className=" placeholder-bold text-right w-[80%] md:w-[60%] lg:w-[20rem] h-[3.4rem] pr-4 outline-none rounded"
                type="number"
                name=""
                id=""
                placeholder="رقم الهاتف"
              />
            </div>
            <div className="w-ful flex flex-col items-end gap-2">
              <p className="text-lg font-semibold">الموضوع</p>
              <input
                className="placeholder-bold text-right w-[80%] md:w-[60%] lg:w-[20rem] h-[3.4rem] pr-4 outline-none rounded"
                type="text"
                name=""
                id=""
                placeholder="الموضوع"
              />
            </div>
          </div>
          <div className="">
            <div className="w-ful flex flex-col items-end lg:justify-center lg:items-center gap-2 lg:mt-4">
              <p className="text-lg font-semibold">الرسالة</p>
              <input
                className=" placeholder-bold text-right w-[80%] md:w-[60%] lg:w-[40rem] h-[12rem] pr-4 pb-[10rem] outline-none rounded"
                type="text"
                name=""
                id=""
                placeholder="الرسالة"
              />
            </div>
          </div>
          <div className="h-[8%] flex items-center justify-center md:justify-end lg:justify-center">
            <button className="px-12 py-4 bg-[#FFA300] text-white text-xl mt-12 rounded">
              ارسل الرسالة
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default ContactUs;
