import CodingExperience from "./components/CodingExperience";
import { Routes, Route } from "react-router";
import Information from "./components/Information";
import gsap from "gsap";
import { ScrambleTextPlugin, ScrollTrigger, SplitText } from "gsap/all";

function App() {
  gsap.registerPlugin(SplitText, ScrollTrigger, ScrambleTextPlugin);
  return (
    <main>
      <Routes>
        <Route path="/" element={<CodingExperience />} />
        <Route path="main-page" element={<Information />} />
      </Routes>
    </main>
  );
}

export default App;
