import './App.css';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Blogs from "./Components/Blogs";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import NoPage from "./Components/NoPage";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="container mx-auto">
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
