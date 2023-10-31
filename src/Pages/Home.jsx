import Header from "../Component/Header.jsx";
import CourseCard from "../Component/CoursesCard.jsx";
import WorkshopCard from "../Component/WorkshopCard.jsx";
import {
  IconDeviceLaptop,
  IconBinaryTree,
  IconBuilding,
} from "@tabler/icons-react";
import Logo from "../../public/Icons/Logo-2.svg";
import Logo2 from "../../public/Icons/UNIVERSITY OF WARITH AL-ANBIYAA LOGO FINAL copy 1.svg";
import supporterLogo1 from "../../public/Icons/supporterLogo.svg";
import supporterLogo2 from "../../public/Icons/supporterLogo2.svg";
import supporterLogo3 from "../../public/Icons/supporterLogo3.svg";
import supporterLogo4 from "../../public/Icons/supporterLogo4.svg";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
 
  return (
    <div>
      <div className="h-screen relative">
        <Header />
        <div className="h-[70vh] w-full relative">
          <div className="h-[90vh] w-full bg-[#15313F] opacity-40 absolute z-10 pointer-events-none"></div>
          <Swiper
            className="h-[90vh] relative"
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <img
                className="h-full w-full object-cover"
                src="https://static.stacker.com/s3fs-public/styles/sar_screen_maximum_large/s3/WomenCollegeEHYR_2.png"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full object-cover "
                src="https://www.parcelpending.com/wp-content/uploads/2021/03/How-to-Attract-College-Students-Online-900x600.jpg"
                alt="Slide 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full object-cover"
                src="https://www.brainbalancecenters.com/hubfs/Help-for-Struggling-College-Students.jpeg"
                alt="Slide 3"
              />
            </SwiperSlide>
          </Swiper>
          <div className="h-[100%] w-[40%] absolute top-20 right-20 z-20  lg:flex lg:flex-col lg:items-end  ">
            <div className="h-[40%] flex justify-end items-center lg:w-[65%] lg:justify-end">
              <img src={Logo} alt="" className="h-[60%] w-[40%]" />
              <img src={Logo2} alt="" className="h-[60%] w-[40%]" />
            </div>
            <div className="h-[60%] flex flex-col items-end gap-4 justify-center lg:items-end lg:gap-0 lg:justify-around">
              <p className="text-3xl text-white font-thin text-right border-b-2 border-[#FFA300] pb-4">
                مركز وارث للريادة والابتكار والتطوير
              </p>
              <p className="text-5xl text-right font-bold text-white">
                اطلق <span className="text-[#FFA300]">قدراتك</span> <br />{" "}
                <span className="text-[#FFA300]">وابتكر</span> مستقبلك
              </p>
              <button className="bg-white text-xl px-6 py-4 rounded font-bold">
                انضم الان
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen w-full  flex justify-center items-center">
        <div className="w-[80%] h-[40%] bg-white">
          <div className="h-[30%]  flex justify-center items-center">
            <p className="text-[#15313F] font-semibold text-3xl border-b-2 pb-3 border-[#FFA300]">
              المؤوسسات الداعمة
            </p>
          </div>
          <div className="w-[100%] h-[70%] flex items-center justify-around flex-row-reverse">
            <img src={supporterLogo1} alt="" className="h-[80%] w-[20%]" />
            <img src={supporterLogo2} alt="" className="h-[80%] w-[20%]" />
            <img src={supporterLogo3} alt="" className="h-[80%] w-[20%]" />
            <img src={supporterLogo4} alt="" className="h-[80%] w-[20%]" />
          </div>
        </div>
      </div>
      <div className="h-screen flex justify-center items-center">
        <div className="h-full w-[95%] ">
          <div className="w-full h-[12%] flex flex-col gap-10">
            <div className="h-[60%] flex items-center justify-center">
              <p className="text-[#15313F] text-3xl font-semibold">
                الدورات التدريبية
              </p>
            </div>
            <div className="h-[40%] flex justify-end px-2">
              <ul className="hidden lg:flex flex-row-reverse gap-12">
                <li
                  className={`hover:cursor-pointer text-lg ${
                    selectedCategory === "" ? "font-bold" : "text-[#8C8C8C]"
                  }`}
                  onClick={() => setSelectedCategory("")}
                >
                  جميع التصنيفات
                </li>
                <li
                  className={`hover:cursor-pointer text-lg ${
                    selectedCategory === "ريادة الاعمال"
                      ? "font-bold"
                      : "text-[#8C8C8C]"
                  }`}
                  onClick={() => setSelectedCategory("ريادة الاعمال")}
                >
                  ريادة الاعمال
                </li>
                <li
                  className={`hover:cursor-pointer text-lg ${
                    selectedCategory === "البرمجة"
                      ? "font-bold"
                      : "text-[#8C8C8C]"
                  }`}
                  onClick={() => setSelectedCategory("البرمجة")}
                >
                  البرمجة
                </li>
                <li
                  className={`hover:cursor-pointer text-lg ${
                    selectedCategory === "الهندسة"
                      ? "font-bold"
                      : "text-[#8C8C8C]"
                  }`}
                  onClick={() => setSelectedCategory("الهندسة")}
                >
                  الهندسة
                </li>
                <li
                  className={`hover:cursor-pointer text-lg ${
                    selectedCategory === "المهارات الشخصية"
                      ? "font-bold"
                      : "text-[#8C8C8C]"
                  }`}
                  onClick={() => setSelectedCategory("المهارات الشخصية")}
                >
                  المهارات الشخصية
                </li>
                <li
                  className={`hover:cursor-pointer text-lg ${
                    selectedCategory === "التصميم"
                      ? "font-bold"
                      : "text-[#8C8C8C]"
                  }`}
                  onClick={() => setSelectedCategory("التصميم")}
                >
                  التصميم
                </li>
              </ul>
            </div>
          </div>
          <div className="h-full flex flex-col gap-14">
            <div className="h-[50%] mt-10 flex justify-center gap-14">
              <div className="hidden lg:flex">
                <CourseCard />
              </div>
              <div className="hidden lg:flex md:flex">
                <CourseCard />
              </div>
              <div>
                <CourseCard />
              </div>
            </div>
            <div className="h-[50%] mt-10 flex justify-center gap-14">
              <div className="hidden lg:flex">
                <CourseCard />
              </div>
              <div className="hidden lg:fle md:flex">
                <CourseCard />
              </div>
              <div>
                <CourseCard />
              </div>
            </div>
            <div className="w-full h-[10%] mt-8 lg:mt-10 flex justify-center items-center">
              <button className="border px-4 py-4 text-lg font-semibold  border-2 border-black rounded">
                عرض الكورسات
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen mt-80 flex flex-col lg:flex-row overflow-hidden">
        <div className="h-full w-[100%] flex flex-col justify-around  lg:w-[50%] ">
          <div className="h-[30%] flex  flex-col items-end justify-center gap-8 pr-2">
            <p className="text-[#213469] text-sm  lg:text-lg font-bold hover:cursor-pointer">سجل الان</p>
            <p className="text-[#15313F] text- flex  flex-row-reverse gap-2 lg:text-4xl font-bold">
              انضم الى مجتمع <p>Warith Elevate</p>{" "}
            </p>
            <p className="text-[#737373] text-right text-sm lg:text-lg">
              انضم الينا في رحلة الاكتشاف والتعلم والابتكار، كن جزءا من مجتمع
              يحتفي بالتطوير، ويتقبل التحديات، ويحول الافكار الى مشاريع ذات
              تأثير.
            </p>
          </div>
          <div className="h-[50%] flex flex-col justify-between">
            <div className="h-[33%] flex justify-end items-center gap-14 p-2">
              <p className="font-bold text-lg">توفير حاضنات اعمال</p>
              <div className="bg-[#5FAEC4] rounded-full p-2">
                <IconBuilding className="h-10 w-10 text-white" />
              </div>
            </div>
            <div className="h-[33%] flex justify-end items-center gap-14 p-2">
            <p className="font-bold text-lg"> شبكات التواصل الفعال</p>
              <div className="bg-[#5FAEC4] rounded-full p-2">
                <IconBinaryTree className="h-10 w-10 text-white" />
              </div>
            </div>
            <div className="h-[33%] flex justify-end items-center gap-14 p-2">
            <p className="font-bold text-lg"> ورش العمل والدورات التدريبية </p>
              <div className="bg-[#5FAEC4] rounded-full p-2">
                <IconDeviceLaptop className="h-10 w-10 text-white font-normal" />
              </div>
            </div>
          </div>
          <div className="h-[15%] flex items-center justify-end p-2">
            <button className="border px-12 py-4 text-lg font-semibold  border-2 border-black rounded "> Warith Elevate انضم الان الى</button>
          </div>
        </div>
        <div className="h-full w-[100%] lg:w-[50%] flex items-center justify-end relative">
          <div className="h-[60%] w-[60%] lg:h-[70%] lg:w-[70%]  bg-[#FFA300] rounded-2xl mr-12"></div>
          <img
            style={{
              transform: "rotate(-20deg)",
              right: '7rem',
              bottom: '6rem'
            }}
            className="h-[60%] w-[60%] lg:h-[70%] lg:w-[70%] rounded-2xl absolute object-cover"
            src="https://www.enrgtech.co.uk/blog/wp-content/uploads/2023/07/woman-working-her-workshop-creative-invention-jpg.webp"
            alt=""
          />
        </div>
      </div>
      <div className="h-screen flex justify-center items-center mt-20">
        <div className="h-full w-[95%] ">
          <div className="w-full h-[12%] flex flex-col gap-10">
            <div className="h-[60%] flex items-center justify-center">
              <p className="text-[#15313F] text-3xl font-semibold">
                الورش التدريبية
              </p>
            </div>
            <div className="h-[40%] flex justify-end px-2">
              <ul className="hidden lg:flex flex-row-reverse gap-12">
                <li
                  className={`hover:cursor-pointer text-lg ${
                    selectedCategory === "" ? "font-bold" : "text-[#8C8C8C]"
                  }`}
                  onClick={() => setSelectedCategory("")}
                >
                  جميع التصنيفات
                </li>
                <li
                  className={`hover:cursor-pointer text-lg ${
                    selectedCategory === "ريادة الاعمال"
                      ? "font-bold"
                      : "text-[#8C8C8C]"
                  }`}
                  onClick={() => setSelectedCategory("ريادة الاعمال")}
                >
                  ريادة الاعمال
                </li>
                <li
                  className={`hover:cursor-pointer text-lg ${
                    selectedCategory === "البرمجة"
                      ? "font-bold"
                      : "text-[#8C8C8C]"
                  }`}
                  onClick={() => setSelectedCategory("البرمجة")}
                >
                  البرمجة
                </li>
                <li
                  className={`hover:cursor-pointer text-lg ${
                    selectedCategory === "الهندسة"
                      ? "font-bold"
                      : "text-[#8C8C8C]"
                  }`}
                  onClick={() => setSelectedCategory("الهندسة")}
                >
                  الهندسة
                </li>
                <li
                  className={`hover:cursor-pointer text-lg ${
                    selectedCategory === "المهارات الشخصية"
                      ? "font-bold"
                      : "text-[#8C8C8C]"
                  }`}
                  onClick={() => setSelectedCategory("المهارات الشخصية")}
                >
                  المهارات الشخصية
                </li>
                <li
                  className={`hover:cursor-pointer text-lg ${
                    selectedCategory === "التصميم"
                      ? "font-bold"
                      : "text-[#8C8C8C]"
                  }`}
                  onClick={() => setSelectedCategory("التصميم")}
                >
                  التصميم
                </li>
              </ul>
            </div>
          </div>
          <div className="h-full">
            <div className="h-[50%] mt-10 flex justify-evenly">
              <div className="lg:flex">
                <CourseCard />
              </div>
              <div className="hidden lg:flex md:flex">
                <CourseCard />
              </div>

            </div>
            <div className="h-[50%] mt-10 flex justify-evenly">
              <div className="hidden md:flex lg:flex">
                <CourseCard />
              </div>
              <div className="lg:fle md:flex">
                <CourseCard />
              </div>

            </div>
            <div className="w-full h-[10%] lg:mt-10 flex justify-center items-center">
              <button className="border px-4 py-4 text-lg font-semibold  border-2 border-black rounded">
                عرض الكورسات
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
