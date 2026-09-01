import AboutMe from "./components/sections/AboutMe";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";
import Projects from "./components/sections/Projects";
import { Route, Routes, useLocation } from "react-router-dom"
import ProjectPage from "./pages/ProjectPage";
import Navbar from "./components/layout/Navbar";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Respect reduced motion — show everything instantly
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
      return;
    }

    let obs;
    let raf;

    const run = () => {
      const els = document.querySelectorAll('.reveal');
      if (!els.length) {
        // content not mounted yet (route transition) — retry once
        setTimeout(() => {
          const retry = document.querySelectorAll('.reveal');
          if (retry.length && !obs) run();
        }, 150);
        return;
      }

      // If IntersectionObserver not supported, just reveal
      if (!('IntersectionObserver' in window)) {
        els.forEach(el => el.classList.add('visible'));
        return;
      }

      obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

      els.forEach(el => {
        // If already visible or already in viewport above the fold, reveal quickly
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) {
          // let observer handle it, but also ensure it doesn't stay hidden if observer is slow
          // observer will fire on next tick; fallback below guarantees it
        }
        obs.observe(el);
      });

      // Safety fallback: after 800ms, reveal anything still hidden (covers back-nav + race conditions)
      const fallback = setTimeout(() => {
        document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight + 120) el.classList.add('visible');
        });
      }, 800);

      // cleanup fallback on disconnect
      obs._fallback = fallback;
    };

    // Wait a tick for route content to mount
    raf = requestAnimationFrame(() => setTimeout(run, 50));

    return () => {
      cancelAnimationFrame(raf);
      if (obs) {
        if (obs._fallback) clearTimeout(obs._fallback);
        obs.disconnect();
      }
    };
  }, [location.pathname]);

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
