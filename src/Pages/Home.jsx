import React from "react";
// import Footer from "../Footer";
import Header from "../components/Header";
import Slider from "../components/Slider";
import TheBestApart from "../components/TheBestApart";
import ThreeBlocks from "../components/ThreeBlocks";
import SecondView from "../components/SecondView";
import BestDeal from "../components/BestDeal";
import Properties from "../components/Properties";
import ContactUs from "../components/ContactUs";
const Home = () => {
  return (
    <>
      <Header />
      <div>
        <Slider />
        <TheBestApart />
        <SecondView />
        <ThreeBlocks />
        <BestDeal />
        <Properties />
        <ContactUs />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
