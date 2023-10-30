function MainBackground({FirstWord,SecondWord}) {
    return (
      <div className="h-60 w-full relative">
        <div className="h-full w-full bg-black bg-[url('https://media.smallbiztrends.com/2022/06/tiktok-influencer-marketing.png')] bg-no-repeat bg-cover bg-center">
          <div className="h-full w-full bg-[#15313F] opacity-80">
            <div className="h-full w-full flex justify-center">
              <div className="h-full w-[60%]  flex items-center justify-center">
                <p className="text-white text-5xl flex gap-2 flex-row-reverse"> <p className="text-[#FFA300]"> {FirstWord}</p> {SecondWord}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default MainBackground;