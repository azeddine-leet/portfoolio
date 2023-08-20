import './App.css';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Blogs from "./Components/Blogs";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import NoPage from "./Components/NoPage";

function App() {
  return (
    <div className="container mx-auto">
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
