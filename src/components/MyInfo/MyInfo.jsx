"use client";
import React from "react";
import Lottie from "lottie-react";
import { coding } from "../../../public/assets/icons";

const MyInfo = () => {

  const downloadFileAtURL = async () => {
    try {
      const fileId = "1t-rNivw13dT7ci5qwhAjg2yq17fw1fB-";
      const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "August-NewsLetter.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-white font-poppins flex  flex-col md:flex-row justify-center  px-20 min-h-screen">
      <div className="info-wrapper flex flex-col justify-center gap-7 md:w-1/2 w-full  ">
        <div className="p-2 rounded-3xl text-sm border-[1px] flex justify-center items-center border-white w-fit gap-3 px-4">
          {" "}
          <p className="size-4 bg-red-600 rounded-full" />
          AVAILABLE FOR WORK
        </div>
        <p className="text-5xl">VIVEK KUSHWAHA</p>
        <p className="text-2xl">SOFTWARE DEVELOPER</p>
        <p className="w-full md:w-3/4 text-xl ">
          I’m Vivek Kushwaha, a skilled Full-Stack Developer specializing in the
          MERN stack. With extensive experience in delivering successful
          projects, I bring a strong understanding of Agile methodologies and
          have successfully led teams to achieve project goals. My expertise
          ensures efficient and high-quality solutions for a wide range of
          technical challenges.
        </p>
        <button onClick={downloadFileAtURL} className="btn border-[1px] w-fit p-3 rounded-2xl hover-scale-on">
          Download Resume
        </button>
      </div>
      <div className="md:w-1/2 w-full flex justify-center mt-10 md:mt-0">
        <Lottie
          animationData={coding}
          autoplay={true}
          loop={true}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default MyInfo;
