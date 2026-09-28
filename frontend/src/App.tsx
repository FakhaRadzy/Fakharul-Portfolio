import { useEffect, useState } from "react";
import Nav from "./components/Nav.tsx";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
