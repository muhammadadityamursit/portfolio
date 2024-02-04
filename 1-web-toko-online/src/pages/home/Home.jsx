import React from "react";

const Home = () => {
  return (
    <div>
      <div>
        <div className="relative z-20 flex flex-wrap items-center overflow-hidden bg-white dark:bg-gray-800">
          <div className="container relative flex px-6 py-16 mx-auto">
            <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
              <span className="w-20 h-2 mb-12 bg-blue-300 dark:bg-white"></span>
              <h1 className="flex flex-col text-6xl font-black leading-none text-blue-600 uppercase font-bebas-neue sm:text-8xl dark:text-white">
                Pijakan
                <span className="text-5xl text-blue-300 sm:text-7xl">
                  Duniamu
                </span>
              </h1>
              <p className="text-sm text-gray-700 sm:text-base dark:text-white">
                Dimension of reality that makes change possible and
                understandable. An indefinite and homogeneous environment in
                which natural events and human existence take place.
              </p>
              <div className="flex mt-8">
                <a
                  href="#"
                  className="px-4 py-2 mr-4 text-white uppercase bg-blue-500 border-2 border-transparent rounded-lg text-md hover:bg-blue-300"
                >
                  Shopping!
                </a>
                {/* <a
                  href="#"
                  className="px-4 py-2 text-blue-500 uppercase bg-transparent border-2 border-blue-300 rounded-lg dark:text-white hover:bg-blue-300 hover:text-white text-md"
                >
                  Read more
                </a> */}
              </div>
            </div>
            <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
              <img
                src="../public/sneakers2.jpg"
                className="max-w-xs m-auto md:max-w-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
