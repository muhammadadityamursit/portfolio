import React from "react";

const Hero = () => {
  return (
    <div>
      <div className=" bg-[url('/4.jpg')] h-[700px]  bg-cover bg-repeat p-10 container mx-auto mt-10 border">
        <h1 className="font-bold text-3xl relative z-50">
          <span className="text-yellow-800 flex flex-wrap justify-center">
            Raih Impianmu Disini..
          </span>
        </h1>
        <p className="text-md flex flex-wrap justify-center">
          Tersedia lebih dari 10000 lowongan!
        </p>
      </div>
    </div>
  );
};

export default Hero;
