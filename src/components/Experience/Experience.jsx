"use client";
import React, { useEffect, useRef } from "react";

const Experience = () => {
  const timelineRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, observerOptions);

    timelineRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      timelineRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const timelineItems = [
    {
      year: "May 2022 - Aug 2022",
      title: "React Developer",
      Company: "WebOsmotic Private limited",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      year: "Nov 2022 - May 24",
      title: "Senior Fullstack developer",
      Company: "Codebrain Infotech",

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      year: "Jun 2024 - Jan 2025",
      title: "Software Developer",
      Company: "Quranium",

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      year: "Jan 2025 Ownwards",
      title: "Frontend Tech Lead",
      Company: "Quranium",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="min-h-screen py-16 sm:px-8 md:px-0">
        <h2 className="text-center text-4xl mb-5">Experience</h2>
      <div className="max-w-4xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-white transform -translate-x-1/2" />

        {timelineItems.map((item, index) => (
          <div
            key={item.year}
            ref={(el) => (timelineRef.current[index] = el)}
            className={`timeline-item relative mb-10 ${
              index % 2 === 0
                ? "pl-10 sm:pl-[calc(50%+30px)]"
                : "pr-10 sm:pr-[calc(50%+30px)] text-right"
            }`}
          >
            {/* Timeline Dot */}
            <div
              className="timeline-dot h-4 w-4 bg-yellow-500 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 sm:left-auto sm:-translate-x-0"
              style={{
                [index % 2 === 0 ? "left" : "right"]: "calc(50% - 8px)",
              }}
            ></div>

            <div className={`border-[1px] border-white bg-gray-900 p-6 rounded-lg`}>
              <div className="text-yellow-500 text-lg">{item.year}</div>
              <p className="text-white text-xl font-medium capitalize">
                {item.Company.toLocaleUpperCase()}
              </p>
              <p className="text-white text-xl font-medium capitalize">
                {item.title.toLocaleUpperCase()}
              </p>
              <p className="text-gray-300  text-base leading-relaxed">
                {/* {item.description} */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
