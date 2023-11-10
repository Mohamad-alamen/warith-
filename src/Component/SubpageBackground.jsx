function SubpageBackground({ FirstWord }) {
  return (
    <div className="h-60 w-full relative">
      <div className="h-full w-full bg-black bg-[url('https://media.smallbiztrends.com/2022/06/tiktok-influencer-marketing.png')] bg-no-repeat bg-cover bg-center">
        <div className="h-full w-full bg-[#15313F] opacity-80">
          <div className="h-full w-full flex justify-center">
            <div className="h-full w-[80%] lg:w-[60%]  flex flex-col items-center justify-center gap-2">
              <div className="w-[80%] lg:w-[60%]   flex justify-end">
                <p className="text-[#FFA300] text-lg lg:text-xl">التصميم</p>
              </div>
              <p className="text-white text-2xl lg:text-5xl flex gap-2 flex-row-reverse border-b p-4 border-[#FFA300]">
                {FirstWord}
              </p>
              <div className="w-[80%] lg:w-[60%] flex justify-end">
                <p className=" text-white text-lg lg:text-sm">يبدا في 2023-14-7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubpageBackground;
