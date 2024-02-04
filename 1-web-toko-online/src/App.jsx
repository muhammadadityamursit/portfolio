import React from "react";
import Hero from "./component/Hero";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";
import RouteComponent from "./router/RouteComponent";

const App = () => {
  return (
    <div>
      {/* <Navigation />
      <Hero />
      <Footer />
      <Shopping /> */}
      <RouteComponent />
    </div>
  );
};

export default App;
