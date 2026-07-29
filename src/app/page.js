import AboutSection3D from "@/components/AboutSection3D";
import BannerSlider from "@/components/Banner";
import CommunityForum from "@/components/Bigmembership";
import Features from "@/components/Features";
import LocationSection from "@/components/LocationSection";


export default function Home() {
  return (
    <div>
      <AboutSection3D/>
      <BannerSlider/>
      <Features/>
      <CommunityForum/>
      <LocationSection/>
    </div>
  );
}
