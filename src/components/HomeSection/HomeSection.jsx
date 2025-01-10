"use client"
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";
import { moon, mountains_behind, mountains_front } from "../../../public/assets/parallex";

const HomeSection = () => {


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".mountains_front", {
      scale: 1.3,
      scrollTrigger: {
        trigger: ".parallax-wrapper",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
    });
  }, []);

  return (
    <div className="w-full h-screen parallax-wrapper ">
      <div className="absolute bounce-animation   inset-0 flex items-center justify-center text-white z-10 text-6xl font-bold">

        <p className="text-size">Welcome</p>
      </div>

      <Image
        alt="mountains"
        src={moon}
        className="mountains_front absolute w-full h-full "
      />

      <Image
        alt="mountains"
        src={mountains_behind}
        className="mountains_front  "
      />

      <Image
        alt="mountains"
        src={mountains_front}
        className="mountains_front absolute top-0 left-0 w-full h-full "
      />
    </div>
  );
};

export default HomeSection;
