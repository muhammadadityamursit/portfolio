import React from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const Navi = () => {
  return (
    <div>
      <Navbar fluid className=" opacity-60 w-full fixed z-50 ">
        <Navbar.Brand className="py-2 ">
          <div className="flex items-center justify-start ml-12">
            <Link
              to="https://youtube.com/muhammad aditya mursyid"
              target="_blank"
              className="w-12 h-7 mr-3 rounded-full flex justify-center  border border-slate-500 hover:border-primary hover:bg-teal-500 hover:text-white"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Gmail</title>
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
            </Link>
          </div>
        </Navbar.Brand>
        <div className="flex ">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="self-center mr-10 ">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/home"
                className="block py-2 pl-3 pr-4 text-black bg-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>
          </ul>
          {/* <Navbar.Link className="text-black" href="#">
            <p>Home</p>
          </Navbar.Link>
          <Navbar.Link className="text-black" href="#">
            MyProject
          </Navbar.Link>

          <Navbar.Link className="text-black" href="#">
            Contact
          </Navbar.Link> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
