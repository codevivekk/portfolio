import dynamic from "next/dynamic";
import Experience from "@/components/Experience/Experience";
import HomeSection from "@/components/HomeSection/HomeSection";
const MyInfo = dynamic(() => import("@/components/MyInfo/MyInfo"), { ssr: false });
import Review from "@/components/Review/Review";
import SelectedProjects from "@/components/SelectedProjects/SelectedProjects";
import Skills from "@/components/skills/Skills";
import SocialMedia from "@/components/socialMedia/SocialMedia";
export default function Home() {


  return (
    <main className="text-white">
      <MyInfo/>
      <SelectedProjects/>
      <Skills/>
      <Experience/>
      <Review/>
      <SocialMedia />
    </main>
  );
}
