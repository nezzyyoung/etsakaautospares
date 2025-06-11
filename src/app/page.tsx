import HeroSection from "./components/HeroSection";
import FeaturesOverview from "./components/FeaturesOverview";
import LoginSignup from "./components/LoginSignup";
import ResourcesPreview from "./components/ResourcesPreview";
import CommunityPreview from "./components/CommunityPreview";
import ContactSupport from "./components/ContactSupport";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesOverview />
      <LoginSignup />
      <ResourcesPreview />
      <CommunityPreview />
      <ContactSupport />
    </>
  );
}
