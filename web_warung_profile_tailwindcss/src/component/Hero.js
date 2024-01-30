import React from "react";
import "../App.css";

const Hero = () => {
  return (
    <>
      <div>
        <div className="container w-[100%] h-[100%]">
          <div className="flex flex-wrap justify-center items-center">
            <div>
              <img
                className="rounded-full p-6 w-[100%] mx-auto "
                src="./././img/pic12.png"
                alt=""
              />
              <div className="hero">
                <div className="flex flex-wrap justify-center">
                  <button className=" text-white gray-400 font-semibold bg-amber-500 px-2 rounded-sm">
                    Beli !
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
