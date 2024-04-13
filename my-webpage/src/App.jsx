// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

//import component,page
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Education from "./component/Education/Education";
import Experience from "./component/Experience/Experience";
import Gallery from "./component/Gallery/Gallery";
import Projects from "./component/Projects/Projects";
import Skills from "./component/Skills/Skills";
import ErrorPage from "./component/ErrorPage/ErrorPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="education" element={<Education />} />
          <Route path="experience" element={<Experience />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="project" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
