import React from "react";
import {
  css,
  gsap,
  html,
  js,
  mongodb,
  mysql,
  nodejs,
  react,
  redux,
  rust,
  socket,
  threejs,
  typescript,
} from "../../../public/assets/icons/skills";
import Image from "next/image";

const Skills = () => {
  const skills = [
    {
      name: "CSS",
      logo: css,
    },
    {
      name: "HTML",
      logo: html,
    },
    {
      name: "Javascript",
      logo: js,
    },
    {
      name: "React",
      logo: react,
    },
    {
      name: "Redux",
      logo: redux,
    },
    {
      name: "Node Js",
      logo: nodejs,
    },
    {
      name: "MongoDB",
      logo: mongodb,
    },
    {
      name: "Socket",
      logo: socket,
    },
    {
      name: "Mysql",
      logo: mysql,
    },
    {
      name: "Typescript",
      logo: typescript,
    },
    {
      name: "Three Js",
      logo: threejs,
    },    {
      name: "GSAP",
      logo: gsap,
    },
    {
      name: "Rust",
      logo: rust,
    },
  ];
  return (
    <div className="font-sans ">
      <div className="relative overflow-hidden border-y-4 pt-5 pb-2 border-white">
        <div className="flex gap-5 animate-scroll">
          <ul className="list-none flex shrink-0 mr-6 min-w-full items-center gap-10">
            {skills?.map((ele) => (
              <div className="" key={ele?.name}>
                <li className="flex justify-center items-center flex-col bg-white  p-4 rounded-2xl  space-x-2 text-sm text-gray-900">
                  <Image
                    src={ele?.logo}
                    alt={ele?.name}
                    height={110}
                    width={110}
                  />
                </li>
                <p className="font-bold text-2xl text-center w-full text-white mt-2">
                  {ele?.name}
                </p>
              </div>
            ))}
          </ul>

          <ul className="list-none flex shrink-0 min-w-full items-center gap-10">
            {skills?.map((ele) => (
              <div className="" key={ele?.name}>
                <li className="flex justify-center items-center flex-col bg-white  p-4 rounded-2xl  space-x-2 text-sm text-gray-900">
                  <Image
                    src={ele?.logo}
                    alt={ele?.name}
                    height={110}
                    width={110}
                  />
                </li>
                <p className="font-bold text-2xl text-center w-full text-white mt-2">
                  {ele?.name}
                </p>
              </div>
            ))}
          </ul>

 
        </div>
      </div>
    </div>
  );
};

export default Skills;
