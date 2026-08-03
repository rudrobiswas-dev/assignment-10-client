import AboutSection3D from "@/components/AboutSection3D";
import BannerSlider from "@/components/Banner";
import Features from "@/components/Features";
import LocationSection from "@/components/LocationSection";
import CommunityForumPage from "./community-forum/page";
import Bigmembership from "@/components/Bigmembership";


export default function Home() {
  return (
    <div>
      <AboutSection3D/>
      <BannerSlider/>
      <Features/>
      <LocationSection/>
      <Bigmembership/>
      <CommunityForumPage limit={3} />
    </div>
  );
}
