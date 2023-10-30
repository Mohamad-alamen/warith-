import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import Courses from './Pages/courses.jsx'
import Workshop from './Pages/Workshop.jsx'
import News from './Pages/News.jsx'
import ContactUs from './Pages/ContactUs.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/Courses" element={<Courses/>}/>
          <Route path="/Workshop" element={<Workshop/>}/>
          <Route path="/News" element={<News/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;