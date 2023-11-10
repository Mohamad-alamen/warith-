import { useState } from "react";
import ReactPaginate from "react-paginate";
import MainBackground from "../Component/MainBackground.jsx";
import Header from "../Component/Header";
import Footer from "../Component/Footer.jsx";
import WorkShopCard from '../Component/WorkshopCard.jsx'

function Courses() {
  const coursesData = [
    {
      imageUrl:
        "https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg",
      rating: 4.5,
      category: "التصميم",
      title: 'كورس التصميم الداخلي"',
      date: "14 - 07 - 2023",
      duration: "22hr 30min",
    },
    {
        imageUrl:
          "https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg",
        rating: 4.5,
        category: "التصميم",
        title: 'كورس التصميم الداخلي"',
        date: "14 - 07 - 2023",
        duration: "22hr 30min",
      },
      {
        imageUrl:
          "https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg",
        rating: 4.5,
        category: "التصميم",
        title: 'كورس التصميم الداخلي"',
        date: "14 - 07 - 2023",
        duration: "22hr 30min",
      },
      {
          imageUrl:
            "https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg",
          rating: 4.5,
          category: "التصميم",
          title: 'كورس التصميم الداخلي"',
          date: "14 - 07 - 2023",
          duration: "22hr 30min",
        },
        
      {
          imageUrl:
            "https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg",
          rating: 4.5,
          category: "التصميم",
          title: 'كورس التصميم الداخلي"',
          date: "14 - 07 - 2023",
          duration: "22hr 30min",
        },
      {
          imageUrl:
            "https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg",
          rating: 4.5,
          category: "التصميم",
          title: 'كورس التصميم الداخلي"',
          date: "14 - 07 - 2023",
          duration: "22hr 30min",
        },
      {
        imageUrl:
          "https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg",
        rating: 4.9,
        category: "البرمجة",
        title: "كورس   برمجة التطبيقات",
        date: "14 - 07 - 2023",
        duration: "22hr 30min",
      },
      {
        imageUrl:
          "https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg",
        rating: 4.9,
        category: "البرمجة",
        title: "كورس   برمجة التطبيقات",
        date: "14 - 07 - 2023",
        duration: "22hr 30min",
      },
  
      {
        imageUrl:
          "https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg",
        rating: 4.9,
        category: "البرمجة",
        title: "كورس   برمجة التطبيقات",
        date: "14 - 07 - 2023",
        duration: "22hr 30min",
      },
      {
        imageUrl:
          "https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg",
        rating: 4.9,
        category: "البرمجة",
        title: "كورس   برمجة التطبيقات",
        date: "14 - 07 - 2023",
        duration: "22hr 30min",
      },
      {
        imageUrl:
          "https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg",
        rating: 4.9,
        category: "البرمجة",
        title: "كورس   برمجة التطبيقات",
        date: "14 - 07 - 2023",
        duration: "22hr 30min",
      },
      {
        imageUrl:
          "https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg",
        rating: 4.9,
        category: "البرمجة",
        title: "كورس   برمجة التطبيقات",
        date: "14 - 07 - 2023",
        duration: "22hr 30min",
      },
      {
          imageUrl:
            "https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg",
          rating: 4.9,
          category: "البرمجة",
          title: "كورس   برمجة التطبيقات",
          date: "14 - 07 - 2023",
          duration: "22hr 30min",
        },
      {
        imageUrl:
          "https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg",
        rating: 4.9,
        category: "البرمجة",
        title: "كورس   برمجة التطبيقات",
        date: "14 - 07 - 2023",
        duration: "22hr 30min",
      },
      {
        imageUrl:
          "https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg",
        rating: 4.9,
        category: "البرمجة",
        title: "كورس   برمجة التطبيقات",
        date: "14 - 07 - 2023",
        duration: "22hr 30min",
      },
      {
        imageUrl:
          "https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg",
        rating: 4.9,
        category: "البرمجة",
        title: "كورس   برمجة التطبيقات",
        date: "14 - 07 - 2023",
        duration: "22hr 30min",
      },
      {
        imageUrl:
          "https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg",
        rating: 4.9,
        category: "البرمجة",
        title: "كورس   برمجة التطبيقات",
        date: "14 - 07 - 2023",
        duration: "22hr 30min",
      },
      {
        imageUrl:
          "https://static-cse.canva.com/blob/1170432/creatingstunninggraphicsforyourteacherblog.jpg",
        rating: 4.9,
        category: "البرمجة",
        title: "كورس   برمجة التطبيقات",
        date: "14 - 07 - 2023",
        duration: "22hr 30min",
      },
      
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const coursesPerPage = 12;

  const handleSearch = (event) => {
      setSearchQuery(event.target.value);
    
  };

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const filterCourses = (course) => {
    if (selectedCategory && course.category !== selectedCategory) {
      return false;
    }
    if (searchQuery && !course.title.includes(searchQuery)) {
      return false;
    }
    return true;
  };

  const filteredCourses = coursesData.filter(filterCourses);
  const pageCount = Math.ceil(filteredCourses.length / coursesPerPage);
  const offset = currentPage * coursesPerPage;
  const paginatedCourses = filteredCourses.slice(
    offset,
    offset + coursesPerPage
  );

  return (
    <div>
      <Header />

      <MainBackground FirstWord="الورش" SecondWord="التدريبية"/>
      <div className="flex justify-center flex-col items-center">
      <div className="h-[8rem] w-[80%]  flex flex-col items-center justify-around">
      <input
  className="lg:bg-transparent h-[40%] w-[100%] lg:w-fit lg:h-fit lg:border-b p-2 text-right outline-none border-black placeholder-bold"
  type="text"
  name="text"
  id="text"
  placeholder="ابحث عن برنامج تدريبي"
  value={searchQuery}
  onChange={handleSearch}
/>      <div className="h-[40%] w-[87%] flex justify-center">
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
        selectedCategory === "ريادة الاعمال" ? "font-bold" : "text-[#8C8C8C]"
      }`}
      onClick={() => setSelectedCategory("ريادة الاعمال")}
    >
      ريادة الاعمال
    </li>
    <li
      className={`hover:cursor-pointer text-lg ${
        selectedCategory === "البرمجة" ? "font-bold" : "text-[#8C8C8C]"
      }`}
      onClick={() => setSelectedCategory("البرمجة")}
    >
      البرمجة
    </li>
    <li
      className={`hover:cursor-pointer text-lg ${
        selectedCategory === "الهندسة" ? "font-bold" : "text-[#8C8C8C]"
      }`}
      onClick={() => setSelectedCategory("الهندسة")}
    >
      الهندسة
    </li>
    <li
      className={`hover:cursor-pointer text-lg ${
        selectedCategory === "المهارات الشخصية" ? "font-bold" : "text-[#8C8C8C]"
      }`}
      onClick={() => setSelectedCategory("المهارات الشخصية")}
    >
      المهارات الشخصية
    </li>
    <li
      className={`hover:cursor-pointer text-lg ${
        selectedCategory === "التصميم" ? "font-bold" : "text-[#8C8C8C]"
      }`}
      onClick={() => setSelectedCategory("التصميم")}
    >
      التصميم
    </li>
  </ul>
</div>
      </div>
        <div className="w-[90%] h-full flex flex-col ">
          <div className="h-[100%] mt-10 flex flex-wrap justify-center items-center gap-[5rem] pl-8 md:pl-0">
            {paginatedCourses.map((course, index) => (
              <WorkShopCard
                key={index}
                imageUrl={course.imageUrl}
                rating={course.rating}
                category={course.category}
                title={course.title}
                date={course.date}
                duration={course.duration}
              />
            ))}
          </div>
          <div className="h-10 flex items-center justify-center mt-[8rem] mb-[4rem]">
            <ReactPaginate
              className="flex items-center gap-12 font-bold"
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              activeClassName="bg-black text-white text-xs w-[24px] h-[28px] flex items-center justify-center"                          />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
