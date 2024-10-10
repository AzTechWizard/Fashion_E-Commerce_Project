import BestSelling from "./components/bestSelling/page";
import Footer from "./components/contact/page";
import DesignerClothes from "./components/designerClothes/page";
import ExclusiveOffer from "./components/exclusiveOffer/page";
import FeedbackCorner from "./components/feedbackCorner/page";
import HeroSection from "./components/heroSection/page";
import Navbar from "./components/navbar.tsx/page";
import OurProducts from "./components/ourProducts/page";

function HomePage(){
  return(
    <div>
      <Navbar />
      <HeroSection />
      <BestSelling />
      <OurProducts />
      <ExclusiveOffer />
      <DesignerClothes />
      <FeedbackCorner />
      <Footer />
    </div>
  )
}

export default HomePage;