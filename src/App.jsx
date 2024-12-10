import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
// import Footer from "./components/Footer";
// import TheBestApart from './components/TheBestApart';
// import SecondView from './components/SecondView';
// import ThreeBlocks from './components/ThreeBlocks';
// import BestDeal from './components/BestDeal';
// import Properties from './components/Properties';
// import ContactUs from './components/ContactUs';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
// import Layout from './components/Pages/layout';
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import PropertyDetails from "./Pages/PropertyDetails";
import Properties from "./Pages/Properties";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Properties" element={<Properties />} />
        <Route path="/PropertyDetails" element={<PropertyDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
