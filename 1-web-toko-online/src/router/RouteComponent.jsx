import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Shopping from "../pages/shopping/Shopping";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import LayoutLanding from "../widget/LayoutLanding";

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
            path="/home"
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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouteComponent;
