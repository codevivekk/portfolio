'use client'
import Experience from "@/components/Experience/Experience";
import HomeSection from "@/components/HomeSection/HomeSection";
import MyInfo from "@/components/MyInfo/MyInfo";
import Review from "@/components/Review/Review";
import SelectedProjects from "@/components/SelectedProjects/SelectedProjects";
import Skills from "@/components/skills/Skills";
import SocialMedia from "@/components/socialMedia/SocialMedia";
import { useEffect, useLayoutEffect } from "react";

export default function Home() {
  useLayoutEffect(() => {
    // Scroll to the bottom of the page after the component mounts
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // 
    });
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
