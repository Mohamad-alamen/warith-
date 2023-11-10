import SubpageBackground from "../Component/SubpageBackground.jsx";
import Header from "../Component/Header";
import InstructorCard from "../Component/InstructorCard.jsx";
function Subpage(){
    return (
        <div>
          <Header />
          <SubpageBackground FirstWord="كورس تصميم الهوية البصرية" />
          <div className="h-[210vh] lg:h-screen flex justify-center lg:mt-10">
            <div className="flex flex-col flex-col-reverse lg:flex-row w-[95%] items-center justify-center">
              <div className=" w-[100%] lg:w-[40%] text-right flex flex-col gap-5 mt-4">
                <button className="bg-[#FFA300] text-white text-xl w-[100%] py-4 rounded ">
                  سجل الان
                </button>
                <img
                  className="w-[100%]"
                  src="https://static.wikia.nocookie.net/beyond-universe/images/9/9e/UNVE-15-DU.png/revision/latest?cb=20231028070333"
                  alt=""
                />
                <div className="pr-1">
                  <p className="text-2xl">اسم الدورة: كورس تصميم الهوية البصرية</p>
                  <p className="text-2xl">مدة الدورة: 15 يوم</p>
                  <p className="text-2xl">شهادة في نهاية الدورة : نعم</p>
                </div>
                <div className=" flex items-end justify-end  lg:mt-0">
                  <InstructorCard/>
                </div>
              </div>
              <div className=" w-[100%] lg:w-[60%] text-right">
                <div className="flex justify-end">
                  <div className="w-[100%] lg:w-[80%] text-right">
                    <p className="text-2xl font-semibold  ">عن الدورة التدريبية</p>
                    <p className=" text-xl">
                      يعد إنشاء علامة تجارية قوية أمرًا ضروريًا عبر جميع الأجيال ،
                      لكن جمهور الجيل Z يتطلب نهجًا مختلفًا. مصممة الجرافيك والمديرة
                      الإبداعية مارتا فيلودو متخصصة في إنشاء هويات للعلامات التجارية
                      تكون ممتعة ومرحة والأهم من ذلك أنها مصممة مع مراعاة الجمهور
                      المستهدف. عملت على كل شيء بدءًا من تصميم العبوات وحتى الشعارات
                      للعملاء بما في ذلك Google و adidas و Reebok و LEGO. حان الوقت
                      لبناء هويتك المرئية ، بدءًا من الشعار. ارسم شعارك باستخدام
                      لوحة المزاج كمرجع قبل رقمنة عملك. حدد لوحة ألوان لمشروعك واختر
                      خطًا أساسيًا وثانويًا. انظر إلى أمثلة لأنظمة هوية العلامة
                      التجارية وتعلم كيفية بناء واحدة باستخدام مجموعة من الأشكال
                      والأيقونات والألوان والتخطيطات. قم بإنشاء نماذج بالأحجام
                      الطبيعية لعملك لمشاركتها مع عميلك ، <br></br> <br></br>{" "}
                      <br></br> ثم صمم عرضًا تقديميًا يجمع أفكارك معًا ويحكي قصة عن
                      الهوية التي قمت بإنشائها. ألق نظرة على صناعة التعبئة والتغليف
                      وكيف يمكن أن تساعدك على إثراء مشروعك.
                      
                    </p>
                  </div>
                </div>
    
                <div className="mt-8">
                  <p className="text-2xl font-semibold  ">
                    ماذا ستتعلم في هذه الدورة؟
                  </p>
                  <ul className="mt-4">
                    <li className="m-1 text-xl">مقدمة</li>
                    <li className="m-1 text-xl">استراتيجية التصميم</li>
                    <li className="m-1 text-xl">بناء هوية بصرية</li>
                    <li className="m-1 text-xl">العرض</li>
                    <li className="m-1 text-xl">المشروع النهائي</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}
export default Subpage;
