import AboutMe from "./components/aboutMe";
import Hero from "./components/hero";
import Left from "./components/left";
import AnimatedCursor from "react-animated-cursor"
import Services from "./components/services";
import Contact from "./components/contact";
import Projects from "./components/projects";
import { useState } from "react";



function App() {

  const [active, setActive] = useState(false)

  return (
    <div className="app">

      <AnimatedCursor
        innerSize={12}
        outerSize={18}
        color='0, 0, 225'
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          "li",
          ".social-links"
        ]}
      />



      <Left active={active} setActive={setActive}/>
      <div className="right">
        <Hero active={active} setActive={setActive}/>
        <AboutMe />
        <Services />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
