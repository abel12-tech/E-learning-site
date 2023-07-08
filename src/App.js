import { BrowserRouter ,Routes ,Route } from "react-router-dom"
import Home from './components/Home';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element ={<Home/>}></Route>
        <Route path='/about-us' element ={<About/>}></Route>
        <Route path='/contact-us' element ={<Contact/>}></Route>
        <Route path='/courses' element={<Courses/>}></Route>
        <Route path="/course/:id" element ={<CourseDetail/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
