import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Shopping from "../pages/shopping/Shopping";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import LayoutLanding from "../widget/LayoutLanding";
import Login from "../component/Login";

const RouteComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/shopping"
            element={
              <LayoutLanding>
                <Shopping />
              </LayoutLanding>
            }
          />
          <Route
            path="/"
            element={
              <LayoutLanding>
                <Home />
              </LayoutLanding>
            }
          />
          <Route
            path="/contact"
            element={
              <LayoutLanding>
                <Contact />
              </LayoutLanding>
            }
          />
          <Route
            path="/login"
            element={
              <LayoutLanding>
                <Login />
              </LayoutLanding>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouteComponent;
