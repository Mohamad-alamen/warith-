import React, { useState } from "react";
import MainBackground from "../Component/MainBackground.jsx";
import Header from "../Component/Header.jsx";
import Footer from "../Component/Footer.jsx";
import NewsCard from "../Component/NewsCard.jsx";
import ReactPaginate from "react-paginate";

function News() {
  const paginatedNews = [
    {
      imageSrc:
        "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?cs=srgb&dl=pexels-fauxels-3182781.jpg&fm=jpg",
      title:
        "خطوات عملية لتأهيل وتدريب وتوظيف طلبة وخريجي جامعة وارث الانبياء عليه السلام",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?cs=srgb&dl=pexels-fauxels-3182781.jpg&fm=jpg",
      title:
        "خطوات عملية لتأهيل وتدريب وتوظيف طلبة وخريجي جامعة وارث الانبياء عليه السلام",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?cs=srgb&dl=pexels-fauxels-3182781.jpg&fm=jpg",
      title:
        "خطوات عملية لتأهيل وتدريب وتوظيف طلبة وخريجي جامعة وارث الانبياء عليه السلام",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?cs=srgb&dl=pexels-fauxels-3182781.jpg&fm=jpg",
      title:
        "خطوات عملية لتأهيل وتدريب وتوظيف طلبة وخريجي جامعة وارث الانبياء عليه السلام",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?cs=srgb&dl=pexels-fauxels-3182781.jpg&fm=jpg",
      title:
        "خطوات عملية لتأهيل وتدريب وتوظيف طلبة وخريجي جامعة وارث الانبياء عليه السلام",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?cs=srgb&dl=pexels-fauxels-3182781.jpg&fm=jpg",
      title:
        "خطوات عملية لتأهيل وتدريب وتوظيف طلبة وخريجي جامعة وارث الانبياء عليه السلام",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const paginatedItems = paginatedNews.slice(offset, offset + itemsPerPage);

  const pageCount = Math.ceil(paginatedNews.length / itemsPerPage);

  return (
    <div>
      <Header />
      <MainBackground FirstWord="اخر" SecondWord="الاخبار" />
      <div className="h-screen mt-[12rem] flex  justify-center">
        <div className="h-full w-[90%] flex flex-col items-center justify-center gap-4  bg-red-200">
          {paginatedItems.map((news, index) => (
            <NewsCard key={index} imageSrc={news.imageSrc} title={news.title} />
          ))}
               <div className="h-10 flex items-center justify-center mt-[4rem]  mb-[12rem]">
            <ReactPaginate
            className="flex gap-8 items-center"
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              activeClassName="bg-black text-white text-xs w-[24px] h-[28px] flex items-center justify-center"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default News;
