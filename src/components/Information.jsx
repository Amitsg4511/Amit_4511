import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useEffect } from "react";
import Project from "./Project";
import bgImage from "/images/developer.jpg";
function Information() {
  // useEffect(() => {
  //   document.fonts.ready.then(() => {
  //     const splitWelcome = SplitText.create(".welcome", {
  //       type: "chars",
  //     });
  //     const splitSelf = SplitText.create(".self", {
  //       type: "words",
  //     });
  //     const timeline = gsap.timeline();
  //     timeline
  //       .from(splitWelcome.chars, {
  //         xPercent: 14,
  //         opacity: 0,
  //         stagger: 0.14,
  //       })
  //       .from(splitSelf.words, {
  //         opacity: 0,
  //         stagger: {
  //           amount: 3,
  //           from: "random",
  //         },
  //       });
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".main-container",
  //         start: "center center",
  //         end: "bottom 40%",
  //         scrub: true,
  //         markers: true,
  //       },
  //     });
  //     tl.to(".main-container", {
  //       opacity: 0,
  //       ease: "power2.inOut",
  //     })
  //       .to(
  //         ".welcome",
  //         {
  //           scale: 0.1,
  //           ease: "power2.inOut",
  //         },
  //         "-=0.5"
  //       )
  //       .to(
  //         ".self",
  //         {
  //           opacity: 0,
  //           scale: 0.95,
  //           ease: "power2.inOut",
  //         },
  //         "-=0.5"
  //       );
  //   });
  // }, []);

  return (
    <div className="relative min-h-dvh w-full flex flex-col main-container justify-center-safe items-center overflow-x-hidden">
      <div className="absolute inset-0 bg-[url('/images/developer.jpg')] bg-cover bg-center opacity-40"></div>
      <div className="gap-5 z-10 p-5 flex justify-center items-center flex-col">
        <div className="relative leading-tight -translate-x-1/3 md:-translate-x-1/2 welcome text-white font-science-gothic font-bold md:text-[5rem] text-[51px]">
          <h1>Welcome</h1>
        </div>

        <div className="text-white border border-red-300 text-start self font-caudex md:text-[2rem] text-2xl md:w-1/2 w-full p-5">
          <p>
            Hi, I’m Amit Kumar – a software developer who loves turning ideas
            into beautifully crafted, functional digital experiences. I’m
            passionate about continuous learning and exploring new technologies
            to create solutions that make an impact.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Information;
