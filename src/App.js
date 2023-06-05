import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Footer/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="projects" element={<Projects/>}/>
    <Route path="skills" element={<Skills/>}/>
    <Route path="contact" element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
