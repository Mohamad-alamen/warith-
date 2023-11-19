import Logo from "../../public/Icons/Logo-2.svg";
import Logo2 from "../../public/Icons/UNIVERSITY OF WARITH AL-ANBIYAA LOGO FINAL copy 1.svg";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <div className="h-[70rem] lg:h-[24rem] bg-[#15313F] flex flex-col lg:flex-row lg:flex-row-reverse lg:justify-between lg:relative items-center justify-between">
        <img className="h-[12rem] w-[12rem]" src={Logo2} alt="" />
        <div className="flex flex-col items-center text-center gap-2">
          <p className="text-2xl text-white font-semibold">روابط الموقع</p>
          <ul className="flex flex-col gap-2">
            <li className="text-lg text-white">الرئيسية</li>
            <li className="text-lg text-white">المركز</li>
            <li className="text-lg text-white">النشاطات</li>
            <li className="text-lg text-white">الفيديوهات</li>
          </ul>
        </div>
        <div className="hidden lg:flex lg:flex-col lg:items-center">
          <img className="w-[12rem] mt-4 " src={Logo} alt="" />
          <p className="text-xl text-white border-b border-[#FFA300] pb-4 ">
            مركز وارث للريادة والابتكار والتطوير
          </p>
          <p className="text-2xl text-white font-bold">
            اطلق <span className="text-[#FFA300]">قدراتك</span> وابتكر{" "}
            <span className="text-[#FFA300]">مستقبلك</span>
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <p className="text-2xl text-white font-semibold"> روابط الجامعة</p>
          <ul className="flex flex-col gap-2">
            <li className="text-lg text-white">موقع الجامعة</li>
            <li className="text-lg text-white">التجول الافتراضي VR</li>
            <li className="text-lg text-white">نافذة الطالب الالكترونية</li>
            <li className="text-lg text-white">التعليم المستمر</li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-[12rem] mt-4 lg:hidden" src={Logo} alt="" />
          <p className="text-xl text-white border-b border-[#FFA300] pb-4 lg:hidden">
            مركز وارث للريادة والابتكار والتطوير
          </p>
          <p className="text-2xl text-white font-bold lg:hidden">
            اطلق <span className="text-[#FFA300]">قدراتك</span> وابتكر{" "}
            <span className="text-[#FFA300]">مستقبلك</span>
          </p>
        </div>
        <div className="w-[90%] h-[0.1rem] bg-[#FFA300] lg:hidden"></div>
        <p className="text-sm text-white lg:hidden">
          العنوان: العراق - كربلاء المقدسة / طريق بغداد - كربلاء (عمود 119)
        </p>
        <div className="flex gap-3 pb-3 lg:hidden">
          <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
            <FaFacebookF size={24}/>
          </div>
          <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
            <FaInstagram size={24}/>
          </div>
          <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
            <FaTwitter size={24} />
          </div>
          <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
            <FaYoutube size={24} />
          </div>
        </div>
        <div className="w-[100%] h-[20%] hidden lg:flex flex-row-reverse justify-between lg:items-center gap-4 lg:absolute lg:bottom-0 overflow-hidden border-t border-[#FFA300]">
        <p className="text-sm text-white hidden lg:flex mr-4 p-4">
          العنوان: العراق - كربلاء المقدسة / طريق بغداد - كربلاء (عمود 119)
        </p>
        <div className="flex gap-3 p-14">
          <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
            <FaFacebookF size={24}/>
          </div>
          <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
            <FaInstagram size={24}/>
          </div>
          <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
            <FaTwitter size={24} />
          </div>
          <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
            <FaYoutube size={24} />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
