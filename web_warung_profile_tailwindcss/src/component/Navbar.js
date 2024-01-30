import React from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import "../App.css";

const Navigation = () => {
  return (
    <div className="logo">
      <Navbar className="w-[100%] bg-zinc-800">
        <Navbar.Brand>
          <img src="./img/logooo.png" className=" h-8 sm:h-20" alt="reg4ye4" />
          <span className=" p-3 self-center whitespace-nowrap text-xl font-semibold text-slate-300 dark:text-white ">
            Setiakawan
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link
            to="/"
            className="text-slate-300 hover:text-amber-500 hover:border-b-2"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className=" text-slate-300 hover:text-amber-500 hover:border-b-2 "
          >
            Menu
          </Link>
          <Link
            to="/our-story"
            className="text-slate-300 hover:text-amber-500 hover:border-b-2"
          >
            Our Story
          </Link>
          <Link
            to="/where-to-buy"
            className=" text-slate-300 hover:text-amber-500 hover:border-b-2"
          >
            Where to Buy
          </Link>
          <Link
            to="/contact"
            className=" text-slate-300 hover:text-amber-500 hover:border-b-2"
          >
            Contact
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
