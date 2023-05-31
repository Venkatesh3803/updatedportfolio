import Left from "./components/left";
import Right from "./components/right";
import AnimatedCursor from "react-animated-cursor"


function App() {
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

      <Left />
      <Right />
    </div>
  );
}

export default App;
