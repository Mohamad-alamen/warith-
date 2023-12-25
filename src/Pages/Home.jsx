import Header from "../Component/Header.jsx";
import CourseCard from "../Component/CoursesCard.jsx";
import yellowLine from "../../public/Icons/yellowLine.svg";
import yellowArrow from "../../public/Icons/yellowArrow.svg";
import WorkshopCard from "../Component/WorkshopCard.jsx";
import InstructorCard from "../Component/InstructorCard.jsx";
import NewsCard from "../Component/NewsCard.jsx";
import { FaBuilding } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { PiMonitorPlayFill } from "react-icons/pi";
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
import Hero from "../Component/Hero.jsx";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [clickedCardImageSrc, setClickedCardImageSrc] = useState("");
  const [clickedCardTitle, setClickedCardTitle] = useState("");
  const handleCardClick = (imageSrc, title) => {
    setClickedCardImageSrc(imageSrc);
    setClickedCardTitle(title);
  };

  return (
    <div className=" w-full h-full max-w-screen-2xl m-auto">
    <Hero/>
      <div className="full w-full  flex justify-center items-center ">
        <div className="w-[80%] h-[40%] bg-white">
          <div className="h-[30%]  flex justify-center items-center">
            <p className="text-[#15313F] font-semibold text-3xl border-b-2 pb-3 border-[#FFA300]">
              المؤوسسات الداعمة
            </p>
          </div>
          <div className="w-[100%] h-[70%] flex items-center justify-around flex-row-reverse">
            <img
              src={supporterLogo1}
              alt=""
              className="h-[80%] w-[50%] lg:w-[20%]"
            />
            <img
              src={supporterLogo2}
              alt=""
              className="h-[80%] w-[20%] hidden lg:flex"
            />
            <img
              src={supporterLogo3}
              alt=""
              className="h-[80%] w-[50%] lg:w-[20%]"
            />
            <img
              src={supporterLogo4}
              alt=""
              className="h-[80%] w-[20%] hidden lg:flex"
            />
          </div>
        </div>
      </div>
      <div className="full lg:h-screen lg:hidden ">
        <div className="w-full h-[12%] flex flex-col gap-10">
          <div className="h-[60%] flex items-center justify-center">
            <p className="text-[#15313F] text-3xl font-semibold">
              الدورات التدريبية
            </p>
          </div>
          <div className="h-[40%] w-[87%] flex justify-end px-2"></div>
        </div>
        <Swiper
          className="h-full relative"
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="flex flex-col items-center gap-[8rem]">
              <CourseCard
                imageUrl="https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg"
                rating="4.9"
                category="التصميم"
                title="كورس تصميم الهوية البصرية"
                date="14 - 07 - 2023"
                duration="22hr 30min"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center gap-[8rem]">
              <CourseCard
                imageUrl="https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg"
                rating="4.9"
                category="التصميم"
                title="كورس تصميم الهوية البصرية"
                date="14 - 07 - 2023"
                duration="22hr 30min"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center gap-[8rem]">
              <CourseCard
                imageUrl="https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg"
                rating="4.9"
                category="التصميم"
                title="كورس تصميم الهوية البصرية"
                date="14 - 07 - 2023"
                duration="22hr 30min"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="h-full flex justify-center items-center lg:flex">
        <div className="h-full w-[95%] ">
          <div className="w-full h-[12%] flex flex-col gap-10">
            <div className="h-[60%] flex items-center justify-center">
              <p className="text-[#15313F] text-3xl font-semibold">
                الدورات التدريبية
              </p>
            </div>
            <div className="h-[40%] w-[87%] flex justify-end px-2">
              <ul className="hidden xl:flex flex-row-reverse gap-12">
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
                <CourseCard
                  imageUrl="https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg"
                  rating="4.9"
                  category="التصميم"
                  title="كورس تصميم الهوية البصرية"
                  date="14 - 07 - 2023"
                  duration="22hr 30min"
                />
              </div>
              <div className="hidden lg:flex md:flex">
                <CourseCard
                  imageUrl="https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg"
                  rating="4.9"
                  category="التصميم"
                  title="كورس بوستات السوشل ميديا"
                  date="14 - 07 - 2023"
                  duration="22hr 30min"
                />
              </div>
              <div>
                <CourseCard
                  imageUrl="https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg"
                  rating="4.9"
                  category="التصميم"
                  title="كورس تصميم الهوية البصرية"
                  date="14 - 07 - 2023"
                  duration="22hr 30min"
                />{" "}
              </div>
            </div>
            <div className="h-[50%] mt-10 flex justify-center gap-14">
              <div className="hidden lg:flex">
                <CourseCard
                  imageUrl="https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg"
                  rating="4.9"
                  category="التصميم"
                  title="كورس التصميم الداخلي"
                  date="14 - 07 - 2023"
                  duration="22hr 30min"
                />{" "}
              </div>
              <div className="hidden lg:fle md:flex">
                <CourseCard
                  imageUrl="https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg"
                  rating="4.9"
                  category="البرمجة"
                  title="كورس   برمجة التطبيقات"
                  date="14 - 07 - 2023"
                  duration="22hr 30min"
                />{" "}
              </div>
              <div>
                <CourseCard
                  imageUrl="https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg"
                  rating="4.9"
                  category="البرمجة"
                  title="كورس  برمجة واجهات المواقع"
                  date="14 - 07 - 2023"
                  duration="22hr 30min"
                />{" "}
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
      <div className="h-full flex flex-col lg:flex-row overflow-hidden relative">
        <div
          style={{
            backgroundImage: `url(${yellowArrow})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          className="w-[8rem] h-20 lg:h-[12rem] lg:w-[14rem] hidden  absolute top-[5rem] right-[9rem] lg:left-[18rem] lg:top-[8rem]"
        ></div>
        <div
          style={{
            backgroundImage: `url(${yellowLine})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          className=" absolute h-[9rem] w-[5rem]  hidden  lg:h-[12rem] lg:w-[12rem] top-[18rem] left-[1rem] lg:top-[28rem] lg:left-[18rem]"
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
      <div className="h-full lg:hidden">
        <div className="h-[20%] flex items-center justify-center">
          <p className="text-[#15313F] text-3xl font-semibold">
            الدورات التدريبية
          </p>
        </div>
        <Swiper
          className="h-[90vh] relative "
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className=" flex justify-center items-center">
              <WorkshopCard
                imageUrl="https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg"
                rating="4.9"
                category="البرمجة"
                title="كورس  برمجة واجهات المواقع"
                date="14 - 07 - 2023"
                duration="22hr 30min"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex justify-center items-center">
              <WorkshopCard
                imageUrl="https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg"
                rating="4.9"
                category="البرمجة"
                title="كورس  برمجة واجهات المواقع"
                date="14 - 07 - 2023"
                duration="22hr 30min"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex justify-center items-center">
              <WorkshopCard
                imageUrl="https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg"
                rating="4.9"
                category="البرمجة"
                title="كورس  برمجة واجهات المواقع"
                date="14 - 07 - 2023"
                duration="22hr 30min"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="h-full hidden lg:flex justify-center items-center">
        <div className="h-full w-[95%] flex flex-col gap-[9rem] ">
          <div className="w-full h-[12%] flex flex-col gap-10">
            <div className="h-[20%] flex items-center justify-center">
              <p className="text-[#15313F] text-3xl font-semibold">
                الدورات التدريبية
              </p>
            </div>
            <div className="h-[40%] w-[83%] flex justify-end px-12">
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

          <div
            style={{
              gap: "5rem",
            }}
            className="h-full flex flex-col justify-center items-center"
          >
            <div className="h-[50%]  ml-12 lg:ml-0 mt-10 flex justify-center gap-14">
              <div className="hidden lg:flex">
                <WorkshopCard
                  imageUrl="https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg"
                  rating="4.9"
                  category="البرمجة"
                  title="كورس  برمجة واجهات المواقع"
                  date="14 - 07 - 2023"
                  duration="22hr 30min"
                />
              </div>
              <div>
                <WorkshopCard
                  imageUrl="https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg"
                  rating="4.9"
                  category="البرمجة"
                  title="كورس  برمجة واجهات المواقع"
                  date="14 - 07 - 2023"
                  duration="22hr 30min"
                />
              </div>
            </div>
            <div className="h-[50%] ml-12 mt-10 lg:ml-0 flex justify-center gap-14">
              <div className="hidden lg:flex">
                <WorkshopCard
                  imageUrl="https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg"
                  rating="4.9"
                  category="البرمجة"
                  title="كورس  برمجة واجهات المواقع"
                  date="14 - 07 - 2023"
                  duration="22hr 30min"
                />
              </div>
              <div>
                <WorkshopCard
                  imageUrl="https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg"
                  rating="4.9"
                  category="البرمجة"
                  title="كورس  برمجة واجهات المواقع"
                  date="14 - 07 - 2023"
                  duration="22hr 30min"
                />
              </div>
            </div>
            <div className="w-full h-[10%] mt-12 lg:mt-10 flex justify-center items-center">
              <button className="border px-4 py-4 text-lg font-semibold  border-2 border-black rounded">
                عرض الكورسات
              </button>
            </div>
          </div>
        </div>
      </div>
    
      <div className="h-full flex flex-col ">
        <div className="flex justify-center items-center">
          <p className="font-semibold text-[#15313F] text-3xl">
            Warith Elevate اخبار
          </p>
        </div>
        <div className=" flex">
          <div className="h-full w-[100%] flex flex-col justify-evenly lg:w-[50%] pl-10">
            <NewsCard
              imageSrc="https://a.storyblok.com/f/159374/1280x853/571a1bca9b/a-group-of-people-having-a-meeting-in-the-office.jpg"
              title="خطوات عملية لتأهيل وتدريب وتوظيف طلبة وخريجي جامعة وارث الانبياء(عليه السلام"
              onClick={handleCardClick}
            />

            <NewsCard
              imageSrc="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697587200&semt=ais"
              title="خطوات عملية لتأهيل وتدريب وتوظيف طلبة وخريجي جامعة وارث الانبياء(عليه السلام"
              onClick={handleCardClick}
            />
            <NewsCard
              imageSrc="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?cs=srgb&dl=pexels-fauxels-3182781.jpg&fm=jpg"
              title="خطوات عملية لتأهيل وتدريب وتوظيف طلبة وخريجي جامعة وارث الانبياء عليه السلام"
              onClick={handleCardClick}
            />
          </div>
          <div className="h-full w-[50%] hidden xl:flex flex justify-center items-center">
            {clickedCardImageSrc ? (
              <img
                className="h-full w-[90%] object-cover"
                src={clickedCardImageSrc}
                alt=""
              />
            ) : (
              <img
                className="h-full w-[90%] object-cover"
                src="https://a.storyblok.com/f/159374/1280x853/571a1bca9b/a-group-of-people-having-a-meeting-in-the-office.jpg"
                alt=""
              />
            )}

            <div className="h-[80%] w-[45%]  bg-[#15313F] opacity-70 absolute"></div>
            <div
              style={{
                height: "25rem",
                width: "44%",
              }}
              className="absolute z-20 flex items-center"
            >
              <p className="text-white text-4xl text-center font-bold">
                {clickedCardTitle}
              </p>
            </div>
          </div>
        </div>
        <div className="h-10  mt-12 lg:mt-10 flex justify-center items-center">
          <button className=" px-4 py-4 text-lg font-semibold  border-2 border-black rounded">
            عرض جميع الاخبار
          </button>
        </div>
      </div>
      <div className="h-full flex  items-center ">
        <div
          className="flex flex-col gap-14"
          style={{
            height: "60%",
            width: "100%",
          }}
        >
          <div className="h-[12%] w-full flex items-center justify-center ">
            <p className="text-3xl font-semibold text-[#15313F] ">استكشف</p>
          </div>
          <div className="h-[76%] flex justify-center gap-8">
            <div className="h-full w-[90%] items-center  flex justify-around">
              <iframe
                className="h-[20rem] lg:h-[22rem] w-[100%] lg:w-[40rem]"
                src="https://www.youtube.com/embed/glZLYYllXvM"
                title="YouTube Video"
                allowFullScreen
              />
              <iframe
                className="lg:h-[22rem] w-[40rem] bg-green-400 hidden lg:flex"
                src="https://www.youtube.com/embed/QthLlDFwVSE"
                title="YouTube Video"
                allowFullScreen
              />
            </div>
          </div>
          <div className="h-[12%] w-full flex items-center justify-center">
            <button className="border px-4 py-4 text-lg font-semibold  border-2 border-black rounded">
              عرض مكتبة الفيديوهات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
