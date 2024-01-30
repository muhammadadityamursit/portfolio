import React from "react";
import Navigation from "../component/Navbar";
import Hero from "../component/Hero";
import Footer from "../component/Footer";

const LayoutLanding = (props) => {
  return (
    <div>
      <Navigation />

      <div className="container mx-auto">{props.children}</div>

      <Footer />
    </div>
  );
};

export default LayoutLanding;
