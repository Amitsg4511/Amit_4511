import gsap from "gsap";
import Main from "./components/Main";
import Project from "./components/Project";
import { ScrollTrigger } from "gsap/all";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  return (
    <main>
      <Main />
      <Project />
    </main>
  );
}

export default App;
