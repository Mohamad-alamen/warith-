import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/Icons/Logo.svg";
import Hamburger from "../../public/Icons/hamburger-menu.svg";

function Header() {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);

  const showNavBar = () => {
    setIsNavBarVisible(!isNavBarVisible);
  };
  const hideNavBar = () => {
    setIsNavBarVisible(false);
  };
  return (
    <div className="h-40 w-full">
      <div className="hidden xl:block h-[35%] w-full bg-[#15313F]">
        <div className="h-full w-[40%] flex items-center flex-row-reverse justify-end gap-10 pl-12">
          <p className="text-right text-white">الموقع الرسمي للجامعة</p>
          <span className="w-1 h-10 bg-[#FFA300]"></span>
          <button className="bg-white text-black px-2 py-1 rounded">EN</button>
        </div>
      </div>
      <div className="h-[65%] flex flex-row-reverse ">
        <div className="justify-between px-3 w-full h-full  xl:w-[25%] xl:px-0 flex xl:flex-row-reverse items-center xl:justify-center">
          <img src={Logo} alt="" className="h-30 w-[20%] md:h-20 xl:w-[40%]" />
          <img
            src={Hamburger}
            alt=""
            className="h-10 w-[10%]  xl:hidden hover:cursor-pointer"
            onClick={showNavBar}
          />
          {isNavBarVisible && (
            <div className="absolute z-10 right-0 top-0 w-[70%] h-[%] sm:w-[40%] md:w-[40%] bg-gray-100 xl:hidden rounded">
              <p className="text-right p-4 text-3xl hover:cursor-pointer" onClick={hideNavBar}>X</p>
              <ul className="w-full flex flex-col flex-row-reverse justify-center gap-8">
                <Link to="/" className="hover:cursor-pointer">
                  <li className="text-2xl  h-10 text-right w-full bg-gray  border-l-2 border-[#FFA300] px-4">الرئيسية</li>
                </Link>

                <Link to="/AboutUs" className="hover:cursor-pointer">
                  <li className="text-2xl  h-10 text-right w-full bg-gray  border-l-2 border-[#FFA300] px-4">من نحن</li>
                </Link>

                <Link to="/Courses" className="hover:cursor-pointer">
                  <li className="text-2xl  h-10 text-right w-full   border-l-2 border-[#FFA300] px-4">
                    الدورات التدريبية
                  </li>
                </Link>

                <Link to="/Workshop" className="hover:cursor-pointer">
                  <li className="text-2xl  h-10 text-right w-full bg-gray  border-l-2 border-[#FFA300] px-4">الورش</li>
                </Link>

                <Link to="/News" className="hover:cursor-pointer">
                  <li className="text-2xl  h-10 text-right w-full bg-gray  border-l-2 border-[#FFA300] px-4">الأخبار</li>
                </Link>

                <Link to="/ContactUs" className="hover:cursor-pointer">
                  <li className="text-2xl  h-10 text-right w-full bg-gray  border-l-2 border-[#FFA300] px-4">تواصل معنا</li>
                </Link>
              </ul>
            </div>
          )}
          <div className="hidden xl:block h-full w-[50%]">
            <p className="text-right font-semibold border-b border-[#FFA300] p-2">
              جامعة وارث الانبياء
            </p>
            <div>
              <p className="text-right font-bold text-lg">مركز وارث</p>
              <p className="text-xl text-right">للريادة والابتكار والتطوير</p>
            </div>
          </div>
        </div>
        <div className="hidden xl:flex h-full w-[60%] flex items-center ">
          <ul className="w-full flex flex-row-reverse justify-center gap-8">
            <Link to="/" className="hover:cursor-pointer">
              <li className="border-l-2 border-[#FFA300] px-4">الرئيسية</li>
            </Link>

            <Link to="/AboutUs" className="hover:cursor-pointer">
              <li className="border-l-2 border-[#FFA300] px-4">من نحن</li>
            </Link>

            <Link to="/Courses" className="hover:cursor-pointer">
              <li className="border-l-2 border-[#FFA300] px-4">
                الدورات التدريبية
              </li>
            </Link>

            <Link to="/Workshop" className="hover:cursor-pointer">
              <li className="border-l-2 border-[#FFA300] px-4">الورش</li>
            </Link>

            <Link to="/News" className="hover:cursor-pointer">
              <li className="border-l-2 border-[#FFA300] px-4">الأخبار</li>
            </Link>

            <Link to="/ContactUs" className="hover:cursor-pointer">
              <li className="border-l-2 border-transparent">تواصل معنا</li>
            </Link>
          </ul>
        </div>
        <div className="hidden xl:flex h-full w-[15%] flex flex-row-reverse items-center justify-start gap-8">
          <button className="bg-[#15313F] text-white p-2 rounded">
            تسجيل الدخول
          </button>
          <button>التسجيل</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
