import AboutMe from "./components/sections/AboutMe";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";
import Projects from "./components/sections/Projects";
import { Route, Routes } from "react-router-dom"
import ProjectPage from "./pages/ProjectPage";
import Navbar from "./components/layout/Navbar";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <div className="right">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <AboutMe />
              <Services />
              <Projects />
              <Contact />
              <footer className="site-footer reveal">
                <span>© {new Date().getFullYear()} Chanda Venkatesh — Nirmal, Telangana. Built with care.</span>
                <span>Available for full-time & freelance — venkateshvnky3803@gmail.com</span>
              </footer>
            </>
          } />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
