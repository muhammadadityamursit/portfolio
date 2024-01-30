import React from "react";
import Hero from "./component/Hero";
import Navigation from "./component/Navbar";
import Navi from "./component/Navi";
import RouterComponent from "./router/RouterComponent";

const App = () => {
  return (
    <>
      <div className="bg-[url('/pic6.jpg')] w-[100%] h-[120%] bg-cover">
        {/* <Navi /> */}
        {/* <Navi /> */}
        {/* <Hero /> */}
        <RouterComponent />
      </div>
    </>
  );
};

export default App;
