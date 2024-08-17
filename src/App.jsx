// import DesignTemplate from "./component/Home/DesignTemplate";
// import HiringPotential from "./component/Home/HiringPotential";
// import Home from "./component/Home/Home";
// import KeyFeatures from "./component/Home/KeyFeatures";
// import Services from "./component/Home/Services";

import CoverBanner from "./component/Cover/CoverBanner";
import CoverHero from "./component/Cover/CoverHero";
import CoverNeed from "./component/Cover/CoverNeed";
import Download from "./component/Cover/Download";
import EasyDesign from "./component/Cover/EasyDesign";
import FAQSection from "./component/Cover/FAQSection";
import SpellCheck from "./component/Cover/SpellCheck";
import Plan from "./component/Pricing/Plan";
import PriceHero from "./component/Pricing/PriceHero";

export default function App() {
  return (
    <div className="App">
      {/* <Home />
      <Services />
      <DesignTemplate />
      <HiringPotential />
      <KeyFeatures /> */}

      <CoverHero />
      <CoverNeed />
      <EasyDesign />
      <SpellCheck />
      <Download />
      <FAQSection />
      <CoverBanner />

      <PriceHero />
      <Plan />
    </div>
  );
}
