import Logo from "../../public/Icons/Logo-2.svg";
import Logo2 from "../../public/Icons/UNIVERSITY OF WARITH AL-ANBIYAA LOGO FINAL copy 1.svg";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";
function Footer() {
  return (
    <div>
      <div className="h-[70rem] lg:h-[30rem] bg-[#15313F] flex flex-col lg:flex-row lg:flex-row-reverse lg:justify-between lg:relative items-center justify-between">
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
            <IconBrandFacebook className="h-8 w-8" />
          </div>
          <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
            <IconBrandInstagram className="h-8 w-8" />
          </div>
          <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
            <IconBrandTwitter className="h-8 w-8" />
          </div>
          <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
            <IconBrandYoutube className="h-8 w-8" />
          </div>
        </div>
        <div className="w-[100%] h-14 hidden lg:flex lg:flex-col lg:justify-center lg:items-end gap-4 lg:absolute lg:bottom-0">
        <div className="w-[100%] h-[0.1rem] bg-[#FFA300] "></div>
        <p className="text-sm text-white hidden lg:flex mr-4">
          العنوان: العراق - كربلاء المقدسة / طريق بغداد - كربلاء (عمود 119)
        </p>
        <div className="fixed bottom-0 left-0 w-full flex justify-center lg:hidden items-center">
          <div className="h-12 w-12 lg:h-8 lg:w-8 bg-white rounded-full flex items-center justify-center">
            <IconBrandFacebook className="h-8 w-8" />
          </div>
          <div className="h-12 w-12 lg:h-8 lg:w-8 bg-white rounded-full flex items-center justify-center">
            <IconBrandInstagram className="h-8 w-8" />
          </div>
          <div className="h-12 w-12  lg:h-8 lg:w-8 bg-white rounded-full flex items-center justify-center">
            <IconBrandTwitter className="h-8 w-8" />
          </div>
          <div className="h-12 w-12 lg:h-8 lg:w-8 bg-white rounded-full flex items-center justify-center">
            <IconBrandYoutube className="h-8 w-8" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
