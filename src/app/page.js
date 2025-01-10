"use client"
import dynamic from "next/dynamic";
import Experience from "@/components/Experience/Experience";
import HomeSection from "@/components/HomeSection/HomeSection";
const MyInfo = dynamic(() => import("@/components/MyInfo/MyInfo"), { ssr: false });
import Review from "@/components/Review/Review";
import SelectedProjects from "@/components/SelectedProjects/SelectedProjects";
import Skills from "@/components/skills/Skills";
import SocialMedia from "@/components/socialMedia/SocialMedia";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);


  return (
    <main className="text-white">
      <SocialMedia />
      <Review/>
      <Experience/>
      <Skills/>
      <SelectedProjects/>
      <MyInfo/>
      <HomeSection/>
    </main>
  );
}
