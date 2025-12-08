import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useEffect } from "react";

function Main() {
  useEffect(() => {
    const splitWelcome = SplitText.create(".welcome", {
      type: "chars",
    });
    const splitSelf = SplitText.create(".self", {
      type: "words",
    });
    const timeline = gsap.timeline();
    timeline
      .from(splitWelcome.chars, {
        y: 14,
        opacity: 0,
        stagger: 0.14,
      })
      .from(splitSelf.words, {
        y: 14,
        opacity: 0,
        stagger: 0.05,
      });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-container",
        start: "center center",
        end: "bottom 40%",
        scrub: true,
        markers: true,
      },
    });
    tl.to(".main-container", {
      opacity: 0,
      ease: "power2.inOut",
    })
      .to(
        ".welcome",
        {
          scale: 0.1,
          ease: "power2.inOut",
        },
        "-=0.5" // overlap
      )
      .to(
        ".self",
        {
          opacity: 0,
          scale: 0.95,
          ease: "power2.inOut",
        },
        "-=0.5"
      );
  });

  return (
    <div className="main-container h-dvh flex justify-center items-center relative">
      <video
        className="h-full w-full object-cover absolute"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="fallback.jpg"
        src="/videos/Coll_Realistic.mp4"
      ></video>
      <div className=" z-10 flex justify-center items-center flex-col text-5xl text-white bold font-science-gothic">
        <div className="welcome">
          <h1>Welcome</h1>
        </div>

        <div className="self font-caudex text-2xl overflow-hidden text-center mt-5 md:w-1/2 w-full">
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

export default Main;
