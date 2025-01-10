"use client"
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";
import { mountains_front } from "../../../public/assets/parallex";

const HomeSection = () => {

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

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
    <div className="w-full h-[90vh] parallax-wrapper relative">
      <div className="absolute bounce-animation   inset-0 flex items-center justify-center text-white z-10 text-6xl font-bold">
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-20 h-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7-7m0 0l-7 7m7-7v18"
            />
          </svg>
        </p>
        <p className="text-size">Scroll Up</p>
      </div>

      <Image
        alt="mountains"
        src={mountains_front}
        className="mountains_front absolute top-0 left-0 w-full h-full "
      />
    </div>
  );
};

export default HomeSection;
