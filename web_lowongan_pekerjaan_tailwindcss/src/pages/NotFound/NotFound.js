import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="mx-auto">
      <h2 className=" flex justify-center mt-56">404</h2>
      <p className="flex justify-center">Sorry, Page Not Found</p>

      <p className="flex justify-center pt-14 ">
        <button className=" bg-slate-300 rounded p-1">
          <Link to="/"> {""} Go to the Homepage</Link>
        </button>
      </p>
    </div>
  );
};

export default NotFound;
