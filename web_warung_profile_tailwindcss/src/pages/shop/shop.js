import React from "react";

const Shop = () => {
  return (
    <>
      {/* <div className="bg-[url('/pic6.jpg')] w-[100%] h-[100%] bg-cover"> */}
      <div>
        <div className="menu">
          <h1 className=" text-gray-400 font-semibold text-5xl mt-12 flex justify-center">
            Menu Kami
          </h1>
          <div>
            <h2 className=" text-gray-400 font-semibold text-2xl mt-10 flex justify-center">
              Makanan :
            </h2>
          </div>
        </div>
        <div className=" flex flex-wrap justify-center items-center">
          <div>
            <img
              className=" rounded-full p-8 w-[100%]"
              src="./././img/pic1.jpg"
              alt=""
            />
            <div>
              <p className=" flex justify-center text-gray-400 font-semibold">
                Mie Telur
              </p>
              <p className=" flex justify-center text-gray-400 font-semibold">
                15k
              </p>
            </div>
          </div>
          <div>
            <img
              className=" rounded-full p-8"
              src="./././img/pic2.jpg"
              alt=""
            />
            <div>
              <p className=" flex justify-center text-gray-400 font-semibold">
                Mie ayam Bakso
              </p>
              <p className=" flex justify-center text-gray-400 font-semibold">
                15k
              </p>
            </div>
          </div>
          <div>
            <img
              className=" rounded-full p-8"
              src="./././img/pic3.jpg"
              alt=""
            />
            <div>
              <p className=" flex justify-center text-gray-400 font-semibold">
                Mie Ayam
              </p>
              <p className=" flex justify-center text-gray-400 font-semibold">
                10k
              </p>
            </div>
          </div>
          <div>
            <img
              className=" rounded-full p-8"
              src="./././img/pic4.jpg"
              alt=""
            />
            <div>
              <p className=" flex justify-center text-gray-400 font-semibold">
                Siomay Bakso
              </p>
              <p className=" flex justify-center text-gray-400 font-semibold">
                10k
              </p>
            </div>
          </div>
          <div>
            <img
              className=" rounded-full p-8"
              src="./././img/pic5.jpg"
              alt=""
            />
            <div>
              <p className=" flex justify-center text-gray-400 font-semibold">
                Bakso
              </p>
              <p className=" flex justify-center text-gray-400 font-semibold">
                12k
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className=" text-gray-400 font-semibold text-2xl mt-10 flex justify-center">
            Minuman :
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div>
            <img
              className=" rounded-full p-8 w-[100%] "
              src="./././img/pic8.png"
              alt=""
            />
            <div>
              <p className=" flex justify-center text-gray-400 font-semibold">
                Es Teh / Teh Hangat
              </p>
              <p className=" flex justify-center text-gray-400 font-semibold">
                3k / 2.5k
              </p>
            </div>
          </div>
          <div>
            <img
              className=" rounded-full p-8"
              src="./././img/pic9.png"
              alt=""
            />
            <div>
              <p className=" flex justify-center text-gray-400 font-semibold">
                Es Kopi / Kopi Panas
              </p>
              <p className=" flex justify-center text-gray-400 font-semibold">
                3.5k / 3k
              </p>
            </div>
          </div>
          <div>
            <img
              className=" rounded-full p-8"
              src="./././img/pic10.png"
              alt=""
            />
            <div>
              <p className=" flex justify-center text-gray-400 font-semibold">
                Es Jeruk / Jeruk Hangat
              </p>
              <p className=" flex justify-center text-gray-400 font-semibold">
                3.5k / 3k
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
