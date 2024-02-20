import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="border">
        <section id="home" className=" pt-2">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-full  items-center px-3 lg:w-1/2">
                <div className="mt-20 border hover:transition ">
                  <h1 className="text-2xl font-bold  text-blue-300 lg:text-4xl  ">
                    Pilih
                    <span className="font-bold text-5xl text-blue-500 block lg:text-6xl hover:transition ease-out duration-700">
                      Pijakan Duniamu
                    </span>{" "}
                  </h1>

                  <p className="mb-8 mt-4">
                    <span className="text-gray-700 font-medium">
                      pijakanmu menjadi penyelamatmu !
                    </span>
                  </p>
                  <Link
                    to="/shopping"
                    className="text-base  text-white bg-blue-500 border border-gray-300 py-3 px-8 rounded-2xl hover:shadow-lg hover:bg-blue-300 transition duration-200 mt-15"
                  >
                    Shopping!
                  </Link>
                </div>
              </div>

              <div className="w-full self-end px-4 lg:w-1/2">
                <div className=" relative mt-12 lg:mt-0 lg:right-0">
                  <img
                    src="../public/sneakers2.jpg"
                    className=" max-w-full flex items-end mx-auto rounded-full w-[400px] h-[400px]"
                    alt="ghmngh"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    // <div>
    //   <div className="flex flex-wrap mt-10">
    //     <div className="border w-[50%] ">
    //       <div className=" items-center">
    //         <h1>Pilih</h1>
    //         <h2>Pijakan Duniamu</h2>
    //       </div>
    //     </div>
    //     <div className="border w-[50%]">
    //       <img
    //         src="../public/sneakers2.jpg"
    //         className=" mx-auto w-[350px] h-[350px]"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Home;
