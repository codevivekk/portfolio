import Image from "next/image";
import React from "react";
import {
  dljproduce,
  flexforce,
  kobracomics,
  miaumiaubaby,
  nodesale,
  qrnscan,
  qsafewallet,
  quranium,
  uxvortex,
} from "../../../public/assets/icons/projects";
import Link from "next/link";

const SelectedProjects = () => {
  const projects = [
    {
      img: quranium,
      company: "Quranium",
      title: "Quranium",
      link: "https://quranium.org/",
      techstack: ["Next Js", "Strapi", "gsap", "Vercel"],
      description:
        "Quranium is the world's first Quantum Proof Distributed Ledger Technology platform merging the robust security of Proof of Work (PoW) Blockchain with the dynamic scalability and fairness of a novel Proof of Respect (PoR) BlockDAG architecture.",
    },
    {
      img: nodesale,
      link: "https://node.quranium.org/",
      company: "Quranium",
      title: "Node Sale",
      techstack: [
        "Next Js",
        "Strapi",
        "solidity",
        "Ether.js",
        "Wagmi",
        "Vercel",
      ],
      description:
        "Node Sale is page where user can purchase node to run blockchain network",
    },
    {
      img: qrnscan,
      link: "https://qrnscan.com/",
      techstack: ["Next Js", "RPC", "Vercel"],
      company: "Quranium",
      title: "QRN Scan",
      description:
        "QRN Scan is a website where user can track there transitions on Quranium network",
    },
    {
      img: qsafewallet,
      techstack: ["Next Js"],
      link: "https://www.qsafewallet.com/",
      company: "Quranium",
      title: "Qsafe Wallet",
      description:
        "QSafe, an uncrackable, decentralized crypto wallet to interact with the Quranium blockchain ",
    },
    {
      company: "CodeBrain Infotech",
      img: uxvortex,
      techstack: [
        "Next Js",
        "NodeJs",
        "Express JS",
        "Sequelize",
        "MySQL",
        "Socket",
      ],
      link: "https://uxvortex.com/",
      title: "UXvortex",
      description:
        "UxVortex is the provide best hand-picked website design inspiration, largest creative network for showcasing and discovering creative work.",
    },
    {
      company: "CodeBrain Infotech",
      img: flexforce,
      techstack: ["React", "Mantine UI", "Axios"],
      link: "https://dev.eflexforce.com/",
      title: "FlexForce",
      description:
        "Flexforce is job portal website where client can search candidates for there projects  ",
    },
    {
      company: "Freelancing",
      img: dljproduce,
      techstack: ["Wordpress"],
      link: "https://www.dljproduce.com/",
      title: "DLJ Produce",
    },
    {
      company: "Freelancing",
      img: kobracomics,
      techstack: ["Wordpress"],
      link: "https://kobracomics.com/",
      title: "Kobracomics",
    },
    {
      company: "Freelancing",
      img: miaumiaubaby,
      techstack: ["Wordpress"],
      link: "https://miaumiaubaby.com/",
      title: "Miaumiaubaby",
    },
  ];
  return (
    <div className="project-wrapper px-20 py-10">
      <h2 className="text-center text-4xl  my-5 lg:mb-10">Selected Projects</h2>
      <div className="card-wrapper grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects?.map((ele) => {
          return (
            <Link
              target="_blank"
              href={ele?.link}
              className="card border -[1px] border-white rounded-2xl hover-scale-on"
              key={ele?.description}
            >
              <div className="relative w-full">
                <Image
                  src={ele?.img}
                  alt="three js"
                  className="bg-white w-full rounded-t-2xl"
                />
                <div className="absolute top-2 left-2 bg-gray-900 border-[1px] text-white text-base font-semibold py-1 px-3 rounded-md shadow-md">
                  {ele?.company}
                </div>
              </div>
              <div className="details mt-6 p-4 flex flex-col gap-3">
                <div className="title font-bold text-2xl" >{ele?.title}</div>
                <div className="tech-stack flex flex-1 flex-wrap gap-2">
                  {ele?.techstack?.map((tech) => (
                    <span
                      key={tech}
                      className="border-[1px] bg-gray-900 p-1 px-2 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="description font-poppins">{ele?.description}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SelectedProjects;
