import Experience from "@/components/Experience/Experience";
import HomeSection from "@/components/HomeSection/HomeSection";
// import MyInfo from "@/components/MyInfo/MyInfo";
import Review from "@/components/Review/Review";
import SelectedProjects from "@/components/SelectedProjects/SelectedProjects";
import Skills from "@/components/skills/Skills";
import SocialMedia from "@/components/socialMedia/SocialMedia";

export default function Home() {
  return (
    <main className="text-white">
      <SocialMedia />
      <Review/>
      <Experience/>
      <Skills/>
      <SelectedProjects/>
      {/* <MyInfo/> */}
      <HomeSection/>
    </main>
  );
}
