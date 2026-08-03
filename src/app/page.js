import AboutSection3D from "@/components/AboutSection3D";
import BannerSlider from "@/components/Banner";
import Features from "@/components/Features";
import LocationSection from "@/components/LocationSection";
import CommunityForumPage from "./community-forum/page";
import BigMemberShip from "@/components/BigMemberShip";


export default function Home() {
  return (
    <div>
      <AboutSection3D/>
      <BannerSlider/>
      <Features/>
      <LocationSection/>
      <BigMemberShip/>
      <CommunityForumPage limit={3} />
    </div>
  );
}
